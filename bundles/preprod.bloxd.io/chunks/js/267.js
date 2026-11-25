export const id = 267;
export const ids = [267];
export const modules = {
  40525: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => rQ
    });
    var wQ = XQ(40260),
      qQ = XQ(40268),
      TQ = XQ(37370),
      zQ = XQ(37546),
      sQ = XQ(40491),
      FQ = XQ(40400),
      PQ = XQ(37418),
      gQ = XQ(40470),
      JQ = XQ(40286);
    let rQ = (() => {
      var QQ, WQ;
      let XQ, rQ, IQ, jQ, BQ, yQ, VQ, DQ, pQ, GQ, UQ, bQ, vQ, dQ = sQ.e,
        HQ = [],
        aQ = [],
        lQ = [],
        hQ = [],
        iQ = [],
        cQ = [],
        AQ = [],
        RQ = [],
        EQ = [],
        CQ = [],
        uQ = [],
        LQ = [],
        kQ = [],
        fQ = [],
        SQ = [],
        tQ = [],
        oQ = [],
        eQ = [],
        nQ = [],
        xQ = [],
        YQ = [];
      return QQ = class extends dQ {
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
          return (0, wQ.d)(this, WQ, "f")
        }
        set renderPriority(QQ) {
          (0, wQ.h)(this, WQ, QQ, "f")
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
        getProjectionMatrix(QQ, WQ) {
          return null
        }
        constructor(XQ, qQ, TQ) {
          super(XQ, qQ, !1), this.diffuse = ((0, wQ.n)(this, HQ), (0, wQ.n)(this, aQ, new zQ.b(1, 1, 1))), this.specular = ((0, wQ.n)(this, lQ), (0, wQ.n)(this, hQ, new zQ.b(1, 1, 1))), this.falloffType = ((0, wQ.n)(this, iQ), (0, wQ.n)(this, cQ, QQ.FALLOFF_DEFAULT)), this.intensity = ((0, wQ.n)(this, AQ), (0, wQ.n)(this, RQ, 1)), this._range = ((0, wQ.n)(this, EQ), Number.MAX_VALUE), this._inverseSquaredRange = 0, this._photometricScale = 1, this._intensityMode = QQ.INTENSITYMODE_AUTOMATIC, this._radius = 1e-5, this._renderPriority = (0, wQ.n)(this, CQ, void 0), WQ.set(this, ((0, wQ.n)(this, uQ), (0, wQ.n)(this, LQ, 0))), this._shadowEnabled = ((0, wQ.n)(this, kQ), (0, wQ.n)(this, fQ, !0)), this._includedOnlyMeshes = (0, wQ.n)(this, SQ), this._excludeWithLayerMask = (0, wQ.n)(this, tQ, 0), this._includeOnlyWithLayerMask = ((0, wQ.n)(this, oQ), (0, wQ.n)(this, eQ, 0)), this._lightmapMode = ((0, wQ.n)(this, nQ), (0, wQ.n)(this, xQ, 0)), this._shadowGenerators = ((0, wQ.n)(this, YQ), null), this._excludedMeshesIds = new Array, this._includedOnlyMeshesIds = new Array, this._currentViewDepth = 0, this._clusteredContainer = null, this._isLight = !0, TQ || this.sE().addLight(this), this._uniformBuffer = new FQ.c(this.sE().Uj(), void 0, void 0, XQ), this._buildUniformLayout(), this.includedOnlyMeshes = [], this.excludedMeshes = [], TQ || this._resyncMeshes()
        }
        transferTexturesToEffect(QQ, WQ) {
          return this
        }
        _bindLight(QQ, WQ, XQ, wQ) {
          let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          const TQ = QQ.toString();
          let sQ = !1;
          if (this._uniformBuffer.bindToEffect(XQ, "Light" + TQ), this._renderId !== WQ.getRenderId() || this._lastUseSpecular !== wQ || !this._uniformBuffer.useUbo) {
            this._renderId = WQ.getRenderId(), this._lastUseSpecular = wQ;
            const QQ = this.getScaledIntensity();
            this.transferToEffect(XQ, TQ), this.diffuse.scaleToRef(QQ, zQ.l.Color3[0]), this._uniformBuffer.updateColor4("vLightDiffuse", zQ.l.Color3[0], this.range, TQ), wQ && (this.specular.scaleToRef(QQ, zQ.l.Color3[1]), this._uniformBuffer.updateColor4("vLightSpecular", zQ.l.Color3[1], this.radius, TQ)), sQ = !0
          }
          if (this.transferTexturesToEffect(XQ, TQ), WQ.shadowsEnabled && this.shadowEnabled && qQ) {
            const QQ = this.getShadowGenerator(WQ.activeCamera) ?? this.getShadowGenerator();
            QQ && (QQ.bindShadowLight(TQ, XQ), sQ = !0)
          }
          sQ ? this._uniformBuffer.update() : this._uniformBuffer.bindUniformBuffer()
        }
        getClassName() {
          return "Light"
        }
        toString(QQ) {
          let WQ = "Name: " + this.name;
          if (WQ += ", type: " + ["Point", "Directional", "Spot", "Hemispheric", "Clustered"][this.getTypeID()], this.animations)
            for (let XQ = 0; XQ < this.animations.length; XQ++) WQ += ", animation[0]: " + this.animations[XQ].toString(QQ);
          return WQ
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.rG() || this._resyncMeshes()
        }
        UH(QQ) {
          super.UH(QQ), this._resyncMeshes()
        }
        getShadowGenerator() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
          return null === this._shadowGenerators ? null : this._shadowGenerators.get(QQ) ?? null
        }
        getShadowGenerators() {
          return this._shadowGenerators
        }
        getAbsolutePosition() {
          return TQ.s.Zero()
        }
        canAffectMesh(QQ) {
          return !QQ || !(this.includedOnlyMeshes && this.includedOnlyMeshes.length > 0 && -1 === this.includedOnlyMeshes.indexOf(QQ)) && (!(this.excludedMeshes && this.excludedMeshes.length > 0 && -1 !== this.excludedMeshes.indexOf(QQ)) && ((0 === this.includeOnlyWithLayerMask || 0 !== (this.includeOnlyWithLayerMask & QQ.layerMask)) && !(0 !== this.excludeWithLayerMask && this.excludeWithLayerMask & QQ.layerMask)))
        }
        dispose(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._shadowGenerators) {
            const QQ = this._shadowGenerators.values();
            for (let WQ = QQ.next(); !0 !== WQ.done; WQ = QQ.next()) {
              WQ.value.dispose()
            }
            this._shadowGenerators = null
          }
          if (this.sE().stopAnimation(this), this._parentContainer) {
            const QQ = this._parentContainer.lights.indexOf(this);
            QQ > -1 && this._parentContainer.lights.splice(QQ, 1), this._parentContainer = null
          }
          for (const XQ of this.sE().meshes) XQ._removeLightSource(this, !0);
          this._uniformBuffer.dispose(), this.sE().removeLight(this), super.dispose(QQ, WQ)
        }
        getTypeID() {
          return 0
        }
        getScaledIntensity() {
          return this._photometricScale * this.intensity
        }
        clone(WQ) {
          let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          const wQ = QQ.GetConstructorFromName(this.getTypeID(), WQ, this.sE());
          if (!wQ) return null;
          const qQ = JQ.b.Clone(wQ, this);
          return WQ && (qQ.name = WQ), XQ && (qQ.parent = XQ), qQ.UH(this.isEnabled()), this.onClonedObservable.notifyObservers(qQ), qQ
        }
        serialize() {
          const QQ = JQ.b.Serialize(this);
          if (QQ.uniqueId = this.uniqueId, QQ.type = this.getTypeID(), this.parent && this.parent._serializeAsParent(QQ), this.excludedMeshes.length > 0) {
            QQ.excludedMeshesIds = [];
            for (const WQ of this.excludedMeshes) QQ.excludedMeshesIds.push(WQ.id)
          }
          if (this.includedOnlyMeshes.length > 0) {
            QQ.includedOnlyMeshesIds = [];
            for (const WQ of this.includedOnlyMeshes) QQ.includedOnlyMeshesIds.push(WQ.id)
          }
          return JQ.b.AppendSerializedAnimations(this, QQ), QQ.Qy = this.serializeAnimationRanges(), QQ.isEnabled = this.isEnabled(), QQ
        }
        static GetConstructorFromName(QQ, WQ, XQ) {
          const wQ = sQ.e.Construct("Light_Type_" + QQ, WQ, XQ);
          return wQ || null
        }
        static Parse(WQ, XQ) {
          let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
          const qQ = QQ.GetConstructorFromName(WQ.type, WQ.name, XQ);
          if (!qQ) return null;
          const TQ = JQ.b.Parse(qQ, WQ, XQ, wQ);
          if (WQ.excludedMeshesIds && (TQ._excludedMeshesIds = WQ.excludedMeshesIds), WQ.includedOnlyMeshesIds && (TQ._includedOnlyMeshesIds = WQ.includedOnlyMeshesIds), void 0 !== WQ.parentId && (TQ._waitingParentId = WQ.parentId), void 0 !== WQ.parentInstanceIndex && (TQ._waitingParentInstanceIndex = WQ.parentInstanceIndex), void 0 !== WQ.falloffType && (TQ.falloffType = WQ.falloffType), void 0 !== WQ.lightmapMode && (TQ.lightmapMode = WQ.lightmapMode), WQ.animations) {
            for (let QQ = 0; QQ < WQ.animations.length; QQ++) {
              const XQ = WQ.animations[QQ],
                wQ = (0, PQ.b)("BABYLON.Animation");
              wQ && TQ.animations.push(wQ.Parse(XQ))
            }
            sQ.e.ParseAnimationRanges(TQ, WQ, XQ)
          }
          return WQ.autoAnimate && XQ.beginAnimation(TQ, WQ.autoAnimateFrom, WQ.autoAnimateTo, WQ.autoAnimateLoop, WQ.autoAnimateSpeed || 1), void 0 !== WQ.isEnabled && TQ.UH(WQ.isEnabled), TQ._onParsed(WQ, XQ, wQ), TQ
        }
        _onParsed(QQ, WQ) {}
        _hookArrayForExcluded(QQ) {
          var WQ = this;
          const XQ = QQ.push;
          QQ.push = function() {
            for (var wQ = arguments.length, qQ = new Array(wQ), TQ = 0; TQ < wQ; TQ++) qQ[TQ] = arguments[TQ];
            const zQ = XQ.apply(QQ, qQ);
            if (WQ._clusteredContainer) return zQ;
            for (const QQ of qQ) QQ._resyncLightSource(WQ);
            return zQ
          };
          const wQ = QQ.splice;
          QQ.splice = (WQ, XQ) => {
            const qQ = wQ.call(QQ, WQ, XQ ?? QQ.length);
            if (this._clusteredContainer) return qQ;
            for (const QQ of qQ) QQ._resyncLightSource(this);
            return qQ
          }, this._resyncMeshes()
        }
        _hookArrayForIncludedOnly(QQ) {
          var WQ = this;
          const XQ = QQ.push;
          QQ.push = function() {
            for (var wQ = arguments.length, qQ = new Array(wQ), TQ = 0; TQ < wQ; TQ++) qQ[TQ] = arguments[TQ];
            const zQ = XQ.apply(QQ, qQ);
            return WQ._resyncMeshes(), zQ
          };
          const wQ = QQ.splice;
          QQ.splice = (WQ, XQ) => {
            const qQ = wQ.call(QQ, WQ, XQ ?? QQ.length);
            return this._resyncMeshes(), qQ
          }, this._resyncMeshes()
        }
        _resyncMeshes() {
          if (!this._clusteredContainer)
            for (const QQ of this.sE().meshes) QQ._resyncLightSource(this)
        }
        _markMeshesAsLightDirty() {
          for (const QQ of this.sE().meshes) - 1 !== QQ.lightSources.indexOf(this) && QQ._markSubMeshesAsLightDirty()
        }
        _computePhotometricScale() {
          this._photometricScale = this._getPhotometricScale(), this.sE().resetCachedMaterial()
        }
        _getPhotometricScale() {
          let WQ = 0;
          const XQ = this.getTypeID();
          let wQ = this.intensityMode;
          switch (wQ === QQ.INTENSITYMODE_AUTOMATIC && (wQ = XQ === QQ.LIGHTTYPEID_DIRECTIONALLIGHT ? QQ.INTENSITYMODE_ILLUMINANCE : QQ.INTENSITYMODE_LUMINOUSINTENSITY), XQ) {
            case QQ.LIGHTTYPEID_POINTLIGHT:
            case QQ.LIGHTTYPEID_SPOTLIGHT:
              switch (wQ) {
                case QQ.INTENSITYMODE_LUMINOUSPOWER:
                  WQ = 1 / (4 * Math.PI);
                  break;
                case QQ.INTENSITYMODE_LUMINOUSINTENSITY:
                  WQ = 1;
                  break;
                case QQ.INTENSITYMODE_LUMINANCE:
                  WQ = this.radius * this.radius
              }
              break;
            case QQ.LIGHTTYPEID_DIRECTIONALLIGHT:
              switch (wQ) {
                case QQ.INTENSITYMODE_ILLUMINANCE:
                  WQ = 1;
                  break;
                case QQ.INTENSITYMODE_LUMINANCE: {
                  let QQ = this.radius;
                  QQ = Math.max(QQ, .001);
                  WQ = 2 * Math.PI * (1 - Math.cos(QQ));
                  break
                }
              }
              break;
            case QQ.LIGHTTYPEID_HEMISPHERICLIGHT:
            case QQ.LIGHTTYPEID_RECT_AREALIGHT:
              WQ = 1
          }
          return WQ
        }
        _reorderLightsInScene() {
          const QQ = this.sE();
          0 != this._renderPriority && (QQ.requireLightSorting = !0), this.sE().sortLightsByPriority()
        }
        areLightTexturesReady() {
          return !0
        }
        _isReady() {
          return !0
        }
      }, WQ = new WeakMap, (() => {
        const WQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(dQ[Symbol.metadata] ?? null) : void 0;
        XQ = [(0, qQ.l)()], rQ = [(0, qQ.l)()], IQ = [(0, qQ.I)()], jQ = [(0, qQ.I)()], BQ = [(0, qQ.I)()], yQ = [(0, qQ.I)()], VQ = [(0, qQ.I)()], DQ = [(0, qQ.I)()], pQ = [(0, qQ.e)("_reorderLightsInScene")], GQ = [(0, qQ.I)("shadowEnabled")], UQ = [(0, qQ.I)("excludeWithLayerMask")], bQ = [(0, qQ.I)("includeOnlyWithLayerMask")], vQ = [(0, qQ.I)("lightmapMode")], (0, wQ.k)(QQ, null, BQ, {
          kind: "getter",
          name: "range",
          static: !1,
          private: !1,
          access: {
            has: QQ => "range" in QQ,
            get: QQ => QQ.range
          },
          metadata: WQ
        }, null, HQ), (0, wQ.k)(QQ, null, yQ, {
          kind: "getter",
          name: "intensityMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "intensityMode" in QQ,
            get: QQ => QQ.intensityMode
          },
          metadata: WQ
        }, null, HQ), (0, wQ.k)(QQ, null, VQ, {
          kind: "getter",
          name: "radius",
          static: !1,
          private: !1,
          access: {
            has: QQ => "radius" in QQ,
            get: QQ => QQ.radius
          },
          metadata: WQ
        }, null, HQ), (0, wQ.k)(QQ, null, pQ, {
          kind: "accessor",
          name: "renderPriority",
          static: !1,
          private: !1,
          access: {
            has: QQ => "renderPriority" in QQ,
            get: QQ => QQ.renderPriority,
            set: (QQ, WQ) => {
              QQ.renderPriority = WQ
            }
          },
          metadata: WQ
        }, LQ, kQ), (0, wQ.k)(null, null, XQ, {
          kind: "field",
          name: "diffuse",
          static: !1,
          private: !1,
          access: {
            has: QQ => "diffuse" in QQ,
            get: QQ => QQ.diffuse,
            set: (QQ, WQ) => {
              QQ.diffuse = WQ
            }
          },
          metadata: WQ
        }, aQ, lQ), (0, wQ.k)(null, null, rQ, {
          kind: "field",
          name: "specular",
          static: !1,
          private: !1,
          access: {
            has: QQ => "specular" in QQ,
            get: QQ => QQ.specular,
            set: (QQ, WQ) => {
              QQ.specular = WQ
            }
          },
          metadata: WQ
        }, hQ, iQ), (0, wQ.k)(null, null, IQ, {
          kind: "field",
          name: "falloffType",
          static: !1,
          private: !1,
          access: {
            has: QQ => "falloffType" in QQ,
            get: QQ => QQ.falloffType,
            set: (QQ, WQ) => {
              QQ.falloffType = WQ
            }
          },
          metadata: WQ
        }, cQ, AQ), (0, wQ.k)(null, null, jQ, {
          kind: "field",
          name: "intensity",
          static: !1,
          private: !1,
          access: {
            has: QQ => "intensity" in QQ,
            get: QQ => QQ.intensity,
            set: (QQ, WQ) => {
              QQ.intensity = WQ
            }
          },
          metadata: WQ
        }, RQ, EQ), (0, wQ.k)(null, null, DQ, {
          kind: "field",
          name: "_renderPriority",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_renderPriority" in QQ,
            get: QQ => QQ._renderPriority,
            set: (QQ, WQ) => {
              QQ._renderPriority = WQ
            }
          },
          metadata: WQ
        }, CQ, uQ), (0, wQ.k)(null, null, GQ, {
          kind: "field",
          name: "_shadowEnabled",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_shadowEnabled" in QQ,
            get: QQ => QQ._shadowEnabled,
            set: (QQ, WQ) => {
              QQ._shadowEnabled = WQ
            }
          },
          metadata: WQ
        }, fQ, SQ), (0, wQ.k)(null, null, UQ, {
          kind: "field",
          name: "_excludeWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_excludeWithLayerMask" in QQ,
            get: QQ => QQ._excludeWithLayerMask,
            set: (QQ, WQ) => {
              QQ._excludeWithLayerMask = WQ
            }
          },
          metadata: WQ
        }, tQ, oQ), (0, wQ.k)(null, null, bQ, {
          kind: "field",
          name: "_includeOnlyWithLayerMask",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_includeOnlyWithLayerMask" in QQ,
            get: QQ => QQ._includeOnlyWithLayerMask,
            set: (QQ, WQ) => {
              QQ._includeOnlyWithLayerMask = WQ
            }
          },
          metadata: WQ
        }, eQ, nQ), (0, wQ.k)(null, null, vQ, {
          kind: "field",
          name: "_lightmapMode",
          static: !1,
          private: !1,
          access: {
            has: QQ => "_lightmapMode" in QQ,
            get: QQ => QQ._lightmapMode,
            set: (QQ, WQ) => {
              QQ._lightmapMode = WQ
            }
          },
          metadata: WQ
        }, xQ, YQ), WQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: WQ
        })
      })(), QQ.FALLOFF_DEFAULT = gQ.e.FALLOFF_DEFAULT, QQ.FALLOFF_PHYSICAL = gQ.e.FALLOFF_PHYSICAL, QQ.FALLOFF_GLTF = gQ.e.FALLOFF_GLTF, QQ.FALLOFF_STANDARD = gQ.e.FALLOFF_STANDARD, QQ.LIGHTMAP_DEFAULT = gQ.e.LIGHTMAP_DEFAULT, QQ.LIGHTMAP_SPECULAR = gQ.e.LIGHTMAP_SPECULAR, QQ.LIGHTMAP_SHADOWSONLY = gQ.e.LIGHTMAP_SHADOWSONLY, QQ.INTENSITYMODE_AUTOMATIC = gQ.e.INTENSITYMODE_AUTOMATIC, QQ.INTENSITYMODE_LUMINOUSPOWER = gQ.e.INTENSITYMODE_LUMINOUSPOWER, QQ.INTENSITYMODE_LUMINOUSINTENSITY = gQ.e.INTENSITYMODE_LUMINOUSINTENSITY, QQ.INTENSITYMODE_ILLUMINANCE = gQ.e.INTENSITYMODE_ILLUMINANCE, QQ.INTENSITYMODE_LUMINANCE = gQ.e.INTENSITYMODE_LUMINANCE, QQ.LIGHTTYPEID_POINTLIGHT = gQ.e.LIGHTTYPEID_POINTLIGHT, QQ.LIGHTTYPEID_DIRECTIONALLIGHT = gQ.e.LIGHTTYPEID_DIRECTIONALLIGHT, QQ.LIGHTTYPEID_SPOTLIGHT = gQ.e.LIGHTTYPEID_SPOTLIGHT, QQ.LIGHTTYPEID_HEMISPHERICLIGHT = gQ.e.LIGHTTYPEID_HEMISPHERICLIGHT, QQ.LIGHTTYPEID_RECT_AREALIGHT = gQ.e.LIGHTTYPEID_RECT_AREALIGHT, QQ
    })()
  },
  40491: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => JQ
    });
    var wQ = XQ(40260),
      qQ = XQ(37370),
      TQ = XQ(40268),
      zQ = XQ(37399),
      sQ = XQ(37392),
      FQ = XQ(40153),
      PQ = XQ(40286);
    class gQ {
      constructor() {
        this._doNotSerialize = !1, this._isDisposed = !1, this._sceneRootNodesIndex = -1, this._isEnabled = !0, this._isParentEnabled = !0, this._isReady = !0, this._onEnabledStateChangedObservable = new zQ.b, this._onEffectiveEnabledStateChangedObservable = null, this._onClonedObservable = new zQ.b, this._inheritVisibility = !1, this._isVisible = !0
      }
    }
    let JQ = (() => {
      var QQ;
      let WQ, XQ, JQ, rQ, IQ, jQ = [],
        BQ = [],
        yQ = [],
        VQ = [],
        DQ = [],
        pQ = [],
        GQ = [],
        UQ = [],
        bQ = [],
        vQ = [];
      return QQ = class {
        static AddNodeConstructor(QQ, WQ) {
          this._NodeConstructors[QQ] = WQ
        }
        static Construct(QQ, WQ, XQ, wQ) {
          const qQ = this._NodeConstructors[QQ];
          return qQ ? qQ(WQ, XQ, wQ) : null
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
        rG() {
          return this._nodeDataStorage._isDisposed
        }
        set parent(QQ) {
          if (this._parentNode === QQ) return;
          const WQ = this._parentNode;
          if (this._parentNode && void 0 !== this._parentNode._children && null !== this._parentNode._children) {
            const WQ = this._parentNode._children.indexOf(this); - 1 !== WQ && this._parentNode._children.splice(WQ, 1), QQ || this._nodeDataStorage._isDisposed || this._addToSceneRootNodes()
          }
          this._parentNode = QQ, this._isDirty = !0, this._parentNode && (void 0 !== this._parentNode._children && null !== this._parentNode._children || (this._parentNode._children = new Array), this._parentNode._children.push(this), WQ || this._removeFromSceneRootNodes()), this._syncParentEnabledState()
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
              WQ = QQ.length - 1;
            QQ[this._nodeDataStorage._sceneRootNodesIndex] = QQ[WQ], QQ[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex = this._nodeDataStorage._sceneRootNodesIndex, this._scene.rootNodes.pop(), this._nodeDataStorage._sceneRootNodesIndex = -1
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
          this._onDisposeObserver && this.yE.remove(this._onDisposeObserver), this._onDisposeObserver = this.yE.add(QQ)
        }
        get onEnabledStateChangedObservable() {
          return this._nodeDataStorage._onEnabledStateChangedObservable
        }
        get onEffectiveEnabledStateChangedObservable() {
          var QQ;
          return (QQ = this._nodeDataStorage)._onEffectiveEnabledStateChangedObservable ?? (QQ._onEffectiveEnabledStateChangedObservable = new zQ.b)
        }
        get onClonedObservable() {
          return this._nodeDataStorage._onClonedObservable
        }
        constructor(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            XQ = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          this._isDirty = !1, this._nodeDataStorage = new gQ, this.name = (0, wQ.n)(this, jQ, void 0), this.id = ((0, wQ.n)(this, BQ), (0, wQ.n)(this, yQ, void 0)), this.uniqueId = ((0, wQ.n)(this, VQ), (0, wQ.n)(this, DQ, void 0)), this.state = ((0, wQ.n)(this, pQ), (0, wQ.n)(this, GQ, "")), this.metadata = ((0, wQ.n)(this, UQ), (0, wQ.n)(this, bQ, null)), this._internalMetadata = (0, wQ.n)(this, vQ), this.reservedDataStore = null, this._accessibilityTag = null, this.onAccessibilityTagChangedObservable = new zQ.b, this._parentContainer = null, this.animations = [], this._ranges = {}, this.onReady = null, this._currentRenderId = -1, this._parentUpdateId = -1, this._childUpdateId = -1, this._waitingParentId = null, this._waitingParentInstanceIndex = null, this._waitingParsedUniqueId = null, this._cache = {}, this._parentNode = null, this._children = null, this._worldMatrix = qQ.e.Identity(), this._worldMatrixDeterminant = 0, this._worldMatrixDeterminantIsDirty = !0, this._animationPropertiesOverride = null, this._isNode = !0, this.yE = new zQ.b, this._onDisposeObserver = null, this._behaviors = new Array, this.name = QQ, this.id = QQ, this._scene = WQ || sQ.d.LastCreatedScene, this.uniqueId = this._scene.getUniqueId(), this._initCache(), XQ && this._addToSceneRootNodes()
        }
        sE() {
          return this._scene
        }
        Uj() {
          return this._scene.Uj()
        }
        addBehavior(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return -1 !== this._behaviors.indexOf(QQ) || (QQ.init(), this._scene.isLoading && !WQ ? this._scene.onDataLoadedObservable.addOnce((() => {
            this._behaviors.includes(QQ) && QQ.attach(this)
          })) : QQ.attach(this), this._behaviors.push(QQ)), this
        }
        removeBehavior(QQ) {
          const WQ = this._behaviors.indexOf(QQ);
          return -1 === WQ || (this._behaviors.splice(WQ, 1), QQ.detach()), this
        }
        get behaviors() {
          return this._behaviors
        }
        getBehaviorByName(QQ) {
          for (const WQ of this._behaviors)
            if (WQ.name === QQ) return WQ;
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
        KWQ(QQ) {
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
            WQ = QQ ? this.isEnabled() : null;
          if (this._nodeDataStorage._isParentEnabled = !this._parentNode || this._parentNode.isEnabled(), this._children)
            for (const XQ of this._children) XQ._syncParentEnabledState();
          if (QQ) {
            const QQ = this.isEnabled();
            QQ !== WQ && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(QQ)
          }
        }
        UH(QQ) {
          if (this._nodeDataStorage._isEnabled === QQ) return;
          const WQ = this._hasEffectiveEnabledStateObservers(),
            XQ = WQ ? this.isEnabled() : null;
          if (this._nodeDataStorage._isEnabled = QQ, this._syncParentEnabledState(), this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(QQ), WQ) {
            const QQ = this.isEnabled();
            QQ !== XQ && this._nodeDataStorage._onEffectiveEnabledStateChangedObservable.notifyObservers(QQ)
          }
        }
        isDescendantOf(QQ) {
          return !!this.parent && (this.parent === QQ || this.parent.isDescendantOf(QQ))
        }
        _getDescendants(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            XQ = arguments.length > 2 ? arguments[2] : void 0;
          if (this._children)
            for (let wQ = 0; wQ < this._children.length; wQ++) {
              const qQ = this._children[wQ];
              XQ && !XQ(qQ) || QQ.push(qQ), WQ || qQ._getDescendants(QQ, !1, XQ)
            }
        }
        getDescendants(QQ, WQ) {
          const XQ = [];
          return this._getDescendants(XQ, QQ, WQ), XQ
        }
        getChildMeshes(QQ, WQ) {
          const XQ = [];
          return this._getDescendants(XQ, QQ, (QQ => (!WQ || WQ(QQ)) && void 0 !== QQ.cullingStrategy)), XQ
        }
        getChildren(QQ) {
          let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return this.getDescendants(WQ, QQ)
        }
        _setReady(QQ) {
          QQ !== this._nodeDataStorage._isReady && (QQ ? (this.onReady && this.onReady(this), this._nodeDataStorage._isReady = !0) : this._nodeDataStorage._isReady = !1)
        }
        getAnimationByName(QQ) {
          for (let WQ = 0; WQ < this.animations.length; WQ++) {
            const XQ = this.animations[WQ];
            if (XQ.name === QQ) return XQ
          }
          return null
        }
        createAnimationRange(WQ, XQ, wQ) {
          if (!this._ranges[WQ]) {
            this._ranges[WQ] = QQ._AnimationRangeFactory(WQ, XQ, wQ);
            for (let QQ = 0, qQ = this.animations.length; QQ < qQ; QQ++) this.animations[QQ] && this.animations[QQ].createRange(WQ, XQ, wQ)
          }
        }
        deleteAnimationRange(QQ) {
          let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          for (let XQ = 0, wQ = this.animations.length; XQ < wQ; XQ++) this.animations[XQ] && this.animations[XQ].deleteRange(QQ, WQ);
          this._ranges[QQ] = null
        }
        getAnimationRange(QQ) {
          return this._ranges[QQ] || null
        }
        clone(WQ, XQ, wQ) {
          const qQ = PQ.b.Clone((() => new QQ(WQ, this.sE())), this);
          if (XQ && (qQ.parent = XQ), !wQ) {
            const QQ = this.getDescendants(!0);
            for (let XQ = 0; XQ < QQ.length; XQ++) {
              const wQ = QQ[XQ];
              wQ.clone(WQ + "." + wQ.name, qQ)
            }
          }
          return qQ
        }
        getAnimationRanges() {
          const QQ = [];
          let WQ;
          for (WQ in this._ranges) QQ.push(this._ranges[WQ]);
          return QQ
        }
        beginAnimation(QQ, WQ, XQ, wQ) {
          const qQ = this.getAnimationRange(QQ);
          return qQ ? this._scene.beginAnimation(this, qQ.from, qQ.to, WQ, XQ, wQ) : null
        }
        serializeAnimationRanges() {
          const QQ = [];
          for (const WQ in this._ranges) {
            const XQ = this._ranges[WQ];
            if (!XQ) continue;
            const wQ = {};
            wQ.name = WQ, wQ.from = XQ.from, wQ.to = XQ.to, QQ.push(wQ)
          }
          return QQ
        }
        computeWorldMatrix(QQ) {
          return this._worldMatrix || (this._worldMatrix = qQ.e.Identity()), this._worldMatrix
        }
        dispose(QQ) {
          let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (this._nodeDataStorage._isDisposed = !0, !QQ) {
            const XQ = this.getDescendants(!0);
            for (const wQ of XQ) wQ.dispose(QQ, WQ)
          }
          this.parent ? this.parent = null : this._removeFromSceneRootNodes(), this.yE.notifyObservers(this), this.yE.clear(), this.onEnabledStateChangedObservable.clear(), this._nodeDataStorage._onEffectiveEnabledStateChangedObservable?.clear(), this.onClonedObservable.clear();
          for (const XQ of this._behaviors) XQ.detach();
          this._behaviors.length = 0, this.metadata = null
        }
        static ParseAnimationRanges(QQ, WQ, XQ) {
          if (WQ.Qy)
            for (let wQ = 0; wQ < WQ.Qy.length; wQ++) {
              const XQ = WQ.Qy[wQ];
              QQ.createAnimationRange(XQ.name, XQ.from, XQ.to)
            }
        }
        getHierarchyBoundingVectors() {
          let QQ, WQ, XQ = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          this.sE().incrementRenderId(), this.computeWorldMatrix(!0);
          const TQ = this;
          if (TQ.uC && TQ.ZD) {
            const XQ = TQ.uC();
            QQ = XQ.boundingBox.minimumWorld.clone(), WQ = XQ.boundingBox.maximumWorld.clone()
          } else QQ = new qQ.s(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), WQ = new qQ.s(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          if (XQ) {
            const XQ = this.getDescendants(!1);
            for (const TQ of XQ) {
              const XQ = TQ;
              if (XQ.computeWorldMatrix(!0), wQ && !wQ(XQ)) continue;
              if (!XQ.uC || 0 === XQ.getTotalVertices()) continue;
              const zQ = XQ.uC().boundingBox,
                sQ = zQ.minimumWorld,
                FQ = zQ.maximumWorld;
              qQ.s.CheckExtends(sQ, QQ, WQ), qQ.s.CheckExtends(FQ, QQ, WQ)
            }
          }
          return {
            min: QQ,
            max: WQ
          }
        }
      }, (() => {
        const qQ = "function" === typeof Symbol && Symbol.metadata ? Object.create(null) : void 0;
        WQ = [(0, TQ.I)()], XQ = [(0, TQ.I)()], JQ = [(0, TQ.I)()], rQ = [(0, TQ.I)()], IQ = [(0, TQ.I)()], (0, wQ.k)(null, null, WQ, {
          kind: "field",
          name: "name",
          static: !1,
          private: !1,
          access: {
            has: QQ => "name" in QQ,
            get: QQ => QQ.name,
            set: (QQ, WQ) => {
              QQ.name = WQ
            }
          },
          metadata: qQ
        }, jQ, BQ), (0, wQ.k)(null, null, XQ, {
          kind: "field",
          name: "id",
          static: !1,
          private: !1,
          access: {
            has: QQ => "id" in QQ,
            get: QQ => QQ.id,
            set: (QQ, WQ) => {
              QQ.id = WQ
            }
          },
          metadata: qQ
        }, yQ, VQ), (0, wQ.k)(null, null, JQ, {
          kind: "field",
          name: "uniqueId",
          static: !1,
          private: !1,
          access: {
            has: QQ => "uniqueId" in QQ,
            get: QQ => QQ.uniqueId,
            set: (QQ, WQ) => {
              QQ.uniqueId = WQ
            }
          },
          metadata: qQ
        }, DQ, pQ), (0, wQ.k)(null, null, rQ, {
          kind: "field",
          name: "state",
          static: !1,
          private: !1,
          access: {
            has: QQ => "state" in QQ,
            get: QQ => QQ.state,
            set: (QQ, WQ) => {
              QQ.state = WQ
            }
          },
          metadata: qQ
        }, GQ, UQ), (0, wQ.k)(null, null, IQ, {
          kind: "field",
          name: "metadata",
          static: !1,
          private: !1,
          access: {
            has: QQ => "metadata" in QQ,
            get: QQ => QQ.metadata,
            set: (QQ, WQ) => {
              QQ.metadata = WQ
            }
          },
          metadata: qQ
        }, bQ, vQ), qQ && Object.defineProperty(QQ, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: qQ
        })
      })(), QQ._AnimationRangeFactory = (QQ, WQ, XQ) => {
        throw (0, FQ.i)("AnimationRange")
      }, QQ._NodeConstructors = {}, QQ
    })()
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);