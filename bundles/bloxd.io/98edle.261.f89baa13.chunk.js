export const id = 261;
export const ids = [261];
export const modules = {
  38689: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => IW,
      f: () => dW,
      h: () => YW,
      k: () => JW,
      n: () => tR,
      p: () => iR,
      s: () => gR,
      t: () => TW
    });
    var wW = MW(35324),
      CW = MW(35376),
      zR = MW(35353),
      AW = MW(38692),
      bR = MW(37800),
      yR = MW(37608),
      NW = MW(37637),
      eW = MW(37615),
      BW = MW(35361);
    const tR = Object.freeze(new wW.e(0, 0, 0, 0)),
      TW = Object.freeze(wW.q.Zero()),
      gR = Object.freeze(wW.n.Zero()),
      iR = Object.freeze(yR.d.Zero()),
      YW = Object.freeze(CW.d.Black()),
      JW = Object.freeze(new CW.h(0, 0, 0, 0)),
      PW = {
        key: 0,
        repeatCount: 0,
        CWW: 2
      };
    class IW {
      static _PrepareAnimation(WW, RW, MW, zR, AW, bR, NW, eW) {
        let BW;
        if (!isNaN(parseFloat(AW)) && isFinite(AW) ? BW = IW.ANIMATIONTYPE_FLOAT : AW instanceof wW.e ? BW = IW.ANIMATIONTYPE_QUATERNION : AW instanceof wW.q ? BW = IW.ANIMATIONTYPE_VECTOR3 : AW instanceof wW.n ? BW = IW.ANIMATIONTYPE_VECTOR2 : AW instanceof CW.d ? BW = IW.ANIMATIONTYPE_COLOR3 : AW instanceof CW.h ? BW = IW.ANIMATIONTYPE_COLOR4 : AW instanceof yR.d && (BW = IW.ANIMATIONTYPE_SIZE), void 0 == BW) return null;
        const tR = new IW(WW, RW, MW, BW, NW),
          TW = [{
            frame: 0,
            value: AW
          }, {
            frame: zR,
            value: bR
          }];
        return tR.setKeys(TW), void 0 !== eW && tR.setEasingFunction(eW), tR
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const WW of this._runtimeAnimations)
          if (!WW.isStopped()) return !0;
        return !1
      }
      constructor(WW, RW, MW, wW, CW, zR) {
        this.name = WW, this.targetProperty = RW, this.framePerSecond = MW, this.dataType = wW, this.CWW = CW, this.enableBlending = zR, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = RW.split("."), this.dataType = wW, this.CWW = void 0 === CW ? IW.ANIMATIONLOOPMODE_CYCLE : CW, this.uniqueId = IW._UniqueIdGenerator++
      }
      toString(WW) {
        let RW = "Name: " + this.name + ", property: " + this.targetProperty;
        if (RW += ", datatype: " + ["Float", "vC", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], RW += ", nKeys: " + (this._keys ? this._keys.length : "none"), RW += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), WW) {
          RW += ", Ranges: {";
          let WW = !0;
          for (const MW in this._ranges) WW || (RW += ", "), WW = !1, RW += MW;
          RW += "}"
        }
        return RW
      }
      addEvent(WW) {
        this._events.push(WW), this._events.sort(((WW, RW) => WW.frame - RW.frame))
      }
      removeEvents(WW) {
        for (let RW = 0; RW < this._events.length; RW++) this._events[RW].frame === WW && (this._events.splice(RW, 1), RW--)
      }
      getEvents() {
        return this._events
      }
      createRange(WW, RW, MW) {
        this._ranges[WW] || (this._ranges[WW] = new AW.e(WW, RW, MW))
      }
      deleteRange(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const MW = this._ranges[WW];
        if (MW) {
          if (RW) {
            const WW = MW.from,
              RW = MW.to;
            for (let MW = this._keys.length - 1; MW >= 0; MW--) this._keys[MW].frame >= WW && this._keys[MW].frame <= RW && this._keys.splice(MW, 1)
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
        for (let RW = 0, MW = this._keys.length; RW < MW; RW++) WW < this._keys[RW].frame && (WW = this._keys[RW].frame);
        return WW
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(WW) {
        this._easingFunction = WW
      }
      floatInterpolateFunction(WW, RW, MW) {
        return (0, zR.Lerp)(WW, RW, MW)
      }
      floatInterpolateFunctionWithTangents(WW, RW, MW, wW, CW) {
        return (0, zR.Hermite)(WW, RW, MW, wW, CW)
      }
      quaternionInterpolateFunction(WW, RW, MW) {
        return wW.e.Slerp(WW, RW, MW)
      }
      quaternionInterpolateFunctionWithTangents(WW, RW, MW, CW, zR) {
        return wW.e.Hermite(WW, RW, MW, CW, zR).normalize()
      }
      vector3InterpolateFunction(WW, RW, MW) {
        return wW.q.Lerp(WW, RW, MW)
      }
      vector3InterpolateFunctionWithTangents(WW, RW, MW, CW, zR) {
        return wW.q.Hermite(WW, RW, MW, CW, zR)
      }
      vector2InterpolateFunction(WW, RW, MW) {
        return wW.n.Lerp(WW, RW, MW)
      }
      vector2InterpolateFunctionWithTangents(WW, RW, MW, CW, zR) {
        return wW.n.Hermite(WW, RW, MW, CW, zR)
      }
      sizeInterpolateFunction(WW, RW, MW) {
        return yR.d.Lerp(WW, RW, MW)
      }
      color3InterpolateFunction(WW, RW, MW) {
        return CW.d.Lerp(WW, RW, MW)
      }
      color3InterpolateFunctionWithTangents(WW, RW, MW, wW, zR) {
        return CW.d.Hermite(WW, RW, MW, wW, zR)
      }
      color4InterpolateFunction(WW, RW, MW) {
        return CW.h.Lerp(WW, RW, MW)
      }
      color4InterpolateFunctionWithTangents(WW, RW, MW, wW, zR) {
        return CW.h.Hermite(WW, RW, MW, wW, zR)
      }
      _getKeyValue(WW) {
        return "function" === typeof WW ? WW() : WW
      }
      evaluate(WW) {
        return PW.key = 0, this._interpolate(WW, PW)
      }
      _interpolate(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (RW.CWW === IW.ANIMATIONLOOPMODE_CONSTANT && RW.repeatCount > 0) return RW.highLimitValue.clone ? RW.highLimitValue.clone() : RW.highLimitValue;
        const wW = this._keys;
        let CW;
        if (this._coreAnimation) CW = this._coreAnimation._key;
        else {
          const zR = wW.length;
          for (CW = RW.key; CW >= 0 && WW < wW[CW].frame;) --CW;
          for (; CW + 1 <= zR - 1 && WW >= wW[CW + 1].frame;) ++CW;
          if (RW.key = CW, CW < 0) return MW ? void 0 : this._getKeyValue(wW[0].value);
          if (CW + 1 > zR - 1) return MW ? void 0 : this._getKeyValue(wW[zR - 1].value);
          this._key = CW
        }
        const zR = wW[CW],
          AW = wW[CW + 1];
        if (MW && (WW === zR.frame || WW === AW.frame)) return;
        const bR = this._getKeyValue(zR.value),
          yR = this._getKeyValue(AW.value);
        if (1 === zR.interpolation) return AW.frame > WW ? bR : yR;
        const NW = void 0 !== zR.outTangent && void 0 !== AW.inTangent,
          eW = AW.frame - zR.frame;
        let BW = (WW - zR.frame) / eW;
        const PW = zR.easingFunction || this.getEasingFunction();
        switch (PW && (BW = PW.ease(BW)), this.dataType) {
          case IW.ANIMATIONTYPE_FLOAT: {
            const WW = NW ? this.floatInterpolateFunctionWithTangents(bR, zR.outTangent * eW, yR, AW.inTangent * eW, BW) : this.floatInterpolateFunction(bR, yR, BW);
            switch (RW.CWW) {
              case IW.ANIMATIONLOOPMODE_CYCLE:
              case IW.ANIMATIONLOOPMODE_CONSTANT:
              case IW.ANIMATIONLOOPMODE_YOYO:
                return WW;
              case IW.ANIMATIONLOOPMODE_RELATIVE:
              case IW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (RW.offsetValue ?? 0) * RW.repeatCount + WW
            }
            break
          }
          case IW.ANIMATIONTYPE_QUATERNION: {
            const WW = NW ? this.quaternionInterpolateFunctionWithTangents(bR, zR.outTangent.scale(eW), yR, AW.inTangent.scale(eW), BW) : this.quaternionInterpolateFunction(bR, yR, BW);
            switch (RW.CWW) {
              case IW.ANIMATIONLOOPMODE_CYCLE:
              case IW.ANIMATIONLOOPMODE_CONSTANT:
              case IW.ANIMATIONLOOPMODE_YOYO:
                return WW;
              case IW.ANIMATIONLOOPMODE_RELATIVE:
              case IW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return WW.addInPlace((RW.offsetValue || tR).scale(RW.repeatCount))
            }
            return WW
          }
          case IW.ANIMATIONTYPE_VECTOR3: {
            const WW = NW ? this.vector3InterpolateFunctionWithTangents(bR, zR.outTangent.scale(eW), yR, AW.inTangent.scale(eW), BW) : this.vector3InterpolateFunction(bR, yR, BW);
            switch (RW.CWW) {
              case IW.ANIMATIONLOOPMODE_CYCLE:
              case IW.ANIMATIONLOOPMODE_CONSTANT:
              case IW.ANIMATIONLOOPMODE_YOYO:
                return WW;
              case IW.ANIMATIONLOOPMODE_RELATIVE:
              case IW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return WW.add((RW.offsetValue || TW).scale(RW.repeatCount))
            }
            break
          }
          case IW.ANIMATIONTYPE_VECTOR2: {
            const WW = NW ? this.vector2InterpolateFunctionWithTangents(bR, zR.outTangent.scale(eW), yR, AW.inTangent.scale(eW), BW) : this.vector2InterpolateFunction(bR, yR, BW);
            switch (RW.CWW) {
              case IW.ANIMATIONLOOPMODE_CYCLE:
              case IW.ANIMATIONLOOPMODE_CONSTANT:
              case IW.ANIMATIONLOOPMODE_YOYO:
                return WW;
              case IW.ANIMATIONLOOPMODE_RELATIVE:
              case IW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return WW.add((RW.offsetValue || gR).scale(RW.repeatCount))
            }
            break
          }
          case IW.ANIMATIONTYPE_SIZE:
            switch (RW.CWW) {
              case IW.ANIMATIONLOOPMODE_CYCLE:
              case IW.ANIMATIONLOOPMODE_CONSTANT:
              case IW.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(bR, yR, BW);
              case IW.ANIMATIONLOOPMODE_RELATIVE:
              case IW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(bR, yR, BW).add((RW.offsetValue || iR).scale(RW.repeatCount))
            }
            break;
          case IW.ANIMATIONTYPE_COLOR3: {
            const WW = NW ? this.color3InterpolateFunctionWithTangents(bR, zR.outTangent.scale(eW), yR, AW.inTangent.scale(eW), BW) : this.color3InterpolateFunction(bR, yR, BW);
            switch (RW.CWW) {
              case IW.ANIMATIONLOOPMODE_CYCLE:
              case IW.ANIMATIONLOOPMODE_CONSTANT:
              case IW.ANIMATIONLOOPMODE_YOYO:
                return WW;
              case IW.ANIMATIONLOOPMODE_RELATIVE:
              case IW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return WW.add((RW.offsetValue || YW).scale(RW.repeatCount))
            }
            break
          }
          case IW.ANIMATIONTYPE_COLOR4: {
            const WW = NW ? this.color4InterpolateFunctionWithTangents(bR, zR.outTangent.scale(eW), yR, AW.inTangent.scale(eW), BW) : this.color4InterpolateFunction(bR, yR, BW);
            switch (RW.CWW) {
              case IW.ANIMATIONLOOPMODE_CYCLE:
              case IW.ANIMATIONLOOPMODE_CONSTANT:
              case IW.ANIMATIONLOOPMODE_YOYO:
                return WW;
              case IW.ANIMATIONLOOPMODE_RELATIVE:
              case IW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return WW.add((RW.offsetValue || JW).scale(RW.repeatCount))
            }
            break
          }
          case IW.ANIMATIONTYPE_MATRIX:
            switch (RW.CWW) {
              case IW.ANIMATIONLOOPMODE_CYCLE:
              case IW.ANIMATIONLOOPMODE_CONSTANT:
              case IW.ANIMATIONLOOPMODE_YOYO:
                return IW.AllowMatricesInterpolation ? this.matrixInterpolateFunction(bR, yR, BW, RW.workValue) : bR;
              case IW.ANIMATIONLOOPMODE_RELATIVE:
              case IW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bR
            }
        }
        return 0
      }
      matrixInterpolateFunction(WW, RW, MW, CW) {
        return IW.AllowMatrixDecomposeForInterpolation ? CW ? (wW.d.DecomposeLerpToRef(WW, RW, MW, CW), CW) : wW.d.DecomposeLerp(WW, RW, MW) : CW ? (wW.d.LerpToRef(WW, RW, MW, CW), CW) : wW.d.Lerp(WW, RW, MW)
      }
      clone() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RW = new IW(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.CWW);
        if (RW.enableBlending = this.enableBlending, RW.blendingSpeed = this.blendingSpeed, this._keys && RW.setKeys(this._keys, !1, WW), this._ranges) {
          RW._ranges = {};
          for (const WW in this._ranges) {
            const MW = this._ranges[WW];
            MW && (RW._ranges[WW] = MW.clone())
          }
        }
        return RW
      }
      setKeys(WW) {
        let RW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = WW;
        else if (this._keys = WW.slice(0), RW)
          for (let MW = 0; MW < this._keys.length; MW++) {
            const WW = this._keys[MW];
            this._keys[MW] = {
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
        PW.key = 0;
        const RW = this._interpolate(WW, PW, !0);
        if (!RW) return this._keys[PW.key].frame === WW ? PW.key : PW.key + 1;
        const MW = {
          frame: WW,
          value: RW.clone ? RW.clone() : RW
        };
        return this._keys.splice(PW.key + 1, 0, MW), PW.key + 1
      }
      serialize() {
        const WW = {};
        WW.name = this.name, WW.property = this.targetProperty, WW.framePerSecond = this.framePerSecond, WW.dataType = this.dataType, WW.loopBehavior = this.CWW, WW.enableBlending = this.enableBlending, WW.blendingSpeed = this.blendingSpeed;
        const RW = this.dataType;
        WW.keys = [];
        const MW = this.getKeys();
        for (let wW = 0; wW < MW.length; wW++) {
          const CW = MW[wW],
            zR = {};
          switch (zR.frame = CW.frame, RW) {
            case IW.ANIMATIONTYPE_FLOAT:
              zR.values = [CW.value], void 0 !== CW.inTangent && zR.values.push(CW.inTangent), void 0 !== CW.outTangent && (void 0 === CW.inTangent && zR.values.push(void 0), zR.values.push(CW.outTangent)), void 0 !== CW.interpolation && (void 0 === CW.inTangent && zR.values.push(void 0), void 0 === CW.outTangent && zR.values.push(void 0), zR.values.push(CW.interpolation));
              break;
            case IW.ANIMATIONTYPE_QUATERNION:
            case IW.ANIMATIONTYPE_MATRIX:
            case IW.ANIMATIONTYPE_VECTOR3:
            case IW.ANIMATIONTYPE_COLOR3:
            case IW.ANIMATIONTYPE_COLOR4:
              zR.values = CW.value.JNW(), void 0 != CW.inTangent && zR.values.push(CW.inTangent.JNW()), void 0 != CW.outTangent && (void 0 === CW.inTangent && zR.values.push(void 0), zR.values.push(CW.outTangent.JNW())), void 0 !== CW.interpolation && (void 0 === CW.inTangent && zR.values.push(void 0), void 0 === CW.outTangent && zR.values.push(void 0), zR.values.push(CW.interpolation))
          }
          WW.keys.push(zR)
        }
        WW.WA = [];
        for (const wW in this._ranges) {
          const RW = this._ranges[wW];
          if (!RW) continue;
          const MW = {};
          MW.name = wW, MW.from = RW.from, MW.to = RW.to, WW.WA.push(MW)
        }
        return WW
      }
      static _UniversalLerp(WW, RW, MW) {
        const wW = WW.constructor;
        return wW.Lerp ? wW.Lerp(WW, RW, MW) : wW.Slerp ? wW.Slerp(WW, RW, MW) : WW.toFixed ? WW * (1 - MW) + MW * RW : RW
      }
    }

    function oW(WW, RW, MW) {
      let CW;
      CW = "object" === typeof RW ? RW : {
        referenceFrame: RW ?? 0,
        range: MW,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let zR = WW;
      CW.cloneOriginalAnimation && (zR = WW.clone(), zR.name = CW.clonedAnimationName || zR.name);
      const AW = zR.getKeys();
      if (!AW.length) return zR;
      const bR = CW.referenceFrame && CW.referenceFrame >= 0 ? CW.referenceFrame : 0;
      let yR = 0;
      const NW = AW[0];
      let eW = AW.length - 1;
      const BW = AW[eW],
        tR = {
          referenceValue: NW.value,
          referencePosition: wW.k.vC[0],
          referenceQuaternion: wW.k.Quaternion[0],
          referenceScaling: wW.k.vC[1],
          keyPosition: wW.k.vC[2],
          keyQuaternion: wW.k.Quaternion[1],
          keyScaling: wW.k.vC[3]
        };
      let TW = NW.frame,
        gR = BW.frame;
      if (CW.range) {
        const WW = zR.getRange(CW.range);
        WW && (TW = WW.from, gR = WW.to)
      } else TW = CW.fromFrame ?? TW, gR = CW.toFrame ?? gR;
      TW !== NW.frame && (yR = zR.createKeyForFrame(TW)), gR !== BW.frame && (eW = zR.createKeyForFrame(gR));
      const iR = zR.getKeys();
      if (1 === iR.length) {
        const WW = zR._getKeyValue(iR[0].value);
        tR.referenceValue = WW.clone ? WW.clone() : WW
      } else if (bR <= NW.frame) {
        const WW = zR._getKeyValue(NW.value);
        tR.referenceValue = WW.clone ? WW.clone() : WW
      } else if (bR >= BW.frame) {
        const WW = zR._getKeyValue(BW.value);
        tR.referenceValue = WW.clone ? WW.clone() : WW
      } else {
        PW.key = 0;
        const WW = zR._interpolate(bR, PW);
        tR.referenceValue = WW.clone ? WW.clone() : WW
      }
      zR.dataType === IW.ANIMATIONTYPE_QUATERNION ? tR.referenceValue.normalize().conjugateInPlace() : zR.dataType === IW.ANIMATIONTYPE_MATRIX && (tR.referenceValue.decompose(tR.referenceScaling, tR.referenceQuaternion, tR.referencePosition), tR.referenceQuaternion.normalize().conjugateInPlace());
      let YW = Number.MAX_VALUE;
      const JW = CW.clipKeys ? [] : null;
      for (let PW = yR; PW <= eW; PW++) {
        let WW = iR[PW];
        if ((JW || CW.cloneOriginalAnimation) && (WW = {
            frame: WW.frame,
            value: WW.value.clone ? WW.value.clone() : WW.value,
            inTangent: WW.inTangent,
            outTangent: WW.outTangent,
            interpolation: WW.interpolation,
            lockedTangent: WW.lockedTangent,
            easingFunction: WW.easingFunction
          }, JW && (YW === Number.MAX_VALUE && (YW = WW.frame), WW.frame -= YW, JW.push(WW))), !PW || zR.dataType === IW.ANIMATIONTYPE_FLOAT || WW.value !== NW.value) switch (zR.dataType) {
          case IW.ANIMATIONTYPE_MATRIX:
            WW.value.decompose(tR.keyScaling, tR.keyQuaternion, tR.keyPosition), tR.keyPosition.pNW(tR.referencePosition), tR.keyScaling.divideInPlace(tR.referenceScaling), tR.referenceQuaternion.multiplyToRef(tR.keyQuaternion, tR.keyQuaternion), wW.d.ComposeToRef(tR.keyScaling, tR.keyQuaternion, tR.keyPosition, WW.value);
            break;
          case IW.ANIMATIONTYPE_QUATERNION:
            tR.referenceValue.multiplyToRef(WW.value, WW.value);
            break;
          case IW.ANIMATIONTYPE_VECTOR2:
          case IW.ANIMATIONTYPE_VECTOR3:
          case IW.ANIMATIONTYPE_COLOR3:
          case IW.ANIMATIONTYPE_COLOR4:
            WW.value.subtractToRef(tR.referenceValue, WW.value);
            break;
          case IW.ANIMATIONTYPE_SIZE:
            WW.value.width -= tR.referenceValue.width, WW.value.height -= tR.referenceValue.height;
            break;
          default:
            WW.value -= tR.referenceValue
        }
      }
      return JW && zR.setKeys(JW, !0), zR
    }

    function lW(WW, RW, MW, wW) {
      const CW = new IW(WW + "Animation", WW, MW, RW, IW.ANIMATIONLOOPMODE_CONSTANT);
      return CW.setEasingFunction(wW), CW
    }

    function FW(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW) {
      const BW = IW._PrepareAnimation(WW, MW, wW, CW, zR, AW, bR, yR);
      return BW ? (RW.QRW && (eW = RW.QRW()), eW ? eW.beginDirectAnimation(RW, [BW], 0, CW, BW.CWW !== IW.ANIMATIONLOOPMODE_CONSTANT, 1, NW) : null) : null
    }

    function fW(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW) {
      const BW = IW._PrepareAnimation(WW, wW, CW, zR, AW, bR, yR, NW);
      if (!BW) return null;
      return RW.QRW().beginDirectHierarchyAnimation(RW, MW, [BW], 0, zR, 1 === BW.CWW, 1, eW)
    }

    function QW(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW) {
      const eW = IW._PrepareAnimation(WW, MW, wW, CW, zR, AW, bR, yR);
      return eW ? (RW.animations.push(eW), RW.QRW().beginAnimation(RW, 0, CW, 1 === eW.CWW, 1, NW)) : null
    }

    function rR(WW, RW, MW, wW, CW, zR, AW) {
      let bR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        yR = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        NW = arguments.length > 9 ? arguments[9] : void 0;
      if (AW <= 0) return MW[WW] = RW, bR && bR(), null;
      const eW = CW * (AW / 1e3);
      zR.setKeys(NW ?? [{
        frame: 0,
        value: MW[WW].clone ? MW[WW].clone() : MW[WW]
      }, {
        frame: eW,
        value: RW
      }]), MW.animations || (MW.animations = []), MW.animations.push(zR);
      return wW.beginAnimation(MW, 0, eW, !1, 1, bR ?? void 0, void 0, yR)
    }

    function cR(WW, RW) {
      eW.d.AppendSerializedAnimations(WW, RW)
    }

    function XW(WW) {
      const RW = new IW(WW.name, WW.property, WW.framePerSecond, WW.dataType, WW.loopBehavior),
        MW = WW.dataType,
        zR = [];
      let AW, bR;
      for (WW.enableBlending && (RW.enableBlending = WW.enableBlending), WW.blendingSpeed && (RW.blendingSpeed = WW.blendingSpeed), bR = 0; bR < WW.keys.length; bR++) {
        const RW = WW.keys[bR];
        let yR, NW, eW;
        switch (MW) {
          case IW.ANIMATIONTYPE_FLOAT:
            AW = RW.values[0], RW.values.length >= 2 && (yR = RW.values[1]), RW.values.length >= 3 && (NW = RW.values[2]), RW.values.length >= 4 && (eW = RW.values[3]);
            break;
          case IW.ANIMATIONTYPE_QUATERNION:
            if (AW = wW.e.FromArray(RW.values), RW.values.length >= 8) {
              const WW = wW.e.FromArray(RW.values.slice(4, 8));
              WW.equals(wW.e.Zero()) || (yR = WW)
            }
            if (RW.values.length >= 12) {
              const WW = wW.e.FromArray(RW.values.slice(8, 12));
              WW.equals(wW.e.Zero()) || (NW = WW)
            }
            RW.values.length >= 13 && (eW = RW.values[12]);
            break;
          case IW.ANIMATIONTYPE_MATRIX:
            AW = wW.d.FromArray(RW.values), RW.values.length >= 17 && (eW = RW.values[16]);
            break;
          case IW.ANIMATIONTYPE_COLOR3:
            AW = CW.d.FromArray(RW.values), RW.values[3] && (yR = CW.d.FromArray(RW.values[3])), RW.values[4] && (NW = CW.d.FromArray(RW.values[4])), RW.values[5] && (eW = RW.values[5]);
            break;
          case IW.ANIMATIONTYPE_COLOR4:
            AW = CW.h.FromArray(RW.values), RW.values[4] && (yR = CW.h.FromArray(RW.values[4])), RW.values[5] && (NW = CW.h.FromArray(RW.values[5])), RW.values[6] && (eW = RW.values[6]);
            break;
          case IW.ANIMATIONTYPE_VECTOR3:
          default:
            AW = wW.q.FromArray(RW.values), RW.values[3] && (yR = wW.q.FromArray(RW.values[3])), RW.values[4] && (NW = wW.q.FromArray(RW.values[4])), RW.values[5] && (eW = RW.values[5])
        }
        const BW = {};
        BW.frame = RW.frame, BW.value = AW, void 0 != yR && (BW.inTangent = yR), void 0 != NW && (BW.outTangent = NW), void 0 != eW && (BW.interpolation = eW), zR.push(BW)
      }
      if (RW.setKeys(zR), WW.WA)
        for (bR = 0; bR < WW.WA.length; bR++) AW = WW.WA[bR], RW.createRange(AW.name, AW.from, AW.to);
      return RW
    }
    async function jR(WW, RW) {
      return await new Promise(((MW, wW) => {
        const CW = new NW.b;
        CW.addEventListener("readystatechange", (() => {
          if (4 == CW.readyState)
            if (200 == CW.status) {
              let RW = JSON.parse(CW.responseText);
              if (RW.animations && (RW = RW.animations), RW.length) {
                const WW = [];
                for (const MW of RW) WW.push(XW(MW));
                MW(WW)
              } else {
                const wW = XW(RW);
                WW && (wW.name = WW), MW(wW)
              }
            } else wW("Unable to load the animation")
        })), CW.open("GET", RW), CW.send()
      }))
    }
    async function kR(WW) {
      const RW = this?.SnippetUrl ?? IW.SnippetUrl;
      return await new Promise(((MW, wW) => {
        const CW = new NW.b;
        CW.addEventListener("readystatechange", (() => {
          if (4 == CW.readyState)
            if (200 == CW.status) {
              const RW = JSON.parse(JSON.parse(CW.responseText).jsonPayload);
              if (RW.animations) {
                const wW = JSON.parse(RW.animations),
                  CW = [];
                for (const RW of wW.animations) {
                  const MW = XW(RW);
                  MW.snippetId = WW, CW.push(MW)
                }
                MW(CW)
              } else {
                const wW = XW(JSON.parse(RW.animation));
                wW.snippetId = WW, MW(wW)
              }
            } else wW("Unable to load the snippet " + WW)
        })), CW.open("GET", RW + "/" + WW.replace(/#/g, "/")), CW.send()
      }))
    }
    IW._UniqueIdGenerator = 0, IW.AllowMatricesInterpolation = !1, IW.AllowMatrixDecomposeForInterpolation = !0, IW.InheritOriginalValueFromActiveAnimations = !1, IW.SnippetUrl = "https://snippet.babylonjs.com", IW.ANIMATIONTYPE_FLOAT = 0, IW.ANIMATIONTYPE_VECTOR3 = 1, IW.ANIMATIONTYPE_QUATERNION = 2, IW.ANIMATIONTYPE_MATRIX = 3, IW.ANIMATIONTYPE_COLOR3 = 4, IW.ANIMATIONTYPE_COLOR4 = 7, IW.ANIMATIONTYPE_VECTOR2 = 5, IW.ANIMATIONTYPE_SIZE = 6, IW.ANIMATIONLOOPMODE_RELATIVE = 0, IW.ANIMATIONLOOPMODE_CYCLE = 1, IW.ANIMATIONLOOPMODE_CONSTANT = 2, IW.ANIMATIONLOOPMODE_YOYO = 4, IW.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const aR = kR;
    let sW = !1;

    function dW() {
      sW || (sW = !0, IW.Parse = XW, IW.ParseFromFileAsync = jR, IW.ParseFromSnippetAsync = kR, IW.CreateFromSnippetAsync = aR, IW.CreateAnimation = lW, IW.CreateAndStartAnimation = FW, IW.CreateAndStartHierarchyAnimation = fW, IW.CreateMergeAndStartAnimation = QW, IW.MakeAnimationAdditive = oW, IW.TransitionTo = rR, IW.AppendSerializedAnimations = cR, (0, BW.e)("BABYLON.Animation", IW), bR.b._AnimationRangeFactory = (WW, RW, MW) => new AW.e(WW, RW, MW))
    }
  },
  38692: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW
    });
    class wW {
      constructor(WW, RW, MW) {
        this.name = WW, this.from = RW, this.to = MW
      }
      clone() {
        return new wW(this.name, this.from, this.to)
      }
    }
  },
  38747: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW.c,
      h: () => wW.j
    });
    var wW = MW(37722);
    (0, wW.d)()
  },
  38729: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW.d
    });
    var wW = MW(38069);
    (0, wW.c)()
  },
  38704: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => wW.c
    });
    var wW = MW(38054);
    (0, wW.d)()
  },
  38751: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => wW.b
    });
    var wW = MW(37993);
    (0, wW.c)()
  },
  38701: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW.f
    });
    var wW = MW(38032);
    (0, wW.c)()
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);