export const id = 271;
export const ids = [271];
export const modules = {
  39958: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => vJ,
      g: () => gJ,
      h: () => fJ,
      j: () => xJ,
      m: () => DJ,
      q: () => GJ,
      s: () => nJ,
      v: () => sJ
    });
    var FJ = ZJ(36174),
      UJ = ZJ(36231),
      eJ = ZJ(36207),
      XJ = ZJ(39965),
      AJ = ZJ(38989),
      qJ = ZJ(38815),
      jJ = ZJ(38848),
      YJ = ZJ(38822),
      hJ = ZJ(36216);
    const DJ = Object.freeze(new FJ.e(0, 0, 0, 0)),
      sJ = Object.freeze(FJ.j.Zero()),
      nJ = Object.freeze(FJ.i.Zero()),
      GJ = Object.freeze(qJ.e.Zero()),
      fJ = Object.freeze(UJ.e.Black()),
      xJ = Object.freeze(new UJ.f(0, 0, 0, 0)),
      rJ = {
        key: 0,
        repeatCount: 0,
        Mc: 2
      };
    class vJ {
      static _PrepareAnimation(JJ, cJ, ZJ, eJ, XJ, AJ, jJ, YJ) {
        let hJ;
        if (!isNaN(parseFloat(XJ)) && isFinite(XJ) ? hJ = vJ.ANIMATIONTYPE_FLOAT : XJ instanceof FJ.e ? hJ = vJ.ANIMATIONTYPE_QUATERNION : XJ instanceof FJ.j ? hJ = vJ.ANIMATIONTYPE_VECTOR3 : XJ instanceof FJ.i ? hJ = vJ.ANIMATIONTYPE_VECTOR2 : XJ instanceof UJ.e ? hJ = vJ.ANIMATIONTYPE_COLOR3 : XJ instanceof UJ.f ? hJ = vJ.ANIMATIONTYPE_COLOR4 : XJ instanceof qJ.e && (hJ = vJ.ANIMATIONTYPE_SIZE), void 0 == hJ) return null;
        const DJ = new vJ(JJ, cJ, ZJ, hJ, jJ),
          sJ = [{
            frame: 0,
            value: XJ
          }, {
            frame: eJ,
            value: AJ
          }];
        return DJ.setKeys(sJ), void 0 !== YJ && DJ.setEasingFunction(YJ), DJ
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const JJ of this._runtimeAnimations)
          if (!JJ.isStopped()) return !0;
        return !1
      }
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this.name = JJ, this.targetProperty = cJ, this.framePerSecond = ZJ, this.dataType = FJ, this.Mc = UJ, this.enableBlending = eJ, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = cJ.split("."), this.dataType = FJ, this.Mc = void 0 === UJ ? vJ.ANIMATIONLOOPMODE_CYCLE : UJ, this.uniqueId = vJ._UniqueIdGenerator++
      }
      toString(JJ) {
        let cJ = "Name: " + this.name + ", property: " + this.targetProperty;
        if (cJ += ", datatype: " + ["Float", "Pn", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], cJ += ", nKeys: " + (this._keys ? this._keys.length : "none"), cJ += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), JJ) {
          cJ += ", Ranges: {";
          let JJ = !0;
          for (const ZJ in this._ranges) JJ || (cJ += ", "), JJ = !1, cJ += ZJ;
          cJ += "}"
        }
        return cJ
      }
      addEvent(JJ) {
        this._events.push(JJ), this._events.sort(((JJ, cJ) => JJ.frame - cJ.frame))
      }
      removeEvents(JJ) {
        for (let cJ = 0; cJ < this._events.length; cJ++) this._events[cJ].frame === JJ && (this._events.splice(cJ, 1), cJ--)
      }
      getEvents() {
        return this._events
      }
      createRange(JJ, cJ, ZJ) {
        this._ranges[JJ] || (this._ranges[JJ] = new XJ.e(JJ, cJ, ZJ))
      }
      deleteRange(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZJ = this._ranges[JJ];
        if (ZJ) {
          if (cJ) {
            const JJ = ZJ.from,
              cJ = ZJ.to;
            for (let ZJ = this._keys.length - 1; ZJ >= 0; ZJ--) this._keys[ZJ].frame >= JJ && this._keys[ZJ].frame <= cJ && this._keys.splice(ZJ, 1)
          }
          this._ranges[JJ] = null
        }
      }
      getRange(JJ) {
        return this._ranges[JJ]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let JJ = 0;
        for (let cJ = 0, ZJ = this._keys.length; cJ < ZJ; cJ++) JJ < this._keys[cJ].frame && (JJ = this._keys[cJ].frame);
        return JJ
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(JJ) {
        this._easingFunction = JJ
      }
      floatInterpolateFunction(JJ, cJ, ZJ) {
        return (0, eJ.Lerp)(JJ, cJ, ZJ)
      }
      floatInterpolateFunctionWithTangents(JJ, cJ, ZJ, FJ, UJ) {
        return (0, eJ.Hermite)(JJ, cJ, ZJ, FJ, UJ)
      }
      quaternionInterpolateFunction(JJ, cJ, ZJ) {
        return FJ.e.Slerp(JJ, cJ, ZJ)
      }
      quaternionInterpolateFunctionWithTangents(JJ, cJ, ZJ, UJ, eJ) {
        return FJ.e.Hermite(JJ, cJ, ZJ, UJ, eJ).normalize()
      }
      vector3InterpolateFunction(JJ, cJ, ZJ) {
        return FJ.j.Lerp(JJ, cJ, ZJ)
      }
      vector3InterpolateFunctionWithTangents(JJ, cJ, ZJ, UJ, eJ) {
        return FJ.j.Hermite(JJ, cJ, ZJ, UJ, eJ)
      }
      vector2InterpolateFunction(JJ, cJ, ZJ) {
        return FJ.i.Lerp(JJ, cJ, ZJ)
      }
      vector2InterpolateFunctionWithTangents(JJ, cJ, ZJ, UJ, eJ) {
        return FJ.i.Hermite(JJ, cJ, ZJ, UJ, eJ)
      }
      sizeInterpolateFunction(JJ, cJ, ZJ) {
        return qJ.e.Lerp(JJ, cJ, ZJ)
      }
      color3InterpolateFunction(JJ, cJ, ZJ) {
        return UJ.e.Lerp(JJ, cJ, ZJ)
      }
      color3InterpolateFunctionWithTangents(JJ, cJ, ZJ, FJ, eJ) {
        return UJ.e.Hermite(JJ, cJ, ZJ, FJ, eJ)
      }
      color4InterpolateFunction(JJ, cJ, ZJ) {
        return UJ.f.Lerp(JJ, cJ, ZJ)
      }
      color4InterpolateFunctionWithTangents(JJ, cJ, ZJ, FJ, eJ) {
        return UJ.f.Hermite(JJ, cJ, ZJ, FJ, eJ)
      }
      _getKeyValue(JJ) {
        return "function" === typeof JJ ? JJ() : JJ
      }
      evaluate(JJ) {
        return rJ.key = 0, this._interpolate(JJ, rJ)
      }
      _interpolate(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (cJ.Mc === vJ.ANIMATIONLOOPMODE_CONSTANT && cJ.repeatCount > 0) return cJ.highLimitValue.clone ? cJ.highLimitValue.clone() : cJ.highLimitValue;
        const FJ = this._keys;
        let UJ;
        if (this._coreAnimation) UJ = this._coreAnimation._key;
        else {
          const eJ = FJ.length;
          for (UJ = cJ.key; UJ >= 0 && JJ < FJ[UJ].frame;) --UJ;
          for (; UJ + 1 <= eJ - 1 && JJ >= FJ[UJ + 1].frame;) ++UJ;
          if (cJ.key = UJ, UJ < 0) return ZJ ? void 0 : this._getKeyValue(FJ[0].value);
          if (UJ + 1 > eJ - 1) return ZJ ? void 0 : this._getKeyValue(FJ[eJ - 1].value);
          this._key = UJ
        }
        const eJ = FJ[UJ],
          XJ = FJ[UJ + 1];
        if (ZJ && (JJ === eJ.frame || JJ === XJ.frame)) return;
        const AJ = this._getKeyValue(eJ.value),
          qJ = this._getKeyValue(XJ.value);
        if (1 === eJ.interpolation) return XJ.frame > JJ ? AJ : qJ;
        const jJ = void 0 !== eJ.outTangent && void 0 !== XJ.inTangent,
          YJ = XJ.frame - eJ.frame;
        let hJ = (JJ - eJ.frame) / YJ;
        const rJ = eJ.easingFunction || this.getEasingFunction();
        switch (rJ && (hJ = rJ.ease(hJ)), this.dataType) {
          case vJ.ANIMATIONTYPE_FLOAT: {
            const JJ = jJ ? this.floatInterpolateFunctionWithTangents(AJ, eJ.outTangent * YJ, qJ, XJ.inTangent * YJ, hJ) : this.floatInterpolateFunction(AJ, qJ, hJ);
            switch (cJ.Mc) {
              case vJ.ANIMATIONLOOPMODE_CYCLE:
              case vJ.ANIMATIONLOOPMODE_CONSTANT:
              case vJ.ANIMATIONLOOPMODE_YOYO:
                return JJ;
              case vJ.ANIMATIONLOOPMODE_RELATIVE:
              case vJ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (cJ.offsetValue ?? 0) * cJ.repeatCount + JJ
            }
            break
          }
          case vJ.ANIMATIONTYPE_QUATERNION: {
            const JJ = jJ ? this.quaternionInterpolateFunctionWithTangents(AJ, eJ.outTangent.scale(YJ), qJ, XJ.inTangent.scale(YJ), hJ) : this.quaternionInterpolateFunction(AJ, qJ, hJ);
            switch (cJ.Mc) {
              case vJ.ANIMATIONLOOPMODE_CYCLE:
              case vJ.ANIMATIONLOOPMODE_CONSTANT:
              case vJ.ANIMATIONLOOPMODE_YOYO:
                return JJ;
              case vJ.ANIMATIONLOOPMODE_RELATIVE:
              case vJ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return JJ.addInPlace((cJ.offsetValue || DJ).scale(cJ.repeatCount))
            }
            return JJ
          }
          case vJ.ANIMATIONTYPE_VECTOR3: {
            const JJ = jJ ? this.vector3InterpolateFunctionWithTangents(AJ, eJ.outTangent.scale(YJ), qJ, XJ.inTangent.scale(YJ), hJ) : this.vector3InterpolateFunction(AJ, qJ, hJ);
            switch (cJ.Mc) {
              case vJ.ANIMATIONLOOPMODE_CYCLE:
              case vJ.ANIMATIONLOOPMODE_CONSTANT:
              case vJ.ANIMATIONLOOPMODE_YOYO:
                return JJ;
              case vJ.ANIMATIONLOOPMODE_RELATIVE:
              case vJ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return JJ.add((cJ.offsetValue || sJ).scale(cJ.repeatCount))
            }
            break
          }
          case vJ.ANIMATIONTYPE_VECTOR2: {
            const JJ = jJ ? this.vector2InterpolateFunctionWithTangents(AJ, eJ.outTangent.scale(YJ), qJ, XJ.inTangent.scale(YJ), hJ) : this.vector2InterpolateFunction(AJ, qJ, hJ);
            switch (cJ.Mc) {
              case vJ.ANIMATIONLOOPMODE_CYCLE:
              case vJ.ANIMATIONLOOPMODE_CONSTANT:
              case vJ.ANIMATIONLOOPMODE_YOYO:
                return JJ;
              case vJ.ANIMATIONLOOPMODE_RELATIVE:
              case vJ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return JJ.add((cJ.offsetValue || nJ).scale(cJ.repeatCount))
            }
            break
          }
          case vJ.ANIMATIONTYPE_SIZE:
            switch (cJ.Mc) {
              case vJ.ANIMATIONLOOPMODE_CYCLE:
              case vJ.ANIMATIONLOOPMODE_CONSTANT:
              case vJ.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(AJ, qJ, hJ);
              case vJ.ANIMATIONLOOPMODE_RELATIVE:
              case vJ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(AJ, qJ, hJ).add((cJ.offsetValue || GJ).scale(cJ.repeatCount))
            }
            break;
          case vJ.ANIMATIONTYPE_COLOR3: {
            const JJ = jJ ? this.color3InterpolateFunctionWithTangents(AJ, eJ.outTangent.scale(YJ), qJ, XJ.inTangent.scale(YJ), hJ) : this.color3InterpolateFunction(AJ, qJ, hJ);
            switch (cJ.Mc) {
              case vJ.ANIMATIONLOOPMODE_CYCLE:
              case vJ.ANIMATIONLOOPMODE_CONSTANT:
              case vJ.ANIMATIONLOOPMODE_YOYO:
                return JJ;
              case vJ.ANIMATIONLOOPMODE_RELATIVE:
              case vJ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return JJ.add((cJ.offsetValue || fJ).scale(cJ.repeatCount))
            }
            break
          }
          case vJ.ANIMATIONTYPE_COLOR4: {
            const JJ = jJ ? this.color4InterpolateFunctionWithTangents(AJ, eJ.outTangent.scale(YJ), qJ, XJ.inTangent.scale(YJ), hJ) : this.color4InterpolateFunction(AJ, qJ, hJ);
            switch (cJ.Mc) {
              case vJ.ANIMATIONLOOPMODE_CYCLE:
              case vJ.ANIMATIONLOOPMODE_CONSTANT:
              case vJ.ANIMATIONLOOPMODE_YOYO:
                return JJ;
              case vJ.ANIMATIONLOOPMODE_RELATIVE:
              case vJ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return JJ.add((cJ.offsetValue || xJ).scale(cJ.repeatCount))
            }
            break
          }
          case vJ.ANIMATIONTYPE_MATRIX:
            switch (cJ.Mc) {
              case vJ.ANIMATIONLOOPMODE_CYCLE:
              case vJ.ANIMATIONLOOPMODE_CONSTANT:
              case vJ.ANIMATIONLOOPMODE_YOYO:
                return vJ.AllowMatricesInterpolation ? this.matrixInterpolateFunction(AJ, qJ, hJ, cJ.workValue) : AJ;
              case vJ.ANIMATIONLOOPMODE_RELATIVE:
              case vJ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return AJ
            }
        }
        return 0
      }
      matrixInterpolateFunction(JJ, cJ, ZJ, UJ) {
        return vJ.AllowMatrixDecomposeForInterpolation ? UJ ? (FJ.b.DecomposeLerpToRef(JJ, cJ, ZJ, UJ), UJ) : FJ.b.DecomposeLerp(JJ, cJ, ZJ) : UJ ? (FJ.b.LerpToRef(JJ, cJ, ZJ, UJ), UJ) : FJ.b.Lerp(JJ, cJ, ZJ)
      }
      clone() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cJ = new vJ(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.Mc);
        if (cJ.enableBlending = this.enableBlending, cJ.blendingSpeed = this.blendingSpeed, this._keys && cJ.setKeys(this._keys, !1, JJ), this._ranges) {
          cJ._ranges = {};
          for (const JJ in this._ranges) {
            const ZJ = this._ranges[JJ];
            ZJ && (cJ._ranges[JJ] = ZJ.clone())
          }
        }
        return cJ
      }
      setKeys(JJ) {
        let cJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = JJ;
        else if (this._keys = JJ.slice(0), cJ)
          for (let ZJ = 0; ZJ < this._keys.length; ZJ++) {
            const JJ = this._keys[ZJ];
            this._keys[ZJ] = {
              frame: JJ.frame,
              value: JJ.value.clone ? JJ.value.clone() : JJ.value,
              inTangent: JJ.inTangent && JJ.inTangent.clone ? JJ.inTangent.clone() : JJ.inTangent,
              outTangent: JJ.outTangent && JJ.outTangent.clone ? JJ.outTangent.clone() : JJ.outTangent,
              interpolation: JJ.interpolation,
              lockedTangent: JJ.lockedTangent,
              easingFunction: JJ.easingFunction
            }
          }
      }
      createKeyForFrame(JJ) {
        rJ.key = 0;
        const cJ = this._interpolate(JJ, rJ, !0);
        if (!cJ) return this._keys[rJ.key].frame === JJ ? rJ.key : rJ.key + 1;
        const ZJ = {
          frame: JJ,
          value: cJ.clone ? cJ.clone() : cJ
        };
        return this._keys.splice(rJ.key + 1, 0, ZJ), rJ.key + 1
      }
      serialize() {
        const JJ = {};
        JJ.name = this.name, JJ.property = this.targetProperty, JJ.framePerSecond = this.framePerSecond, JJ.dataType = this.dataType, JJ.loopBehavior = this.Mc, JJ.enableBlending = this.enableBlending, JJ.blendingSpeed = this.blendingSpeed;
        const cJ = this.dataType;
        JJ.keys = [];
        const ZJ = this.getKeys();
        for (let FJ = 0; FJ < ZJ.length; FJ++) {
          const UJ = ZJ[FJ],
            eJ = {};
          switch (eJ.frame = UJ.frame, cJ) {
            case vJ.ANIMATIONTYPE_FLOAT:
              eJ.values = [UJ.value], void 0 !== UJ.inTangent && eJ.values.push(UJ.inTangent), void 0 !== UJ.outTangent && (void 0 === UJ.inTangent && eJ.values.push(void 0), eJ.values.push(UJ.outTangent)), void 0 !== UJ.interpolation && (void 0 === UJ.inTangent && eJ.values.push(void 0), void 0 === UJ.outTangent && eJ.values.push(void 0), eJ.values.push(UJ.interpolation));
              break;
            case vJ.ANIMATIONTYPE_QUATERNION:
            case vJ.ANIMATIONTYPE_MATRIX:
            case vJ.ANIMATIONTYPE_VECTOR3:
            case vJ.ANIMATIONTYPE_COLOR3:
            case vJ.ANIMATIONTYPE_COLOR4:
              eJ.values = UJ.value.JFJ(), void 0 != UJ.inTangent && eJ.values.push(UJ.inTangent.JFJ()), void 0 != UJ.outTangent && (void 0 === UJ.inTangent && eJ.values.push(void 0), eJ.values.push(UJ.outTangent.JFJ())), void 0 !== UJ.interpolation && (void 0 === UJ.inTangent && eJ.values.push(void 0), void 0 === UJ.outTangent && eJ.values.push(void 0), eJ.values.push(UJ.interpolation))
          }
          JJ.keys.push(eJ)
        }
        JJ.ws = [];
        for (const FJ in this._ranges) {
          const cJ = this._ranges[FJ];
          if (!cJ) continue;
          const ZJ = {};
          ZJ.name = FJ, ZJ.from = cJ.from, ZJ.to = cJ.to, JJ.ws.push(ZJ)
        }
        return JJ
      }
      static _UniversalLerp(JJ, cJ, ZJ) {
        const FJ = JJ.constructor;
        return FJ.Lerp ? FJ.Lerp(JJ, cJ, ZJ) : FJ.Slerp ? FJ.Slerp(JJ, cJ, ZJ) : JJ.toFixed ? JJ * (1 - ZJ) + ZJ * cJ : cJ
      }
    }

    function mJ(JJ, cJ, ZJ) {
      let UJ;
      UJ = "object" === typeof cJ ? cJ : {
        referenceFrame: cJ ?? 0,
        range: ZJ,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let eJ = JJ;
      UJ.cloneOriginalAnimation && (eJ = JJ.clone(), eJ.name = UJ.clonedAnimationName || eJ.name);
      const XJ = eJ.getKeys();
      if (!XJ.length) return eJ;
      const AJ = UJ.referenceFrame && UJ.referenceFrame >= 0 ? UJ.referenceFrame : 0;
      let qJ = 0;
      const jJ = XJ[0];
      let YJ = XJ.length - 1;
      const hJ = XJ[YJ],
        DJ = {
          referenceValue: jJ.value,
          referencePosition: FJ.h.Pn[0],
          referenceQuaternion: FJ.h.Quaternion[0],
          referenceScaling: FJ.h.Pn[1],
          keyPosition: FJ.h.Pn[2],
          keyQuaternion: FJ.h.Quaternion[1],
          keyScaling: FJ.h.Pn[3]
        };
      let sJ = jJ.frame,
        nJ = hJ.frame;
      if (UJ.range) {
        const JJ = eJ.getRange(UJ.range);
        JJ && (sJ = JJ.from, nJ = JJ.to)
      } else sJ = UJ.fromFrame ?? sJ, nJ = UJ.toFrame ?? nJ;
      sJ !== jJ.frame && (qJ = eJ.createKeyForFrame(sJ)), nJ !== hJ.frame && (YJ = eJ.createKeyForFrame(nJ));
      const GJ = eJ.getKeys();
      if (1 === GJ.length) {
        const JJ = eJ._getKeyValue(GJ[0].value);
        DJ.referenceValue = JJ.clone ? JJ.clone() : JJ
      } else if (AJ <= jJ.frame) {
        const JJ = eJ._getKeyValue(jJ.value);
        DJ.referenceValue = JJ.clone ? JJ.clone() : JJ
      } else if (AJ >= hJ.frame) {
        const JJ = eJ._getKeyValue(hJ.value);
        DJ.referenceValue = JJ.clone ? JJ.clone() : JJ
      } else {
        rJ.key = 0;
        const JJ = eJ._interpolate(AJ, rJ);
        DJ.referenceValue = JJ.clone ? JJ.clone() : JJ
      }
      eJ.dataType === vJ.ANIMATIONTYPE_QUATERNION ? DJ.referenceValue.normalize().conjugateInPlace() : eJ.dataType === vJ.ANIMATIONTYPE_MATRIX && (DJ.referenceValue.decompose(DJ.referenceScaling, DJ.referenceQuaternion, DJ.referencePosition), DJ.referenceQuaternion.normalize().conjugateInPlace());
      let fJ = Number.MAX_VALUE;
      const xJ = UJ.clipKeys ? [] : null;
      for (let rJ = qJ; rJ <= YJ; rJ++) {
        let JJ = GJ[rJ];
        if ((xJ || UJ.cloneOriginalAnimation) && (JJ = {
            frame: JJ.frame,
            value: JJ.value.clone ? JJ.value.clone() : JJ.value,
            inTangent: JJ.inTangent,
            outTangent: JJ.outTangent,
            interpolation: JJ.interpolation,
            lockedTangent: JJ.lockedTangent,
            easingFunction: JJ.easingFunction
          }, xJ && (fJ === Number.MAX_VALUE && (fJ = JJ.frame), JJ.frame -= fJ, xJ.push(JJ))), !rJ || eJ.dataType === vJ.ANIMATIONTYPE_FLOAT || JJ.value !== jJ.value) switch (eJ.dataType) {
          case vJ.ANIMATIONTYPE_MATRIX:
            JJ.value.decompose(DJ.keyScaling, DJ.keyQuaternion, DJ.keyPosition), DJ.keyPosition.xFJ(DJ.referencePosition), DJ.keyScaling.divideInPlace(DJ.referenceScaling), DJ.referenceQuaternion.multiplyToRef(DJ.keyQuaternion, DJ.keyQuaternion), FJ.b.ComposeToRef(DJ.keyScaling, DJ.keyQuaternion, DJ.keyPosition, JJ.value);
            break;
          case vJ.ANIMATIONTYPE_QUATERNION:
            DJ.referenceValue.multiplyToRef(JJ.value, JJ.value);
            break;
          case vJ.ANIMATIONTYPE_VECTOR2:
          case vJ.ANIMATIONTYPE_VECTOR3:
          case vJ.ANIMATIONTYPE_COLOR3:
          case vJ.ANIMATIONTYPE_COLOR4:
            JJ.value.subtractToRef(DJ.referenceValue, JJ.value);
            break;
          case vJ.ANIMATIONTYPE_SIZE:
            JJ.value.width -= DJ.referenceValue.width, JJ.value.height -= DJ.referenceValue.height;
            break;
          default:
            JJ.value -= DJ.referenceValue
        }
      }
      return xJ && eJ.setKeys(xJ, !0), eJ
    }

    function QJ(JJ, cJ, ZJ, FJ) {
      const UJ = new vJ(JJ + "Animation", JJ, ZJ, cJ, vJ.ANIMATIONLOOPMODE_CONSTANT);
      return UJ.setEasingFunction(FJ), UJ
    }

    function EJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ) {
      const hJ = vJ._PrepareAnimation(JJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ);
      return hJ ? (cJ.Qy && (YJ = cJ.Qy()), YJ ? YJ.beginDirectAnimation(cJ, [hJ], 0, UJ, hJ.Mc !== vJ.ANIMATIONLOOPMODE_CONSTANT, 1, jJ) : null) : null
    }

    function VJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ) {
      const hJ = vJ._PrepareAnimation(JJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ);
      if (!hJ) return null;
      return cJ.Qy().beginDirectHierarchyAnimation(cJ, ZJ, [hJ], 0, eJ, 1 === hJ.Mc, 1, YJ)
    }

    function KJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ) {
      const YJ = vJ._PrepareAnimation(JJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ);
      return YJ ? (cJ.animations.push(YJ), cJ.Qy().beginAnimation(cJ, 0, UJ, 1 === YJ.Mc, 1, jJ)) : null
    }

    function yJ(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
      let AJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        qJ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        jJ = arguments.length > 9 ? arguments[9] : void 0;
      if (XJ <= 0) return ZJ[JJ] = cJ, AJ && AJ(), null;
      const YJ = UJ * (XJ / 1e3);
      eJ.setKeys(jJ ?? [{
        frame: 0,
        value: ZJ[JJ].clone ? ZJ[JJ].clone() : ZJ[JJ]
      }, {
        frame: YJ,
        value: cJ
      }]), ZJ.animations || (ZJ.animations = []), ZJ.animations.push(eJ);
      return FJ.beginAnimation(ZJ, 0, YJ, !1, 1, AJ ?? void 0, void 0, qJ)
    }

    function SJ(JJ, cJ) {
      YJ.c.AppendSerializedAnimations(JJ, cJ)
    }

    function IJ(JJ) {
      const cJ = new vJ(JJ.name, JJ.property, JJ.framePerSecond, JJ.dataType, JJ.loopBehavior),
        ZJ = JJ.dataType,
        eJ = [];
      let XJ, AJ;
      for (JJ.enableBlending && (cJ.enableBlending = JJ.enableBlending), JJ.blendingSpeed && (cJ.blendingSpeed = JJ.blendingSpeed), AJ = 0; AJ < JJ.keys.length; AJ++) {
        const cJ = JJ.keys[AJ];
        let qJ, jJ, YJ;
        switch (ZJ) {
          case vJ.ANIMATIONTYPE_FLOAT:
            XJ = cJ.values[0], cJ.values.length >= 2 && (qJ = cJ.values[1]), cJ.values.length >= 3 && (jJ = cJ.values[2]), cJ.values.length >= 4 && (YJ = cJ.values[3]);
            break;
          case vJ.ANIMATIONTYPE_QUATERNION:
            if (XJ = FJ.e.FromArray(cJ.values), cJ.values.length >= 8) {
              const JJ = FJ.e.FromArray(cJ.values.slice(4, 8));
              JJ.equals(FJ.e.Zero()) || (qJ = JJ)
            }
            if (cJ.values.length >= 12) {
              const JJ = FJ.e.FromArray(cJ.values.slice(8, 12));
              JJ.equals(FJ.e.Zero()) || (jJ = JJ)
            }
            cJ.values.length >= 13 && (YJ = cJ.values[12]);
            break;
          case vJ.ANIMATIONTYPE_MATRIX:
            XJ = FJ.b.FromArray(cJ.values), cJ.values.length >= 17 && (YJ = cJ.values[16]);
            break;
          case vJ.ANIMATIONTYPE_COLOR3:
            XJ = UJ.e.FromArray(cJ.values), cJ.values[3] && (qJ = UJ.e.FromArray(cJ.values[3])), cJ.values[4] && (jJ = UJ.e.FromArray(cJ.values[4])), cJ.values[5] && (YJ = cJ.values[5]);
            break;
          case vJ.ANIMATIONTYPE_COLOR4:
            XJ = UJ.f.FromArray(cJ.values), cJ.values[4] && (qJ = UJ.f.FromArray(cJ.values[4])), cJ.values[5] && (jJ = UJ.f.FromArray(cJ.values[5])), cJ.values[6] && (YJ = cJ.values[6]);
            break;
          case vJ.ANIMATIONTYPE_VECTOR3:
          default:
            XJ = FJ.j.FromArray(cJ.values), cJ.values[3] && (qJ = FJ.j.FromArray(cJ.values[3])), cJ.values[4] && (jJ = FJ.j.FromArray(cJ.values[4])), cJ.values[5] && (YJ = cJ.values[5])
        }
        const hJ = {};
        hJ.frame = cJ.frame, hJ.value = XJ, void 0 != qJ && (hJ.inTangent = qJ), void 0 != jJ && (hJ.outTangent = jJ), void 0 != YJ && (hJ.interpolation = YJ), eJ.push(hJ)
      }
      if (cJ.setKeys(eJ), JJ.ws)
        for (AJ = 0; AJ < JJ.ws.length; AJ++) XJ = JJ.ws[AJ], cJ.createRange(XJ.name, XJ.from, XJ.to);
      return cJ
    }
    async function MJ(JJ, cJ) {
      return await new Promise(((ZJ, FJ) => {
        const UJ = new jJ.d;
        UJ.addEventListener("readystatechange", (() => {
          if (4 == UJ.readyState)
            if (200 == UJ.status) {
              let cJ = JSON.parse(UJ.responseText);
              if (cJ.animations && (cJ = cJ.animations), cJ.length) {
                const JJ = [];
                for (const ZJ of cJ) JJ.push(IJ(ZJ));
                ZJ(JJ)
              } else {
                const FJ = IJ(cJ);
                JJ && (FJ.name = JJ), ZJ(FJ)
              }
            } else FJ("Unable to load the animation")
        })), UJ.open("GET", cJ), UJ.send()
      }))
    }
    async function bJ(JJ) {
      const cJ = this?.SnippetUrl ?? vJ.SnippetUrl;
      return await new Promise(((ZJ, FJ) => {
        const UJ = new jJ.d;
        UJ.addEventListener("readystatechange", (() => {
          if (4 == UJ.readyState)
            if (200 == UJ.status) {
              const cJ = JSON.parse(JSON.parse(UJ.responseText).jsonPayload);
              if (cJ.animations) {
                const FJ = JSON.parse(cJ.animations),
                  UJ = [];
                for (const cJ of FJ.animations) {
                  const ZJ = IJ(cJ);
                  ZJ.snippetId = JJ, UJ.push(ZJ)
                }
                ZJ(UJ)
              } else {
                const FJ = IJ(JSON.parse(cJ.animation));
                FJ.snippetId = JJ, ZJ(FJ)
              }
            } else FJ("Unable to load the snippet " + JJ)
        })), UJ.open("GET", cJ + "/" + JJ.replace(/#/g, "/")), UJ.send()
      }))
    }
    vJ._UniqueIdGenerator = 0, vJ.AllowMatricesInterpolation = !1, vJ.AllowMatrixDecomposeForInterpolation = !0, vJ.InheritOriginalValueFromActiveAnimations = !1, vJ.SnippetUrl = "https://snippet.babylonjs.com", vJ.ANIMATIONTYPE_FLOAT = 0, vJ.ANIMATIONTYPE_VECTOR3 = 1, vJ.ANIMATIONTYPE_QUATERNION = 2, vJ.ANIMATIONTYPE_MATRIX = 3, vJ.ANIMATIONTYPE_COLOR3 = 4, vJ.ANIMATIONTYPE_COLOR4 = 7, vJ.ANIMATIONTYPE_VECTOR2 = 5, vJ.ANIMATIONTYPE_SIZE = 6, vJ.ANIMATIONLOOPMODE_RELATIVE = 0, vJ.ANIMATIONLOOPMODE_CYCLE = 1, vJ.ANIMATIONLOOPMODE_CONSTANT = 2, vJ.ANIMATIONLOOPMODE_YOYO = 4, vJ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const wJ = bJ;
    let WJ = !1;

    function gJ() {
      WJ || (WJ = !0, vJ.Parse = IJ, vJ.ParseFromFileAsync = MJ, vJ.ParseFromSnippetAsync = bJ, vJ.CreateFromSnippetAsync = wJ, vJ.CreateAnimation = QJ, vJ.CreateAndStartAnimation = EJ, vJ.CreateAndStartHierarchyAnimation = VJ, vJ.CreateMergeAndStartAnimation = KJ, vJ.MakeAnimationAdditive = mJ, vJ.TransitionTo = yJ, vJ.AppendSerializedAnimations = SJ, (0, hJ.f)("BABYLON.Animation", vJ), AJ.b._AnimationRangeFactory = (JJ, cJ, ZJ) => new XJ.e(JJ, cJ, ZJ))
    }
  },
  39965: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ
    });
    class FJ {
      constructor(JJ, cJ, ZJ) {
        this.name = JJ, this.from = cJ, this.to = ZJ
      }
      clone() {
        return new FJ(this.name, this.from, this.to)
      }
    }
  },
  40018: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ.d,
      e: () => FJ.n
    });
    var FJ = ZJ(38918);
    (0, FJ.h)()
  },
  40004: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => FJ.i
    });
    var FJ = ZJ(39243);
    (0, FJ.e)()
  },
  39980: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ.b
    });
    var FJ = ZJ(39227);
    (0, FJ.e)()
  },
  40024: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => FJ.d
    });
    var FJ = ZJ(39159);
    (0, FJ.e)()
  },
  39971: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ.d
    });
    var FJ = ZJ(39210);
    (0, FJ.c)()
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);