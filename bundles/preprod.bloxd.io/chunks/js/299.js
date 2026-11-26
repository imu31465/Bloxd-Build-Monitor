export const id = 299;
export const ids = [299];
export const modules = {
  42195: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => GU,
      f: () => SU,
      j: () => tU,
      l: () => gU,
      m: () => NU,
      n: () => aU,
      q: () => pU,
      r: () => IU
    });
    var cU = zU(37819),
      yU = zU(37923),
      QU = zU(37855),
      AU = zU(42199),
      FU = zU(41314),
      oU = zU(41125),
      DU = zU(41160),
      EU = zU(41134),
      YU = zU(37863);
    const NU = Object.freeze(new cU.f(0, 0, 0, 0)),
      IU = Object.freeze(cU.q.Zero()),
      pU = Object.freeze(cU.m.Zero()),
      aU = Object.freeze(oU.d.Zero()),
      tU = Object.freeze(yU.b.Black()),
      gU = Object.freeze(new yU.e(0, 0, 0, 0)),
      kU = {
        key: 0,
        repeatCount: 0,
        aX: 2
      };
    class GU {
      static _PrepareAnimation(UU, XU, zU, QU, AU, FU, DU, EU) {
        let YU;
        if (!isNaN(parseFloat(AU)) && isFinite(AU) ? YU = GU.ANIMATIONTYPE_FLOAT : AU instanceof cU.f ? YU = GU.ANIMATIONTYPE_QUATERNION : AU instanceof cU.q ? YU = GU.ANIMATIONTYPE_VECTOR3 : AU instanceof cU.m ? YU = GU.ANIMATIONTYPE_VECTOR2 : AU instanceof yU.b ? YU = GU.ANIMATIONTYPE_COLOR3 : AU instanceof yU.e ? YU = GU.ANIMATIONTYPE_COLOR4 : AU instanceof oU.d && (YU = GU.ANIMATIONTYPE_SIZE), void 0 == YU) return null;
        const NU = new GU(UU, XU, zU, YU, DU),
          IU = [{
            frame: 0,
            value: AU
          }, {
            frame: QU,
            value: FU
          }];
        return NU.setKeys(IU), void 0 !== EU && NU.setEasingFunction(EU), NU
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const UU of this._runtimeAnimations)
          if (!UU.isStopped()) return !0;
        return !1
      }
      constructor(UU, XU, zU, cU, yU, QU) {
        this.name = UU, this.targetProperty = XU, this.framePerSecond = zU, this.dataType = cU, this.aX = yU, this.enableBlending = QU, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = XU.split("."), this.dataType = cU, this.aX = void 0 === yU ? GU.ANIMATIONLOOPMODE_CYCLE : yU, this.uniqueId = GU._UniqueIdGenerator++
      }
      toString(UU) {
        let XU = "Name: " + this.name + ", property: " + this.targetProperty;
        if (XU += ", datatype: " + ["Float", "Sp", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], XU += ", nKeys: " + (this._keys ? this._keys.length : "none"), XU += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), UU) {
          XU += ", Ranges: {";
          let UU = !0;
          for (const zU in this._ranges) UU || (XU += ", "), UU = !1, XU += zU;
          XU += "}"
        }
        return XU
      }
      addEvent(UU) {
        this._events.push(UU), this._events.sort(((UU, XU) => UU.frame - XU.frame))
      }
      removeEvents(UU) {
        for (let XU = 0; XU < this._events.length; XU++) this._events[XU].frame === UU && (this._events.splice(XU, 1), XU--)
      }
      getEvents() {
        return this._events
      }
      createRange(UU, XU, zU) {
        this._ranges[UU] || (this._ranges[UU] = new AU.b(UU, XU, zU))
      }
      deleteRange(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const zU = this._ranges[UU];
        if (zU) {
          if (XU) {
            const UU = zU.from,
              XU = zU.to;
            for (let zU = this._keys.length - 1; zU >= 0; zU--) this._keys[zU].frame >= UU && this._keys[zU].frame <= XU && this._keys.splice(zU, 1)
          }
          this._ranges[UU] = null
        }
      }
      getRange(UU) {
        return this._ranges[UU]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let UU = 0;
        for (let XU = 0, zU = this._keys.length; XU < zU; XU++) UU < this._keys[XU].frame && (UU = this._keys[XU].frame);
        return UU
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(UU) {
        this._easingFunction = UU
      }
      floatInterpolateFunction(UU, XU, zU) {
        return (0, QU.Lerp)(UU, XU, zU)
      }
      floatInterpolateFunctionWithTangents(UU, XU, zU, cU, yU) {
        return (0, QU.Hermite)(UU, XU, zU, cU, yU)
      }
      quaternionInterpolateFunction(UU, XU, zU) {
        return cU.f.Slerp(UU, XU, zU)
      }
      quaternionInterpolateFunctionWithTangents(UU, XU, zU, yU, QU) {
        return cU.f.Hermite(UU, XU, zU, yU, QU).normalize()
      }
      vector3InterpolateFunction(UU, XU, zU) {
        return cU.q.Lerp(UU, XU, zU)
      }
      vector3InterpolateFunctionWithTangents(UU, XU, zU, yU, QU) {
        return cU.q.Hermite(UU, XU, zU, yU, QU)
      }
      vector2InterpolateFunction(UU, XU, zU) {
        return cU.m.Lerp(UU, XU, zU)
      }
      vector2InterpolateFunctionWithTangents(UU, XU, zU, yU, QU) {
        return cU.m.Hermite(UU, XU, zU, yU, QU)
      }
      sizeInterpolateFunction(UU, XU, zU) {
        return oU.d.Lerp(UU, XU, zU)
      }
      color3InterpolateFunction(UU, XU, zU) {
        return yU.b.Lerp(UU, XU, zU)
      }
      color3InterpolateFunctionWithTangents(UU, XU, zU, cU, QU) {
        return yU.b.Hermite(UU, XU, zU, cU, QU)
      }
      color4InterpolateFunction(UU, XU, zU) {
        return yU.e.Lerp(UU, XU, zU)
      }
      color4InterpolateFunctionWithTangents(UU, XU, zU, cU, QU) {
        return yU.e.Hermite(UU, XU, zU, cU, QU)
      }
      _getKeyValue(UU) {
        return "function" === typeof UU ? UU() : UU
      }
      evaluate(UU) {
        return kU.key = 0, this._interpolate(UU, kU)
      }
      _interpolate(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (XU.aX === GU.ANIMATIONLOOPMODE_CONSTANT && XU.repeatCount > 0) return XU.highLimitValue.clone ? XU.highLimitValue.clone() : XU.highLimitValue;
        const cU = this._keys;
        let yU;
        if (this._coreAnimation) yU = this._coreAnimation._key;
        else {
          const QU = cU.length;
          for (yU = XU.key; yU >= 0 && UU < cU[yU].frame;) --yU;
          for (; yU + 1 <= QU - 1 && UU >= cU[yU + 1].frame;) ++yU;
          if (XU.key = yU, yU < 0) return zU ? void 0 : this._getKeyValue(cU[0].value);
          if (yU + 1 > QU - 1) return zU ? void 0 : this._getKeyValue(cU[QU - 1].value);
          this._key = yU
        }
        const QU = cU[yU],
          AU = cU[yU + 1];
        if (zU && (UU === QU.frame || UU === AU.frame)) return;
        const FU = this._getKeyValue(QU.value),
          oU = this._getKeyValue(AU.value);
        if (1 === QU.interpolation) return AU.frame > UU ? FU : oU;
        const DU = void 0 !== QU.outTangent && void 0 !== AU.inTangent,
          EU = AU.frame - QU.frame;
        let YU = (UU - QU.frame) / EU;
        const kU = QU.easingFunction || this.getEasingFunction();
        switch (kU && (YU = kU.ease(YU)), this.dataType) {
          case GU.ANIMATIONTYPE_FLOAT: {
            const UU = DU ? this.floatInterpolateFunctionWithTangents(FU, QU.outTangent * EU, oU, AU.inTangent * EU, YU) : this.floatInterpolateFunction(FU, oU, YU);
            switch (XU.aX) {
              case GU.ANIMATIONLOOPMODE_CYCLE:
              case GU.ANIMATIONLOOPMODE_CONSTANT:
              case GU.ANIMATIONLOOPMODE_YOYO:
                return UU;
              case GU.ANIMATIONLOOPMODE_RELATIVE:
              case GU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (XU.offsetValue ?? 0) * XU.repeatCount + UU
            }
            break
          }
          case GU.ANIMATIONTYPE_QUATERNION: {
            const UU = DU ? this.quaternionInterpolateFunctionWithTangents(FU, QU.outTangent.scale(EU), oU, AU.inTangent.scale(EU), YU) : this.quaternionInterpolateFunction(FU, oU, YU);
            switch (XU.aX) {
              case GU.ANIMATIONLOOPMODE_CYCLE:
              case GU.ANIMATIONLOOPMODE_CONSTANT:
              case GU.ANIMATIONLOOPMODE_YOYO:
                return UU;
              case GU.ANIMATIONLOOPMODE_RELATIVE:
              case GU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return UU.addInPlace((XU.offsetValue || NU).scale(XU.repeatCount))
            }
            return UU
          }
          case GU.ANIMATIONTYPE_VECTOR3: {
            const UU = DU ? this.vector3InterpolateFunctionWithTangents(FU, QU.outTangent.scale(EU), oU, AU.inTangent.scale(EU), YU) : this.vector3InterpolateFunction(FU, oU, YU);
            switch (XU.aX) {
              case GU.ANIMATIONLOOPMODE_CYCLE:
              case GU.ANIMATIONLOOPMODE_CONSTANT:
              case GU.ANIMATIONLOOPMODE_YOYO:
                return UU;
              case GU.ANIMATIONLOOPMODE_RELATIVE:
              case GU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return UU.add((XU.offsetValue || IU).scale(XU.repeatCount))
            }
            break
          }
          case GU.ANIMATIONTYPE_VECTOR2: {
            const UU = DU ? this.vector2InterpolateFunctionWithTangents(FU, QU.outTangent.scale(EU), oU, AU.inTangent.scale(EU), YU) : this.vector2InterpolateFunction(FU, oU, YU);
            switch (XU.aX) {
              case GU.ANIMATIONLOOPMODE_CYCLE:
              case GU.ANIMATIONLOOPMODE_CONSTANT:
              case GU.ANIMATIONLOOPMODE_YOYO:
                return UU;
              case GU.ANIMATIONLOOPMODE_RELATIVE:
              case GU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return UU.add((XU.offsetValue || pU).scale(XU.repeatCount))
            }
            break
          }
          case GU.ANIMATIONTYPE_SIZE:
            switch (XU.aX) {
              case GU.ANIMATIONLOOPMODE_CYCLE:
              case GU.ANIMATIONLOOPMODE_CONSTANT:
              case GU.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(FU, oU, YU);
              case GU.ANIMATIONLOOPMODE_RELATIVE:
              case GU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(FU, oU, YU).add((XU.offsetValue || aU).scale(XU.repeatCount))
            }
            break;
          case GU.ANIMATIONTYPE_COLOR3: {
            const UU = DU ? this.color3InterpolateFunctionWithTangents(FU, QU.outTangent.scale(EU), oU, AU.inTangent.scale(EU), YU) : this.color3InterpolateFunction(FU, oU, YU);
            switch (XU.aX) {
              case GU.ANIMATIONLOOPMODE_CYCLE:
              case GU.ANIMATIONLOOPMODE_CONSTANT:
              case GU.ANIMATIONLOOPMODE_YOYO:
                return UU;
              case GU.ANIMATIONLOOPMODE_RELATIVE:
              case GU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return UU.add((XU.offsetValue || tU).scale(XU.repeatCount))
            }
            break
          }
          case GU.ANIMATIONTYPE_COLOR4: {
            const UU = DU ? this.color4InterpolateFunctionWithTangents(FU, QU.outTangent.scale(EU), oU, AU.inTangent.scale(EU), YU) : this.color4InterpolateFunction(FU, oU, YU);
            switch (XU.aX) {
              case GU.ANIMATIONLOOPMODE_CYCLE:
              case GU.ANIMATIONLOOPMODE_CONSTANT:
              case GU.ANIMATIONLOOPMODE_YOYO:
                return UU;
              case GU.ANIMATIONLOOPMODE_RELATIVE:
              case GU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return UU.add((XU.offsetValue || gU).scale(XU.repeatCount))
            }
            break
          }
          case GU.ANIMATIONTYPE_MATRIX:
            switch (XU.aX) {
              case GU.ANIMATIONLOOPMODE_CYCLE:
              case GU.ANIMATIONLOOPMODE_CONSTANT:
              case GU.ANIMATIONLOOPMODE_YOYO:
                return GU.AllowMatricesInterpolation ? this.matrixInterpolateFunction(FU, oU, YU, XU.workValue) : FU;
              case GU.ANIMATIONLOOPMODE_RELATIVE:
              case GU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return FU
            }
        }
        return 0
      }
      matrixInterpolateFunction(UU, XU, zU, yU) {
        return GU.AllowMatrixDecomposeForInterpolation ? yU ? (cU.e.DecomposeLerpToRef(UU, XU, zU, yU), yU) : cU.e.DecomposeLerp(UU, XU, zU) : yU ? (cU.e.LerpToRef(UU, XU, zU, yU), yU) : cU.e.Lerp(UU, XU, zU)
      }
      clone() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const XU = new GU(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.aX);
        if (XU.enableBlending = this.enableBlending, XU.blendingSpeed = this.blendingSpeed, this._keys && XU.setKeys(this._keys, !1, UU), this._ranges) {
          XU._ranges = {};
          for (const UU in this._ranges) {
            const zU = this._ranges[UU];
            zU && (XU._ranges[UU] = zU.clone())
          }
        }
        return XU
      }
      setKeys(UU) {
        let XU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = UU;
        else if (this._keys = UU.slice(0), XU)
          for (let zU = 0; zU < this._keys.length; zU++) {
            const UU = this._keys[zU];
            this._keys[zU] = {
              frame: UU.frame,
              value: UU.value.clone ? UU.value.clone() : UU.value,
              inTangent: UU.inTangent && UU.inTangent.clone ? UU.inTangent.clone() : UU.inTangent,
              outTangent: UU.outTangent && UU.outTangent.clone ? UU.outTangent.clone() : UU.outTangent,
              interpolation: UU.interpolation,
              lockedTangent: UU.lockedTangent,
              easingFunction: UU.easingFunction
            }
          }
      }
      createKeyForFrame(UU) {
        kU.key = 0;
        const XU = this._interpolate(UU, kU, !0);
        if (!XU) return this._keys[kU.key].frame === UU ? kU.key : kU.key + 1;
        const zU = {
          frame: UU,
          value: XU.clone ? XU.clone() : XU
        };
        return this._keys.splice(kU.key + 1, 0, zU), kU.key + 1
      }
      serialize() {
        const UU = {};
        UU.name = this.name, UU.property = this.targetProperty, UU.framePerSecond = this.framePerSecond, UU.dataType = this.dataType, UU.loopBehavior = this.aX, UU.enableBlending = this.enableBlending, UU.blendingSpeed = this.blendingSpeed;
        const XU = this.dataType;
        UU.keys = [];
        const zU = this.getKeys();
        for (let cU = 0; cU < zU.length; cU++) {
          const yU = zU[cU],
            QU = {};
          switch (QU.frame = yU.frame, XU) {
            case GU.ANIMATIONTYPE_FLOAT:
              QU.values = [yU.value], void 0 !== yU.inTangent && QU.values.push(yU.inTangent), void 0 !== yU.outTangent && (void 0 === yU.inTangent && QU.values.push(void 0), QU.values.push(yU.outTangent)), void 0 !== yU.interpolation && (void 0 === yU.inTangent && QU.values.push(void 0), void 0 === yU.outTangent && QU.values.push(void 0), QU.values.push(yU.interpolation));
              break;
            case GU.ANIMATIONTYPE_QUATERNION:
            case GU.ANIMATIONTYPE_MATRIX:
            case GU.ANIMATIONTYPE_VECTOR3:
            case GU.ANIMATIONTYPE_COLOR3:
            case GU.ANIMATIONTYPE_COLOR4:
              QU.values = yU.value.cyU(), void 0 != yU.inTangent && QU.values.push(yU.inTangent.cyU()), void 0 != yU.outTangent && (void 0 === yU.inTangent && QU.values.push(void 0), QU.values.push(yU.outTangent.cyU())), void 0 !== yU.interpolation && (void 0 === yU.inTangent && QU.values.push(void 0), void 0 === yU.outTangent && QU.values.push(void 0), QU.values.push(yU.interpolation))
          }
          UU.keys.push(QU)
        }
        UU.Qt = [];
        for (const cU in this._ranges) {
          const XU = this._ranges[cU];
          if (!XU) continue;
          const zU = {};
          zU.name = cU, zU.from = XU.from, zU.to = XU.to, UU.Qt.push(zU)
        }
        return UU
      }
      static _UniversalLerp(UU, XU, zU) {
        const cU = UU.constructor;
        return cU.Lerp ? cU.Lerp(UU, XU, zU) : cU.Slerp ? cU.Slerp(UU, XU, zU) : UU.toFixed ? UU * (1 - zU) + zU * XU : XU
      }
    }

    function BU(UU, XU, zU) {
      let yU;
      yU = "object" === typeof XU ? XU : {
        referenceFrame: XU ?? 0,
        range: zU,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let QU = UU;
      yU.cloneOriginalAnimation && (QU = UU.clone(), QU.name = yU.clonedAnimationName || QU.name);
      const AU = QU.getKeys();
      if (!AU.length) return QU;
      const FU = yU.referenceFrame && yU.referenceFrame >= 0 ? yU.referenceFrame : 0;
      let oU = 0;
      const DU = AU[0];
      let EU = AU.length - 1;
      const YU = AU[EU],
        NU = {
          referenceValue: DU.value,
          referencePosition: cU.l.Sp[0],
          referenceQuaternion: cU.l.Quaternion[0],
          referenceScaling: cU.l.Sp[1],
          keyPosition: cU.l.Sp[2],
          keyQuaternion: cU.l.Quaternion[1],
          keyScaling: cU.l.Sp[3]
        };
      let IU = DU.frame,
        pU = YU.frame;
      if (yU.range) {
        const UU = QU.getRange(yU.range);
        UU && (IU = UU.from, pU = UU.to)
      } else IU = yU.fromFrame ?? IU, pU = yU.toFrame ?? pU;
      IU !== DU.frame && (oU = QU.createKeyForFrame(IU)), pU !== YU.frame && (EU = QU.createKeyForFrame(pU));
      const aU = QU.getKeys();
      if (1 === aU.length) {
        const UU = QU._getKeyValue(aU[0].value);
        NU.referenceValue = UU.clone ? UU.clone() : UU
      } else if (FU <= DU.frame) {
        const UU = QU._getKeyValue(DU.value);
        NU.referenceValue = UU.clone ? UU.clone() : UU
      } else if (FU >= YU.frame) {
        const UU = QU._getKeyValue(YU.value);
        NU.referenceValue = UU.clone ? UU.clone() : UU
      } else {
        kU.key = 0;
        const UU = QU._interpolate(FU, kU);
        NU.referenceValue = UU.clone ? UU.clone() : UU
      }
      QU.dataType === GU.ANIMATIONTYPE_QUATERNION ? NU.referenceValue.normalize().conjugateInPlace() : QU.dataType === GU.ANIMATIONTYPE_MATRIX && (NU.referenceValue.decompose(NU.referenceScaling, NU.referenceQuaternion, NU.referencePosition), NU.referenceQuaternion.normalize().conjugateInPlace());
      let tU = Number.MAX_VALUE;
      const gU = yU.clipKeys ? [] : null;
      for (let kU = oU; kU <= EU; kU++) {
        let UU = aU[kU];
        if ((gU || yU.cloneOriginalAnimation) && (UU = {
            frame: UU.frame,
            value: UU.value.clone ? UU.value.clone() : UU.value,
            inTangent: UU.inTangent,
            outTangent: UU.outTangent,
            interpolation: UU.interpolation,
            lockedTangent: UU.lockedTangent,
            easingFunction: UU.easingFunction
          }, gU && (tU === Number.MAX_VALUE && (tU = UU.frame), UU.frame -= tU, gU.push(UU))), !kU || QU.dataType === GU.ANIMATIONTYPE_FLOAT || UU.value !== DU.value) switch (QU.dataType) {
          case GU.ANIMATIONTYPE_MATRIX:
            UU.value.decompose(NU.keyScaling, NU.keyQuaternion, NU.keyPosition), NU.keyPosition.ZyU(NU.referencePosition), NU.keyScaling.divideInPlace(NU.referenceScaling), NU.referenceQuaternion.multiplyToRef(NU.keyQuaternion, NU.keyQuaternion), cU.e.ComposeToRef(NU.keyScaling, NU.keyQuaternion, NU.keyPosition, UU.value);
            break;
          case GU.ANIMATIONTYPE_QUATERNION:
            NU.referenceValue.multiplyToRef(UU.value, UU.value);
            break;
          case GU.ANIMATIONTYPE_VECTOR2:
          case GU.ANIMATIONTYPE_VECTOR3:
          case GU.ANIMATIONTYPE_COLOR3:
          case GU.ANIMATIONTYPE_COLOR4:
            UU.value.subtractToRef(NU.referenceValue, UU.value);
            break;
          case GU.ANIMATIONTYPE_SIZE:
            UU.value.width -= NU.referenceValue.width, UU.value.height -= NU.referenceValue.height;
            break;
          default:
            UU.value -= NU.referenceValue
        }
      }
      return gU && QU.setKeys(gU, !0), QU
    }

    function ZU(UU, XU, zU, cU) {
      const yU = new GU(UU + "Animation", UU, zU, XU, GU.ANIMATIONLOOPMODE_CONSTANT);
      return yU.setEasingFunction(cU), yU
    }

    function RU(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU) {
      const YU = GU._PrepareAnimation(UU, zU, cU, yU, QU, AU, FU, oU);
      return YU ? (XU.nS && (EU = XU.nS()), EU ? EU.beginDirectAnimation(XU, [YU], 0, yU, YU.aX !== GU.ANIMATIONLOOPMODE_CONSTANT, 1, DU) : null) : null
    }

    function PU(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU) {
      const YU = GU._PrepareAnimation(UU, cU, yU, QU, AU, FU, oU, DU);
      if (!YU) return null;
      return XU.nS().beginDirectHierarchyAnimation(XU, zU, [YU], 0, QU, 1 === YU.aX, 1, EU)
    }

    function WU(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) {
      const EU = GU._PrepareAnimation(UU, zU, cU, yU, QU, AU, FU, oU);
      return EU ? (XU.animations.push(EU), XU.nS().beginAnimation(XU, 0, yU, 1 === EU.aX, 1, DU)) : null
    }

    function dU(UU, XU, zU, cU, yU, QU, AU) {
      let FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        oU = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        DU = arguments.length > 9 ? arguments[9] : void 0;
      if (AU <= 0) return zU[UU] = XU, FU && FU(), null;
      const EU = yU * (AU / 1e3);
      QU.setKeys(DU ?? [{
        frame: 0,
        value: zU[UU].clone ? zU[UU].clone() : zU[UU]
      }, {
        frame: EU,
        value: XU
      }]), zU.animations || (zU.animations = []), zU.animations.push(QU);
      return cU.beginAnimation(zU, 0, EU, !1, 1, FU ?? void 0, void 0, oU)
    }

    function LU(UU, XU) {
      EU.b.AppendSerializedAnimations(UU, XU)
    }

    function eU(UU) {
      const XU = new GU(UU.name, UU.property, UU.framePerSecond, UU.dataType, UU.loopBehavior),
        zU = UU.dataType,
        QU = [];
      let AU, FU;
      for (UU.enableBlending && (XU.enableBlending = UU.enableBlending), UU.blendingSpeed && (XU.blendingSpeed = UU.blendingSpeed), FU = 0; FU < UU.keys.length; FU++) {
        const XU = UU.keys[FU];
        let oU, DU, EU;
        switch (zU) {
          case GU.ANIMATIONTYPE_FLOAT:
            AU = XU.values[0], XU.values.length >= 2 && (oU = XU.values[1]), XU.values.length >= 3 && (DU = XU.values[2]), XU.values.length >= 4 && (EU = XU.values[3]);
            break;
          case GU.ANIMATIONTYPE_QUATERNION:
            if (AU = cU.f.FromArray(XU.values), XU.values.length >= 8) {
              const UU = cU.f.FromArray(XU.values.slice(4, 8));
              UU.equals(cU.f.Zero()) || (oU = UU)
            }
            if (XU.values.length >= 12) {
              const UU = cU.f.FromArray(XU.values.slice(8, 12));
              UU.equals(cU.f.Zero()) || (DU = UU)
            }
            XU.values.length >= 13 && (EU = XU.values[12]);
            break;
          case GU.ANIMATIONTYPE_MATRIX:
            AU = cU.e.FromArray(XU.values), XU.values.length >= 17 && (EU = XU.values[16]);
            break;
          case GU.ANIMATIONTYPE_COLOR3:
            AU = yU.b.FromArray(XU.values), XU.values[3] && (oU = yU.b.FromArray(XU.values[3])), XU.values[4] && (DU = yU.b.FromArray(XU.values[4])), XU.values[5] && (EU = XU.values[5]);
            break;
          case GU.ANIMATIONTYPE_COLOR4:
            AU = yU.e.FromArray(XU.values), XU.values[4] && (oU = yU.e.FromArray(XU.values[4])), XU.values[5] && (DU = yU.e.FromArray(XU.values[5])), XU.values[6] && (EU = XU.values[6]);
            break;
          case GU.ANIMATIONTYPE_VECTOR3:
          default:
            AU = cU.q.FromArray(XU.values), XU.values[3] && (oU = cU.q.FromArray(XU.values[3])), XU.values[4] && (DU = cU.q.FromArray(XU.values[4])), XU.values[5] && (EU = XU.values[5])
        }
        const YU = {};
        YU.frame = XU.frame, YU.value = AU, void 0 != oU && (YU.inTangent = oU), void 0 != DU && (YU.outTangent = DU), void 0 != EU && (YU.interpolation = EU), QU.push(YU)
      }
      if (XU.setKeys(QU), UU.Qt)
        for (FU = 0; FU < UU.Qt.length; FU++) AU = UU.Qt[FU], XU.createRange(AU.name, AU.from, AU.to);
      return XU
    }
    async function CU(UU, XU) {
      return await new Promise(((zU, cU) => {
        const yU = new DU.e;
        yU.addEventListener("readystatechange", (() => {
          if (4 == yU.readyState)
            if (200 == yU.status) {
              let XU = JSON.parse(yU.responseText);
              if (XU.animations && (XU = XU.animations), XU.length) {
                const UU = [];
                for (const zU of XU) UU.push(eU(zU));
                zU(UU)
              } else {
                const cU = eU(XU);
                UU && (cU.name = UU), zU(cU)
              }
            } else cU("Unable to load the animation")
        })), yU.open("GET", XU), yU.send()
      }))
    }
    async function wU(UU) {
      const XU = this?.SnippetUrl ?? GU.SnippetUrl;
      return await new Promise(((zU, cU) => {
        const yU = new DU.e;
        yU.addEventListener("readystatechange", (() => {
          if (4 == yU.readyState)
            if (200 == yU.status) {
              const XU = JSON.parse(JSON.parse(yU.responseText).jsonPayload);
              if (XU.animations) {
                const cU = JSON.parse(XU.animations),
                  yU = [];
                for (const XU of cU.animations) {
                  const zU = eU(XU);
                  zU.snippetId = UU, yU.push(zU)
                }
                zU(yU)
              } else {
                const cU = eU(JSON.parse(XU.animation));
                cU.snippetId = UU, zU(cU)
              }
            } else cU("Unable to load the snippet " + UU)
        })), yU.open("GET", XU + "/" + UU.replace(/#/g, "/")), yU.send()
      }))
    }
    GU._UniqueIdGenerator = 0, GU.AllowMatricesInterpolation = !1, GU.AllowMatrixDecomposeForInterpolation = !0, GU.InheritOriginalValueFromActiveAnimations = !1, GU.SnippetUrl = "https://snippet.babylonjs.com", GU.ANIMATIONTYPE_FLOAT = 0, GU.ANIMATIONTYPE_VECTOR3 = 1, GU.ANIMATIONTYPE_QUATERNION = 2, GU.ANIMATIONTYPE_MATRIX = 3, GU.ANIMATIONTYPE_COLOR3 = 4, GU.ANIMATIONTYPE_COLOR4 = 7, GU.ANIMATIONTYPE_VECTOR2 = 5, GU.ANIMATIONTYPE_SIZE = 6, GU.ANIMATIONLOOPMODE_RELATIVE = 0, GU.ANIMATIONLOOPMODE_CYCLE = 1, GU.ANIMATIONLOOPMODE_CONSTANT = 2, GU.ANIMATIONLOOPMODE_YOYO = 4, GU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const qU = wU;
    let OU = !1;

    function SU() {
      OU || (OU = !0, GU.Parse = eU, GU.ParseFromFileAsync = CU, GU.ParseFromSnippetAsync = wU, GU.CreateFromSnippetAsync = qU, GU.CreateAnimation = ZU, GU.CreateAndStartAnimation = RU, GU.CreateAndStartHierarchyAnimation = PU, GU.CreateMergeAndStartAnimation = WU, GU.MakeAnimationAdditive = BU, GU.TransitionTo = dU, GU.AppendSerializedAnimations = LU, (0, YU.h)("BABYLON.Animation", GU), FU.e._AnimationRangeFactory = (UU, XU, zU) => new AU.b(UU, XU, zU))
    }
  },
  42199: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU {
      constructor(UU, XU, zU) {
        this.name = UU, this.from = XU, this.to = zU
      }
      clone() {
        return new cU(this.name, this.from, this.to)
      }
    }
  },
  42261: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU.d,
      e: () => cU.h
    });
    var cU = zU(41237);
    (0, cU.e)()
  },
  42242: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU.e
    });
    var cU = zU(41557);
    (0, cU.d)()
  },
  42215: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => cU.b
    });
    var cU = zU(41540);
    (0, cU.f)()
  },
  42269: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU.b
    });
    var cU = zU(41481);
    (0, cU.c)()
  },
  42205: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => cU.e
    });
    var cU = zU(41515);
    (0, cU.d)()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);