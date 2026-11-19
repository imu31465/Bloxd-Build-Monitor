export const id = 281;
export const ids = [281];
export const modules = {
  40303: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => mY,
      h: () => CY,
      l: () => oY,
      o: () => WY,
      s: () => sY,
      t: () => QY,
      u: () => yY,
      y: () => iY
    });
    var FY = DY(36524),
      AY = DY(36588),
      IY = DY(36559),
      RY = DY(40305),
      OY = DY(39347),
      gY = DY(39139),
      aY = DY(39169),
      vY = DY(39144),
      uY = DY(36569);
    const sY = Object.freeze(new FY.g(0, 0, 0, 0)),
      iY = Object.freeze(FY.r.Zero()),
      yY = Object.freeze(FY.q.Zero()),
      QY = Object.freeze(gY.e.Zero()),
      oY = Object.freeze(AY.c.Black()),
      WY = Object.freeze(new AY.d(0, 0, 0, 0)),
      EY = {
        key: 0,
        repeatCount: 0,
        YA: 2
      };
    class mY {
      static _PrepareAnimation(YY, rY, DY, IY, RY, OY, aY, vY) {
        let uY;
        if (!isNaN(parseFloat(RY)) && isFinite(RY) ? uY = mY.ANIMATIONTYPE_FLOAT : RY instanceof FY.g ? uY = mY.ANIMATIONTYPE_QUATERNION : RY instanceof FY.r ? uY = mY.ANIMATIONTYPE_VECTOR3 : RY instanceof FY.q ? uY = mY.ANIMATIONTYPE_VECTOR2 : RY instanceof AY.c ? uY = mY.ANIMATIONTYPE_COLOR3 : RY instanceof AY.d ? uY = mY.ANIMATIONTYPE_COLOR4 : RY instanceof gY.e && (uY = mY.ANIMATIONTYPE_SIZE), void 0 == uY) return null;
        const sY = new mY(YY, rY, DY, uY, aY),
          iY = [{
            frame: 0,
            value: RY
          }, {
            frame: IY,
            value: OY
          }];
        return sY.setKeys(iY), void 0 !== vY && sY.setEasingFunction(vY), sY
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const YY of this._runtimeAnimations)
          if (!YY.isStopped()) return !0;
        return !1
      }
      constructor(YY, rY, DY, FY, AY, IY) {
        this.name = YY, this.targetProperty = rY, this.framePerSecond = DY, this.dataType = FY, this.YA = AY, this.enableBlending = IY, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = rY.split("."), this.dataType = FY, this.YA = void 0 === AY ? mY.ANIMATIONLOOPMODE_CYCLE : AY, this.uniqueId = mY._UniqueIdGenerator++
      }
      toString(YY) {
        let rY = "Name: " + this.name + ", property: " + this.targetProperty;
        if (rY += ", datatype: " + ["Float", "xy", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], rY += ", nKeys: " + (this._keys ? this._keys.length : "none"), rY += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), YY) {
          rY += ", Ranges: {";
          let YY = !0;
          for (const DY in this._ranges) YY || (rY += ", "), YY = !1, rY += DY;
          rY += "}"
        }
        return rY
      }
      addEvent(YY) {
        this._events.push(YY), this._events.sort(((YY, rY) => YY.frame - rY.frame))
      }
      removeEvents(YY) {
        for (let rY = 0; rY < this._events.length; rY++) this._events[rY].frame === YY && (this._events.splice(rY, 1), rY--)
      }
      getEvents() {
        return this._events
      }
      createRange(YY, rY, DY) {
        this._ranges[YY] || (this._ranges[YY] = new RY.c(YY, rY, DY))
      }
      deleteRange(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const DY = this._ranges[YY];
        if (DY) {
          if (rY) {
            const YY = DY.from,
              rY = DY.to;
            for (let DY = this._keys.length - 1; DY >= 0; DY--) this._keys[DY].frame >= YY && this._keys[DY].frame <= rY && this._keys.splice(DY, 1)
          }
          this._ranges[YY] = null
        }
      }
      getRange(YY) {
        return this._ranges[YY]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let YY = 0;
        for (let rY = 0, DY = this._keys.length; rY < DY; rY++) YY < this._keys[rY].frame && (YY = this._keys[rY].frame);
        return YY
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(YY) {
        this._easingFunction = YY
      }
      floatInterpolateFunction(YY, rY, DY) {
        return (0, IY.Lerp)(YY, rY, DY)
      }
      floatInterpolateFunctionWithTangents(YY, rY, DY, FY, AY) {
        return (0, IY.Hermite)(YY, rY, DY, FY, AY)
      }
      quaternionInterpolateFunction(YY, rY, DY) {
        return FY.g.Slerp(YY, rY, DY)
      }
      quaternionInterpolateFunctionWithTangents(YY, rY, DY, AY, IY) {
        return FY.g.Hermite(YY, rY, DY, AY, IY).normalize()
      }
      vector3InterpolateFunction(YY, rY, DY) {
        return FY.r.Lerp(YY, rY, DY)
      }
      vector3InterpolateFunctionWithTangents(YY, rY, DY, AY, IY) {
        return FY.r.Hermite(YY, rY, DY, AY, IY)
      }
      vector2InterpolateFunction(YY, rY, DY) {
        return FY.q.Lerp(YY, rY, DY)
      }
      vector2InterpolateFunctionWithTangents(YY, rY, DY, AY, IY) {
        return FY.q.Hermite(YY, rY, DY, AY, IY)
      }
      sizeInterpolateFunction(YY, rY, DY) {
        return gY.e.Lerp(YY, rY, DY)
      }
      color3InterpolateFunction(YY, rY, DY) {
        return AY.c.Lerp(YY, rY, DY)
      }
      color3InterpolateFunctionWithTangents(YY, rY, DY, FY, IY) {
        return AY.c.Hermite(YY, rY, DY, FY, IY)
      }
      color4InterpolateFunction(YY, rY, DY) {
        return AY.d.Lerp(YY, rY, DY)
      }
      color4InterpolateFunctionWithTangents(YY, rY, DY, FY, IY) {
        return AY.d.Hermite(YY, rY, DY, FY, IY)
      }
      _getKeyValue(YY) {
        return "function" === typeof YY ? YY() : YY
      }
      evaluate(YY) {
        return EY.key = 0, this._interpolate(YY, EY)
      }
      _interpolate(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (rY.YA === mY.ANIMATIONLOOPMODE_CONSTANT && rY.repeatCount > 0) return rY.highLimitValue.clone ? rY.highLimitValue.clone() : rY.highLimitValue;
        const FY = this._keys;
        let AY;
        if (this._coreAnimation) AY = this._coreAnimation._key;
        else {
          const IY = FY.length;
          for (AY = rY.key; AY >= 0 && YY < FY[AY].frame;) --AY;
          for (; AY + 1 <= IY - 1 && YY >= FY[AY + 1].frame;) ++AY;
          if (rY.key = AY, AY < 0) return DY ? void 0 : this._getKeyValue(FY[0].value);
          if (AY + 1 > IY - 1) return DY ? void 0 : this._getKeyValue(FY[IY - 1].value);
          this._key = AY
        }
        const IY = FY[AY],
          RY = FY[AY + 1];
        if (DY && (YY === IY.frame || YY === RY.frame)) return;
        const OY = this._getKeyValue(IY.value),
          gY = this._getKeyValue(RY.value);
        if (1 === IY.interpolation) return RY.frame > YY ? OY : gY;
        const aY = void 0 !== IY.outTangent && void 0 !== RY.inTangent,
          vY = RY.frame - IY.frame;
        let uY = (YY - IY.frame) / vY;
        const EY = IY.easingFunction || this.getEasingFunction();
        switch (EY && (uY = EY.ease(uY)), this.dataType) {
          case mY.ANIMATIONTYPE_FLOAT: {
            const YY = aY ? this.floatInterpolateFunctionWithTangents(OY, IY.outTangent * vY, gY, RY.inTangent * vY, uY) : this.floatInterpolateFunction(OY, gY, uY);
            switch (rY.YA) {
              case mY.ANIMATIONLOOPMODE_CYCLE:
              case mY.ANIMATIONLOOPMODE_CONSTANT:
              case mY.ANIMATIONLOOPMODE_YOYO:
                return YY;
              case mY.ANIMATIONLOOPMODE_RELATIVE:
              case mY.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (rY.offsetValue ?? 0) * rY.repeatCount + YY
            }
            break
          }
          case mY.ANIMATIONTYPE_QUATERNION: {
            const YY = aY ? this.quaternionInterpolateFunctionWithTangents(OY, IY.outTangent.scale(vY), gY, RY.inTangent.scale(vY), uY) : this.quaternionInterpolateFunction(OY, gY, uY);
            switch (rY.YA) {
              case mY.ANIMATIONLOOPMODE_CYCLE:
              case mY.ANIMATIONLOOPMODE_CONSTANT:
              case mY.ANIMATIONLOOPMODE_YOYO:
                return YY;
              case mY.ANIMATIONLOOPMODE_RELATIVE:
              case mY.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return YY.addInPlace((rY.offsetValue || sY).scale(rY.repeatCount))
            }
            return YY
          }
          case mY.ANIMATIONTYPE_VECTOR3: {
            const YY = aY ? this.vector3InterpolateFunctionWithTangents(OY, IY.outTangent.scale(vY), gY, RY.inTangent.scale(vY), uY) : this.vector3InterpolateFunction(OY, gY, uY);
            switch (rY.YA) {
              case mY.ANIMATIONLOOPMODE_CYCLE:
              case mY.ANIMATIONLOOPMODE_CONSTANT:
              case mY.ANIMATIONLOOPMODE_YOYO:
                return YY;
              case mY.ANIMATIONLOOPMODE_RELATIVE:
              case mY.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return YY.add((rY.offsetValue || iY).scale(rY.repeatCount))
            }
            break
          }
          case mY.ANIMATIONTYPE_VECTOR2: {
            const YY = aY ? this.vector2InterpolateFunctionWithTangents(OY, IY.outTangent.scale(vY), gY, RY.inTangent.scale(vY), uY) : this.vector2InterpolateFunction(OY, gY, uY);
            switch (rY.YA) {
              case mY.ANIMATIONLOOPMODE_CYCLE:
              case mY.ANIMATIONLOOPMODE_CONSTANT:
              case mY.ANIMATIONLOOPMODE_YOYO:
                return YY;
              case mY.ANIMATIONLOOPMODE_RELATIVE:
              case mY.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return YY.add((rY.offsetValue || yY).scale(rY.repeatCount))
            }
            break
          }
          case mY.ANIMATIONTYPE_SIZE:
            switch (rY.YA) {
              case mY.ANIMATIONLOOPMODE_CYCLE:
              case mY.ANIMATIONLOOPMODE_CONSTANT:
              case mY.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(OY, gY, uY);
              case mY.ANIMATIONLOOPMODE_RELATIVE:
              case mY.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(OY, gY, uY).add((rY.offsetValue || QY).scale(rY.repeatCount))
            }
            break;
          case mY.ANIMATIONTYPE_COLOR3: {
            const YY = aY ? this.color3InterpolateFunctionWithTangents(OY, IY.outTangent.scale(vY), gY, RY.inTangent.scale(vY), uY) : this.color3InterpolateFunction(OY, gY, uY);
            switch (rY.YA) {
              case mY.ANIMATIONLOOPMODE_CYCLE:
              case mY.ANIMATIONLOOPMODE_CONSTANT:
              case mY.ANIMATIONLOOPMODE_YOYO:
                return YY;
              case mY.ANIMATIONLOOPMODE_RELATIVE:
              case mY.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return YY.add((rY.offsetValue || oY).scale(rY.repeatCount))
            }
            break
          }
          case mY.ANIMATIONTYPE_COLOR4: {
            const YY = aY ? this.color4InterpolateFunctionWithTangents(OY, IY.outTangent.scale(vY), gY, RY.inTangent.scale(vY), uY) : this.color4InterpolateFunction(OY, gY, uY);
            switch (rY.YA) {
              case mY.ANIMATIONLOOPMODE_CYCLE:
              case mY.ANIMATIONLOOPMODE_CONSTANT:
              case mY.ANIMATIONLOOPMODE_YOYO:
                return YY;
              case mY.ANIMATIONLOOPMODE_RELATIVE:
              case mY.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return YY.add((rY.offsetValue || WY).scale(rY.repeatCount))
            }
            break
          }
          case mY.ANIMATIONTYPE_MATRIX:
            switch (rY.YA) {
              case mY.ANIMATIONLOOPMODE_CYCLE:
              case mY.ANIMATIONLOOPMODE_CONSTANT:
              case mY.ANIMATIONLOOPMODE_YOYO:
                return mY.AllowMatricesInterpolation ? this.matrixInterpolateFunction(OY, gY, uY, rY.workValue) : OY;
              case mY.ANIMATIONLOOPMODE_RELATIVE:
              case mY.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return OY
            }
        }
        return 0
      }
      matrixInterpolateFunction(YY, rY, DY, AY) {
        return mY.AllowMatrixDecomposeForInterpolation ? AY ? (FY.e.DecomposeLerpToRef(YY, rY, DY, AY), AY) : FY.e.DecomposeLerp(YY, rY, DY) : AY ? (FY.e.LerpToRef(YY, rY, DY, AY), AY) : FY.e.Lerp(YY, rY, DY)
      }
      clone() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rY = new mY(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.YA);
        if (rY.enableBlending = this.enableBlending, rY.blendingSpeed = this.blendingSpeed, this._keys && rY.setKeys(this._keys, !1, YY), this._ranges) {
          rY._ranges = {};
          for (const YY in this._ranges) {
            const DY = this._ranges[YY];
            DY && (rY._ranges[YY] = DY.clone())
          }
        }
        return rY
      }
      setKeys(YY) {
        let rY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = YY;
        else if (this._keys = YY.slice(0), rY)
          for (let DY = 0; DY < this._keys.length; DY++) {
            const YY = this._keys[DY];
            this._keys[DY] = {
              frame: YY.frame,
              value: YY.value.clone ? YY.value.clone() : YY.value,
              inTangent: YY.inTangent && YY.inTangent.clone ? YY.inTangent.clone() : YY.inTangent,
              outTangent: YY.outTangent && YY.outTangent.clone ? YY.outTangent.clone() : YY.outTangent,
              interpolation: YY.interpolation,
              lockedTangent: YY.lockedTangent,
              easingFunction: YY.easingFunction
            }
          }
      }
      createKeyForFrame(YY) {
        EY.key = 0;
        const rY = this._interpolate(YY, EY, !0);
        if (!rY) return this._keys[EY.key].frame === YY ? EY.key : EY.key + 1;
        const DY = {
          frame: YY,
          value: rY.clone ? rY.clone() : rY
        };
        return this._keys.splice(EY.key + 1, 0, DY), EY.key + 1
      }
      serialize() {
        const YY = {};
        YY.name = this.name, YY.property = this.targetProperty, YY.framePerSecond = this.framePerSecond, YY.dataType = this.dataType, YY.loopBehavior = this.YA, YY.enableBlending = this.enableBlending, YY.blendingSpeed = this.blendingSpeed;
        const rY = this.dataType;
        YY.keys = [];
        const DY = this.getKeys();
        for (let FY = 0; FY < DY.length; FY++) {
          const AY = DY[FY],
            IY = {};
          switch (IY.frame = AY.frame, rY) {
            case mY.ANIMATIONTYPE_FLOAT:
              IY.values = [AY.value], void 0 !== AY.inTangent && IY.values.push(AY.inTangent), void 0 !== AY.outTangent && (void 0 === AY.inTangent && IY.values.push(void 0), IY.values.push(AY.outTangent)), void 0 !== AY.interpolation && (void 0 === AY.inTangent && IY.values.push(void 0), void 0 === AY.outTangent && IY.values.push(void 0), IY.values.push(AY.interpolation));
              break;
            case mY.ANIMATIONTYPE_QUATERNION:
            case mY.ANIMATIONTYPE_MATRIX:
            case mY.ANIMATIONTYPE_VECTOR3:
            case mY.ANIMATIONTYPE_COLOR3:
            case mY.ANIMATIONTYPE_COLOR4:
              IY.values = AY.value.VDY(), void 0 != AY.inTangent && IY.values.push(AY.inTangent.VDY()), void 0 != AY.outTangent && (void 0 === AY.inTangent && IY.values.push(void 0), IY.values.push(AY.outTangent.VDY())), void 0 !== AY.interpolation && (void 0 === AY.inTangent && IY.values.push(void 0), void 0 === AY.outTangent && IY.values.push(void 0), IY.values.push(AY.interpolation))
          }
          YY.keys.push(IY)
        }
        YY.ws = [];
        for (const FY in this._ranges) {
          const rY = this._ranges[FY];
          if (!rY) continue;
          const DY = {};
          DY.name = FY, DY.from = rY.from, DY.to = rY.to, YY.ws.push(DY)
        }
        return YY
      }
      static _UniversalLerp(YY, rY, DY) {
        const FY = YY.constructor;
        return FY.Lerp ? FY.Lerp(YY, rY, DY) : FY.Slerp ? FY.Slerp(YY, rY, DY) : YY.toFixed ? YY * (1 - DY) + DY * rY : rY
      }
    }

    function VY(YY, rY, DY) {
      let AY;
      AY = "object" === typeof rY ? rY : {
        referenceFrame: rY ?? 0,
        range: DY,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let IY = YY;
      AY.cloneOriginalAnimation && (IY = YY.clone(), IY.name = AY.clonedAnimationName || IY.name);
      const RY = IY.getKeys();
      if (!RY.length) return IY;
      const OY = AY.referenceFrame && AY.referenceFrame >= 0 ? AY.referenceFrame : 0;
      let gY = 0;
      const aY = RY[0];
      let vY = RY.length - 1;
      const uY = RY[vY],
        sY = {
          referenceValue: aY.value,
          referencePosition: FY.n.xy[0],
          referenceQuaternion: FY.n.Quaternion[0],
          referenceScaling: FY.n.xy[1],
          keyPosition: FY.n.xy[2],
          keyQuaternion: FY.n.Quaternion[1],
          keyScaling: FY.n.xy[3]
        };
      let iY = aY.frame,
        yY = uY.frame;
      if (AY.range) {
        const YY = IY.getRange(AY.range);
        YY && (iY = YY.from, yY = YY.to)
      } else iY = AY.fromFrame ?? iY, yY = AY.toFrame ?? yY;
      iY !== aY.frame && (gY = IY.createKeyForFrame(iY)), yY !== uY.frame && (vY = IY.createKeyForFrame(yY));
      const QY = IY.getKeys();
      if (1 === QY.length) {
        const YY = IY._getKeyValue(QY[0].value);
        sY.referenceValue = YY.clone ? YY.clone() : YY
      } else if (OY <= aY.frame) {
        const YY = IY._getKeyValue(aY.value);
        sY.referenceValue = YY.clone ? YY.clone() : YY
      } else if (OY >= uY.frame) {
        const YY = IY._getKeyValue(uY.value);
        sY.referenceValue = YY.clone ? YY.clone() : YY
      } else {
        EY.key = 0;
        const YY = IY._interpolate(OY, EY);
        sY.referenceValue = YY.clone ? YY.clone() : YY
      }
      IY.dataType === mY.ANIMATIONTYPE_QUATERNION ? sY.referenceValue.normalize().conjugateInPlace() : IY.dataType === mY.ANIMATIONTYPE_MATRIX && (sY.referenceValue.decompose(sY.referenceScaling, sY.referenceQuaternion, sY.referencePosition), sY.referenceQuaternion.normalize().conjugateInPlace());
      let oY = Number.MAX_VALUE;
      const WY = AY.clipKeys ? [] : null;
      for (let EY = gY; EY <= vY; EY++) {
        let YY = QY[EY];
        if ((WY || AY.cloneOriginalAnimation) && (YY = {
            frame: YY.frame,
            value: YY.value.clone ? YY.value.clone() : YY.value,
            inTangent: YY.inTangent,
            outTangent: YY.outTangent,
            interpolation: YY.interpolation,
            lockedTangent: YY.lockedTangent,
            easingFunction: YY.easingFunction
          }, WY && (oY === Number.MAX_VALUE && (oY = YY.frame), YY.frame -= oY, WY.push(YY))), !EY || IY.dataType === mY.ANIMATIONTYPE_FLOAT || YY.value !== aY.value) switch (IY.dataType) {
          case mY.ANIMATIONTYPE_MATRIX:
            YY.value.decompose(sY.keyScaling, sY.keyQuaternion, sY.keyPosition), sY.keyPosition.dDY(sY.referencePosition), sY.keyScaling.divideInPlace(sY.referenceScaling), sY.referenceQuaternion.multiplyToRef(sY.keyQuaternion, sY.keyQuaternion), FY.e.ComposeToRef(sY.keyScaling, sY.keyQuaternion, sY.keyPosition, YY.value);
            break;
          case mY.ANIMATIONTYPE_QUATERNION:
            sY.referenceValue.multiplyToRef(YY.value, YY.value);
            break;
          case mY.ANIMATIONTYPE_VECTOR2:
          case mY.ANIMATIONTYPE_VECTOR3:
          case mY.ANIMATIONTYPE_COLOR3:
          case mY.ANIMATIONTYPE_COLOR4:
            YY.value.subtractToRef(sY.referenceValue, YY.value);
            break;
          case mY.ANIMATIONTYPE_SIZE:
            YY.value.width -= sY.referenceValue.width, YY.value.height -= sY.referenceValue.height;
            break;
          default:
            YY.value -= sY.referenceValue
        }
      }
      return WY && IY.setKeys(WY, !0), IY
    }

    function SY(YY, rY, DY, FY) {
      const AY = new mY(YY + "Animation", YY, DY, rY, mY.ANIMATIONLOOPMODE_CONSTANT);
      return AY.setEasingFunction(FY), AY
    }

    function lY(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY) {
      const uY = mY._PrepareAnimation(YY, DY, FY, AY, IY, RY, OY, gY);
      return uY ? (rY.hT && (vY = rY.hT()), vY ? vY.beginDirectAnimation(rY, [uY], 0, AY, uY.YA !== mY.ANIMATIONLOOPMODE_CONSTANT, 1, aY) : null) : null
    }

    function TY(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY) {
      const uY = mY._PrepareAnimation(YY, FY, AY, IY, RY, OY, gY, aY);
      if (!uY) return null;
      return rY.hT().beginDirectHierarchyAnimation(rY, DY, [uY], 0, IY, 1 === uY.YA, 1, vY)
    }

    function eY(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY) {
      const vY = mY._PrepareAnimation(YY, DY, FY, AY, IY, RY, OY, gY);
      return vY ? (rY.animations.push(vY), rY.hT().beginAnimation(rY, 0, AY, 1 === vY.YA, 1, aY)) : null
    }

    function NY(YY, rY, DY, FY, AY, IY, RY) {
      let OY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        gY = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        aY = arguments.length > 9 ? arguments[9] : void 0;
      if (RY <= 0) return DY[YY] = rY, OY && OY(), null;
      const vY = AY * (RY / 1e3);
      IY.setKeys(aY ?? [{
        frame: 0,
        value: DY[YY].clone ? DY[YY].clone() : DY[YY]
      }, {
        frame: vY,
        value: rY
      }]), DY.animations || (DY.animations = []), DY.animations.push(IY);
      return FY.beginAnimation(DY, 0, vY, !1, 1, OY ?? void 0, void 0, gY)
    }

    function BY(YY, rY) {
      vY.b.AppendSerializedAnimations(YY, rY)
    }

    function cY(YY) {
      const rY = new mY(YY.name, YY.property, YY.framePerSecond, YY.dataType, YY.loopBehavior),
        DY = YY.dataType,
        IY = [];
      let RY, OY;
      for (YY.enableBlending && (rY.enableBlending = YY.enableBlending), YY.blendingSpeed && (rY.blendingSpeed = YY.blendingSpeed), OY = 0; OY < YY.keys.length; OY++) {
        const rY = YY.keys[OY];
        let gY, aY, vY;
        switch (DY) {
          case mY.ANIMATIONTYPE_FLOAT:
            RY = rY.values[0], rY.values.length >= 2 && (gY = rY.values[1]), rY.values.length >= 3 && (aY = rY.values[2]), rY.values.length >= 4 && (vY = rY.values[3]);
            break;
          case mY.ANIMATIONTYPE_QUATERNION:
            if (RY = FY.g.FromArray(rY.values), rY.values.length >= 8) {
              const YY = FY.g.FromArray(rY.values.slice(4, 8));
              YY.equals(FY.g.Zero()) || (gY = YY)
            }
            if (rY.values.length >= 12) {
              const YY = FY.g.FromArray(rY.values.slice(8, 12));
              YY.equals(FY.g.Zero()) || (aY = YY)
            }
            rY.values.length >= 13 && (vY = rY.values[12]);
            break;
          case mY.ANIMATIONTYPE_MATRIX:
            RY = FY.e.FromArray(rY.values), rY.values.length >= 17 && (vY = rY.values[16]);
            break;
          case mY.ANIMATIONTYPE_COLOR3:
            RY = AY.c.FromArray(rY.values), rY.values[3] && (gY = AY.c.FromArray(rY.values[3])), rY.values[4] && (aY = AY.c.FromArray(rY.values[4])), rY.values[5] && (vY = rY.values[5]);
            break;
          case mY.ANIMATIONTYPE_COLOR4:
            RY = AY.d.FromArray(rY.values), rY.values[4] && (gY = AY.d.FromArray(rY.values[4])), rY.values[5] && (aY = AY.d.FromArray(rY.values[5])), rY.values[6] && (vY = rY.values[6]);
            break;
          case mY.ANIMATIONTYPE_VECTOR3:
          default:
            RY = FY.r.FromArray(rY.values), rY.values[3] && (gY = FY.r.FromArray(rY.values[3])), rY.values[4] && (aY = FY.r.FromArray(rY.values[4])), rY.values[5] && (vY = rY.values[5])
        }
        const uY = {};
        uY.frame = rY.frame, uY.value = RY, void 0 != gY && (uY.inTangent = gY), void 0 != aY && (uY.outTangent = aY), void 0 != vY && (uY.interpolation = vY), IY.push(uY)
      }
      if (rY.setKeys(IY), YY.ws)
        for (OY = 0; OY < YY.ws.length; OY++) RY = YY.ws[OY], rY.createRange(RY.name, RY.from, RY.to);
      return rY
    }
    async function KY(YY, rY) {
      return await new Promise(((DY, FY) => {
        const AY = new aY.d;
        AY.addEventListener("readystatechange", (() => {
          if (4 == AY.readyState)
            if (200 == AY.status) {
              let rY = JSON.parse(AY.responseText);
              if (rY.animations && (rY = rY.animations), rY.length) {
                const YY = [];
                for (const DY of rY) YY.push(cY(DY));
                DY(YY)
              } else {
                const FY = cY(rY);
                YY && (FY.name = YY), DY(FY)
              }
            } else FY("Unable to load the animation")
        })), AY.open("GET", rY), AY.send()
      }))
    }
    async function HY(YY) {
      const rY = this?.SnippetUrl ?? mY.SnippetUrl;
      return await new Promise(((DY, FY) => {
        const AY = new aY.d;
        AY.addEventListener("readystatechange", (() => {
          if (4 == AY.readyState)
            if (200 == AY.status) {
              const rY = JSON.parse(JSON.parse(AY.responseText).jsonPayload);
              if (rY.animations) {
                const FY = JSON.parse(rY.animations),
                  AY = [];
                for (const rY of FY.animations) {
                  const DY = cY(rY);
                  DY.snippetId = YY, AY.push(DY)
                }
                DY(AY)
              } else {
                const FY = cY(JSON.parse(rY.animation));
                FY.snippetId = YY, DY(FY)
              }
            } else FY("Unable to load the snippet " + YY)
        })), AY.open("GET", rY + "/" + YY.replace(/#/g, "/")), AY.send()
      }))
    }
    mY._UniqueIdGenerator = 0, mY.AllowMatricesInterpolation = !1, mY.AllowMatrixDecomposeForInterpolation = !0, mY.InheritOriginalValueFromActiveAnimations = !1, mY.SnippetUrl = "https://snippet.babylonjs.com", mY.ANIMATIONTYPE_FLOAT = 0, mY.ANIMATIONTYPE_VECTOR3 = 1, mY.ANIMATIONTYPE_QUATERNION = 2, mY.ANIMATIONTYPE_MATRIX = 3, mY.ANIMATIONTYPE_COLOR3 = 4, mY.ANIMATIONTYPE_COLOR4 = 7, mY.ANIMATIONTYPE_VECTOR2 = 5, mY.ANIMATIONTYPE_SIZE = 6, mY.ANIMATIONLOOPMODE_RELATIVE = 0, mY.ANIMATIONLOOPMODE_CYCLE = 1, mY.ANIMATIONLOOPMODE_CONSTANT = 2, mY.ANIMATIONLOOPMODE_YOYO = 4, mY.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const zY = HY;
    let ZY = !1;

    function CY() {
      ZY || (ZY = !0, mY.Parse = cY, mY.ParseFromFileAsync = KY, mY.ParseFromSnippetAsync = HY, mY.CreateFromSnippetAsync = zY, mY.CreateAnimation = SY, mY.CreateAndStartAnimation = lY, mY.CreateAndStartHierarchyAnimation = TY, mY.CreateMergeAndStartAnimation = eY, mY.MakeAnimationAdditive = VY, mY.TransitionTo = NY, mY.AppendSerializedAnimations = BY, (0, uY.i)("BABYLON.Animation", mY), OY.b._AnimationRangeFactory = (YY, rY, DY) => new RY.c(YY, rY, DY))
    }
  },
  40305: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY
    });
    class FY {
      constructor(YY, rY, DY) {
        this.name = YY, this.from = rY, this.to = DY
      }
      clone() {
        return new FY(this.name, this.from, this.to)
      }
    }
  },
  40356: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY.c,
      i: () => FY.l
    });
    var FY = DY(39270);
    (0, FY.f)()
  },
  40338: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY.i
    });
    var FY = DY(39596);
    (0, FY.e)()
  },
  40316: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY.d
    });
    var FY = DY(39582);
    (0, FY.f)()
  },
  40362: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY.c
    });
    var FY = DY(39514);
    (0, FY.g)()
  },
  40314: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => FY.g
    });
    var FY = DY(39560);
    (0, FY.c)()
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);