export const id = 311;
export const ids = [311];
export const modules = {
  42580: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => sW,
      g: () => dW,
      i: () => jW,
      l: () => UW,
      o: () => xW,
      r: () => bW,
      v: () => AW,
      y: () => lW
    });
    var mW = OW(38241),
      EW = OW(38372),
      NW = OW(38285),
      PW = OW(42586),
      LW = OW(41732),
      cW = OW(41531),
      wW = OW(41564),
      tW = OW(41538),
      ZW = OW(38299);
    const xW = Object.freeze(new mW.g(0, 0, 0, 0)),
      lW = Object.freeze(mW.q.Zero()),
      AW = Object.freeze(mW.m.Zero()),
      bW = Object.freeze(cW.d.Zero()),
      jW = Object.freeze(EW.b.Black()),
      UW = Object.freeze(new EW.d(0, 0, 0, 0)),
      kW = {
        key: 0,
        repeatCount: 0,
        sO: 2
      };
    class sW {
      static _PrepareAnimation(WW, iW, OW, NW, PW, LW, wW, tW) {
        let ZW;
        if (!isNaN(parseFloat(PW)) && isFinite(PW) ? ZW = sW.ANIMATIONTYPE_FLOAT : PW instanceof mW.g ? ZW = sW.ANIMATIONTYPE_QUATERNION : PW instanceof mW.q ? ZW = sW.ANIMATIONTYPE_VECTOR3 : PW instanceof mW.m ? ZW = sW.ANIMATIONTYPE_VECTOR2 : PW instanceof EW.b ? ZW = sW.ANIMATIONTYPE_COLOR3 : PW instanceof EW.d ? ZW = sW.ANIMATIONTYPE_COLOR4 : PW instanceof cW.d && (ZW = sW.ANIMATIONTYPE_SIZE), void 0 == ZW) return null;
        const xW = new sW(WW, iW, OW, ZW, wW),
          lW = [{
            frame: 0,
            value: PW
          }, {
            frame: NW,
            value: LW
          }];
        return xW.setKeys(lW), void 0 !== tW && xW.setEasingFunction(tW), xW
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const WW of this._runtimeAnimations)
          if (!WW.isStopped()) return !0;
        return !1
      }
      constructor(WW, iW, OW, mW, EW, NW) {
        this.name = WW, this.targetProperty = iW, this.framePerSecond = OW, this.dataType = mW, this.sO = EW, this.enableBlending = NW, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = iW.split("."), this.dataType = mW, this.sO = void 0 === EW ? sW.ANIMATIONLOOPMODE_CYCLE : EW, this.uniqueId = sW._UniqueIdGenerator++
      }
      toString(WW) {
        let iW = "Name: " + this.name + ", property: " + this.targetProperty;
        if (iW += ", datatype: " + ["Float", "fA", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], iW += ", nKeys: " + (this._keys ? this._keys.length : "none"), iW += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), WW) {
          iW += ", Ranges: {";
          let WW = !0;
          for (const OW in this._ranges) WW || (iW += ", "), WW = !1, iW += OW;
          iW += "}"
        }
        return iW
      }
      addEvent(WW) {
        this._events.push(WW), this._events.sort(((WW, iW) => WW.frame - iW.frame))
      }
      removeEvents(WW) {
        for (let iW = 0; iW < this._events.length; iW++) this._events[iW].frame === WW && (this._events.splice(iW, 1), iW--)
      }
      getEvents() {
        return this._events
      }
      createRange(WW, iW, OW) {
        this._ranges[WW] || (this._ranges[WW] = new PW.c(WW, iW, OW))
      }
      deleteRange(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const OW = this._ranges[WW];
        if (OW) {
          if (iW) {
            const WW = OW.from,
              iW = OW.to;
            for (let OW = this._keys.length - 1; OW >= 0; OW--) this._keys[OW].frame >= WW && this._keys[OW].frame <= iW && this._keys.splice(OW, 1)
          }
          this._ranges[WW] = null
        }
      }
      getRange(WW) {
        return this._ranges[WW]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let WW = 0;
        for (let iW = 0, OW = this._keys.length; iW < OW; iW++) WW < this._keys[iW].frame && (WW = this._keys[iW].frame);
        return WW
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(WW) {
        this._easingFunction = WW
      }
      floatInterpolateFunction(WW, iW, OW) {
        return (0, NW.Lerp)(WW, iW, OW)
      }
      floatInterpolateFunctionWithTangents(WW, iW, OW, mW, EW) {
        return (0, NW.Hermite)(WW, iW, OW, mW, EW)
      }
      quaternionInterpolateFunction(WW, iW, OW) {
        return mW.g.Slerp(WW, iW, OW)
      }
      quaternionInterpolateFunctionWithTangents(WW, iW, OW, EW, NW) {
        return mW.g.Hermite(WW, iW, OW, EW, NW).normalize()
      }
      vector3InterpolateFunction(WW, iW, OW) {
        return mW.q.Lerp(WW, iW, OW)
      }
      vector3InterpolateFunctionWithTangents(WW, iW, OW, EW, NW) {
        return mW.q.Hermite(WW, iW, OW, EW, NW)
      }
      vector2InterpolateFunction(WW, iW, OW) {
        return mW.m.Lerp(WW, iW, OW)
      }
      vector2InterpolateFunctionWithTangents(WW, iW, OW, EW, NW) {
        return mW.m.Hermite(WW, iW, OW, EW, NW)
      }
      sizeInterpolateFunction(WW, iW, OW) {
        return cW.d.Lerp(WW, iW, OW)
      }
      color3InterpolateFunction(WW, iW, OW) {
        return EW.b.Lerp(WW, iW, OW)
      }
      color3InterpolateFunctionWithTangents(WW, iW, OW, mW, NW) {
        return EW.b.Hermite(WW, iW, OW, mW, NW)
      }
      color4InterpolateFunction(WW, iW, OW) {
        return EW.d.Lerp(WW, iW, OW)
      }
      color4InterpolateFunctionWithTangents(WW, iW, OW, mW, NW) {
        return EW.d.Hermite(WW, iW, OW, mW, NW)
      }
      _getKeyValue(WW) {
        return "function" === typeof WW ? WW() : WW
      }
      evaluate(WW) {
        return kW.key = 0, this._interpolate(WW, kW)
      }
      _interpolate(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (iW.sO === sW.ANIMATIONLOOPMODE_CONSTANT && iW.repeatCount > 0) return iW.highLimitValue.clone ? iW.highLimitValue.clone() : iW.highLimitValue;
        const mW = this._keys;
        let EW;
        if (this._coreAnimation) EW = this._coreAnimation._key;
        else {
          const NW = mW.length;
          for (EW = iW.key; EW >= 0 && WW < mW[EW].frame;) --EW;
          for (; EW + 1 <= NW - 1 && WW >= mW[EW + 1].frame;) ++EW;
          if (iW.key = EW, EW < 0) return OW ? void 0 : this._getKeyValue(mW[0].value);
          if (EW + 1 > NW - 1) return OW ? void 0 : this._getKeyValue(mW[NW - 1].value);
          this._key = EW
        }
        const NW = mW[EW],
          PW = mW[EW + 1];
        if (OW && (WW === NW.frame || WW === PW.frame)) return;
        const LW = this._getKeyValue(NW.value),
          cW = this._getKeyValue(PW.value);
        if (1 === NW.interpolation) return PW.frame > WW ? LW : cW;
        const wW = void 0 !== NW.outTangent && void 0 !== PW.inTangent,
          tW = PW.frame - NW.frame;
        let ZW = (WW - NW.frame) / tW;
        const kW = NW.easingFunction || this.getEasingFunction();
        switch (kW && (ZW = kW.ease(ZW)), this.dataType) {
          case sW.ANIMATIONTYPE_FLOAT: {
            const WW = wW ? this.floatInterpolateFunctionWithTangents(LW, NW.outTangent * tW, cW, PW.inTangent * tW, ZW) : this.floatInterpolateFunction(LW, cW, ZW);
            switch (iW.sO) {
              case sW.ANIMATIONLOOPMODE_CYCLE:
              case sW.ANIMATIONLOOPMODE_CONSTANT:
              case sW.ANIMATIONLOOPMODE_YOYO:
                return WW;
              case sW.ANIMATIONLOOPMODE_RELATIVE:
              case sW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (iW.offsetValue ?? 0) * iW.repeatCount + WW
            }
            break
          }
          case sW.ANIMATIONTYPE_QUATERNION: {
            const WW = wW ? this.quaternionInterpolateFunctionWithTangents(LW, NW.outTangent.scale(tW), cW, PW.inTangent.scale(tW), ZW) : this.quaternionInterpolateFunction(LW, cW, ZW);
            switch (iW.sO) {
              case sW.ANIMATIONLOOPMODE_CYCLE:
              case sW.ANIMATIONLOOPMODE_CONSTANT:
              case sW.ANIMATIONLOOPMODE_YOYO:
                return WW;
              case sW.ANIMATIONLOOPMODE_RELATIVE:
              case sW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return WW.addInPlace((iW.offsetValue || xW).scale(iW.repeatCount))
            }
            return WW
          }
          case sW.ANIMATIONTYPE_VECTOR3: {
            const WW = wW ? this.vector3InterpolateFunctionWithTangents(LW, NW.outTangent.scale(tW), cW, PW.inTangent.scale(tW), ZW) : this.vector3InterpolateFunction(LW, cW, ZW);
            switch (iW.sO) {
              case sW.ANIMATIONLOOPMODE_CYCLE:
              case sW.ANIMATIONLOOPMODE_CONSTANT:
              case sW.ANIMATIONLOOPMODE_YOYO:
                return WW;
              case sW.ANIMATIONLOOPMODE_RELATIVE:
              case sW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return WW.add((iW.offsetValue || lW).scale(iW.repeatCount))
            }
            break
          }
          case sW.ANIMATIONTYPE_VECTOR2: {
            const WW = wW ? this.vector2InterpolateFunctionWithTangents(LW, NW.outTangent.scale(tW), cW, PW.inTangent.scale(tW), ZW) : this.vector2InterpolateFunction(LW, cW, ZW);
            switch (iW.sO) {
              case sW.ANIMATIONLOOPMODE_CYCLE:
              case sW.ANIMATIONLOOPMODE_CONSTANT:
              case sW.ANIMATIONLOOPMODE_YOYO:
                return WW;
              case sW.ANIMATIONLOOPMODE_RELATIVE:
              case sW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return WW.add((iW.offsetValue || AW).scale(iW.repeatCount))
            }
            break
          }
          case sW.ANIMATIONTYPE_SIZE:
            switch (iW.sO) {
              case sW.ANIMATIONLOOPMODE_CYCLE:
              case sW.ANIMATIONLOOPMODE_CONSTANT:
              case sW.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(LW, cW, ZW);
              case sW.ANIMATIONLOOPMODE_RELATIVE:
              case sW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(LW, cW, ZW).add((iW.offsetValue || bW).scale(iW.repeatCount))
            }
            break;
          case sW.ANIMATIONTYPE_COLOR3: {
            const WW = wW ? this.color3InterpolateFunctionWithTangents(LW, NW.outTangent.scale(tW), cW, PW.inTangent.scale(tW), ZW) : this.color3InterpolateFunction(LW, cW, ZW);
            switch (iW.sO) {
              case sW.ANIMATIONLOOPMODE_CYCLE:
              case sW.ANIMATIONLOOPMODE_CONSTANT:
              case sW.ANIMATIONLOOPMODE_YOYO:
                return WW;
              case sW.ANIMATIONLOOPMODE_RELATIVE:
              case sW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return WW.add((iW.offsetValue || jW).scale(iW.repeatCount))
            }
            break
          }
          case sW.ANIMATIONTYPE_COLOR4: {
            const WW = wW ? this.color4InterpolateFunctionWithTangents(LW, NW.outTangent.scale(tW), cW, PW.inTangent.scale(tW), ZW) : this.color4InterpolateFunction(LW, cW, ZW);
            switch (iW.sO) {
              case sW.ANIMATIONLOOPMODE_CYCLE:
              case sW.ANIMATIONLOOPMODE_CONSTANT:
              case sW.ANIMATIONLOOPMODE_YOYO:
                return WW;
              case sW.ANIMATIONLOOPMODE_RELATIVE:
              case sW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return WW.add((iW.offsetValue || UW).scale(iW.repeatCount))
            }
            break
          }
          case sW.ANIMATIONTYPE_MATRIX:
            switch (iW.sO) {
              case sW.ANIMATIONLOOPMODE_CYCLE:
              case sW.ANIMATIONLOOPMODE_CONSTANT:
              case sW.ANIMATIONLOOPMODE_YOYO:
                return sW.AllowMatricesInterpolation ? this.matrixInterpolateFunction(LW, cW, ZW, iW.workValue) : LW;
              case sW.ANIMATIONLOOPMODE_RELATIVE:
              case sW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return LW
            }
        }
        return 0
      }
      matrixInterpolateFunction(WW, iW, OW, EW) {
        return sW.AllowMatrixDecomposeForInterpolation ? EW ? (mW.d.DecomposeLerpToRef(WW, iW, OW, EW), EW) : mW.d.DecomposeLerp(WW, iW, OW) : EW ? (mW.d.LerpToRef(WW, iW, OW, EW), EW) : mW.d.Lerp(WW, iW, OW)
      }
      clone() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const iW = new sW(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.sO);
        if (iW.enableBlending = this.enableBlending, iW.blendingSpeed = this.blendingSpeed, this._keys && iW.setKeys(this._keys, !1, WW), this._ranges) {
          iW._ranges = {};
          for (const WW in this._ranges) {
            const OW = this._ranges[WW];
            OW && (iW._ranges[WW] = OW.clone())
          }
        }
        return iW
      }
      setKeys(WW) {
        let iW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = WW;
        else if (this._keys = WW.slice(0), iW)
          for (let OW = 0; OW < this._keys.length; OW++) {
            const WW = this._keys[OW];
            this._keys[OW] = {
              frame: WW.frame,
              value: WW.value.clone ? WW.value.clone() : WW.value,
              inTangent: WW.inTangent && WW.inTangent.clone ? WW.inTangent.clone() : WW.inTangent,
              outTangent: WW.outTangent && WW.outTangent.clone ? WW.outTangent.clone() : WW.outTangent,
              interpolation: WW.interpolation,
              lockedTangent: WW.lockedTangent,
              easingFunction: WW.easingFunction
            }
          }
      }
      createKeyForFrame(WW) {
        kW.key = 0;
        const iW = this._interpolate(WW, kW, !0);
        if (!iW) return this._keys[kW.key].frame === WW ? kW.key : kW.key + 1;
        const OW = {
          frame: WW,
          value: iW.clone ? iW.clone() : iW
        };
        return this._keys.splice(kW.key + 1, 0, OW), kW.key + 1
      }
      serialize() {
        const WW = {};
        WW.name = this.name, WW.property = this.targetProperty, WW.framePerSecond = this.framePerSecond, WW.dataType = this.dataType, WW.loopBehavior = this.sO, WW.enableBlending = this.enableBlending, WW.blendingSpeed = this.blendingSpeed;
        const iW = this.dataType;
        WW.keys = [];
        const OW = this.getKeys();
        for (let mW = 0; mW < OW.length; mW++) {
          const EW = OW[mW],
            NW = {};
          switch (NW.frame = EW.frame, iW) {
            case sW.ANIMATIONTYPE_FLOAT:
              NW.values = [EW.value], void 0 !== EW.inTangent && NW.values.push(EW.inTangent), void 0 !== EW.outTangent && (void 0 === EW.inTangent && NW.values.push(void 0), NW.values.push(EW.outTangent)), void 0 !== EW.interpolation && (void 0 === EW.inTangent && NW.values.push(void 0), void 0 === EW.outTangent && NW.values.push(void 0), NW.values.push(EW.interpolation));
              break;
            case sW.ANIMATIONTYPE_QUATERNION:
            case sW.ANIMATIONTYPE_MATRIX:
            case sW.ANIMATIONTYPE_VECTOR3:
            case sW.ANIMATIONTYPE_COLOR3:
            case sW.ANIMATIONTYPE_COLOR4:
              NW.values = EW.value.wEW(), void 0 != EW.inTangent && NW.values.push(EW.inTangent.wEW()), void 0 != EW.outTangent && (void 0 === EW.inTangent && NW.values.push(void 0), NW.values.push(EW.outTangent.wEW())), void 0 !== EW.interpolation && (void 0 === EW.inTangent && NW.values.push(void 0), void 0 === EW.outTangent && NW.values.push(void 0), NW.values.push(EW.interpolation))
          }
          WW.keys.push(NW)
        }
        WW.kj = [];
        for (const mW in this._ranges) {
          const iW = this._ranges[mW];
          if (!iW) continue;
          const OW = {};
          OW.name = mW, OW.from = iW.from, OW.to = iW.to, WW.kj.push(OW)
        }
        return WW
      }
      static _UniversalLerp(WW, iW, OW) {
        const mW = WW.constructor;
        return mW.Lerp ? mW.Lerp(WW, iW, OW) : mW.Slerp ? mW.Slerp(WW, iW, OW) : WW.toFixed ? WW * (1 - OW) + OW * iW : iW
      }
    }

    function MW(WW, iW, OW) {
      let EW;
      EW = "object" === typeof iW ? iW : {
        referenceFrame: iW ?? 0,
        range: OW,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let NW = WW;
      EW.cloneOriginalAnimation && (NW = WW.clone(), NW.name = EW.clonedAnimationName || NW.name);
      const PW = NW.getKeys();
      if (!PW.length) return NW;
      const LW = EW.referenceFrame && EW.referenceFrame >= 0 ? EW.referenceFrame : 0;
      let cW = 0;
      const wW = PW[0];
      let tW = PW.length - 1;
      const ZW = PW[tW],
        xW = {
          referenceValue: wW.value,
          referencePosition: mW.l.fA[0],
          referenceQuaternion: mW.l.Quaternion[0],
          referenceScaling: mW.l.fA[1],
          keyPosition: mW.l.fA[2],
          keyQuaternion: mW.l.Quaternion[1],
          keyScaling: mW.l.fA[3]
        };
      let lW = wW.frame,
        AW = ZW.frame;
      if (EW.range) {
        const WW = NW.getRange(EW.range);
        WW && (lW = WW.from, AW = WW.to)
      } else lW = EW.fromFrame ?? lW, AW = EW.toFrame ?? AW;
      lW !== wW.frame && (cW = NW.createKeyForFrame(lW)), AW !== ZW.frame && (tW = NW.createKeyForFrame(AW));
      const bW = NW.getKeys();
      if (1 === bW.length) {
        const WW = NW._getKeyValue(bW[0].value);
        xW.referenceValue = WW.clone ? WW.clone() : WW
      } else if (LW <= wW.frame) {
        const WW = NW._getKeyValue(wW.value);
        xW.referenceValue = WW.clone ? WW.clone() : WW
      } else if (LW >= ZW.frame) {
        const WW = NW._getKeyValue(ZW.value);
        xW.referenceValue = WW.clone ? WW.clone() : WW
      } else {
        kW.key = 0;
        const WW = NW._interpolate(LW, kW);
        xW.referenceValue = WW.clone ? WW.clone() : WW
      }
      NW.dataType === sW.ANIMATIONTYPE_QUATERNION ? xW.referenceValue.normalize().conjugateInPlace() : NW.dataType === sW.ANIMATIONTYPE_MATRIX && (xW.referenceValue.decompose(xW.referenceScaling, xW.referenceQuaternion, xW.referencePosition), xW.referenceQuaternion.normalize().conjugateInPlace());
      let jW = Number.MAX_VALUE;
      const UW = EW.clipKeys ? [] : null;
      for (let kW = cW; kW <= tW; kW++) {
        let WW = bW[kW];
        if ((UW || EW.cloneOriginalAnimation) && (WW = {
            frame: WW.frame,
            value: WW.value.clone ? WW.value.clone() : WW.value,
            inTangent: WW.inTangent,
            outTangent: WW.outTangent,
            interpolation: WW.interpolation,
            lockedTangent: WW.lockedTangent,
            easingFunction: WW.easingFunction
          }, UW && (jW === Number.MAX_VALUE && (jW = WW.frame), WW.frame -= jW, UW.push(WW))), !kW || NW.dataType === sW.ANIMATIONTYPE_FLOAT || WW.value !== wW.value) switch (NW.dataType) {
          case sW.ANIMATIONTYPE_MATRIX:
            WW.value.decompose(xW.keyScaling, xW.keyQuaternion, xW.keyPosition), xW.keyPosition.yEW(xW.referencePosition), xW.keyScaling.divideInPlace(xW.referenceScaling), xW.referenceQuaternion.multiplyToRef(xW.keyQuaternion, xW.keyQuaternion), mW.d.ComposeToRef(xW.keyScaling, xW.keyQuaternion, xW.keyPosition, WW.value);
            break;
          case sW.ANIMATIONTYPE_QUATERNION:
            xW.referenceValue.multiplyToRef(WW.value, WW.value);
            break;
          case sW.ANIMATIONTYPE_VECTOR2:
          case sW.ANIMATIONTYPE_VECTOR3:
          case sW.ANIMATIONTYPE_COLOR3:
          case sW.ANIMATIONTYPE_COLOR4:
            WW.value.subtractToRef(xW.referenceValue, WW.value);
            break;
          case sW.ANIMATIONTYPE_SIZE:
            WW.value.width -= xW.referenceValue.width, WW.value.height -= xW.referenceValue.height;
            break;
          default:
            WW.value -= xW.referenceValue
        }
      }
      return UW && NW.setKeys(UW, !0), NW
    }

    function KW(WW, iW, OW, mW) {
      const EW = new sW(WW + "Animation", WW, OW, iW, sW.ANIMATIONLOOPMODE_CONSTANT);
      return EW.setEasingFunction(mW), EW
    }

    function SW(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
      const ZW = sW._PrepareAnimation(WW, OW, mW, EW, NW, PW, LW, cW);
      return ZW ? (iW.bD && (tW = iW.bD()), tW ? tW.beginDirectAnimation(iW, [ZW], 0, EW, ZW.sO !== sW.ANIMATIONLOOPMODE_CONSTANT, 1, wW) : null) : null
    }

    function YW(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
      const ZW = sW._PrepareAnimation(WW, mW, EW, NW, PW, LW, cW, wW);
      if (!ZW) return null;
      return iW.bD().beginDirectHierarchyAnimation(iW, OW, [ZW], 0, NW, 1 === ZW.sO, 1, tW)
    }

    function yW(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) {
      const tW = sW._PrepareAnimation(WW, OW, mW, EW, NW, PW, LW, cW);
      return tW ? (iW.animations.push(tW), iW.bD().beginAnimation(iW, 0, EW, 1 === tW.sO, 1, wW)) : null
    }

    function TW(WW, iW, OW, mW, EW, NW, PW) {
      let LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        cW = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        wW = arguments.length > 9 ? arguments[9] : void 0;
      if (PW <= 0) return OW[WW] = iW, LW && LW(), null;
      const tW = EW * (PW / 1e3);
      NW.setKeys(wW ?? [{
        frame: 0,
        value: OW[WW].clone ? OW[WW].clone() : OW[WW]
      }, {
        frame: tW,
        value: iW
      }]), OW.animations || (OW.animations = []), OW.animations.push(NW);
      return mW.beginAnimation(OW, 0, tW, !1, 1, LW ?? void 0, void 0, cW)
    }

    function JW(WW, iW) {
      tW.d.AppendSerializedAnimations(WW, iW)
    }

    function hW(WW) {
      const iW = new sW(WW.name, WW.property, WW.framePerSecond, WW.dataType, WW.loopBehavior),
        OW = WW.dataType,
        NW = [];
      let PW, LW;
      for (WW.enableBlending && (iW.enableBlending = WW.enableBlending), WW.blendingSpeed && (iW.blendingSpeed = WW.blendingSpeed), LW = 0; LW < WW.keys.length; LW++) {
        const iW = WW.keys[LW];
        let cW, wW, tW;
        switch (OW) {
          case sW.ANIMATIONTYPE_FLOAT:
            PW = iW.values[0], iW.values.length >= 2 && (cW = iW.values[1]), iW.values.length >= 3 && (wW = iW.values[2]), iW.values.length >= 4 && (tW = iW.values[3]);
            break;
          case sW.ANIMATIONTYPE_QUATERNION:
            if (PW = mW.g.FromArray(iW.values), iW.values.length >= 8) {
              const WW = mW.g.FromArray(iW.values.slice(4, 8));
              WW.equals(mW.g.Zero()) || (cW = WW)
            }
            if (iW.values.length >= 12) {
              const WW = mW.g.FromArray(iW.values.slice(8, 12));
              WW.equals(mW.g.Zero()) || (wW = WW)
            }
            iW.values.length >= 13 && (tW = iW.values[12]);
            break;
          case sW.ANIMATIONTYPE_MATRIX:
            PW = mW.d.FromArray(iW.values), iW.values.length >= 17 && (tW = iW.values[16]);
            break;
          case sW.ANIMATIONTYPE_COLOR3:
            PW = EW.b.FromArray(iW.values), iW.values[3] && (cW = EW.b.FromArray(iW.values[3])), iW.values[4] && (wW = EW.b.FromArray(iW.values[4])), iW.values[5] && (tW = iW.values[5]);
            break;
          case sW.ANIMATIONTYPE_COLOR4:
            PW = EW.d.FromArray(iW.values), iW.values[4] && (cW = EW.d.FromArray(iW.values[4])), iW.values[5] && (wW = EW.d.FromArray(iW.values[5])), iW.values[6] && (tW = iW.values[6]);
            break;
          case sW.ANIMATIONTYPE_VECTOR3:
          default:
            PW = mW.q.FromArray(iW.values), iW.values[3] && (cW = mW.q.FromArray(iW.values[3])), iW.values[4] && (wW = mW.q.FromArray(iW.values[4])), iW.values[5] && (tW = iW.values[5])
        }
        const ZW = {};
        ZW.frame = iW.frame, ZW.value = PW, void 0 != cW && (ZW.inTangent = cW), void 0 != wW && (ZW.outTangent = wW), void 0 != tW && (ZW.interpolation = tW), NW.push(ZW)
      }
      if (iW.setKeys(NW), WW.kj)
        for (LW = 0; LW < WW.kj.length; LW++) PW = WW.kj[LW], iW.createRange(PW.name, PW.from, PW.to);
      return iW
    }
    async function HW(WW, iW) {
      return await new Promise(((OW, mW) => {
        const EW = new wW.c;
        EW.addEventListener("readystatechange", (() => {
          if (4 == EW.readyState)
            if (200 == EW.status) {
              let iW = JSON.parse(EW.responseText);
              if (iW.animations && (iW = iW.animations), iW.length) {
                const WW = [];
                for (const OW of iW) WW.push(hW(OW));
                OW(WW)
              } else {
                const mW = hW(iW);
                WW && (mW.name = WW), OW(mW)
              }
            } else mW("Unable to load the animation")
        })), EW.open("GET", iW), EW.send()
      }))
    }
    async function nW(WW) {
      const iW = this?.SnippetUrl ?? sW.SnippetUrl;
      return await new Promise(((OW, mW) => {
        const EW = new wW.c;
        EW.addEventListener("readystatechange", (() => {
          if (4 == EW.readyState)
            if (200 == EW.status) {
              const iW = JSON.parse(JSON.parse(EW.responseText).jsonPayload);
              if (iW.animations) {
                const mW = JSON.parse(iW.animations),
                  EW = [];
                for (const iW of mW.animations) {
                  const OW = hW(iW);
                  OW.snippetId = WW, EW.push(OW)
                }
                OW(EW)
              } else {
                const mW = hW(JSON.parse(iW.animation));
                mW.snippetId = WW, OW(mW)
              }
            } else mW("Unable to load the snippet " + WW)
        })), EW.open("GET", iW + "/" + WW.replace(/#/g, "/")), EW.send()
      }))
    }
    sW._UniqueIdGenerator = 0, sW.AllowMatricesInterpolation = !1, sW.AllowMatrixDecomposeForInterpolation = !0, sW.InheritOriginalValueFromActiveAnimations = !1, sW.SnippetUrl = "https://snippet.babylonjs.com", sW.ANIMATIONTYPE_FLOAT = 0, sW.ANIMATIONTYPE_VECTOR3 = 1, sW.ANIMATIONTYPE_QUATERNION = 2, sW.ANIMATIONTYPE_MATRIX = 3, sW.ANIMATIONTYPE_COLOR3 = 4, sW.ANIMATIONTYPE_COLOR4 = 7, sW.ANIMATIONTYPE_VECTOR2 = 5, sW.ANIMATIONTYPE_SIZE = 6, sW.ANIMATIONLOOPMODE_RELATIVE = 0, sW.ANIMATIONLOOPMODE_CYCLE = 1, sW.ANIMATIONLOOPMODE_CONSTANT = 2, sW.ANIMATIONLOOPMODE_YOYO = 4, sW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const uW = nW;
    let oW = !1;

    function dW() {
      oW || (oW = !0, sW.Parse = hW, sW.ParseFromFileAsync = HW, sW.ParseFromSnippetAsync = nW, sW.CreateFromSnippetAsync = uW, sW.CreateAnimation = KW, sW.CreateAndStartAnimation = SW, sW.CreateAndStartHierarchyAnimation = YW, sW.CreateMergeAndStartAnimation = yW, sW.MakeAnimationAdditive = MW, sW.TransitionTo = TW, sW.AppendSerializedAnimations = JW, (0, ZW.h)("BABYLON.Animation", sW), LW.d._AnimationRangeFactory = (WW, iW, OW) => new PW.c(WW, iW, OW))
    }
  },
  42586: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    class mW {
      constructor(WW, iW, OW) {
        this.name = WW, this.from = iW, this.to = OW
      }
      clone() {
        return new mW(this.name, this.from, this.to)
      }
    }
  },
  42635: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW.b,
      g: () => mW.k
    });
    var mW = OW(41660);
    (0, mW.c)()
  },
  42616: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW.h
    });
    var mW = OW(41992);
    (0, mW.e)()
  },
  42599: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => mW.e
    });
    var mW = OW(41976);
    (0, mW.i)()
  },
  42641: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW.e
    });
    var mW = OW(41919);
    (0, mW.h)()
  },
  42588: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW.f
    });
    var mW = OW(41948);
    (0, mW.d)()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);