export const id = 311;
export const ids = [311];
export const modules = {
  42635: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => WR,
      f: () => NR,
      h: () => LR,
      k: () => nR,
      o: () => wR,
      q: () => aR,
      u: () => eR,
      x: () => rR
    });
    var yR = GR(38204),
      tR = GR(38331),
      uR = GR(38239),
      ZR = GR(42641),
      qR = GR(41741),
      iR = GR(41534),
      fR = GR(41568),
      VR = GR(41542),
      KR = GR(38253);
    const wR = Object.freeze(new yR.i(0, 0, 0, 0)),
      rR = Object.freeze(yR.r.Zero()),
      eR = Object.freeze(yR.n.Zero()),
      aR = Object.freeze(iR.b.Zero()),
      LR = Object.freeze(tR.d.Black()),
      nR = Object.freeze(new tR.e(0, 0, 0, 0)),
      UR = {
        key: 0,
        repeatCount: 0,
        nG: 2
      };
    class WR {
      static _PrepareAnimation(RR, JR, GR, uR, ZR, qR, fR, VR) {
        let KR;
        if (!isNaN(parseFloat(ZR)) && isFinite(ZR) ? KR = WR.ANIMATIONTYPE_FLOAT : ZR instanceof yR.i ? KR = WR.ANIMATIONTYPE_QUATERNION : ZR instanceof yR.r ? KR = WR.ANIMATIONTYPE_VECTOR3 : ZR instanceof yR.n ? KR = WR.ANIMATIONTYPE_VECTOR2 : ZR instanceof tR.d ? KR = WR.ANIMATIONTYPE_COLOR3 : ZR instanceof tR.e ? KR = WR.ANIMATIONTYPE_COLOR4 : ZR instanceof iR.b && (KR = WR.ANIMATIONTYPE_SIZE), void 0 == KR) return null;
        const wR = new WR(RR, JR, GR, KR, fR),
          rR = [{
            frame: 0,
            value: ZR
          }, {
            frame: uR,
            value: qR
          }];
        return wR.setKeys(rR), void 0 !== VR && wR.setEasingFunction(VR), wR
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const RR of this._runtimeAnimations)
          if (!RR.isStopped()) return !0;
        return !1
      }
      constructor(RR, JR, GR, yR, tR, uR) {
        this.name = RR, this.targetProperty = JR, this.framePerSecond = GR, this.dataType = yR, this.nG = tR, this.enableBlending = uR, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = JR.split("."), this.dataType = yR, this.nG = void 0 === tR ? WR.ANIMATIONLOOPMODE_CYCLE : tR, this.uniqueId = WR._UniqueIdGenerator++
      }
      toString(RR) {
        let JR = "Name: " + this.name + ", property: " + this.targetProperty;
        if (JR += ", datatype: " + ["Float", "Fe", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], JR += ", nKeys: " + (this._keys ? this._keys.length : "none"), JR += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), RR) {
          JR += ", Ranges: {";
          let RR = !0;
          for (const GR in this._ranges) RR || (JR += ", "), RR = !1, JR += GR;
          JR += "}"
        }
        return JR
      }
      addEvent(RR) {
        this._events.push(RR), this._events.sort(((RR, JR) => RR.frame - JR.frame))
      }
      removeEvents(RR) {
        for (let JR = 0; JR < this._events.length; JR++) this._events[JR].frame === RR && (this._events.splice(JR, 1), JR--)
      }
      getEvents() {
        return this._events
      }
      createRange(RR, JR, GR) {
        this._ranges[RR] || (this._ranges[RR] = new ZR.b(RR, JR, GR))
      }
      deleteRange(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const GR = this._ranges[RR];
        if (GR) {
          if (JR) {
            const RR = GR.from,
              JR = GR.to;
            for (let GR = this._keys.length - 1; GR >= 0; GR--) this._keys[GR].frame >= RR && this._keys[GR].frame <= JR && this._keys.splice(GR, 1)
          }
          this._ranges[RR] = null
        }
      }
      getRange(RR) {
        return this._ranges[RR]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let RR = 0;
        for (let JR = 0, GR = this._keys.length; JR < GR; JR++) RR < this._keys[JR].frame && (RR = this._keys[JR].frame);
        return RR
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(RR) {
        this._easingFunction = RR
      }
      floatInterpolateFunction(RR, JR, GR) {
        return (0, uR.Lerp)(RR, JR, GR)
      }
      floatInterpolateFunctionWithTangents(RR, JR, GR, yR, tR) {
        return (0, uR.Hermite)(RR, JR, GR, yR, tR)
      }
      quaternionInterpolateFunction(RR, JR, GR) {
        return yR.i.Slerp(RR, JR, GR)
      }
      quaternionInterpolateFunctionWithTangents(RR, JR, GR, tR, uR) {
        return yR.i.Hermite(RR, JR, GR, tR, uR).normalize()
      }
      vector3InterpolateFunction(RR, JR, GR) {
        return yR.r.Lerp(RR, JR, GR)
      }
      vector3InterpolateFunctionWithTangents(RR, JR, GR, tR, uR) {
        return yR.r.Hermite(RR, JR, GR, tR, uR)
      }
      vector2InterpolateFunction(RR, JR, GR) {
        return yR.n.Lerp(RR, JR, GR)
      }
      vector2InterpolateFunctionWithTangents(RR, JR, GR, tR, uR) {
        return yR.n.Hermite(RR, JR, GR, tR, uR)
      }
      sizeInterpolateFunction(RR, JR, GR) {
        return iR.b.Lerp(RR, JR, GR)
      }
      color3InterpolateFunction(RR, JR, GR) {
        return tR.d.Lerp(RR, JR, GR)
      }
      color3InterpolateFunctionWithTangents(RR, JR, GR, yR, uR) {
        return tR.d.Hermite(RR, JR, GR, yR, uR)
      }
      color4InterpolateFunction(RR, JR, GR) {
        return tR.e.Lerp(RR, JR, GR)
      }
      color4InterpolateFunctionWithTangents(RR, JR, GR, yR, uR) {
        return tR.e.Hermite(RR, JR, GR, yR, uR)
      }
      _getKeyValue(RR) {
        return "function" === typeof RR ? RR() : RR
      }
      evaluate(RR) {
        return UR.key = 0, this._interpolate(RR, UR)
      }
      _interpolate(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (JR.nG === WR.ANIMATIONLOOPMODE_CONSTANT && JR.repeatCount > 0) return JR.highLimitValue.clone ? JR.highLimitValue.clone() : JR.highLimitValue;
        const yR = this._keys;
        let tR;
        if (this._coreAnimation) tR = this._coreAnimation._key;
        else {
          const uR = yR.length;
          for (tR = JR.key; tR >= 0 && RR < yR[tR].frame;) --tR;
          for (; tR + 1 <= uR - 1 && RR >= yR[tR + 1].frame;) ++tR;
          if (JR.key = tR, tR < 0) return GR ? void 0 : this._getKeyValue(yR[0].value);
          if (tR + 1 > uR - 1) return GR ? void 0 : this._getKeyValue(yR[uR - 1].value);
          this._key = tR
        }
        const uR = yR[tR],
          ZR = yR[tR + 1];
        if (GR && (RR === uR.frame || RR === ZR.frame)) return;
        const qR = this._getKeyValue(uR.value),
          iR = this._getKeyValue(ZR.value);
        if (1 === uR.interpolation) return ZR.frame > RR ? qR : iR;
        const fR = void 0 !== uR.outTangent && void 0 !== ZR.inTangent,
          VR = ZR.frame - uR.frame;
        let KR = (RR - uR.frame) / VR;
        const UR = uR.easingFunction || this.getEasingFunction();
        switch (UR && (KR = UR.ease(KR)), this.dataType) {
          case WR.ANIMATIONTYPE_FLOAT: {
            const RR = fR ? this.floatInterpolateFunctionWithTangents(qR, uR.outTangent * VR, iR, ZR.inTangent * VR, KR) : this.floatInterpolateFunction(qR, iR, KR);
            switch (JR.nG) {
              case WR.ANIMATIONLOOPMODE_CYCLE:
              case WR.ANIMATIONLOOPMODE_CONSTANT:
              case WR.ANIMATIONLOOPMODE_YOYO:
                return RR;
              case WR.ANIMATIONLOOPMODE_RELATIVE:
              case WR.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (JR.offsetValue ?? 0) * JR.repeatCount + RR
            }
            break
          }
          case WR.ANIMATIONTYPE_QUATERNION: {
            const RR = fR ? this.quaternionInterpolateFunctionWithTangents(qR, uR.outTangent.scale(VR), iR, ZR.inTangent.scale(VR), KR) : this.quaternionInterpolateFunction(qR, iR, KR);
            switch (JR.nG) {
              case WR.ANIMATIONLOOPMODE_CYCLE:
              case WR.ANIMATIONLOOPMODE_CONSTANT:
              case WR.ANIMATIONLOOPMODE_YOYO:
                return RR;
              case WR.ANIMATIONLOOPMODE_RELATIVE:
              case WR.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return RR.addInPlace((JR.offsetValue || wR).scale(JR.repeatCount))
            }
            return RR
          }
          case WR.ANIMATIONTYPE_VECTOR3: {
            const RR = fR ? this.vector3InterpolateFunctionWithTangents(qR, uR.outTangent.scale(VR), iR, ZR.inTangent.scale(VR), KR) : this.vector3InterpolateFunction(qR, iR, KR);
            switch (JR.nG) {
              case WR.ANIMATIONLOOPMODE_CYCLE:
              case WR.ANIMATIONLOOPMODE_CONSTANT:
              case WR.ANIMATIONLOOPMODE_YOYO:
                return RR;
              case WR.ANIMATIONLOOPMODE_RELATIVE:
              case WR.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return RR.add((JR.offsetValue || rR).scale(JR.repeatCount))
            }
            break
          }
          case WR.ANIMATIONTYPE_VECTOR2: {
            const RR = fR ? this.vector2InterpolateFunctionWithTangents(qR, uR.outTangent.scale(VR), iR, ZR.inTangent.scale(VR), KR) : this.vector2InterpolateFunction(qR, iR, KR);
            switch (JR.nG) {
              case WR.ANIMATIONLOOPMODE_CYCLE:
              case WR.ANIMATIONLOOPMODE_CONSTANT:
              case WR.ANIMATIONLOOPMODE_YOYO:
                return RR;
              case WR.ANIMATIONLOOPMODE_RELATIVE:
              case WR.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return RR.add((JR.offsetValue || eR).scale(JR.repeatCount))
            }
            break
          }
          case WR.ANIMATIONTYPE_SIZE:
            switch (JR.nG) {
              case WR.ANIMATIONLOOPMODE_CYCLE:
              case WR.ANIMATIONLOOPMODE_CONSTANT:
              case WR.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(qR, iR, KR);
              case WR.ANIMATIONLOOPMODE_RELATIVE:
              case WR.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(qR, iR, KR).add((JR.offsetValue || aR).scale(JR.repeatCount))
            }
            break;
          case WR.ANIMATIONTYPE_COLOR3: {
            const RR = fR ? this.color3InterpolateFunctionWithTangents(qR, uR.outTangent.scale(VR), iR, ZR.inTangent.scale(VR), KR) : this.color3InterpolateFunction(qR, iR, KR);
            switch (JR.nG) {
              case WR.ANIMATIONLOOPMODE_CYCLE:
              case WR.ANIMATIONLOOPMODE_CONSTANT:
              case WR.ANIMATIONLOOPMODE_YOYO:
                return RR;
              case WR.ANIMATIONLOOPMODE_RELATIVE:
              case WR.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return RR.add((JR.offsetValue || LR).scale(JR.repeatCount))
            }
            break
          }
          case WR.ANIMATIONTYPE_COLOR4: {
            const RR = fR ? this.color4InterpolateFunctionWithTangents(qR, uR.outTangent.scale(VR), iR, ZR.inTangent.scale(VR), KR) : this.color4InterpolateFunction(qR, iR, KR);
            switch (JR.nG) {
              case WR.ANIMATIONLOOPMODE_CYCLE:
              case WR.ANIMATIONLOOPMODE_CONSTANT:
              case WR.ANIMATIONLOOPMODE_YOYO:
                return RR;
              case WR.ANIMATIONLOOPMODE_RELATIVE:
              case WR.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return RR.add((JR.offsetValue || nR).scale(JR.repeatCount))
            }
            break
          }
          case WR.ANIMATIONTYPE_MATRIX:
            switch (JR.nG) {
              case WR.ANIMATIONLOOPMODE_CYCLE:
              case WR.ANIMATIONLOOPMODE_CONSTANT:
              case WR.ANIMATIONLOOPMODE_YOYO:
                return WR.AllowMatricesInterpolation ? this.matrixInterpolateFunction(qR, iR, KR, JR.workValue) : qR;
              case WR.ANIMATIONLOOPMODE_RELATIVE:
              case WR.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return qR
            }
        }
        return 0
      }
      matrixInterpolateFunction(RR, JR, GR, tR) {
        return WR.AllowMatrixDecomposeForInterpolation ? tR ? (yR.e.DecomposeLerpToRef(RR, JR, GR, tR), tR) : yR.e.DecomposeLerp(RR, JR, GR) : tR ? (yR.e.LerpToRef(RR, JR, GR, tR), tR) : yR.e.Lerp(RR, JR, GR)
      }
      clone() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const JR = new WR(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.nG);
        if (JR.enableBlending = this.enableBlending, JR.blendingSpeed = this.blendingSpeed, this._keys && JR.setKeys(this._keys, !1, RR), this._ranges) {
          JR._ranges = {};
          for (const RR in this._ranges) {
            const GR = this._ranges[RR];
            GR && (JR._ranges[RR] = GR.clone())
          }
        }
        return JR
      }
      setKeys(RR) {
        let JR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = RR;
        else if (this._keys = RR.slice(0), JR)
          for (let GR = 0; GR < this._keys.length; GR++) {
            const RR = this._keys[GR];
            this._keys[GR] = {
              frame: RR.frame,
              value: RR.value.clone ? RR.value.clone() : RR.value,
              inTangent: RR.inTangent && RR.inTangent.clone ? RR.inTangent.clone() : RR.inTangent,
              outTangent: RR.outTangent && RR.outTangent.clone ? RR.outTangent.clone() : RR.outTangent,
              interpolation: RR.interpolation,
              lockedTangent: RR.lockedTangent,
              easingFunction: RR.easingFunction
            }
          }
      }
      createKeyForFrame(RR) {
        UR.key = 0;
        const JR = this._interpolate(RR, UR, !0);
        if (!JR) return this._keys[UR.key].frame === RR ? UR.key : UR.key + 1;
        const GR = {
          frame: RR,
          value: JR.clone ? JR.clone() : JR
        };
        return this._keys.splice(UR.key + 1, 0, GR), UR.key + 1
      }
      serialize() {
        const RR = {};
        RR.name = this.name, RR.property = this.targetProperty, RR.framePerSecond = this.framePerSecond, RR.dataType = this.dataType, RR.loopBehavior = this.nG, RR.enableBlending = this.enableBlending, RR.blendingSpeed = this.blendingSpeed;
        const JR = this.dataType;
        RR.keys = [];
        const GR = this.getKeys();
        for (let yR = 0; yR < GR.length; yR++) {
          const tR = GR[yR],
            uR = {};
          switch (uR.frame = tR.frame, JR) {
            case WR.ANIMATIONTYPE_FLOAT:
              uR.values = [tR.value], void 0 !== tR.inTangent && uR.values.push(tR.inTangent), void 0 !== tR.outTangent && (void 0 === tR.inTangent && uR.values.push(void 0), uR.values.push(tR.outTangent)), void 0 !== tR.interpolation && (void 0 === tR.inTangent && uR.values.push(void 0), void 0 === tR.outTangent && uR.values.push(void 0), uR.values.push(tR.interpolation));
              break;
            case WR.ANIMATIONTYPE_QUATERNION:
            case WR.ANIMATIONTYPE_MATRIX:
            case WR.ANIMATIONTYPE_VECTOR3:
            case WR.ANIMATIONTYPE_COLOR3:
            case WR.ANIMATIONTYPE_COLOR4:
              uR.values = tR.value.QtR(), void 0 != tR.inTangent && uR.values.push(tR.inTangent.QtR()), void 0 != tR.outTangent && (void 0 === tR.inTangent && uR.values.push(void 0), uR.values.push(tR.outTangent.QtR())), void 0 !== tR.interpolation && (void 0 === tR.inTangent && uR.values.push(void 0), void 0 === tR.outTangent && uR.values.push(void 0), uR.values.push(tR.interpolation))
          }
          RR.keys.push(uR)
        }
        RR.WL = [];
        for (const yR in this._ranges) {
          const JR = this._ranges[yR];
          if (!JR) continue;
          const GR = {};
          GR.name = yR, GR.from = JR.from, GR.to = JR.to, RR.WL.push(GR)
        }
        return RR
      }
      static _UniversalLerp(RR, JR, GR) {
        const yR = RR.constructor;
        return yR.Lerp ? yR.Lerp(RR, JR, GR) : yR.Slerp ? yR.Slerp(RR, JR, GR) : RR.toFixed ? RR * (1 - GR) + GR * JR : JR
      }
    }

    function AR(RR, JR, GR) {
      let tR;
      tR = "object" === typeof JR ? JR : {
        referenceFrame: JR ?? 0,
        range: GR,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let uR = RR;
      tR.cloneOriginalAnimation && (uR = RR.clone(), uR.name = tR.clonedAnimationName || uR.name);
      const ZR = uR.getKeys();
      if (!ZR.length) return uR;
      const qR = tR.referenceFrame && tR.referenceFrame >= 0 ? tR.referenceFrame : 0;
      let iR = 0;
      const fR = ZR[0];
      let VR = ZR.length - 1;
      const KR = ZR[VR],
        wR = {
          referenceValue: fR.value,
          referencePosition: yR.l.Fe[0],
          referenceQuaternion: yR.l.Quaternion[0],
          referenceScaling: yR.l.Fe[1],
          keyPosition: yR.l.Fe[2],
          keyQuaternion: yR.l.Quaternion[1],
          keyScaling: yR.l.Fe[3]
        };
      let rR = fR.frame,
        eR = KR.frame;
      if (tR.range) {
        const RR = uR.getRange(tR.range);
        RR && (rR = RR.from, eR = RR.to)
      } else rR = tR.fromFrame ?? rR, eR = tR.toFrame ?? eR;
      rR !== fR.frame && (iR = uR.createKeyForFrame(rR)), eR !== KR.frame && (VR = uR.createKeyForFrame(eR));
      const aR = uR.getKeys();
      if (1 === aR.length) {
        const RR = uR._getKeyValue(aR[0].value);
        wR.referenceValue = RR.clone ? RR.clone() : RR
      } else if (qR <= fR.frame) {
        const RR = uR._getKeyValue(fR.value);
        wR.referenceValue = RR.clone ? RR.clone() : RR
      } else if (qR >= KR.frame) {
        const RR = uR._getKeyValue(KR.value);
        wR.referenceValue = RR.clone ? RR.clone() : RR
      } else {
        UR.key = 0;
        const RR = uR._interpolate(qR, UR);
        wR.referenceValue = RR.clone ? RR.clone() : RR
      }
      uR.dataType === WR.ANIMATIONTYPE_QUATERNION ? wR.referenceValue.normalize().conjugateInPlace() : uR.dataType === WR.ANIMATIONTYPE_MATRIX && (wR.referenceValue.decompose(wR.referenceScaling, wR.referenceQuaternion, wR.referencePosition), wR.referenceQuaternion.normalize().conjugateInPlace());
      let LR = Number.MAX_VALUE;
      const nR = tR.clipKeys ? [] : null;
      for (let UR = iR; UR <= VR; UR++) {
        let RR = aR[UR];
        if ((nR || tR.cloneOriginalAnimation) && (RR = {
            frame: RR.frame,
            value: RR.value.clone ? RR.value.clone() : RR.value,
            inTangent: RR.inTangent,
            outTangent: RR.outTangent,
            interpolation: RR.interpolation,
            lockedTangent: RR.lockedTangent,
            easingFunction: RR.easingFunction
          }, nR && (LR === Number.MAX_VALUE && (LR = RR.frame), RR.frame -= LR, nR.push(RR))), !UR || uR.dataType === WR.ANIMATIONTYPE_FLOAT || RR.value !== fR.value) switch (uR.dataType) {
          case WR.ANIMATIONTYPE_MATRIX:
            RR.value.decompose(wR.keyScaling, wR.keyQuaternion, wR.keyPosition), wR.keyPosition.VuR(wR.referencePosition), wR.keyScaling.divideInPlace(wR.referenceScaling), wR.referenceQuaternion.multiplyToRef(wR.keyQuaternion, wR.keyQuaternion), yR.e.ComposeToRef(wR.keyScaling, wR.keyQuaternion, wR.keyPosition, RR.value);
            break;
          case WR.ANIMATIONTYPE_QUATERNION:
            wR.referenceValue.multiplyToRef(RR.value, RR.value);
            break;
          case WR.ANIMATIONTYPE_VECTOR2:
          case WR.ANIMATIONTYPE_VECTOR3:
          case WR.ANIMATIONTYPE_COLOR3:
          case WR.ANIMATIONTYPE_COLOR4:
            RR.value.subtractToRef(wR.referenceValue, RR.value);
            break;
          case WR.ANIMATIONTYPE_SIZE:
            RR.value.width -= wR.referenceValue.width, RR.value.height -= wR.referenceValue.height;
            break;
          default:
            RR.value -= wR.referenceValue
        }
      }
      return nR && uR.setKeys(nR, !0), uR
    }

    function CR(RR, JR, GR, yR) {
      const tR = new WR(RR + "Animation", RR, GR, JR, WR.ANIMATIONLOOPMODE_CONSTANT);
      return tR.setEasingFunction(yR), tR
    }

    function XR(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
      const KR = WR._PrepareAnimation(RR, GR, yR, tR, uR, ZR, qR, iR);
      return KR ? (JR.jH && (VR = JR.jH()), VR ? VR.beginDirectAnimation(JR, [KR], 0, tR, KR.nG !== WR.ANIMATIONLOOPMODE_CONSTANT, 1, fR) : null) : null
    }

    function MR(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
      const KR = WR._PrepareAnimation(RR, yR, tR, uR, ZR, qR, iR, fR);
      if (!KR) return null;
      return JR.jH().beginDirectHierarchyAnimation(JR, GR, [KR], 0, uR, 1 === KR.nG, 1, VR)
    }

    function BR(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR) {
      const VR = WR._PrepareAnimation(RR, GR, yR, tR, uR, ZR, qR, iR);
      return VR ? (JR.animations.push(VR), JR.jH().beginAnimation(JR, 0, tR, 1 === VR.nG, 1, fR)) : null
    }

    function lR(RR, JR, GR, yR, tR, uR, ZR) {
      let qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        iR = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        fR = arguments.length > 9 ? arguments[9] : void 0;
      if (ZR <= 0) return GR[RR] = JR, qR && qR(), null;
      const VR = tR * (ZR / 1e3);
      uR.setKeys(fR ?? [{
        frame: 0,
        value: GR[RR].clone ? GR[RR].clone() : GR[RR]
      }, {
        frame: VR,
        value: JR
      }]), GR.animations || (GR.animations = []), GR.animations.push(uR);
      return yR.beginAnimation(GR, 0, VR, !1, 1, qR ?? void 0, void 0, iR)
    }

    function pR(RR, JR) {
      VR.c.AppendSerializedAnimations(RR, JR)
    }

    function gR(RR) {
      const JR = new WR(RR.name, RR.property, RR.framePerSecond, RR.dataType, RR.loopBehavior),
        GR = RR.dataType,
        uR = [];
      let ZR, qR;
      for (RR.enableBlending && (JR.enableBlending = RR.enableBlending), RR.blendingSpeed && (JR.blendingSpeed = RR.blendingSpeed), qR = 0; qR < RR.keys.length; qR++) {
        const JR = RR.keys[qR];
        let iR, fR, VR;
        switch (GR) {
          case WR.ANIMATIONTYPE_FLOAT:
            ZR = JR.values[0], JR.values.length >= 2 && (iR = JR.values[1]), JR.values.length >= 3 && (fR = JR.values[2]), JR.values.length >= 4 && (VR = JR.values[3]);
            break;
          case WR.ANIMATIONTYPE_QUATERNION:
            if (ZR = yR.i.FromArray(JR.values), JR.values.length >= 8) {
              const RR = yR.i.FromArray(JR.values.slice(4, 8));
              RR.equals(yR.i.Zero()) || (iR = RR)
            }
            if (JR.values.length >= 12) {
              const RR = yR.i.FromArray(JR.values.slice(8, 12));
              RR.equals(yR.i.Zero()) || (fR = RR)
            }
            JR.values.length >= 13 && (VR = JR.values[12]);
            break;
          case WR.ANIMATIONTYPE_MATRIX:
            ZR = yR.e.FromArray(JR.values), JR.values.length >= 17 && (VR = JR.values[16]);
            break;
          case WR.ANIMATIONTYPE_COLOR3:
            ZR = tR.d.FromArray(JR.values), JR.values[3] && (iR = tR.d.FromArray(JR.values[3])), JR.values[4] && (fR = tR.d.FromArray(JR.values[4])), JR.values[5] && (VR = JR.values[5]);
            break;
          case WR.ANIMATIONTYPE_COLOR4:
            ZR = tR.e.FromArray(JR.values), JR.values[4] && (iR = tR.e.FromArray(JR.values[4])), JR.values[5] && (fR = tR.e.FromArray(JR.values[5])), JR.values[6] && (VR = JR.values[6]);
            break;
          case WR.ANIMATIONTYPE_VECTOR3:
          default:
            ZR = yR.r.FromArray(JR.values), JR.values[3] && (iR = yR.r.FromArray(JR.values[3])), JR.values[4] && (fR = yR.r.FromArray(JR.values[4])), JR.values[5] && (VR = JR.values[5])
        }
        const KR = {};
        KR.frame = JR.frame, KR.value = ZR, void 0 != iR && (KR.inTangent = iR), void 0 != fR && (KR.outTangent = fR), void 0 != VR && (KR.interpolation = VR), uR.push(KR)
      }
      if (JR.setKeys(uR), RR.WL)
        for (qR = 0; qR < RR.WL.length; qR++) ZR = RR.WL[qR], JR.createRange(ZR.name, ZR.from, ZR.to);
      return JR
    }
    async function bR(RR, JR) {
      return await new Promise(((GR, yR) => {
        const tR = new fR.c;
        tR.addEventListener("readystatechange", (() => {
          if (4 == tR.readyState)
            if (200 == tR.status) {
              let JR = JSON.parse(tR.responseText);
              if (JR.animations && (JR = JR.animations), JR.length) {
                const RR = [];
                for (const GR of JR) RR.push(gR(GR));
                GR(RR)
              } else {
                const yR = gR(JR);
                RR && (yR.name = RR), GR(yR)
              }
            } else yR("Unable to load the animation")
        })), tR.open("GET", JR), tR.send()
      }))
    }
    async function vR(RR) {
      const JR = this?.SnippetUrl ?? WR.SnippetUrl;
      return await new Promise(((GR, yR) => {
        const tR = new fR.c;
        tR.addEventListener("readystatechange", (() => {
          if (4 == tR.readyState)
            if (200 == tR.status) {
              const JR = JSON.parse(JSON.parse(tR.responseText).jsonPayload);
              if (JR.animations) {
                const yR = JSON.parse(JR.animations),
                  tR = [];
                for (const JR of yR.animations) {
                  const GR = gR(JR);
                  GR.snippetId = RR, tR.push(GR)
                }
                GR(tR)
              } else {
                const yR = gR(JSON.parse(JR.animation));
                yR.snippetId = RR, GR(yR)
              }
            } else yR("Unable to load the snippet " + RR)
        })), tR.open("GET", JR + "/" + RR.replace(/#/g, "/")), tR.send()
      }))
    }
    WR._UniqueIdGenerator = 0, WR.AllowMatricesInterpolation = !1, WR.AllowMatrixDecomposeForInterpolation = !0, WR.InheritOriginalValueFromActiveAnimations = !1, WR.SnippetUrl = "https://snippet.babylonjs.com", WR.ANIMATIONTYPE_FLOAT = 0, WR.ANIMATIONTYPE_VECTOR3 = 1, WR.ANIMATIONTYPE_QUATERNION = 2, WR.ANIMATIONTYPE_MATRIX = 3, WR.ANIMATIONTYPE_COLOR3 = 4, WR.ANIMATIONTYPE_COLOR4 = 7, WR.ANIMATIONTYPE_VECTOR2 = 5, WR.ANIMATIONTYPE_SIZE = 6, WR.ANIMATIONLOOPMODE_RELATIVE = 0, WR.ANIMATIONLOOPMODE_CYCLE = 1, WR.ANIMATIONLOOPMODE_CONSTANT = 2, WR.ANIMATIONLOOPMODE_YOYO = 4, WR.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const OR = vR;
    let xR = !1;

    function NR() {
      xR || (xR = !0, WR.Parse = gR, WR.ParseFromFileAsync = bR, WR.ParseFromSnippetAsync = vR, WR.CreateFromSnippetAsync = OR, WR.CreateAnimation = CR, WR.CreateAndStartAnimation = XR, WR.CreateAndStartHierarchyAnimation = MR, WR.CreateMergeAndStartAnimation = BR, WR.MakeAnimationAdditive = AR, WR.TransitionTo = lR, WR.AppendSerializedAnimations = pR, (0, KR.f)("BABYLON.Animation", WR), qR.d._AnimationRangeFactory = (RR, JR, GR) => new ZR.b(RR, JR, GR))
    }
  },
  42641: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR
    });
    class yR {
      constructor(RR, JR, GR) {
        this.name = RR, this.from = JR, this.to = GR
      }
      clone() {
        return new yR(this.name, this.from, this.to)
      }
    }
  },
  42711: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR.d,
      c: () => yR.l
    });
    var yR = GR(41663);
    (0, yR.g)()
  },
  42685: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR.f
    });
    var yR = GR(42011);
    (0, yR.b)()
  },
  42657: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => yR.d
    });
    var yR = GR(42003);
    (0, yR.f)()
  },
  42714: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => yR.e
    });
    var yR = GR(41941);
    (0, yR.g)()
  },
  42644: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR.d
    });
    var yR = GR(41979);
    (0, yR.c)()
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);