export const id = 303;
export const ids = [303];
export const modules = {
  42398: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => vH,
      e: () => KH,
      g: () => WH,
      k: () => MH,
      m: () => GH,
      p: () => QH,
      t: () => uH,
      w: () => YH
    });
    var AH = LH(37963),
      rH = LH(38074),
      SH = LH(38002),
      hH = LH(42405),
      tH = LH(41498),
      zH = LH(41312),
      CH = LH(41339),
      EH = LH(41319),
      XH = LH(38012);
    const GH = Object.freeze(new AH.f(0, 0, 0, 0)),
      YH = Object.freeze(AH.o.Zero()),
      uH = Object.freeze(AH.n.Zero()),
      QH = Object.freeze(zH.c.Zero()),
      WH = Object.freeze(rH.c.Black()),
      MH = Object.freeze(new rH.g(0, 0, 0, 0)),
      xH = {
        key: 0,
        repeatCount: 0,
        mB: 2
      };
    class vH {
      static _PrepareAnimation(HH, BH, LH, SH, hH, tH, CH, EH) {
        let XH;
        if (!isNaN(parseFloat(hH)) && isFinite(hH) ? XH = vH.ANIMATIONTYPE_FLOAT : hH instanceof AH.f ? XH = vH.ANIMATIONTYPE_QUATERNION : hH instanceof AH.o ? XH = vH.ANIMATIONTYPE_VECTOR3 : hH instanceof AH.n ? XH = vH.ANIMATIONTYPE_VECTOR2 : hH instanceof rH.c ? XH = vH.ANIMATIONTYPE_COLOR3 : hH instanceof rH.g ? XH = vH.ANIMATIONTYPE_COLOR4 : hH instanceof zH.c && (XH = vH.ANIMATIONTYPE_SIZE), void 0 == XH) return null;
        const GH = new vH(HH, BH, LH, XH, CH),
          YH = [{
            frame: 0,
            value: hH
          }, {
            frame: SH,
            value: tH
          }];
        return GH.setKeys(YH), void 0 !== EH && GH.setEasingFunction(EH), GH
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const HH of this._runtimeAnimations)
          if (!HH.isStopped()) return !0;
        return !1
      }
      constructor(HH, BH, LH, AH, rH, SH) {
        this.name = HH, this.targetProperty = BH, this.framePerSecond = LH, this.dataType = AH, this.mB = rH, this.enableBlending = SH, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = BH.split("."), this.dataType = AH, this.mB = void 0 === rH ? vH.ANIMATIONLOOPMODE_CYCLE : rH, this.uniqueId = vH._UniqueIdGenerator++
      }
      toString(HH) {
        let BH = "Name: " + this.name + ", property: " + this.targetProperty;
        if (BH += ", datatype: " + ["Float", "lu", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], BH += ", nKeys: " + (this._keys ? this._keys.length : "none"), BH += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), HH) {
          BH += ", Ranges: {";
          let HH = !0;
          for (const LH in this._ranges) HH || (BH += ", "), HH = !1, BH += LH;
          BH += "}"
        }
        return BH
      }
      addEvent(HH) {
        this._events.push(HH), this._events.sort(((HH, BH) => HH.frame - BH.frame))
      }
      removeEvents(HH) {
        for (let BH = 0; BH < this._events.length; BH++) this._events[BH].frame === HH && (this._events.splice(BH, 1), BH--)
      }
      getEvents() {
        return this._events
      }
      createRange(HH, BH, LH) {
        this._ranges[HH] || (this._ranges[HH] = new hH.b(HH, BH, LH))
      }
      deleteRange(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const LH = this._ranges[HH];
        if (LH) {
          if (BH) {
            const HH = LH.from,
              BH = LH.to;
            for (let LH = this._keys.length - 1; LH >= 0; LH--) this._keys[LH].frame >= HH && this._keys[LH].frame <= BH && this._keys.splice(LH, 1)
          }
          this._ranges[HH] = null
        }
      }
      getRange(HH) {
        return this._ranges[HH]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let HH = 0;
        for (let BH = 0, LH = this._keys.length; BH < LH; BH++) HH < this._keys[BH].frame && (HH = this._keys[BH].frame);
        return HH
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(HH) {
        this._easingFunction = HH
      }
      floatInterpolateFunction(HH, BH, LH) {
        return (0, SH.Lerp)(HH, BH, LH)
      }
      floatInterpolateFunctionWithTangents(HH, BH, LH, AH, rH) {
        return (0, SH.Hermite)(HH, BH, LH, AH, rH)
      }
      quaternionInterpolateFunction(HH, BH, LH) {
        return AH.f.Slerp(HH, BH, LH)
      }
      quaternionInterpolateFunctionWithTangents(HH, BH, LH, rH, SH) {
        return AH.f.Hermite(HH, BH, LH, rH, SH).normalize()
      }
      vector3InterpolateFunction(HH, BH, LH) {
        return AH.o.Lerp(HH, BH, LH)
      }
      vector3InterpolateFunctionWithTangents(HH, BH, LH, rH, SH) {
        return AH.o.Hermite(HH, BH, LH, rH, SH)
      }
      vector2InterpolateFunction(HH, BH, LH) {
        return AH.n.Lerp(HH, BH, LH)
      }
      vector2InterpolateFunctionWithTangents(HH, BH, LH, rH, SH) {
        return AH.n.Hermite(HH, BH, LH, rH, SH)
      }
      sizeInterpolateFunction(HH, BH, LH) {
        return zH.c.Lerp(HH, BH, LH)
      }
      color3InterpolateFunction(HH, BH, LH) {
        return rH.c.Lerp(HH, BH, LH)
      }
      color3InterpolateFunctionWithTangents(HH, BH, LH, AH, SH) {
        return rH.c.Hermite(HH, BH, LH, AH, SH)
      }
      color4InterpolateFunction(HH, BH, LH) {
        return rH.g.Lerp(HH, BH, LH)
      }
      color4InterpolateFunctionWithTangents(HH, BH, LH, AH, SH) {
        return rH.g.Hermite(HH, BH, LH, AH, SH)
      }
      _getKeyValue(HH) {
        return "function" === typeof HH ? HH() : HH
      }
      evaluate(HH) {
        return xH.key = 0, this._interpolate(HH, xH)
      }
      _interpolate(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (BH.mB === vH.ANIMATIONLOOPMODE_CONSTANT && BH.repeatCount > 0) return BH.highLimitValue.clone ? BH.highLimitValue.clone() : BH.highLimitValue;
        const AH = this._keys;
        let rH;
        if (this._coreAnimation) rH = this._coreAnimation._key;
        else {
          const SH = AH.length;
          for (rH = BH.key; rH >= 0 && HH < AH[rH].frame;) --rH;
          for (; rH + 1 <= SH - 1 && HH >= AH[rH + 1].frame;) ++rH;
          if (BH.key = rH, rH < 0) return LH ? void 0 : this._getKeyValue(AH[0].value);
          if (rH + 1 > SH - 1) return LH ? void 0 : this._getKeyValue(AH[SH - 1].value);
          this._key = rH
        }
        const SH = AH[rH],
          hH = AH[rH + 1];
        if (LH && (HH === SH.frame || HH === hH.frame)) return;
        const tH = this._getKeyValue(SH.value),
          zH = this._getKeyValue(hH.value);
        if (1 === SH.interpolation) return hH.frame > HH ? tH : zH;
        const CH = void 0 !== SH.outTangent && void 0 !== hH.inTangent,
          EH = hH.frame - SH.frame;
        let XH = (HH - SH.frame) / EH;
        const xH = SH.easingFunction || this.getEasingFunction();
        switch (xH && (XH = xH.ease(XH)), this.dataType) {
          case vH.ANIMATIONTYPE_FLOAT: {
            const HH = CH ? this.floatInterpolateFunctionWithTangents(tH, SH.outTangent * EH, zH, hH.inTangent * EH, XH) : this.floatInterpolateFunction(tH, zH, XH);
            switch (BH.mB) {
              case vH.ANIMATIONLOOPMODE_CYCLE:
              case vH.ANIMATIONLOOPMODE_CONSTANT:
              case vH.ANIMATIONLOOPMODE_YOYO:
                return HH;
              case vH.ANIMATIONLOOPMODE_RELATIVE:
              case vH.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (BH.offsetValue ?? 0) * BH.repeatCount + HH
            }
            break
          }
          case vH.ANIMATIONTYPE_QUATERNION: {
            const HH = CH ? this.quaternionInterpolateFunctionWithTangents(tH, SH.outTangent.scale(EH), zH, hH.inTangent.scale(EH), XH) : this.quaternionInterpolateFunction(tH, zH, XH);
            switch (BH.mB) {
              case vH.ANIMATIONLOOPMODE_CYCLE:
              case vH.ANIMATIONLOOPMODE_CONSTANT:
              case vH.ANIMATIONLOOPMODE_YOYO:
                return HH;
              case vH.ANIMATIONLOOPMODE_RELATIVE:
              case vH.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return HH.addInPlace((BH.offsetValue || GH).scale(BH.repeatCount))
            }
            return HH
          }
          case vH.ANIMATIONTYPE_VECTOR3: {
            const HH = CH ? this.vector3InterpolateFunctionWithTangents(tH, SH.outTangent.scale(EH), zH, hH.inTangent.scale(EH), XH) : this.vector3InterpolateFunction(tH, zH, XH);
            switch (BH.mB) {
              case vH.ANIMATIONLOOPMODE_CYCLE:
              case vH.ANIMATIONLOOPMODE_CONSTANT:
              case vH.ANIMATIONLOOPMODE_YOYO:
                return HH;
              case vH.ANIMATIONLOOPMODE_RELATIVE:
              case vH.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return HH.add((BH.offsetValue || YH).scale(BH.repeatCount))
            }
            break
          }
          case vH.ANIMATIONTYPE_VECTOR2: {
            const HH = CH ? this.vector2InterpolateFunctionWithTangents(tH, SH.outTangent.scale(EH), zH, hH.inTangent.scale(EH), XH) : this.vector2InterpolateFunction(tH, zH, XH);
            switch (BH.mB) {
              case vH.ANIMATIONLOOPMODE_CYCLE:
              case vH.ANIMATIONLOOPMODE_CONSTANT:
              case vH.ANIMATIONLOOPMODE_YOYO:
                return HH;
              case vH.ANIMATIONLOOPMODE_RELATIVE:
              case vH.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return HH.add((BH.offsetValue || uH).scale(BH.repeatCount))
            }
            break
          }
          case vH.ANIMATIONTYPE_SIZE:
            switch (BH.mB) {
              case vH.ANIMATIONLOOPMODE_CYCLE:
              case vH.ANIMATIONLOOPMODE_CONSTANT:
              case vH.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(tH, zH, XH);
              case vH.ANIMATIONLOOPMODE_RELATIVE:
              case vH.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(tH, zH, XH).add((BH.offsetValue || QH).scale(BH.repeatCount))
            }
            break;
          case vH.ANIMATIONTYPE_COLOR3: {
            const HH = CH ? this.color3InterpolateFunctionWithTangents(tH, SH.outTangent.scale(EH), zH, hH.inTangent.scale(EH), XH) : this.color3InterpolateFunction(tH, zH, XH);
            switch (BH.mB) {
              case vH.ANIMATIONLOOPMODE_CYCLE:
              case vH.ANIMATIONLOOPMODE_CONSTANT:
              case vH.ANIMATIONLOOPMODE_YOYO:
                return HH;
              case vH.ANIMATIONLOOPMODE_RELATIVE:
              case vH.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return HH.add((BH.offsetValue || WH).scale(BH.repeatCount))
            }
            break
          }
          case vH.ANIMATIONTYPE_COLOR4: {
            const HH = CH ? this.color4InterpolateFunctionWithTangents(tH, SH.outTangent.scale(EH), zH, hH.inTangent.scale(EH), XH) : this.color4InterpolateFunction(tH, zH, XH);
            switch (BH.mB) {
              case vH.ANIMATIONLOOPMODE_CYCLE:
              case vH.ANIMATIONLOOPMODE_CONSTANT:
              case vH.ANIMATIONLOOPMODE_YOYO:
                return HH;
              case vH.ANIMATIONLOOPMODE_RELATIVE:
              case vH.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return HH.add((BH.offsetValue || MH).scale(BH.repeatCount))
            }
            break
          }
          case vH.ANIMATIONTYPE_MATRIX:
            switch (BH.mB) {
              case vH.ANIMATIONLOOPMODE_CYCLE:
              case vH.ANIMATIONLOOPMODE_CONSTANT:
              case vH.ANIMATIONLOOPMODE_YOYO:
                return vH.AllowMatricesInterpolation ? this.matrixInterpolateFunction(tH, zH, XH, BH.workValue) : tH;
              case vH.ANIMATIONLOOPMODE_RELATIVE:
              case vH.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return tH
            }
        }
        return 0
      }
      matrixInterpolateFunction(HH, BH, LH, rH) {
        return vH.AllowMatrixDecomposeForInterpolation ? rH ? (AH.e.DecomposeLerpToRef(HH, BH, LH, rH), rH) : AH.e.DecomposeLerp(HH, BH, LH) : rH ? (AH.e.LerpToRef(HH, BH, LH, rH), rH) : AH.e.Lerp(HH, BH, LH)
      }
      clone() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const BH = new vH(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.mB);
        if (BH.enableBlending = this.enableBlending, BH.blendingSpeed = this.blendingSpeed, this._keys && BH.setKeys(this._keys, !1, HH), this._ranges) {
          BH._ranges = {};
          for (const HH in this._ranges) {
            const LH = this._ranges[HH];
            LH && (BH._ranges[HH] = LH.clone())
          }
        }
        return BH
      }
      setKeys(HH) {
        let BH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = HH;
        else if (this._keys = HH.slice(0), BH)
          for (let LH = 0; LH < this._keys.length; LH++) {
            const HH = this._keys[LH];
            this._keys[LH] = {
              frame: HH.frame,
              value: HH.value.clone ? HH.value.clone() : HH.value,
              inTangent: HH.inTangent && HH.inTangent.clone ? HH.inTangent.clone() : HH.inTangent,
              outTangent: HH.outTangent && HH.outTangent.clone ? HH.outTangent.clone() : HH.outTangent,
              interpolation: HH.interpolation,
              lockedTangent: HH.lockedTangent,
              easingFunction: HH.easingFunction
            }
          }
      }
      createKeyForFrame(HH) {
        xH.key = 0;
        const BH = this._interpolate(HH, xH, !0);
        if (!BH) return this._keys[xH.key].frame === HH ? xH.key : xH.key + 1;
        const LH = {
          frame: HH,
          value: BH.clone ? BH.clone() : BH
        };
        return this._keys.splice(xH.key + 1, 0, LH), xH.key + 1
      }
      serialize() {
        const HH = {};
        HH.name = this.name, HH.property = this.targetProperty, HH.framePerSecond = this.framePerSecond, HH.dataType = this.dataType, HH.loopBehavior = this.mB, HH.enableBlending = this.enableBlending, HH.blendingSpeed = this.blendingSpeed;
        const BH = this.dataType;
        HH.keys = [];
        const LH = this.getKeys();
        for (let AH = 0; AH < LH.length; AH++) {
          const rH = LH[AH],
            SH = {};
          switch (SH.frame = rH.frame, BH) {
            case vH.ANIMATIONTYPE_FLOAT:
              SH.values = [rH.value], void 0 !== rH.inTangent && SH.values.push(rH.inTangent), void 0 !== rH.outTangent && (void 0 === rH.inTangent && SH.values.push(void 0), SH.values.push(rH.outTangent)), void 0 !== rH.interpolation && (void 0 === rH.inTangent && SH.values.push(void 0), void 0 === rH.outTangent && SH.values.push(void 0), SH.values.push(rH.interpolation));
              break;
            case vH.ANIMATIONTYPE_QUATERNION:
            case vH.ANIMATIONTYPE_MATRIX:
            case vH.ANIMATIONTYPE_VECTOR3:
            case vH.ANIMATIONTYPE_COLOR3:
            case vH.ANIMATIONTYPE_COLOR4:
              SH.values = rH.value.xrH(), void 0 != rH.inTangent && SH.values.push(rH.inTangent.xrH()), void 0 != rH.outTangent && (void 0 === rH.inTangent && SH.values.push(void 0), SH.values.push(rH.outTangent.xrH())), void 0 !== rH.interpolation && (void 0 === rH.inTangent && SH.values.push(void 0), void 0 === rH.outTangent && SH.values.push(void 0), SH.values.push(rH.interpolation))
          }
          HH.keys.push(SH)
        }
        HH.rW = [];
        for (const AH in this._ranges) {
          const BH = this._ranges[AH];
          if (!BH) continue;
          const LH = {};
          LH.name = AH, LH.from = BH.from, LH.to = BH.to, HH.rW.push(LH)
        }
        return HH
      }
      static _UniversalLerp(HH, BH, LH) {
        const AH = HH.constructor;
        return AH.Lerp ? AH.Lerp(HH, BH, LH) : AH.Slerp ? AH.Slerp(HH, BH, LH) : HH.toFixed ? HH * (1 - LH) + LH * BH : BH
      }
    }

    function PH(HH, BH, LH) {
      let rH;
      rH = "object" === typeof BH ? BH : {
        referenceFrame: BH ?? 0,
        range: LH,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let SH = HH;
      rH.cloneOriginalAnimation && (SH = HH.clone(), SH.name = rH.clonedAnimationName || SH.name);
      const hH = SH.getKeys();
      if (!hH.length) return SH;
      const tH = rH.referenceFrame && rH.referenceFrame >= 0 ? rH.referenceFrame : 0;
      let zH = 0;
      const CH = hH[0];
      let EH = hH.length - 1;
      const XH = hH[EH],
        GH = {
          referenceValue: CH.value,
          referencePosition: AH.l.lu[0],
          referenceQuaternion: AH.l.Quaternion[0],
          referenceScaling: AH.l.lu[1],
          keyPosition: AH.l.lu[2],
          keyQuaternion: AH.l.Quaternion[1],
          keyScaling: AH.l.lu[3]
        };
      let YH = CH.frame,
        uH = XH.frame;
      if (rH.range) {
        const HH = SH.getRange(rH.range);
        HH && (YH = HH.from, uH = HH.to)
      } else YH = rH.fromFrame ?? YH, uH = rH.toFrame ?? uH;
      YH !== CH.frame && (zH = SH.createKeyForFrame(YH)), uH !== XH.frame && (EH = SH.createKeyForFrame(uH));
      const QH = SH.getKeys();
      if (1 === QH.length) {
        const HH = SH._getKeyValue(QH[0].value);
        GH.referenceValue = HH.clone ? HH.clone() : HH
      } else if (tH <= CH.frame) {
        const HH = SH._getKeyValue(CH.value);
        GH.referenceValue = HH.clone ? HH.clone() : HH
      } else if (tH >= XH.frame) {
        const HH = SH._getKeyValue(XH.value);
        GH.referenceValue = HH.clone ? HH.clone() : HH
      } else {
        xH.key = 0;
        const HH = SH._interpolate(tH, xH);
        GH.referenceValue = HH.clone ? HH.clone() : HH
      }
      SH.dataType === vH.ANIMATIONTYPE_QUATERNION ? GH.referenceValue.normalize().conjugateInPlace() : SH.dataType === vH.ANIMATIONTYPE_MATRIX && (GH.referenceValue.decompose(GH.referenceScaling, GH.referenceQuaternion, GH.referencePosition), GH.referenceQuaternion.normalize().conjugateInPlace());
      let WH = Number.MAX_VALUE;
      const MH = rH.clipKeys ? [] : null;
      for (let xH = zH; xH <= EH; xH++) {
        let HH = QH[xH];
        if ((MH || rH.cloneOriginalAnimation) && (HH = {
            frame: HH.frame,
            value: HH.value.clone ? HH.value.clone() : HH.value,
            inTangent: HH.inTangent,
            outTangent: HH.outTangent,
            interpolation: HH.interpolation,
            lockedTangent: HH.lockedTangent,
            easingFunction: HH.easingFunction
          }, MH && (WH === Number.MAX_VALUE && (WH = HH.frame), HH.frame -= WH, MH.push(HH))), !xH || SH.dataType === vH.ANIMATIONTYPE_FLOAT || HH.value !== CH.value) switch (SH.dataType) {
          case vH.ANIMATIONTYPE_MATRIX:
            HH.value.decompose(GH.keyScaling, GH.keyQuaternion, GH.keyPosition), GH.keyPosition.grH(GH.referencePosition), GH.keyScaling.divideInPlace(GH.referenceScaling), GH.referenceQuaternion.multiplyToRef(GH.keyQuaternion, GH.keyQuaternion), AH.e.ComposeToRef(GH.keyScaling, GH.keyQuaternion, GH.keyPosition, HH.value);
            break;
          case vH.ANIMATIONTYPE_QUATERNION:
            GH.referenceValue.multiplyToRef(HH.value, HH.value);
            break;
          case vH.ANIMATIONTYPE_VECTOR2:
          case vH.ANIMATIONTYPE_VECTOR3:
          case vH.ANIMATIONTYPE_COLOR3:
          case vH.ANIMATIONTYPE_COLOR4:
            HH.value.subtractToRef(GH.referenceValue, HH.value);
            break;
          case vH.ANIMATIONTYPE_SIZE:
            HH.value.width -= GH.referenceValue.width, HH.value.height -= GH.referenceValue.height;
            break;
          default:
            HH.value -= GH.referenceValue
        }
      }
      return MH && SH.setKeys(MH, !0), SH
    }

    function TH(HH, BH, LH, AH) {
      const rH = new vH(HH + "Animation", HH, LH, BH, vH.ANIMATIONLOOPMODE_CONSTANT);
      return rH.setEasingFunction(AH), rH
    }

    function UH(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
      const XH = vH._PrepareAnimation(HH, LH, AH, rH, SH, hH, tH, zH);
      return XH ? (BH.yN && (EH = BH.yN()), EH ? EH.beginDirectAnimation(BH, [XH], 0, rH, XH.mB !== vH.ANIMATIONLOOPMODE_CONSTANT, 1, CH) : null) : null
    }

    function VH(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
      const XH = vH._PrepareAnimation(HH, AH, rH, SH, hH, tH, zH, CH);
      if (!XH) return null;
      return BH.yN().beginDirectHierarchyAnimation(BH, LH, [XH], 0, SH, 1 === XH.mB, 1, EH)
    }

    function OH(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
      const EH = vH._PrepareAnimation(HH, LH, AH, rH, SH, hH, tH, zH);
      return EH ? (BH.animations.push(EH), BH.yN().beginAnimation(BH, 0, rH, 1 === EH.mB, 1, CH)) : null
    }

    function bH(HH, BH, LH, AH, rH, SH, hH) {
      let tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        zH = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        CH = arguments.length > 9 ? arguments[9] : void 0;
      if (hH <= 0) return LH[HH] = BH, tH && tH(), null;
      const EH = rH * (hH / 1e3);
      SH.setKeys(CH ?? [{
        frame: 0,
        value: LH[HH].clone ? LH[HH].clone() : LH[HH]
      }, {
        frame: EH,
        value: BH
      }]), LH.animations || (LH.animations = []), LH.animations.push(SH);
      return AH.beginAnimation(LH, 0, EH, !1, 1, tH ?? void 0, void 0, zH)
    }

    function kH(HH, BH) {
      EH.c.AppendSerializedAnimations(HH, BH)
    }

    function mH(HH) {
      const BH = new vH(HH.name, HH.property, HH.framePerSecond, HH.dataType, HH.loopBehavior),
        LH = HH.dataType,
        SH = [];
      let hH, tH;
      for (HH.enableBlending && (BH.enableBlending = HH.enableBlending), HH.blendingSpeed && (BH.blendingSpeed = HH.blendingSpeed), tH = 0; tH < HH.keys.length; tH++) {
        const BH = HH.keys[tH];
        let zH, CH, EH;
        switch (LH) {
          case vH.ANIMATIONTYPE_FLOAT:
            hH = BH.values[0], BH.values.length >= 2 && (zH = BH.values[1]), BH.values.length >= 3 && (CH = BH.values[2]), BH.values.length >= 4 && (EH = BH.values[3]);
            break;
          case vH.ANIMATIONTYPE_QUATERNION:
            if (hH = AH.f.FromArray(BH.values), BH.values.length >= 8) {
              const HH = AH.f.FromArray(BH.values.slice(4, 8));
              HH.equals(AH.f.Zero()) || (zH = HH)
            }
            if (BH.values.length >= 12) {
              const HH = AH.f.FromArray(BH.values.slice(8, 12));
              HH.equals(AH.f.Zero()) || (CH = HH)
            }
            BH.values.length >= 13 && (EH = BH.values[12]);
            break;
          case vH.ANIMATIONTYPE_MATRIX:
            hH = AH.e.FromArray(BH.values), BH.values.length >= 17 && (EH = BH.values[16]);
            break;
          case vH.ANIMATIONTYPE_COLOR3:
            hH = rH.c.FromArray(BH.values), BH.values[3] && (zH = rH.c.FromArray(BH.values[3])), BH.values[4] && (CH = rH.c.FromArray(BH.values[4])), BH.values[5] && (EH = BH.values[5]);
            break;
          case vH.ANIMATIONTYPE_COLOR4:
            hH = rH.g.FromArray(BH.values), BH.values[4] && (zH = rH.g.FromArray(BH.values[4])), BH.values[5] && (CH = rH.g.FromArray(BH.values[5])), BH.values[6] && (EH = BH.values[6]);
            break;
          case vH.ANIMATIONTYPE_VECTOR3:
          default:
            hH = AH.o.FromArray(BH.values), BH.values[3] && (zH = AH.o.FromArray(BH.values[3])), BH.values[4] && (CH = AH.o.FromArray(BH.values[4])), BH.values[5] && (EH = BH.values[5])
        }
        const XH = {};
        XH.frame = BH.frame, XH.value = hH, void 0 != zH && (XH.inTangent = zH), void 0 != CH && (XH.outTangent = CH), void 0 != EH && (XH.interpolation = EH), SH.push(XH)
      }
      if (BH.setKeys(SH), HH.rW)
        for (tH = 0; tH < HH.rW.length; tH++) hH = HH.rW[tH], BH.createRange(hH.name, hH.from, hH.to);
      return BH
    }
    async function oH(HH, BH) {
      return await new Promise(((LH, AH) => {
        const rH = new CH.d;
        rH.addEventListener("readystatechange", (() => {
          if (4 == rH.readyState)
            if (200 == rH.status) {
              let BH = JSON.parse(rH.responseText);
              if (BH.animations && (BH = BH.animations), BH.length) {
                const HH = [];
                for (const LH of BH) HH.push(mH(LH));
                LH(HH)
              } else {
                const AH = mH(BH);
                HH && (AH.name = HH), LH(AH)
              }
            } else AH("Unable to load the animation")
        })), rH.open("GET", BH), rH.send()
      }))
    }
    async function IH(HH) {
      const BH = this?.SnippetUrl ?? vH.SnippetUrl;
      return await new Promise(((LH, AH) => {
        const rH = new CH.d;
        rH.addEventListener("readystatechange", (() => {
          if (4 == rH.readyState)
            if (200 == rH.status) {
              const BH = JSON.parse(JSON.parse(rH.responseText).jsonPayload);
              if (BH.animations) {
                const AH = JSON.parse(BH.animations),
                  rH = [];
                for (const BH of AH.animations) {
                  const LH = mH(BH);
                  LH.snippetId = HH, rH.push(LH)
                }
                LH(rH)
              } else {
                const AH = mH(JSON.parse(BH.animation));
                AH.snippetId = HH, LH(AH)
              }
            } else AH("Unable to load the snippet " + HH)
        })), rH.open("GET", BH + "/" + HH.replace(/#/g, "/")), rH.send()
      }))
    }
    vH._UniqueIdGenerator = 0, vH.AllowMatricesInterpolation = !1, vH.AllowMatrixDecomposeForInterpolation = !0, vH.InheritOriginalValueFromActiveAnimations = !1, vH.SnippetUrl = "https://snippet.babylonjs.com", vH.ANIMATIONTYPE_FLOAT = 0, vH.ANIMATIONTYPE_VECTOR3 = 1, vH.ANIMATIONTYPE_QUATERNION = 2, vH.ANIMATIONTYPE_MATRIX = 3, vH.ANIMATIONTYPE_COLOR3 = 4, vH.ANIMATIONTYPE_COLOR4 = 7, vH.ANIMATIONTYPE_VECTOR2 = 5, vH.ANIMATIONTYPE_SIZE = 6, vH.ANIMATIONLOOPMODE_RELATIVE = 0, vH.ANIMATIONLOOPMODE_CYCLE = 1, vH.ANIMATIONLOOPMODE_CONSTANT = 2, vH.ANIMATIONLOOPMODE_YOYO = 4, vH.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const fH = IH;
    let lH = !1;

    function KH() {
      lH || (lH = !0, vH.Parse = mH, vH.ParseFromFileAsync = oH, vH.ParseFromSnippetAsync = IH, vH.CreateFromSnippetAsync = fH, vH.CreateAnimation = TH, vH.CreateAndStartAnimation = UH, vH.CreateAndStartHierarchyAnimation = VH, vH.CreateMergeAndStartAnimation = OH, vH.MakeAnimationAdditive = PH, vH.TransitionTo = bH, vH.AppendSerializedAnimations = kH, (0, XH.f)("BABYLON.Animation", vH), tH.b._AnimationRangeFactory = (HH, BH, LH) => new hH.b(HH, BH, LH))
    }
  },
  42405: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH
    });
    class AH {
      constructor(HH, BH, LH) {
        this.name = HH, this.from = BH, this.to = LH
      }
      clone() {
        return new AH(this.name, this.from, this.to)
      }
    }
  },
  42455: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH.b,
      e: () => AH.i
    });
    var AH = LH(41427);
    (0, AH.d)()
  },
  42434: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => AH.g
    });
    var AH = LH(41777);
    (0, AH.d)()
  },
  42418: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => AH.c
    });
    var AH = LH(41762);
    (0, AH.e)()
  },
  42458: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH.c
    });
    var AH = LH(41693);
    (0, AH.g)()
  },
  42414: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH.e
    });
    var AH = LH(41738);
    (0, AH.d)()
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);