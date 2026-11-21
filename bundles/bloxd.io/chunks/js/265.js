export const id = 265;
export const ids = [265];
export const modules = {
  40506: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      A: () => YQ,
      d: () => GQ,
      h: () => NQ,
      l: () => tQ,
      p: () => eQ,
      q: () => bQ,
      u: () => AQ,
      w: () => xQ
    });
    var LQ = wQ(36696),
      qQ = wQ(36873),
      oQ = wQ(36729),
      DQ = wQ(40514),
      kQ = wQ(39650),
      vQ = wQ(39418),
      mQ = wQ(39455),
      uQ = wQ(39426),
      HQ = wQ(36741);
    const bQ = Object.freeze(new LQ.e(0, 0, 0, 0)),
      YQ = Object.freeze(LQ.p.Zero()),
      xQ = Object.freeze(LQ.n.Zero()),
      AQ = Object.freeze(vQ.d.Zero()),
      tQ = Object.freeze(qQ.b.Black()),
      eQ = Object.freeze(new qQ.e(0, 0, 0, 0)),
      MQ = {
        key: 0,
        repeatCount: 0,
        xQ: 2
      };
    class GQ {
      static _PrepareAnimation(QQ, FQ, wQ, oQ, DQ, kQ, mQ, uQ) {
        let HQ;
        if (!isNaN(parseFloat(DQ)) && isFinite(DQ) ? HQ = GQ.ANIMATIONTYPE_FLOAT : DQ instanceof LQ.e ? HQ = GQ.ANIMATIONTYPE_QUATERNION : DQ instanceof LQ.p ? HQ = GQ.ANIMATIONTYPE_VECTOR3 : DQ instanceof LQ.n ? HQ = GQ.ANIMATIONTYPE_VECTOR2 : DQ instanceof qQ.b ? HQ = GQ.ANIMATIONTYPE_COLOR3 : DQ instanceof qQ.e ? HQ = GQ.ANIMATIONTYPE_COLOR4 : DQ instanceof vQ.d && (HQ = GQ.ANIMATIONTYPE_SIZE), void 0 == HQ) return null;
        const bQ = new GQ(QQ, FQ, wQ, HQ, mQ),
          YQ = [{
            frame: 0,
            value: DQ
          }, {
            frame: oQ,
            value: kQ
          }];
        return bQ.setKeys(YQ), void 0 !== uQ && bQ.setEasingFunction(uQ), bQ
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const QQ of this._runtimeAnimations)
          if (!QQ.isStopped()) return !0;
        return !1
      }
      constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
        this.name = QQ, this.targetProperty = FQ, this.framePerSecond = wQ, this.dataType = LQ, this.xQ = qQ, this.enableBlending = oQ, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = FQ.split("."), this.dataType = LQ, this.xQ = void 0 === qQ ? GQ.ANIMATIONLOOPMODE_CYCLE : qQ, this.uniqueId = GQ._UniqueIdGenerator++
      }
      toString(QQ) {
        let FQ = "Name: " + this.name + ", property: " + this.targetProperty;
        if (FQ += ", datatype: " + ["Float", "Ox", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], FQ += ", nKeys: " + (this._keys ? this._keys.length : "none"), FQ += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), QQ) {
          FQ += ", Ranges: {";
          let QQ = !0;
          for (const wQ in this._ranges) QQ || (FQ += ", "), QQ = !1, FQ += wQ;
          FQ += "}"
        }
        return FQ
      }
      addEvent(QQ) {
        this._events.push(QQ), this._events.sort(((QQ, FQ) => QQ.frame - FQ.frame))
      }
      removeEvents(QQ) {
        for (let FQ = 0; FQ < this._events.length; FQ++) this._events[FQ].frame === QQ && (this._events.splice(FQ, 1), FQ--)
      }
      getEvents() {
        return this._events
      }
      createRange(QQ, FQ, wQ) {
        this._ranges[QQ] || (this._ranges[QQ] = new DQ.b(QQ, FQ, wQ))
      }
      deleteRange(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const wQ = this._ranges[QQ];
        if (wQ) {
          if (FQ) {
            const QQ = wQ.from,
              FQ = wQ.to;
            for (let wQ = this._keys.length - 1; wQ >= 0; wQ--) this._keys[wQ].frame >= QQ && this._keys[wQ].frame <= FQ && this._keys.splice(wQ, 1)
          }
          this._ranges[QQ] = null
        }
      }
      getRange(QQ) {
        return this._ranges[QQ]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let QQ = 0;
        for (let FQ = 0, wQ = this._keys.length; FQ < wQ; FQ++) QQ < this._keys[FQ].frame && (QQ = this._keys[FQ].frame);
        return QQ
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(QQ) {
        this._easingFunction = QQ
      }
      floatInterpolateFunction(QQ, FQ, wQ) {
        return (0, oQ.Lerp)(QQ, FQ, wQ)
      }
      floatInterpolateFunctionWithTangents(QQ, FQ, wQ, LQ, qQ) {
        return (0, oQ.Hermite)(QQ, FQ, wQ, LQ, qQ)
      }
      quaternionInterpolateFunction(QQ, FQ, wQ) {
        return LQ.e.Slerp(QQ, FQ, wQ)
      }
      quaternionInterpolateFunctionWithTangents(QQ, FQ, wQ, qQ, oQ) {
        return LQ.e.Hermite(QQ, FQ, wQ, qQ, oQ).normalize()
      }
      vector3InterpolateFunction(QQ, FQ, wQ) {
        return LQ.p.Lerp(QQ, FQ, wQ)
      }
      vector3InterpolateFunctionWithTangents(QQ, FQ, wQ, qQ, oQ) {
        return LQ.p.Hermite(QQ, FQ, wQ, qQ, oQ)
      }
      vector2InterpolateFunction(QQ, FQ, wQ) {
        return LQ.n.Lerp(QQ, FQ, wQ)
      }
      vector2InterpolateFunctionWithTangents(QQ, FQ, wQ, qQ, oQ) {
        return LQ.n.Hermite(QQ, FQ, wQ, qQ, oQ)
      }
      sizeInterpolateFunction(QQ, FQ, wQ) {
        return vQ.d.Lerp(QQ, FQ, wQ)
      }
      color3InterpolateFunction(QQ, FQ, wQ) {
        return qQ.b.Lerp(QQ, FQ, wQ)
      }
      color3InterpolateFunctionWithTangents(QQ, FQ, wQ, LQ, oQ) {
        return qQ.b.Hermite(QQ, FQ, wQ, LQ, oQ)
      }
      color4InterpolateFunction(QQ, FQ, wQ) {
        return qQ.e.Lerp(QQ, FQ, wQ)
      }
      color4InterpolateFunctionWithTangents(QQ, FQ, wQ, LQ, oQ) {
        return qQ.e.Hermite(QQ, FQ, wQ, LQ, oQ)
      }
      _getKeyValue(QQ) {
        return "function" === typeof QQ ? QQ() : QQ
      }
      evaluate(QQ) {
        return MQ.key = 0, this._interpolate(QQ, MQ)
      }
      _interpolate(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (FQ.xQ === GQ.ANIMATIONLOOPMODE_CONSTANT && FQ.repeatCount > 0) return FQ.highLimitValue.clone ? FQ.highLimitValue.clone() : FQ.highLimitValue;
        const LQ = this._keys;
        let qQ;
        if (this._coreAnimation) qQ = this._coreAnimation._key;
        else {
          const oQ = LQ.length;
          for (qQ = FQ.key; qQ >= 0 && QQ < LQ[qQ].frame;) --qQ;
          for (; qQ + 1 <= oQ - 1 && QQ >= LQ[qQ + 1].frame;) ++qQ;
          if (FQ.key = qQ, qQ < 0) return wQ ? void 0 : this._getKeyValue(LQ[0].value);
          if (qQ + 1 > oQ - 1) return wQ ? void 0 : this._getKeyValue(LQ[oQ - 1].value);
          this._key = qQ
        }
        const oQ = LQ[qQ],
          DQ = LQ[qQ + 1];
        if (wQ && (QQ === oQ.frame || QQ === DQ.frame)) return;
        const kQ = this._getKeyValue(oQ.value),
          vQ = this._getKeyValue(DQ.value);
        if (1 === oQ.interpolation) return DQ.frame > QQ ? kQ : vQ;
        const mQ = void 0 !== oQ.outTangent && void 0 !== DQ.inTangent,
          uQ = DQ.frame - oQ.frame;
        let HQ = (QQ - oQ.frame) / uQ;
        const MQ = oQ.easingFunction || this.getEasingFunction();
        switch (MQ && (HQ = MQ.ease(HQ)), this.dataType) {
          case GQ.ANIMATIONTYPE_FLOAT: {
            const QQ = mQ ? this.floatInterpolateFunctionWithTangents(kQ, oQ.outTangent * uQ, vQ, DQ.inTangent * uQ, HQ) : this.floatInterpolateFunction(kQ, vQ, HQ);
            switch (FQ.xQ) {
              case GQ.ANIMATIONLOOPMODE_CYCLE:
              case GQ.ANIMATIONLOOPMODE_CONSTANT:
              case GQ.ANIMATIONLOOPMODE_YOYO:
                return QQ;
              case GQ.ANIMATIONLOOPMODE_RELATIVE:
              case GQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (FQ.offsetValue ?? 0) * FQ.repeatCount + QQ
            }
            break
          }
          case GQ.ANIMATIONTYPE_QUATERNION: {
            const QQ = mQ ? this.quaternionInterpolateFunctionWithTangents(kQ, oQ.outTangent.scale(uQ), vQ, DQ.inTangent.scale(uQ), HQ) : this.quaternionInterpolateFunction(kQ, vQ, HQ);
            switch (FQ.xQ) {
              case GQ.ANIMATIONLOOPMODE_CYCLE:
              case GQ.ANIMATIONLOOPMODE_CONSTANT:
              case GQ.ANIMATIONLOOPMODE_YOYO:
                return QQ;
              case GQ.ANIMATIONLOOPMODE_RELATIVE:
              case GQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return QQ.addInPlace((FQ.offsetValue || bQ).scale(FQ.repeatCount))
            }
            return QQ
          }
          case GQ.ANIMATIONTYPE_VECTOR3: {
            const QQ = mQ ? this.vector3InterpolateFunctionWithTangents(kQ, oQ.outTangent.scale(uQ), vQ, DQ.inTangent.scale(uQ), HQ) : this.vector3InterpolateFunction(kQ, vQ, HQ);
            switch (FQ.xQ) {
              case GQ.ANIMATIONLOOPMODE_CYCLE:
              case GQ.ANIMATIONLOOPMODE_CONSTANT:
              case GQ.ANIMATIONLOOPMODE_YOYO:
                return QQ;
              case GQ.ANIMATIONLOOPMODE_RELATIVE:
              case GQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return QQ.add((FQ.offsetValue || YQ).scale(FQ.repeatCount))
            }
            break
          }
          case GQ.ANIMATIONTYPE_VECTOR2: {
            const QQ = mQ ? this.vector2InterpolateFunctionWithTangents(kQ, oQ.outTangent.scale(uQ), vQ, DQ.inTangent.scale(uQ), HQ) : this.vector2InterpolateFunction(kQ, vQ, HQ);
            switch (FQ.xQ) {
              case GQ.ANIMATIONLOOPMODE_CYCLE:
              case GQ.ANIMATIONLOOPMODE_CONSTANT:
              case GQ.ANIMATIONLOOPMODE_YOYO:
                return QQ;
              case GQ.ANIMATIONLOOPMODE_RELATIVE:
              case GQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return QQ.add((FQ.offsetValue || xQ).scale(FQ.repeatCount))
            }
            break
          }
          case GQ.ANIMATIONTYPE_SIZE:
            switch (FQ.xQ) {
              case GQ.ANIMATIONLOOPMODE_CYCLE:
              case GQ.ANIMATIONLOOPMODE_CONSTANT:
              case GQ.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(kQ, vQ, HQ);
              case GQ.ANIMATIONLOOPMODE_RELATIVE:
              case GQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(kQ, vQ, HQ).add((FQ.offsetValue || AQ).scale(FQ.repeatCount))
            }
            break;
          case GQ.ANIMATIONTYPE_COLOR3: {
            const QQ = mQ ? this.color3InterpolateFunctionWithTangents(kQ, oQ.outTangent.scale(uQ), vQ, DQ.inTangent.scale(uQ), HQ) : this.color3InterpolateFunction(kQ, vQ, HQ);
            switch (FQ.xQ) {
              case GQ.ANIMATIONLOOPMODE_CYCLE:
              case GQ.ANIMATIONLOOPMODE_CONSTANT:
              case GQ.ANIMATIONLOOPMODE_YOYO:
                return QQ;
              case GQ.ANIMATIONLOOPMODE_RELATIVE:
              case GQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return QQ.add((FQ.offsetValue || tQ).scale(FQ.repeatCount))
            }
            break
          }
          case GQ.ANIMATIONTYPE_COLOR4: {
            const QQ = mQ ? this.color4InterpolateFunctionWithTangents(kQ, oQ.outTangent.scale(uQ), vQ, DQ.inTangent.scale(uQ), HQ) : this.color4InterpolateFunction(kQ, vQ, HQ);
            switch (FQ.xQ) {
              case GQ.ANIMATIONLOOPMODE_CYCLE:
              case GQ.ANIMATIONLOOPMODE_CONSTANT:
              case GQ.ANIMATIONLOOPMODE_YOYO:
                return QQ;
              case GQ.ANIMATIONLOOPMODE_RELATIVE:
              case GQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return QQ.add((FQ.offsetValue || eQ).scale(FQ.repeatCount))
            }
            break
          }
          case GQ.ANIMATIONTYPE_MATRIX:
            switch (FQ.xQ) {
              case GQ.ANIMATIONLOOPMODE_CYCLE:
              case GQ.ANIMATIONLOOPMODE_CONSTANT:
              case GQ.ANIMATIONLOOPMODE_YOYO:
                return GQ.AllowMatricesInterpolation ? this.matrixInterpolateFunction(kQ, vQ, HQ, FQ.workValue) : kQ;
              case GQ.ANIMATIONLOOPMODE_RELATIVE:
              case GQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kQ
            }
        }
        return 0
      }
      matrixInterpolateFunction(QQ, FQ, wQ, qQ) {
        return GQ.AllowMatrixDecomposeForInterpolation ? qQ ? (LQ.c.DecomposeLerpToRef(QQ, FQ, wQ, qQ), qQ) : LQ.c.DecomposeLerp(QQ, FQ, wQ) : qQ ? (LQ.c.LerpToRef(QQ, FQ, wQ, qQ), qQ) : LQ.c.Lerp(QQ, FQ, wQ)
      }
      clone() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const FQ = new GQ(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.xQ);
        if (FQ.enableBlending = this.enableBlending, FQ.blendingSpeed = this.blendingSpeed, this._keys && FQ.setKeys(this._keys, !1, QQ), this._ranges) {
          FQ._ranges = {};
          for (const QQ in this._ranges) {
            const wQ = this._ranges[QQ];
            wQ && (FQ._ranges[QQ] = wQ.clone())
          }
        }
        return FQ
      }
      setKeys(QQ) {
        let FQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = QQ;
        else if (this._keys = QQ.slice(0), FQ)
          for (let wQ = 0; wQ < this._keys.length; wQ++) {
            const QQ = this._keys[wQ];
            this._keys[wQ] = {
              frame: QQ.frame,
              value: QQ.value.clone ? QQ.value.clone() : QQ.value,
              inTangent: QQ.inTangent && QQ.inTangent.clone ? QQ.inTangent.clone() : QQ.inTangent,
              outTangent: QQ.outTangent && QQ.outTangent.clone ? QQ.outTangent.clone() : QQ.outTangent,
              interpolation: QQ.interpolation,
              lockedTangent: QQ.lockedTangent,
              easingFunction: QQ.easingFunction
            }
          }
      }
      createKeyForFrame(QQ) {
        MQ.key = 0;
        const FQ = this._interpolate(QQ, MQ, !0);
        if (!FQ) return this._keys[MQ.key].frame === QQ ? MQ.key : MQ.key + 1;
        const wQ = {
          frame: QQ,
          value: FQ.clone ? FQ.clone() : FQ
        };
        return this._keys.splice(MQ.key + 1, 0, wQ), MQ.key + 1
      }
      serialize() {
        const QQ = {};
        QQ.name = this.name, QQ.property = this.targetProperty, QQ.framePerSecond = this.framePerSecond, QQ.dataType = this.dataType, QQ.loopBehavior = this.xQ, QQ.enableBlending = this.enableBlending, QQ.blendingSpeed = this.blendingSpeed;
        const FQ = this.dataType;
        QQ.keys = [];
        const wQ = this.getKeys();
        for (let LQ = 0; LQ < wQ.length; LQ++) {
          const qQ = wQ[LQ],
            oQ = {};
          switch (oQ.frame = qQ.frame, FQ) {
            case GQ.ANIMATIONTYPE_FLOAT:
              oQ.values = [qQ.value], void 0 !== qQ.inTangent && oQ.values.push(qQ.inTangent), void 0 !== qQ.outTangent && (void 0 === qQ.inTangent && oQ.values.push(void 0), oQ.values.push(qQ.outTangent)), void 0 !== qQ.interpolation && (void 0 === qQ.inTangent && oQ.values.push(void 0), void 0 === qQ.outTangent && oQ.values.push(void 0), oQ.values.push(qQ.interpolation));
              break;
            case GQ.ANIMATIONTYPE_QUATERNION:
            case GQ.ANIMATIONTYPE_MATRIX:
            case GQ.ANIMATIONTYPE_VECTOR3:
            case GQ.ANIMATIONTYPE_COLOR3:
            case GQ.ANIMATIONTYPE_COLOR4:
              oQ.values = qQ.value.RLQ(), void 0 != qQ.inTangent && oQ.values.push(qQ.inTangent.RLQ()), void 0 != qQ.outTangent && (void 0 === qQ.inTangent && oQ.values.push(void 0), oQ.values.push(qQ.outTangent.RLQ())), void 0 !== qQ.interpolation && (void 0 === qQ.inTangent && oQ.values.push(void 0), void 0 === qQ.outTangent && oQ.values.push(void 0), oQ.values.push(qQ.interpolation))
          }
          QQ.keys.push(oQ)
        }
        QQ.PA = [];
        for (const LQ in this._ranges) {
          const FQ = this._ranges[LQ];
          if (!FQ) continue;
          const wQ = {};
          wQ.name = LQ, wQ.from = FQ.from, wQ.to = FQ.to, QQ.PA.push(wQ)
        }
        return QQ
      }
      static _UniversalLerp(QQ, FQ, wQ) {
        const LQ = QQ.constructor;
        return LQ.Lerp ? LQ.Lerp(QQ, FQ, wQ) : LQ.Slerp ? LQ.Slerp(QQ, FQ, wQ) : QQ.toFixed ? QQ * (1 - wQ) + wQ * FQ : FQ
      }
    }

    function pQ(QQ, FQ, wQ) {
      let qQ;
      qQ = "object" === typeof FQ ? FQ : {
        referenceFrame: FQ ?? 0,
        range: wQ,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let oQ = QQ;
      qQ.cloneOriginalAnimation && (oQ = QQ.clone(), oQ.name = qQ.clonedAnimationName || oQ.name);
      const DQ = oQ.getKeys();
      if (!DQ.length) return oQ;
      const kQ = qQ.referenceFrame && qQ.referenceFrame >= 0 ? qQ.referenceFrame : 0;
      let vQ = 0;
      const mQ = DQ[0];
      let uQ = DQ.length - 1;
      const HQ = DQ[uQ],
        bQ = {
          referenceValue: mQ.value,
          referencePosition: LQ.k.Ox[0],
          referenceQuaternion: LQ.k.Quaternion[0],
          referenceScaling: LQ.k.Ox[1],
          keyPosition: LQ.k.Ox[2],
          keyQuaternion: LQ.k.Quaternion[1],
          keyScaling: LQ.k.Ox[3]
        };
      let YQ = mQ.frame,
        xQ = HQ.frame;
      if (qQ.range) {
        const QQ = oQ.getRange(qQ.range);
        QQ && (YQ = QQ.from, xQ = QQ.to)
      } else YQ = qQ.fromFrame ?? YQ, xQ = qQ.toFrame ?? xQ;
      YQ !== mQ.frame && (vQ = oQ.createKeyForFrame(YQ)), xQ !== HQ.frame && (uQ = oQ.createKeyForFrame(xQ));
      const AQ = oQ.getKeys();
      if (1 === AQ.length) {
        const QQ = oQ._getKeyValue(AQ[0].value);
        bQ.referenceValue = QQ.clone ? QQ.clone() : QQ
      } else if (kQ <= mQ.frame) {
        const QQ = oQ._getKeyValue(mQ.value);
        bQ.referenceValue = QQ.clone ? QQ.clone() : QQ
      } else if (kQ >= HQ.frame) {
        const QQ = oQ._getKeyValue(HQ.value);
        bQ.referenceValue = QQ.clone ? QQ.clone() : QQ
      } else {
        MQ.key = 0;
        const QQ = oQ._interpolate(kQ, MQ);
        bQ.referenceValue = QQ.clone ? QQ.clone() : QQ
      }
      oQ.dataType === GQ.ANIMATIONTYPE_QUATERNION ? bQ.referenceValue.normalize().conjugateInPlace() : oQ.dataType === GQ.ANIMATIONTYPE_MATRIX && (bQ.referenceValue.decompose(bQ.referenceScaling, bQ.referenceQuaternion, bQ.referencePosition), bQ.referenceQuaternion.normalize().conjugateInPlace());
      let tQ = Number.MAX_VALUE;
      const eQ = qQ.clipKeys ? [] : null;
      for (let MQ = vQ; MQ <= uQ; MQ++) {
        let QQ = AQ[MQ];
        if ((eQ || qQ.cloneOriginalAnimation) && (QQ = {
            frame: QQ.frame,
            value: QQ.value.clone ? QQ.value.clone() : QQ.value,
            inTangent: QQ.inTangent,
            outTangent: QQ.outTangent,
            interpolation: QQ.interpolation,
            lockedTangent: QQ.lockedTangent,
            easingFunction: QQ.easingFunction
          }, eQ && (tQ === Number.MAX_VALUE && (tQ = QQ.frame), QQ.frame -= tQ, eQ.push(QQ))), !MQ || oQ.dataType === GQ.ANIMATIONTYPE_FLOAT || QQ.value !== mQ.value) switch (oQ.dataType) {
          case GQ.ANIMATIONTYPE_MATRIX:
            QQ.value.decompose(bQ.keyScaling, bQ.keyQuaternion, bQ.keyPosition), bQ.keyPosition.gLQ(bQ.referencePosition), bQ.keyScaling.divideInPlace(bQ.referenceScaling), bQ.referenceQuaternion.multiplyToRef(bQ.keyQuaternion, bQ.keyQuaternion), LQ.c.ComposeToRef(bQ.keyScaling, bQ.keyQuaternion, bQ.keyPosition, QQ.value);
            break;
          case GQ.ANIMATIONTYPE_QUATERNION:
            bQ.referenceValue.multiplyToRef(QQ.value, QQ.value);
            break;
          case GQ.ANIMATIONTYPE_VECTOR2:
          case GQ.ANIMATIONTYPE_VECTOR3:
          case GQ.ANIMATIONTYPE_COLOR3:
          case GQ.ANIMATIONTYPE_COLOR4:
            QQ.value.subtractToRef(bQ.referenceValue, QQ.value);
            break;
          case GQ.ANIMATIONTYPE_SIZE:
            QQ.value.width -= bQ.referenceValue.width, QQ.value.height -= bQ.referenceValue.height;
            break;
          default:
            QQ.value -= bQ.referenceValue
        }
      }
      return eQ && oQ.setKeys(eQ, !0), oQ
    }

    function cQ(QQ, FQ, wQ, LQ) {
      const qQ = new GQ(QQ + "Animation", QQ, wQ, FQ, GQ.ANIMATIONLOOPMODE_CONSTANT);
      return qQ.setEasingFunction(LQ), qQ
    }

    function CQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ) {
      const HQ = GQ._PrepareAnimation(QQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ);
      return HQ ? (FQ.iN && (uQ = FQ.iN()), uQ ? uQ.beginDirectAnimation(FQ, [HQ], 0, qQ, HQ.xQ !== GQ.ANIMATIONLOOPMODE_CONSTANT, 1, mQ) : null) : null
    }

    function SQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ) {
      const HQ = GQ._PrepareAnimation(QQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ);
      if (!HQ) return null;
      return FQ.iN().beginDirectHierarchyAnimation(FQ, wQ, [HQ], 0, oQ, 1 === HQ.xQ, 1, uQ)
    }

    function iQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ) {
      const uQ = GQ._PrepareAnimation(QQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ);
      return uQ ? (FQ.animations.push(uQ), FQ.iN().beginAnimation(FQ, 0, qQ, 1 === uQ.xQ, 1, mQ)) : null
    }

    function WQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      let kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        vQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        mQ = arguments.length > 9 ? arguments[9] : void 0;
      if (DQ <= 0) return wQ[QQ] = FQ, kQ && kQ(), null;
      const uQ = qQ * (DQ / 1e3);
      oQ.setKeys(mQ ?? [{
        frame: 0,
        value: wQ[QQ].clone ? wQ[QQ].clone() : wQ[QQ]
      }, {
        frame: uQ,
        value: FQ
      }]), wQ.animations || (wQ.animations = []), wQ.animations.push(oQ);
      return LQ.beginAnimation(wQ, 0, uQ, !1, 1, kQ ?? void 0, void 0, vQ)
    }

    function RQ(QQ, FQ) {
      uQ.c.AppendSerializedAnimations(QQ, FQ)
    }

    function OQ(QQ) {
      const FQ = new GQ(QQ.name, QQ.property, QQ.framePerSecond, QQ.dataType, QQ.loopBehavior),
        wQ = QQ.dataType,
        oQ = [];
      let DQ, kQ;
      for (QQ.enableBlending && (FQ.enableBlending = QQ.enableBlending), QQ.blendingSpeed && (FQ.blendingSpeed = QQ.blendingSpeed), kQ = 0; kQ < QQ.keys.length; kQ++) {
        const FQ = QQ.keys[kQ];
        let vQ, mQ, uQ;
        switch (wQ) {
          case GQ.ANIMATIONTYPE_FLOAT:
            DQ = FQ.values[0], FQ.values.length >= 2 && (vQ = FQ.values[1]), FQ.values.length >= 3 && (mQ = FQ.values[2]), FQ.values.length >= 4 && (uQ = FQ.values[3]);
            break;
          case GQ.ANIMATIONTYPE_QUATERNION:
            if (DQ = LQ.e.FromArray(FQ.values), FQ.values.length >= 8) {
              const QQ = LQ.e.FromArray(FQ.values.slice(4, 8));
              QQ.equals(LQ.e.Zero()) || (vQ = QQ)
            }
            if (FQ.values.length >= 12) {
              const QQ = LQ.e.FromArray(FQ.values.slice(8, 12));
              QQ.equals(LQ.e.Zero()) || (mQ = QQ)
            }
            FQ.values.length >= 13 && (uQ = FQ.values[12]);
            break;
          case GQ.ANIMATIONTYPE_MATRIX:
            DQ = LQ.c.FromArray(FQ.values), FQ.values.length >= 17 && (uQ = FQ.values[16]);
            break;
          case GQ.ANIMATIONTYPE_COLOR3:
            DQ = qQ.b.FromArray(FQ.values), FQ.values[3] && (vQ = qQ.b.FromArray(FQ.values[3])), FQ.values[4] && (mQ = qQ.b.FromArray(FQ.values[4])), FQ.values[5] && (uQ = FQ.values[5]);
            break;
          case GQ.ANIMATIONTYPE_COLOR4:
            DQ = qQ.e.FromArray(FQ.values), FQ.values[4] && (vQ = qQ.e.FromArray(FQ.values[4])), FQ.values[5] && (mQ = qQ.e.FromArray(FQ.values[5])), FQ.values[6] && (uQ = FQ.values[6]);
            break;
          case GQ.ANIMATIONTYPE_VECTOR3:
          default:
            DQ = LQ.p.FromArray(FQ.values), FQ.values[3] && (vQ = LQ.p.FromArray(FQ.values[3])), FQ.values[4] && (mQ = LQ.p.FromArray(FQ.values[4])), FQ.values[5] && (uQ = FQ.values[5])
        }
        const HQ = {};
        HQ.frame = FQ.frame, HQ.value = DQ, void 0 != vQ && (HQ.inTangent = vQ), void 0 != mQ && (HQ.outTangent = mQ), void 0 != uQ && (HQ.interpolation = uQ), oQ.push(HQ)
      }
      if (FQ.setKeys(oQ), QQ.PA)
        for (kQ = 0; kQ < QQ.PA.length; kQ++) DQ = QQ.PA[kQ], FQ.createRange(DQ.name, DQ.from, DQ.to);
      return FQ
    }
    async function sQ(QQ, FQ) {
      return await new Promise(((wQ, LQ) => {
        const qQ = new mQ.e;
        qQ.addEventListener("readystatechange", (() => {
          if (4 == qQ.readyState)
            if (200 == qQ.status) {
              let FQ = JSON.parse(qQ.responseText);
              if (FQ.animations && (FQ = FQ.animations), FQ.length) {
                const QQ = [];
                for (const wQ of FQ) QQ.push(OQ(wQ));
                wQ(QQ)
              } else {
                const LQ = OQ(FQ);
                QQ && (LQ.name = QQ), wQ(LQ)
              }
            } else LQ("Unable to load the animation")
        })), qQ.open("GET", FQ), qQ.send()
      }))
    }
    async function rQ(QQ) {
      const FQ = this?.SnippetUrl ?? GQ.SnippetUrl;
      return await new Promise(((wQ, LQ) => {
        const qQ = new mQ.e;
        qQ.addEventListener("readystatechange", (() => {
          if (4 == qQ.readyState)
            if (200 == qQ.status) {
              const FQ = JSON.parse(JSON.parse(qQ.responseText).jsonPayload);
              if (FQ.animations) {
                const LQ = JSON.parse(FQ.animations),
                  qQ = [];
                for (const FQ of LQ.animations) {
                  const wQ = OQ(FQ);
                  wQ.snippetId = QQ, qQ.push(wQ)
                }
                wQ(qQ)
              } else {
                const LQ = OQ(JSON.parse(FQ.animation));
                LQ.snippetId = QQ, wQ(LQ)
              }
            } else LQ("Unable to load the snippet " + QQ)
        })), qQ.open("GET", FQ + "/" + QQ.replace(/#/g, "/")), qQ.send()
      }))
    }
    GQ._UniqueIdGenerator = 0, GQ.AllowMatricesInterpolation = !1, GQ.AllowMatrixDecomposeForInterpolation = !0, GQ.InheritOriginalValueFromActiveAnimations = !1, GQ.SnippetUrl = "https://snippet.babylonjs.com", GQ.ANIMATIONTYPE_FLOAT = 0, GQ.ANIMATIONTYPE_VECTOR3 = 1, GQ.ANIMATIONTYPE_QUATERNION = 2, GQ.ANIMATIONTYPE_MATRIX = 3, GQ.ANIMATIONTYPE_COLOR3 = 4, GQ.ANIMATIONTYPE_COLOR4 = 7, GQ.ANIMATIONTYPE_VECTOR2 = 5, GQ.ANIMATIONTYPE_SIZE = 6, GQ.ANIMATIONLOOPMODE_RELATIVE = 0, GQ.ANIMATIONLOOPMODE_CYCLE = 1, GQ.ANIMATIONLOOPMODE_CONSTANT = 2, GQ.ANIMATIONLOOPMODE_YOYO = 4, GQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const IQ = rQ;
    let UQ = !1;

    function NQ() {
      UQ || (UQ = !0, GQ.Parse = OQ, GQ.ParseFromFileAsync = sQ, GQ.ParseFromSnippetAsync = rQ, GQ.CreateFromSnippetAsync = IQ, GQ.CreateAnimation = cQ, GQ.CreateAndStartAnimation = CQ, GQ.CreateAndStartHierarchyAnimation = SQ, GQ.CreateMergeAndStartAnimation = iQ, GQ.MakeAnimationAdditive = pQ, GQ.TransitionTo = WQ, GQ.AppendSerializedAnimations = RQ, (0, HQ.e)("BABYLON.Animation", GQ), kQ.c._AnimationRangeFactory = (QQ, FQ, wQ) => new DQ.b(QQ, FQ, wQ))
    }
  },
  40514: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ
    });
    class LQ {
      constructor(QQ, FQ, wQ) {
        this.name = QQ, this.from = FQ, this.to = wQ
      }
      clone() {
        return new LQ(this.name, this.from, this.to)
      }
    }
  },
  40554: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ.c,
      d: () => LQ.h
    });
    var LQ = wQ(39561);
    (0, LQ.d)()
  },
  40539: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => LQ.e
    });
    var LQ = wQ(39897);
    (0, LQ.c)()
  },
  40526: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ.c
    });
    var LQ = wQ(39886);
    (0, LQ.e)()
  },
  40563: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ.c
    });
    var LQ = wQ(39829);
    (0, LQ.e)()
  },
  40518: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ.e
    });
    var LQ = wQ(39862);
    (0, LQ.c)()
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);