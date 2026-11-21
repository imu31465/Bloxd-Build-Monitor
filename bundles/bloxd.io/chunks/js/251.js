export const id = 251;
export const ids = [251];
export const modules = {
  39690: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => bQ
    });
    var LQ = wQ(39402),
      qQ = wQ(39409),
      oQ = wQ(36696),
      DQ = wQ(36873),
      kQ = wQ(39650),
      vQ = wQ(39550),
      mQ = wQ(36741),
      uQ = wQ(39623),
      HQ = wQ(39426);
    let bQ = (() => {
      var QQ, FQ;
      let wQ, bQ, YQ, xQ, AQ, tQ, eQ, MQ, GQ, pQ, cQ, CQ, SQ, iQ = kQ.c,
        WQ = [],
        RQ = [],
        OQ = [],
        sQ = [],
        rQ = [],
        IQ = [],
        UQ = [],
        NQ = [],
        TQ = [],
        KQ = [],
        zQ = [],
        lQ = [],
        jQ = [],
        aQ = [],
        XQ = [],
        fQ = [],
        VQ = [],
        hQ = [],
        JQ = [],
        EQ = [],
        nQ = [];
      return QQ = class extends iQ {
        get range() {
          return this._range
        }
        set range(QQ) {
          this._range = QQ, this._inverseSquaredRange = 1 / (this.range * this.range)
        }
        get intensityMode() {
          return this._intensityMode
        }
        set intensityMode(QQ) {
          this._intensityMode = QQ, this._computePhotometricScale()
        }
        get radius() {
          return this._radius
        }
        set radius(QQ) {
          this._radius = QQ, this._computePhotometricScale()
        }
        get renderPriority() {
          return (0, LQ.c)(this, FQ, "f")
        }
        set renderPriority(QQ) {
          (0, LQ.f)(this, FQ, QQ, "f")
        }
        get shadowEnabled() {
          return this._shadowEnabled
        }
        set shadowEnabled(QQ) {
          this._shadowEnabled !== QQ && (this._shadowEnabled = QQ, this._markMeshesAsLightDirty())
        }
        get includedOnlyMeshes() {
          return this._includedOnlyMeshes
        }
        set includedOnlyMeshes(QQ) {
          this._includedOnlyMeshes = QQ, this._hookArrayForIncludedOnly(QQ)
        }
        get excludedMeshes() {
          return this._excludedMeshes
        }
        set excludedMeshes(QQ) {
          this._excludedMeshes = QQ, this._hookArrayForExcluded(QQ)
        }
        get excludeWithLayerMask() {
          return this._excludeWithLayerMask
        }
        set excludeWithLayerMask(QQ) {
          this._excludeWithLayerMask = QQ, this._resyncMeshes()
        }
        get includeOnlyWithLayerMask() {
          return this._includeOnlyWithLayerMask
        }
        set includeOnlyWithLayerMask(QQ) {
          this._includeOnlyWithLayerMask = QQ, this._resyncMeshes()
        }
        get lightmapMode() {
          return this._lightmapMode
        }
        set lightmapMode(QQ) {
          this._lightmapMode !== QQ && (this._lightmapMode = QQ, this._markMeshesAsLightDirty())
        }
        getViewMatrix(QQ) {
          return null
        }
        getProjectionMatrix(QQ, FQ) {
          return null
        }
        constructor(wQ, qQ, oQ) {
          super(wQ, qQ, !1), this.diffuse = ((0, LQ.l)(this, WQ), (0, LQ.l)(this, RQ, new DQ.b(1, 1, 1))), this.specular = ((0, LQ.l)(this, OQ), (0, LQ.l)(this, sQ, new DQ.b(1, 1, 1))), this.falloffType = ((0, LQ.l)(this, rQ), (0, LQ.l)(this, IQ, QQ.FALLOFF_DEFAULT)), this.intensity = ((0, LQ.l)(this, UQ), (0, LQ.l)(this, NQ, 1)), this._range = ((0, LQ.l)(this, TQ), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = QQ.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, LQ.l)(this, KQ, void 0), FQ.set(this, ((0, LQ.l)(this, zQ), (0, LQ.l)(this, lQ, 0))), this._shadowEnabled = ((0, LQ.l)(this, jQ), (0, LQ.l)(this, aQ, !0)), this._includedOnlyMeshes = (0, LQ.l)(this, XQ), this._excludeWithLayerMask = (0, LQ.l)(this, fQ, 0), this._includeOnlyWithLayerMask = ((0, LQ.l)(this, VQ), (0, LQ.l)(this, hQ, 0)), this._lightmapMode = ((0, LQ.l)(this, JQ), (0, LQ.l)(this, EQ, 0)), this._shadowGenerators = ((0, LQ.l)(this, nQ), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, oQ || this.iN().addLight(this), this._uniformBuffer = new vQ.d(this.iN().Wx(), void 0, void 0, wQ), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], oQ || this._resyncMeshes()
        }
        transferTexturesToEffect(QQ, FQ) {
          return this
        }
        _bindLight(QQ, FQ, wQ, LQ) {
          let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const oQ = QQ.toString();
          let kQ = !1;
          if (this._uniformBuffer.bindToEffect(wQ, "Light" + oQ), this._renderId !== FQ.getRenderId() || this._lastUseSpecular !== LQ || !this._uniformBuffer.useUbo) {
            this._renderId = FQ.getRenderId(), this._lastUseSpecular = LQ;
            const QQ = this.getScaledIntensity();
            this.transferToEffect(wQ, oQ), this.diffuse.scaleToRef(QQ, DQ.i.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", DQ.i.Color3[0], this.range, oQ), LQ && (this.specular.scaleToRef(QQ, DQ.i.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", DQ.i.Color3[1], this.radius, oQ)), kQ = !0
          }
          if (this.transferTexturesToEffect(wQ, oQ), FQ.shadowsEnabled && this.shadowEnabled && qQ) {
            const QQ = this.getShadowGenerator(FQ.activeCamera) ?? this.getShadowGenerator();
            QQ && (QQ.bindShadowLight(oQ, wQ), kQ = !0)
          }
          kQ ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(QQ) {
          let FQ = "Name: " + this.name;
          if (FQ += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let wQ = 0; wQ < this.animations.length; wQ++) FQ += ", animation[0]: " + this.animations[wQ].toString(QQ);
          return FQ
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.vW() || this._resyncMeshes()
        }
        Qr(QQ) {
          super.Qr(QQ), this._resyncMeshes()
        }
        getShadowGenerator() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(QQ) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return oQ.p.Zero()
        }
        canAffectMesh(QQ) {
          return !QQ || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(QQ)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(QQ)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & QQ.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & QQ.layerMask)))
        }
        dispose(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const QQ = this._shadowGenerators.values();
            for (let FQ = QQ.next(); !0 !== FQ.done; FQ = QQ.next()) {
              FQ.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.iN().stopAnimation(this), this._parentContainer) {
            const QQ = this._parentContainer.lights.indexOf(this);
            QQ > -1 && this._parentContainer.lights.splice(QQ, 1), this._parentContainer = null
          }
          for (const wQ of this.iN().meshes) wQ._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.iN().removeLight(this), super.dispose(QQ, FQ)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(FQ) {
          let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const LQ = QQ.GetConstructorFromName(this.getTypeID(), FQ, this.iN());
          if (!LQ) return null;
          const qQ = HQ.c.Clone(LQ, this);
          return FQ && (qQ.name = FQ), wQ && (qQ.parent = wQ), qQ.Qr(this.isEnabled()), this.onClonedObservable.notifyObservers(qQ), qQ
        }
        serialize() {
          const QQ = HQ.c.Serialize(this);
          if (QQ.uniqueId = this.uniqueId, QQ.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(QQ), this.excludedMeshes.length > 0) {
            QQ.excludedMeshesIds = [];
            for (const FQ of this.excludedMeshes) QQ.excludedMeshesIds.push(FQ.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            QQ.includedOnlyMeshesIds = [];
            for (const FQ of this.includedOnlyMeshes) QQ.includedOnlyMeshesIds.push(FQ.id)
          }
          return HQ.c.AppendSerializedAnimations(this, QQ), QQ.PA = this.serializeAnimationRanges(), QQ.isEnabled = this.isEnabled(), QQ
        }
        static GetConstructorFromName(QQ, FQ, wQ) {
          const LQ = kQ.c.Construct("Light_Type_" + QQ, FQ, wQ);
          return LQ || null
        }
        static Parse(FQ, wQ) {
          let LQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const qQ = QQ.GetConstructorFromName(FQ.type, FQ.name, wQ);
          if (!qQ) return null;
          const oQ = HQ.c.Parse(qQ, FQ, wQ, LQ);
          if (FQ.excludedMeshesIds && (oQ._excludedMeshesIds = FQ.excludedMeshesIds), FQ.includedOnlyMeshesIds && (oQ._includedOnlyMeshesIds = FQ.includedOnlyMeshesIds), void 0 !== FQ.parentId && (oQ._waitingParentId = FQ.parentId), void 0 !== FQ.parentInstanceIndex && (oQ._waitingParentInstanceIndex = FQ.parentInstanceIndex), void 0 !== FQ.falloffType && (oQ.falloffType = FQ.falloffType), void 0 !== FQ.lightmapMode && (oQ.lightmapMode = FQ.lightmapMode), FQ.animations) {
            for (let QQ = 0; QQ < FQ.animations.length; QQ++) {
              const wQ = FQ.animations[QQ],
                LQ = (0, mQ.b)("BABYLON.Animation");
              LQ && oQ.animations.push(LQ.Parse(wQ))
            }
            kQ.c.ParseAnimationRanges(oQ, FQ, wQ)
          }
          return FQ.autoAnimate && wQ.beginAnimation(oQ, FQ.autoAnimateFrom, FQ.autoAnimateTo, FQ.autoAnimateLoop, FQ.autoAnimateSpeed || 1), void 0 !== FQ.isEnabled && oQ.Qr(FQ.isEnabled), oQ._onParsed(FQ, wQ, LQ), oQ
        }
        _onParsed(QQ, FQ) {}
        _hookArrayForExcluded(QQ) {
          var FQ = this;
          const wQ = QQ.push;
          QQ.push = function() {
            for (var LQ = arguments.length, qQ = new Array(LQ), oQ = 0; oQ < LQ; oQ++) qQ[oQ] = arguments[oQ];
            const DQ = wQ.apply(QQ, qQ);
            if (FQ._clusteredContainer) return DQ;
            for (const QQ of qQ) QQ._resyncLightSource(FQ);
            return DQ
          };
          const LQ = QQ.splice;
          QQ.splice = (FQ, wQ) => {
            const qQ = LQ.call(QQ, FQ, wQ ?? QQ.length);
            if (this._clusteredContainer) return qQ;
            for (const QQ of qQ) QQ._resyncLightSource(this);
            return qQ
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(QQ) {
          var FQ = this;
          const wQ = QQ.push;
          QQ.push = function() {
            for (var LQ = arguments.length, qQ = new Array(LQ), oQ = 0; oQ < LQ; oQ++) qQ[oQ] = arguments[oQ];
            const DQ = wQ.apply(QQ, qQ);
            return FQ._resyncMeshes(), DQ
          };
          const LQ = QQ.splice;
          QQ.splice = (FQ, wQ) => {
            const qQ = LQ.call(QQ, FQ, wQ ?? QQ.length);
            return this._resyncMeshes(), qQ
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const QQ of this.iN().meshes) QQ._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const QQ of this.iN().meshes) - 1 !== QQ.lightSources.indexOf(this) && QQ._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.iN().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let FQ = 0;
          const wQ = this.getTypeID();
          let LQ = this.intensityMode;
          switch (LQ === QQ.INTENSITYMODE_AUTOMATIC && (LQ = wQ === QQ.LIGHTTYPEID_DIRECTIONALLIGHT ? QQ.INTENSITYMODE_ILLUMINANCE : QQ.INTENSITYMODE_LUMINOUSINTENSITY), wQ) {
            case QQ.LIGHTTYPEID_POINTLIGHT:
            case QQ.LIGHTTYPEID_SPOTLIGHT:
              switch (LQ) {
                case QQ.INTENSITYMODE_LUMINOUSPOWER:
                  FQ = 1 / (4 * Math.PI);
                  break;
                case QQ.INTENSITYMODE_LUMINOUSINTENSITY:
                  FQ = 1;
                  break;
                case QQ.INTENSITYMODE_LUMINANCE:
                  FQ = this.radius * this.radius
              }
              break;
            case QQ.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (LQ) {
                case QQ.INTENSITYMODE_ILLUMINANCE:
                  FQ = 1;
                  break;
                case QQ.INTENSITYMODE_LUMINANCE: {
                  let QQ = this.radius;
                  QQ = Math.max(QQ, .001);
                  FQ = 2 * Math.PI * (1 - Math.cos(QQ));
                  break
                }
              }
              break;
            case QQ.LIGHTTYPEID_HEMISPHERICLIGHT:
            case QQ.LIGHTTYPEID_RECT_AREALIGHT:
              FQ = 1
          }
          return FQ
        }
        _reorderLightsInScene() {
          const QQ = this.iN();
          0 != this._renderPriority && (QQ.requireLightSorting = !0), this.iN().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, FQ = new WeakMap, (() => {
        const FQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(iQ[Symbol.metadata] ?? null) : void 0;
        wQ = [(0, qQ.m)()], bQ = [(0, qQ.m)()], YQ = [(0, qQ.I)()], xQ = [(0, qQ.I)()], AQ = [(0, qQ.I)()], tQ = [(0, qQ.I)()], eQ = [(0, qQ.I)()], MQ = [(0, qQ.I)()], GQ = [(0, qQ.e)("_reorderLightsInScene")], pQ = [(0, qQ.I)("shadowEnabled")], cQ = [(0, qQ.I)("excludeWithLayerMask")], CQ = [(0, qQ.I)("includeOnlyWithLayerMask")], SQ = [(0, qQ.I)("lightmapMode")], (0, LQ.i)(QQ, null, AQ, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: QQ => "range" in QQ,
            get: QQ => QQ.range
          },
          metadata: FQ
        }, null, WQ), (0, LQ.i)(QQ, null, tQ, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "intensityMode" in QQ,
            get: QQ => QQ.intensityMode
          },
          metadata: FQ
        }, null, WQ), (0, LQ.i)(QQ, null, eQ, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: QQ => "radius" in QQ,
            get: QQ => QQ.radius
          },
          metadata: FQ
        }, null, WQ), (0, LQ.i)(QQ, null, GQ, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: QQ => "renderPriority" in QQ,
            get: QQ => QQ.renderPriority,
            set: (QQ, FQ) => {
              QQ.renderPriority = FQ
            }
          },
          metadata: FQ
        }, lQ, jQ), (0, LQ.i)(null, null, wQ, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: QQ => "diffuse" in QQ,
            get: QQ => QQ.diffuse,
            set: (QQ, FQ) => {
              QQ.diffuse = FQ
            }
          },
          metadata: FQ
        }, RQ, OQ), (0, LQ.i)(null, null, bQ, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: QQ => "specular" in QQ,
            get: QQ => QQ.specular,
            set: (QQ, FQ) => {
              QQ.specular = FQ
            }
          },
          metadata: FQ
        }, sQ, rQ), (0, LQ.i)(null, null, YQ, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: QQ => "falloffType" in QQ,
            get: QQ => QQ.falloffType,
            set: (QQ, FQ) => {
              QQ.falloffType = FQ
            }
          },
          metadata: FQ
        }, IQ, UQ), (0, LQ.i)(null, null, xQ, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "intensity" in QQ,
            get: QQ => QQ.intensity,
            set: (QQ, FQ) => {
              QQ.intensity = FQ
            }
          },
          metadata: FQ
        }, NQ, TQ), (0, LQ.i)(null, null, MQ, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_renderPriority" in QQ,
            get: QQ => QQ._renderPriority,
            set: (QQ, FQ) => {
              QQ._renderPriority = FQ
            }
          },
          metadata: FQ
        }, KQ, zQ), (0, LQ.i)(null, null, pQ, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_shadowEnabled" in QQ,
            get: QQ => QQ._shadowEnabled,
            set: (QQ, FQ) => {
              QQ._shadowEnabled = FQ
            }
          },
          metadata: FQ
        }, aQ, XQ), (0, LQ.i)(null, null, cQ, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_excludeWithLayerMask" in QQ,
            get: QQ => QQ._excludeWithLayerMask,
            set: (QQ, FQ) => {
              QQ._excludeWithLayerMask = FQ
            }
          },
          metadata: FQ
        }, fQ, VQ), (0, LQ.i)(null, null, CQ, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_includeOnlyWithLayerMask" in QQ,
            get: QQ => QQ._includeOnlyWithLayerMask,
            set: (QQ, FQ) => {
              QQ._includeOnlyWithLayerMask = FQ
            }
          },
          metadata: FQ
        }, hQ, JQ), (0, LQ.i)(null, null, SQ, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_lightmapMode" in QQ,
            get: QQ => QQ._lightmapMode,
            set: (QQ, FQ) => {
              QQ._lightmapMode = FQ
            }
          },
          metadata: FQ
        }, EQ, nQ), FQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: FQ
        })
      })(), QQ.FALLOFF_DEFAULT = uQ.c.FALLOFF_DEFAULT, QQ.FALLOFF_PHYSICAL = uQ.c.FALLOFF_PHYSICAL, QQ.FALLOFF_GLTF = uQ.c.FALLOFF_GLTF, QQ.FALLOFF_STANDARD = uQ.c.FALLOFF_STANDARD, QQ.LIGHTMAP_DEFAULT = uQ.c.LIGHTMAP_DEFAULT, QQ.LIGHTMAP_SPECULAR = uQ.c.LIGHTMAP_SPECULAR, QQ.LIGHTMAP_SHADOWSONLY = uQ.c.LIGHTMAP_SHADOWSONLY, QQ.INTENSITYMODE_AUTOMATIC = uQ.c.INTENSITYMODE_AUTOMATIC, QQ.INTENSITYMODE_LUMINOUSPOWER = uQ.c.INTENSITYMODE_LUMINOUSPOWER, QQ.INTENSITYMODE_LUMINOUSINTENSITY = uQ.c.INTENSITYMODE_LUMINOUSINTENSITY, QQ.INTENSITYMODE_ILLUMINANCE = uQ.c.INTENSITYMODE_ILLUMINANCE, QQ.INTENSITYMODE_LUMINANCE = uQ.c.INTENSITYMODE_LUMINANCE, QQ.LIGHTTYPEID_POINTLIGHT = uQ.c.LIGHTTYPEID_POINTLIGHT, QQ.LIGHTTYPEID_DIRECTIONALLIGHT = uQ.c.LIGHTTYPEID_DIRECTIONALLIGHT, QQ.LIGHTTYPEID_SPOTLIGHT = uQ.c.LIGHTTYPEID_SPOTLIGHT, QQ.LIGHTTYPEID_HEMISPHERICLIGHT = uQ.c.LIGHTTYPEID_HEMISPHERICLIGHT, QQ.LIGHTTYPEID_RECT_AREALIGHT = uQ.c.LIGHTTYPEID_RECT_AREALIGHT, QQ
    })()
  },
  39650: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => HQ
    });
    var LQ = wQ(39402),
      qQ = wQ(36696),
      oQ = wQ(39409),
      DQ = wQ(36722),
      kQ = wQ(36720),
      vQ = wQ(39277),
      mQ = wQ(39426);
    class uQ {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new DQ.e, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new DQ.e, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let HQ = (() => {
      var QQ;
      let FQ, wQ, HQ, bQ, YQ, xQ = [],
        AQ = [],
        tQ = [],
        eQ = [],
        MQ = [],
        GQ = [],
        pQ = [],
        cQ = [],
        CQ = [],
        SQ = [];
      return QQ = class {
        static AddNodeConstructor(QQ, FQ) {
          this._NodeConstructors[QQ] = FQ
        }
        static Construct(QQ, FQ, wQ, LQ) {
          const qQ = this._NodeConstructors[QQ];
          return qQ ? qQ(FQ, wQ, LQ) : null
        }
        set accessibilityTag(QQ) {
          this._accessibilityTag = QQ, this.onAccessibilityTagChangedObservable.notifyObservers(QQ)
        }
        get accessibilityTag() {
          return this._accessibilityTag
        }
        get doNotSerialize() {
          return !!this._nodeDataStorage._doNotSerialize || !!this._parentNode && this._parentNode.doNotSerialize
        }
        set doNotSerialize(QQ) {
          this._nodeDataStorage._doNotSerialize = QQ
        }
        vW() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(QQ) {
          if (this._parentNode === QQ) return;
          const FQ = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const FQ = this._parentNode._children.indexOf(this); - 1 !== FQ && this._parentNode._children.splice(FQ, 1), QQ || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = QQ, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), FQ || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
        }
        get parent() {
          return this._parentNode
        }
        get inheritVisibility() {
          return this._nodeDataStorage._inheritVisibility
        }
        set inheritVisibility(QQ) {
          this._nodeDataStorage._inheritVisibility = QQ
        }
        get isVisible() {
          return !(this.inheritVisibility && this._parentNode && !this._parentNode.isVisible) && this._nodeDataStorage._isVisible
        }
        set isVisible(QQ) {
          this._nodeDataStorage._isVisible = QQ
        }
        _serializeAsParent(QQ) {
          QQ.parentId = this.uniqueId
        }
        _addToSceneRootNodes() {
          -1 === this._nodeDataStorage._sceneRootNodesIndex && (this._nodeDataStorage._sceneRootNodesIndex = this._scene.rootNodes.length, this._scene.rootNodes.push(this))
        }
        _removeFromSceneRootNodes() {
          if (-1 !== this._nodeDataStorage._sceneRootNodesIndex) {
            const QQ = this._scene.rootNodes,
              FQ = QQ.length - 1;
            QQ[this._nodeDataStorage._sceneRootNodesIndex] = QQ[FQ], QQ[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
          }
        }
        get animationPropertiesOverride() {
          return this._animationPropertiesOverride ? this._animationPropertiesOverride : this._scene.animationPropertiesOverride
        }
        set animationPropertiesOverride(QQ) {
          this._animationPropertiesOverride = QQ
        }
        getClassName() {
          return "Node"
        }
        set onDispose(QQ) {
          this._onDisposeObserver && this.zN.remove(this._onDisposeObserver), this._onDisposeObserver = this.zN.add(QQ)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var QQ;
          return (QQ = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (QQ._onEffectiveEnabledStateChangedObservable = new DQ.e)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            wQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new uQ, this.name = (0, LQ.l)(this, xQ, void 0), this.id = ((0, LQ.l)(this, AQ), (0, LQ.l)(this, tQ, void 0)), this.uniqueId = ((0, LQ.l)(this, eQ), (0, LQ.l)(this, MQ, void 0)), this.state = ((0, LQ.l)(this, GQ), (0, LQ.l)(this, pQ, "")), this.metadata = ((0, LQ.l)(this, cQ), (0, LQ.l)(this, CQ, null)), this._internalMetadata = (0, LQ.l)(this, SQ), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new DQ.e, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = qQ.c.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.zN = new DQ.e, this._onDisposeObserver = null, this._behaviors = new Array, this.name = QQ, this.id = QQ, this._scene = FQ || kQ.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), wQ && this._addToSceneRootNodes()
        }
        iN() {
          return this._scene
        }
        Wx() {
          return this._scene.Wx()
        }
        addBehavior(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(QQ) || (QQ.init(), this._scene.isLoading && !FQ ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(QQ) && QQ.attach(this)
          })) : QQ.attach(this), this._behaviors.push(QQ)), this
        }
        removeBehavior(QQ) {
          const FQ = this._behaviors.indexOf(QQ);
          return -1 === FQ || (this._behaviors.splice(FQ, 1), QQ.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(QQ) {
          for (const FQ of this._behaviors)
            if (FQ.name === QQ) return FQ;
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
        updateCache(QQ) {
          !QQ && this.isSynchronized() || this._updateCache()
        }
        _getActionManagerForTrigger(QQ) {
          return this.parent ? this.parent._getActionManagerForTrigger(QQ, !1) : null
        }
        _updateCache(QQ) {}
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
        dFQ(QQ) {
          return this._currentRenderId = Number.MAX_VALUE, this._isDirty = !0, this
        }
        isEnabled() {
          return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) ? this._nodeDataStorage._isEnabled : !!this._nodeDataStorage._isEnabled && this._nodeDataStorage._isParentEnabled
        }
        _hasEffectiveEnabledStateObservers() {
          const QQ = this._nodeDataStorage._onEffectiveEnabledStateChangedObservable;
          return !!QQ && QQ.hasObservers()
        }
        _syncParentEnabledState() {
          const QQ = this._hasEffectiveEnabledStateObservers(),
            FQ = QQ ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const wQ of this._children) wQ._syncParentEnabledState();
          if (QQ) {
            const QQ = this.isEnabled();
            QQ !== FQ && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(QQ)
          }
        }
        Qr(QQ) {
          if (this._nodeDataStorage._isEnabled === QQ) return;
          const FQ = this._hasEffectiveEnabledStateObservers(),
            wQ = FQ ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = QQ, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(QQ), FQ) {
            const QQ = this.isEnabled();
            QQ !== wQ && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(QQ)
          }
        }
        isDescendantOf(QQ) {
          return !!this.parent && (this.parent === QQ || this.parent.isDescendantOf(QQ))
        }
        _getDescendants(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            wQ = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let LQ = 0; LQ < this._children.length; LQ++) {
              const qQ = this._children[LQ];
              wQ && !wQ(qQ) || QQ.push(qQ), FQ || qQ._getDescendants(QQ, !1, wQ)
            }
        }
        getDescendants(QQ, FQ) {
          const wQ = [];
          return this._getDescendants(wQ, QQ, FQ), wQ
        }
        getChildMeshes(QQ, FQ) {
          const wQ = [];
          return this._getDescendants(wQ, QQ, (QQ => (!FQ || FQ(QQ)) && void 0 !== QQ.cullingStrategy)), wQ
        }
        getChildren(QQ) {
          let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(FQ, QQ)
        }
        _setReady(QQ) {
          QQ !== this._nodeDataStorage._isReady && (QQ ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(QQ) {
          for (let FQ = 0; FQ < this.animations.length; FQ++) {
            const wQ = this.animations[FQ];
            if (wQ.name === QQ) return wQ
          }
          return null
        }
        createAnimationRange(FQ, wQ, LQ) {
          if (!this._ranges[FQ]) {
            this._ranges[FQ] = QQ._AnimationRangeFactory(FQ, wQ, LQ);
            for (let QQ = 0, qQ = this.animations.length; QQ < qQ; QQ++) this.animations[QQ] && this.animations[QQ].createRange(FQ, wQ, LQ)
          }
        }
        deleteAnimationRange(QQ) {
          let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let wQ = 0, LQ = this.animations.length; wQ < LQ; wQ++) this.animations[wQ] && this.animations[wQ].deleteRange(QQ, FQ);
          this._ranges[QQ] = null
        }
        getAnimationRange(QQ) {
          return this._ranges[QQ] || null
        }
        clone(FQ, wQ, LQ) {
          const qQ = mQ.c.Clone((() => new QQ(FQ, this.iN())), this);
          if (wQ && (qQ.parent = wQ), !LQ) {
            const QQ = this.getDescendants(!0);
            for (let wQ = 0; wQ < QQ.length; wQ++) {
              const LQ = QQ[wQ];
              LQ.clone(FQ + "." + LQ.name, qQ)
            }
          }
          return qQ
        }
        getAnimationRanges() {
          const QQ = [];
          let FQ;
          for (FQ in this._ranges) QQ.push(this._ranges[FQ]);
          return QQ
        }
        beginAnimation(QQ, FQ, wQ, LQ) {
          const qQ = this.getAnimationRange(QQ);
          return qQ ? this._scene.beginAnimation(this, qQ.from, qQ.to, FQ, wQ, LQ) : null
        }
        serializeAnimationRanges() {
          const QQ = [];
          for (const FQ in this._ranges) {
            const wQ = this._ranges[FQ];
            if (!wQ) continue;
            const LQ = {};
            LQ.name = FQ, LQ.from = wQ.from, LQ.to = wQ.to, QQ.push(LQ)
          }
          return QQ
        }
        computeWorldMatrix(QQ) {
          return this._worldMatrix || (this._worldMatrix = qQ.c.Identity()), this._worldMatrix
        }
        dispose(QQ) {
          let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !QQ) {
            const wQ = this.getDescendants(!0);
            for (const LQ of wQ) LQ.dispose(QQ, FQ)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.zN.notifyObservers(this), this.zN.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const wQ of this._behaviors) wQ.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(QQ, FQ, wQ) {
          if (FQ.PA)
            for (let LQ = 0; LQ < FQ.PA.length; LQ++) {
              const wQ = FQ.PA[LQ];
              QQ.createAnimationRange(wQ.name, wQ.from, wQ.to)
            }
        }
        getHierarchyBoundingVectors() {
          let QQ, FQ, wQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            LQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.iN().incrementRenderId(), this.computeWorldMatrix(!0);
          const oQ = this;
          if (oQ.sK && oQ.lC) {
            const wQ = oQ.sK();
            QQ = wQ.boundingBox.minimumWorld.clone(), FQ = wQ.boundingBox.maximumWorld.clone()
          } else QQ = new qQ.p(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), FQ = new qQ.p(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (wQ) {
            const wQ = this.getDescendants(!1);
            for (const oQ of wQ) {
              const wQ = oQ;
              if (wQ.computeWorldMatrix(!0), LQ && !LQ(wQ)) continue;
              if (!wQ.sK || 0 === wQ.getTotalVertices()) continue;
              const DQ = wQ.sK().boundingBox,
                kQ = DQ.minimumWorld,
                vQ = DQ.maximumWorld;
              qQ.p.CheckExtends(kQ, QQ, FQ), qQ.p.CheckExtends(vQ, QQ, FQ)
            }
          }
          return {
            min: QQ,
            max: FQ
          }
        }
      }, (() => {
        const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        FQ = [(0, oQ.I)()], wQ = [(0, oQ.I)()], HQ = [(0, oQ.I)()], bQ = [(0, oQ.I)()], YQ = [(0, oQ.I)()], (0, LQ.i)(null, null, FQ, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: QQ => "name" in QQ,
            get: QQ => QQ.name,
            set: (QQ, FQ) => {
              QQ.name = FQ
            }
          },
          metadata: qQ
        }, xQ, AQ), (0, LQ.i)(null, null, wQ, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: QQ => "id" in QQ,
            get: QQ => QQ.id,
            set: (QQ, FQ) => {
              QQ.id = FQ
            }
          },
          metadata: qQ
        }, tQ, eQ), (0, LQ.i)(null, null, HQ, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: QQ => "uniqueId" in QQ,
            get: QQ => QQ.uniqueId,
            set: (QQ, FQ) => {
              QQ.uniqueId = FQ
            }
          },
          metadata: qQ
        }, MQ, GQ), (0, LQ.i)(null, null, bQ, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: QQ => "state" in QQ,
            get: QQ => QQ.state,
            set: (QQ, FQ) => {
              QQ.state = FQ
            }
          },
          metadata: qQ
        }, pQ, cQ), (0, LQ.i)(null, null, YQ, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metadata" in QQ,
            get: QQ => QQ.metadata,
            set: (QQ, FQ) => {
              QQ.metadata = FQ
            }
          },
          metadata: qQ
        }, CQ, SQ), qQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qQ
        })
      })(), QQ._AnimationRangeFactory = (QQ, FQ, wQ) => {
        throw (0, vQ.k)("AnimationRange")
      }, QQ._NodeConstructors = {}, QQ
    })()
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);