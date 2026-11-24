export const id = 263;
export const ids = [263];
export const modules = {
  40451: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Pp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(37320),
      Sp = cp(37487),
      xp = cp(40415),
      Lp = cp(40332),
      Yp = cp(37368),
      Dp = cp(40398),
      Ap = cp(40233);
    let Pp = (() => {
      var pp, ip;
      let cp, Pp, Wp, yp, Up, wp, vp, tp, Hp, dp, ep, jp, kp, mp = xp.b,
        Rp = [],
        qp = [],
        Mp = [],
        Cp = [],
        Ep = [],
        Xp = [],
        lp = [],
        Qp = [],
        Jp = [],
        Bp = [],
        Np = [],
        Tp = [],
        fp = [],
        bp = [],
        hp = [],
        ap = [],
        np = [],
        Fp = [],
        gp = [],
        Gp = [],
        rp = [];
      return pp = class extends mp {
        get range() {
          return this._range
        }
        set range(pp) {
          this._range = pp, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(pp) {
          this._intensityMode = pp, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(pp) {
          this._radius = pp, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, Op.e)(this, ip, "f")
        }
        set renderPriority(pp) {
          (0, Op.f)(this, ip, pp, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(pp) {
          this._shadowEnabled !== pp && (this._shadowEnabled = pp, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(pp) {
          this._includedOnlyMeshes = pp, this._hookArrayForIncludedOnly(pp)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(pp) {
          this._excludedMeshes = pp, this._hookArrayForExcluded(pp)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(pp) {
          this._excludeWithLayerMask = pp, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(pp) {
          this._includeOnlyWithLayerMask = pp, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(pp) {
          this._lightmapMode !== pp && (this._lightmapMode = pp, this._markMeshesAsLightDirty())
        }
        getViewMatrix(pp) {
          return null
        }
        getProjectionMatrix(pp, ip) {
          return null
        }
        constructor(cp, op, Ip) {
          super(cp, op, !1), this.diffuse = ((0, Op.l)(this, Rp), (0, Op.l)(this, qp, new Sp.d(1, 1, 1))), this.specular = ((0, Op.l)(this, Mp), (0, Op.l)(this, Cp, new Sp.d(1, 1, 1))), this.falloffType = ((0, Op.l)(this, Ep), (0, Op.l)(this, Xp, pp.FALLOFF_DEFAULT)), this.intensity = ((0, Op.l)(this, lp), (0, Op.l)(this, Qp, 1)), this._range = ((0, Op.l)(this, Jp), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = pp.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, Op.l)(this, Bp, void 0), ip.set(this, ((0, Op.l)(this, Np), (0, Op.l)(this, Tp, 0))), this._shadowEnabled = ((0, Op.l)(this, fp), (0, Op.l)(this, bp, !0)), this._includedOnlyMeshes = (0, Op.l)(this, hp), this._excludeWithLayerMask = (0, Op.l)(this, ap, 0), this._includeOnlyWithLayerMask = ((0, Op.l)(this, np), (0, Op.l)(this, Fp, 0)), this._lightmapMode = ((0, Op.l)(this, gp), (0, Op.l)(this, Gp, 0)), this._shadowGenerators = ((0, Op.l)(this, rp), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, Ip || this.Gl().addLight(this), this._uniformBuffer = new Lp.b(this.Gl().gy(), void 0, void 0, cp), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], Ip || this._resyncMeshes()
        }
        transferTexturesToEffect(pp, ip) {
          return this
        }
        _bindLight(pp, ip, cp, Op) {
          let op = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const Ip = pp.toString();
          let xp = !1;
          if (this._uniformBuffer.bindToEffect(cp, "Light" + Ip), this._renderId !== ip.getRenderId() || this._lastUseSpecular !== Op || !this._uniformBuffer.useUbo) {
            this._renderId = ip.getRenderId(), this._lastUseSpecular = Op;
            const pp = this.getScaledIntensity();
            this.transferToEffect(cp, Ip), this.diffuse.scaleToRef(pp, Sp.j.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", Sp.j.Color3[0], this.range, Ip), Op && (this.specular.scaleToRef(pp, Sp.j.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", Sp.j.Color3[1], this.radius, Ip)), xp = !0
          }
          if (this.transferTexturesToEffect(cp, Ip), ip.shadowsEnabled && this.shadowEnabled && op) {
            const pp = this.getShadowGenerator(ip.activeCamera) ?? this.getShadowGenerator();
            pp && (pp.bindShadowLight(Ip, cp), xp = !0)
          }
          xp ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(pp) {
          let ip = "Name: " + this.name;
          if (ip += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let cp = 0; cp < this.animations.length; cp++) ip += ", animation[0]: " + this.animations[cp].toString(pp);
          return ip
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.uR() || this._resyncMeshes()
        }
        eC(pp) {
          super.eC(pp), this._resyncMeshes()
        }
        getShadowGenerator() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(pp) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return Ip.o.Zero()
        }
        canAffectMesh(pp) {
          return !pp || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(pp)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(pp)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & pp.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & pp.layerMask)))
        }
        dispose(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const pp = this._shadowGenerators.values();
            for (let ip = pp.next(); !0 !== ip.done; ip = pp.next()) {
              ip.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.Gl().stopAnimation(this), this._parentContainer) {
            const pp = this._parentContainer.lights.indexOf(this);
            pp > -1 && this._parentContainer.lights.splice(pp, 1), this._parentContainer = null
          }
          for (const cp of this.Gl().meshes) cp._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.Gl().removeLight(this), super.dispose(pp, ip)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(ip) {
          let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const Op = pp.GetConstructorFromName(this.getTypeID(), ip, this.Gl());
          if (!Op) return null;
          const op = Ap.c.Clone(Op, this);
          return ip && (op.name = ip), cp && (op.parent = cp), op.eC(this.isEnabled()), this.onClonedObservable.notifyObservers(op), op
        }
        serialize() {
          const pp = Ap.c.Serialize(this);
          if (pp.uniqueId = this.uniqueId, pp.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(pp), this.excludedMeshes.length > 0) {
            pp.excludedMeshesIds = [];
            for (const ip of this.excludedMeshes) pp.excludedMeshesIds.push(ip.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            pp.includedOnlyMeshesIds = [];
            for (const ip of this.includedOnlyMeshes) pp.includedOnlyMeshesIds.push(ip.id)
          }
          return Ap.c.AppendSerializedAnimations(this, pp), pp.By = this.serializeAnimationRanges(), pp.isEnabled = this.isEnabled(), pp
        }
        static GetConstructorFromName(pp, ip, cp) {
          const Op = xp.b.Construct("Light_Type_" + pp, ip, cp);
          return Op || null
        }
        static Parse(ip, cp) {
          let Op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const op = pp.GetConstructorFromName(ip.type, ip.name, cp);
          if (!op) return null;
          const Ip = Ap.c.Parse(op, ip, cp, Op);
          if (ip.excludedMeshesIds && (Ip._excludedMeshesIds = ip.excludedMeshesIds), ip.includedOnlyMeshesIds && (Ip._includedOnlyMeshesIds = ip.includedOnlyMeshesIds), void 0 !== ip.parentId && (Ip._waitingParentId = ip.parentId), void 0 !== ip.parentInstanceIndex && (Ip._waitingParentInstanceIndex = ip.parentInstanceIndex), void 0 !== ip.falloffType && (Ip.falloffType = ip.falloffType), void 0 !== ip.lightmapMode && (Ip.lightmapMode = ip.lightmapMode), ip.animations) {
            for (let pp = 0; pp < ip.animations.length; pp++) {
              const cp = ip.animations[pp],
                Op = (0, Yp.d)("BABYLON.Animation");
              Op && Ip.animations.push(Op.Parse(cp))
            }
            xp.b.ParseAnimationRanges(Ip, ip, cp)
          }
          return ip.autoAnimate && cp.beginAnimation(Ip, ip.autoAnimateFrom, ip.autoAnimateTo, ip.autoAnimateLoop, ip.autoAnimateSpeed || 1), void 0 !== ip.isEnabled && Ip.eC(ip.isEnabled), Ip._onParsed(ip, cp, Op), Ip
        }
        _onParsed(pp, ip) {}
        _hookArrayForExcluded(pp) {
          var ip = this;
          const cp = pp.push;
          pp.push = function() {
            for (var Op = arguments.length, op = new Array(Op), Ip = 0; Ip < Op; Ip++) op[Ip] = arguments[Ip];
            const Sp = cp.apply(pp, op);
            if (ip._clusteredContainer) return Sp;
            for (const pp of op) pp._resyncLightSource(ip);
            return Sp
          };
          const Op = pp.splice;
          pp.splice = (ip, cp) => {
            const op = Op.call(pp, ip, cp ?? pp.length);
            if (this._clusteredContainer) return op;
            for (const pp of op) pp._resyncLightSource(this);
            return op
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(pp) {
          var ip = this;
          const cp = pp.push;
          pp.push = function() {
            for (var Op = arguments.length, op = new Array(Op), Ip = 0; Ip < Op; Ip++) op[Ip] = arguments[Ip];
            const Sp = cp.apply(pp, op);
            return ip._resyncMeshes(), Sp
          };
          const Op = pp.splice;
          pp.splice = (ip, cp) => {
            const op = Op.call(pp, ip, cp ?? pp.length);
            return this._resyncMeshes(), op
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const pp of this.Gl().meshes) pp._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const pp of this.Gl().meshes) - 1 !== pp.lightSources.indexOf(this) && pp._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.Gl().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let ip = 0;
          const cp = this.getTypeID();
          let Op = this.intensityMode;
          switch (Op === pp.INTENSITYMODE_AUTOMATIC && (Op = cp === pp.LIGHTTYPEID_DIRECTIONALLIGHT ? pp.INTENSITYMODE_ILLUMINANCE : pp.INTENSITYMODE_LUMINOUSINTENSITY), cp) {
            case pp.LIGHTTYPEID_POINTLIGHT:
            case pp.LIGHTTYPEID_SPOTLIGHT:
              switch (Op) {
                case pp.INTENSITYMODE_LUMINOUSPOWER:
                  ip = 1 / (4 * Math.PI);
                  break;
                case pp.INTENSITYMODE_LUMINOUSINTENSITY:
                  ip = 1;
                  break;
                case pp.INTENSITYMODE_LUMINANCE:
                  ip = this.radius * this.radius
              }
              break;
            case pp.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (Op) {
                case pp.INTENSITYMODE_ILLUMINANCE:
                  ip = 1;
                  break;
                case pp.INTENSITYMODE_LUMINANCE: {
                  let pp = this.radius;
                  pp = Math.max(pp, .001);
                  ip = 2 * Math.PI * (1 - Math.cos(pp));
                  break
                }
              }
              break;
            case pp.LIGHTTYPEID_HEMISPHERICLIGHT:
            case pp.LIGHTTYPEID_RECT_AREALIGHT:
              ip = 1
          }
          return ip
        }
        _reorderLightsInScene() {
          const pp = this.Gl();
          0 != this._renderPriority && (pp.requireLightSorting = !0), this.Gl().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, ip = new WeakMap, (() => {
        const ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(mp[Symbol.metadata] ?? null) : void 0;
        cp = [(0, op.n)()], Pp = [(0, op.n)()], Wp = [(0, op.K)()], yp = [(0, op.K)()], Up = [(0, op.K)()], wp = [(0, op.K)()], vp = [(0, op.K)()], tp = [(0, op.K)()], Hp = [(0, op.e)("_reorderLightsInScene")], dp = [(0, op.K)("shadowEnabled")], ep = [(0, op.K)("excludeWithLayerMask")], jp = [(0, op.K)("includeOnlyWithLayerMask")], kp = [(0, op.K)("lightmapMode")], (0, Op.j)(pp, null, Up, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: pp => "range" in pp,
            get: pp => pp.range
          },
          metadata: ip
        }, null, Rp), (0, Op.j)(pp, null, wp, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: pp => "intensityMode" in pp,
            get: pp => pp.intensityMode
          },
          metadata: ip
        }, null, Rp), (0, Op.j)(pp, null, vp, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: pp => "radius" in pp,
            get: pp => pp.radius
          },
          metadata: ip
        }, null, Rp), (0, Op.j)(pp, null, Hp, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: pp => "renderPriority" in pp,
            get: pp => pp.renderPriority,
            set: (pp, ip) => {
              pp.renderPriority = ip
            }
          },
          metadata: ip
        }, Tp, fp), (0, Op.j)(null, null, cp, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: pp => "diffuse" in pp,
            get: pp => pp.diffuse,
            set: (pp, ip) => {
              pp.diffuse = ip
            }
          },
          metadata: ip
        }, qp, Mp), (0, Op.j)(null, null, Pp, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: pp => "specular" in pp,
            get: pp => pp.specular,
            set: (pp, ip) => {
              pp.specular = ip
            }
          },
          metadata: ip
        }, Cp, Ep), (0, Op.j)(null, null, Wp, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: pp => "falloffType" in pp,
            get: pp => pp.falloffType,
            set: (pp, ip) => {
              pp.falloffType = ip
            }
          },
          metadata: ip
        }, Xp, lp), (0, Op.j)(null, null, yp, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: pp => "intensity" in pp,
            get: pp => pp.intensity,
            set: (pp, ip) => {
              pp.intensity = ip
            }
          },
          metadata: ip
        }, Qp, Jp), (0, Op.j)(null, null, tp, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: pp => "_renderPriority" in pp,
            get: pp => pp._renderPriority,
            set: (pp, ip) => {
              pp._renderPriority = ip
            }
          },
          metadata: ip
        }, Bp, Np), (0, Op.j)(null, null, dp, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: pp => "_shadowEnabled" in pp,
            get: pp => pp._shadowEnabled,
            set: (pp, ip) => {
              pp._shadowEnabled = ip
            }
          },
          metadata: ip
        }, bp, hp), (0, Op.j)(null, null, ep, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: pp => "_excludeWithLayerMask" in pp,
            get: pp => pp._excludeWithLayerMask,
            set: (pp, ip) => {
              pp._excludeWithLayerMask = ip
            }
          },
          metadata: ip
        }, ap, np), (0, Op.j)(null, null, jp, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: pp => "_includeOnlyWithLayerMask" in pp,
            get: pp => pp._includeOnlyWithLayerMask,
            set: (pp, ip) => {
              pp._includeOnlyWithLayerMask = ip
            }
          },
          metadata: ip
        }, Fp, gp), (0, Op.j)(null, null, kp, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: pp => "_lightmapMode" in pp,
            get: pp => pp._lightmapMode,
            set: (pp, ip) => {
              pp._lightmapMode = ip
            }
          },
          metadata: ip
        }, Gp, rp), ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: ip
        })
      })(), pp.FALLOFF_DEFAULT = Dp.b.FALLOFF_DEFAULT, pp.FALLOFF_PHYSICAL = Dp.b.FALLOFF_PHYSICAL, pp.FALLOFF_GLTF = Dp.b.FALLOFF_GLTF, pp.FALLOFF_STANDARD = Dp.b.FALLOFF_STANDARD, pp.LIGHTMAP_DEFAULT = Dp.b.LIGHTMAP_DEFAULT, pp.LIGHTMAP_SPECULAR = Dp.b.LIGHTMAP_SPECULAR, pp.LIGHTMAP_SHADOWSONLY = Dp.b.LIGHTMAP_SHADOWSONLY, pp.INTENSITYMODE_AUTOMATIC = Dp.b.INTENSITYMODE_AUTOMATIC, pp.INTENSITYMODE_LUMINOUSPOWER = Dp.b.INTENSITYMODE_LUMINOUSPOWER, pp.INTENSITYMODE_LUMINOUSINTENSITY = Dp.b.INTENSITYMODE_LUMINOUSINTENSITY, pp.INTENSITYMODE_ILLUMINANCE = Dp.b.INTENSITYMODE_ILLUMINANCE, pp.INTENSITYMODE_LUMINANCE = Dp.b.INTENSITYMODE_LUMINANCE, pp.LIGHTTYPEID_POINTLIGHT = Dp.b.LIGHTTYPEID_POINTLIGHT, pp.LIGHTTYPEID_DIRECTIONALLIGHT = Dp.b.LIGHTTYPEID_DIRECTIONALLIGHT, pp.LIGHTTYPEID_SPOTLIGHT = Dp.b.LIGHTTYPEID_SPOTLIGHT, pp.LIGHTTYPEID_HEMISPHERICLIGHT = Dp.b.LIGHTTYPEID_HEMISPHERICLIGHT, pp.LIGHTTYPEID_RECT_AREALIGHT = Dp.b.LIGHTTYPEID_RECT_AREALIGHT, pp
    })()
  },
  40415: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ap
    });
    var Op = cp(40203),
      op = cp(37320),
      Ip = cp(40210),
      Sp = cp(37349),
      xp = cp(37345),
      Lp = cp(40096),
      Yp = cp(40233);
    class Dp {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new Sp.d, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new Sp.d, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let Ap = (() => {
      var pp;
      let ip, cp, Ap, Pp, Wp, yp = [],
        Up = [],
        wp = [],
        vp = [],
        tp = [],
        Hp = [],
        dp = [],
        ep = [],
        jp = [],
        kp = [];
      return pp = class {
        static AddNodeConstructor(pp, ip) {
          this._NodeConstructors[pp] = ip
        }
        static Construct(pp, ip, cp, Op) {
          const op = this._NodeConstructors[pp];
          return op ? op(ip, cp, Op) : null
        }
        set accessibilityTag(pp) {
          this._accessibilityTag = pp, this.onAccessibilityTagChangedObservable.notifyObservers(pp)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(pp) {
          this._nodeDataStorage._doNotSerialize = pp
        }
        uR() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(pp) {
          if (this._parentNode === pp) return;
          const ip = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const ip = this._parentNode._children.indexOf(this); - 1 !== ip && this._parentNode._children.splice(ip, 1), pp || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = pp, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), ip || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(pp) {
          this._nodeDataStorage._inheritVisibility = pp
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(pp) {
          this._nodeDataStorage._isVisible = pp
        }
        _serializeAsParent(pp) {
          pp.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const pp = this._scene.rootNodes,
              ip = pp.length - 1;
            pp[this._nodeDataStorage._sceneRootNodesIndex] = pp[ip], pp[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(pp) {
          this._animationPropertiesOverride = pp
        }
        getClassName() {
          return "Node"
        }
        set onDispose(pp) {
          this._onDisposeObserver && this.Kl.remove(this._onDisposeObserver), this._onDisposeObserver = this.Kl.add(pp)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var pp;
          return (pp = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (pp._onEffectiveEnabledStateChangedObservable = new Sp.d)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            cp = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new Dp, this.name = (0, Op.l)(this, yp, void 0), this.id = ((0, Op.l)(this, Up), (0, Op.l)(this, wp, void 0)), this.uniqueId = ((0, Op.l)(this, vp), (0, Op.l)(this, tp, void 0)), this.state = ((0, Op.l)(this, Hp), (0, Op.l)(this, dp, "")), this.metadata = ((0, Op.l)(this, ep), (0, Op.l)(this, jp, null)), this._internalMetadata = (0, Op.l)(this, kp), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new Sp.d, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = op.b.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.Kl = new Sp.d, this._onDisposeObserver = null, this._behaviors = new Array, this.name = pp, this.id = pp, this._scene = ip || xp.e.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), cp && this._addToSceneRootNodes()
        }
        Gl() {
          return this._scene
        }
        gy() {
          return this._scene.gy()
        }
        addBehavior(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(pp) || (pp.init(), this._scene.isLoading && !ip ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(pp) && pp.attach(this)
          })) : pp.attach(this), this._behaviors.push(pp)), this
        }
        removeBehavior(pp) {
          const ip = this._behaviors.indexOf(pp);
          return -1 === ip || (this._behaviors.splice(ip, 1), pp.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(pp) {
          for (const ip of this._behaviors)
            if (ip.name === pp) return ip;
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
        updateCache(pp) {
          !pp && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(pp) {
          return this.parent ? this.parent._getActionManagerForTrigger(pp, !1) : null
        }
        _updateCache(pp) {}
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
        ocp(pp) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const pp = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!pp && pp.hasObservers()
        }
        _syncParentEnabledState() {
          const pp = this._hasEffectiveEnabledStateObservers(),
            ip = pp ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const cp of this._children) cp._syncParentEnabledState();
          if (pp) {
            const pp = this.isEnabled();
            pp !== ip && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(pp)
          }
        }
        eC(pp) {
          if (this._nodeDataStorage._isEnabled === pp) return;
          const ip = this._hasEffectiveEnabledStateObservers(),
            cp = ip ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = pp, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(pp), ip) {
            const pp = this.isEnabled();
            pp !== cp && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(pp)
          }
        }
        isDescendantOf(pp) {
          return !!this.parent && (this.parent === pp || this.parent.isDescendantOf(pp))
        }
        _getDescendants(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            cp = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let Op = 0; Op < this._children.length; Op++) {
              const op = this._children[Op];
              cp && !cp(op) || pp.push(op), ip || op._getDescendants(pp, !1, cp)
            }
        }
        getDescendants(pp, ip) {
          const cp = [];
          return this._getDescendants(cp, pp, ip), cp
        }
        getChildMeshes(pp, ip) {
          const cp = [];
          return this._getDescendants(cp, pp, (pp => (!ip || ip(pp)) && void 0 !== pp.cullingStrategy)), cp
        }
        getChildren(pp) {
          let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(ip, pp)
        }
        _setReady(pp) {
          pp !== this._nodeDataStorage._isReady && (pp ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(pp) {
          for (let ip = 0; ip < this.animations.length; ip++) {
            const cp = this.animations[ip];
            if (cp.name === pp) return cp
          }
          return null
        }
        createAnimationRange(ip, cp, Op) {
          if (!this._ranges[ip]) {
            this._ranges[ip] = pp._AnimationRangeFactory(ip, cp, Op);
            for (let pp = 0, op = this.animations.length; pp < op; pp++) this.animations[pp] && this.animations[pp].createRange(ip, cp, Op)
          }
        }
        deleteAnimationRange(pp) {
          let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let cp = 0, Op = this.animations.length; cp < Op; cp++) this.animations[cp] && this.animations[cp].deleteRange(pp, ip);
          this._ranges[pp] = null
        }
        getAnimationRange(pp) {
          return this._ranges[pp] || null
        }
        clone(ip, cp, Op) {
          const op = Yp.c.Clone((() => new pp(ip, this.Gl())), this);
          if (cp && (op.parent = cp), !Op) {
            const pp = this.getDescendants(!0);
            for (let cp = 0; cp < pp.length; cp++) {
              const Op = pp[cp];
              Op.clone(ip + "." + Op.name, op)
            }
          }
          return op
        }
        getAnimationRanges() {
          const pp = [];
          let ip;
          for (ip in this._ranges) pp.push(this._ranges[ip]);
          return pp
        }
        beginAnimation(pp, ip, cp, Op) {
          const op = this.getAnimationRange(pp);
          return op ? this._scene.beginAnimation(this, op.from, op.to, ip, cp, Op) : null
        }
        serializeAnimationRanges() {
          const pp = [];
          for (const ip in this._ranges) {
            const cp = this._ranges[ip];
            if (!cp) continue;
            const Op = {};
            Op.name = ip, Op.from = cp.from, Op.to = cp.to, pp.push(Op)
          }
          return pp
        }
        computeWorldMatrix(pp) {
          return this._worldMatrix || (this._worldMatrix = op.b.Identity()), this._worldMatrix
        }
        dispose(pp) {
          let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !pp) {
            const cp = this.getDescendants(!0);
            for (const Op of cp) Op.dispose(pp, ip)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.Kl.notifyObservers(this), this.Kl.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const cp of this._behaviors) cp.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(pp, ip, cp) {
          if (ip.By)
            for (let Op = 0; Op < ip.By.length; Op++) {
              const cp = ip.By[Op];
              pp.createAnimationRange(cp.name, cp.from, cp.to)
            }
        }
        getHierarchyBoundingVectors() {
          let pp, ip, cp = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            Op = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.Gl().incrementRenderId(), this.computeWorldMatrix(!0);
          const Ip = this;
          if (Ip.bJ && Ip.Am) {
            const cp = Ip.bJ();
            pp = cp.boundingBox.minimumWorld.clone(), ip = cp.boundingBox.maximumWorld.clone()
          } else pp = new op.o(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), ip = new op.o(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (cp) {
            const cp = this.getDescendants(!1);
            for (const Ip of cp) {
              const cp = Ip;
              if (cp.computeWorldMatrix(!0), Op && !Op(cp)) continue;
              if (!cp.bJ || 0 === cp.getTotalVertices()) continue;
              const Sp = cp.bJ().boundingBox,
                xp = Sp.minimumWorld,
                Lp = Sp.maximumWorld;
              op.o.CheckExtends(xp, pp, ip), op.o.CheckExtends(Lp, pp, ip)
            }
          }
          return {
            min: pp,
            max: ip
          }
        }
      }, (() => {
        const op = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        ip = [(0, Ip.K)()], cp = [(0, Ip.K)()], Ap = [(0, Ip.K)()], Pp = [(0, Ip.K)()], Wp = [(0, Ip.K)()], (0, Op.j)(null, null, ip, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: pp => "name" in pp,
            get: pp => pp.name,
            set: (pp, ip) => {
              pp.name = ip
            }
          },
          metadata: op
        }, yp, Up), (0, Op.j)(null, null, cp, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: pp => "id" in pp,
            get: pp => pp.id,
            set: (pp, ip) => {
              pp.id = ip
            }
          },
          metadata: op
        }, wp, vp), (0, Op.j)(null, null, Ap, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: pp => "uniqueId" in pp,
            get: pp => pp.uniqueId,
            set: (pp, ip) => {
              pp.uniqueId = ip
            }
          },
          metadata: op
        }, tp, Hp), (0, Op.j)(null, null, Pp, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: pp => "state" in pp,
            get: pp => pp.state,
            set: (pp, ip) => {
              pp.state = ip
            }
          },
          metadata: op
        }, dp, ep), (0, Op.j)(null, null, Wp, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: pp => "metadata" in pp,
            get: pp => pp.metadata,
            set: (pp, ip) => {
              pp.metadata = ip
            }
          },
          metadata: op
        }, jp, kp), op && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: op
        })
      })(), pp._AnimationRangeFactory = (pp, ip, cp) => {
        throw (0, Lp.o)("AnimationRange")
      }, pp._NodeConstructors = {}, pp
    })()
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);