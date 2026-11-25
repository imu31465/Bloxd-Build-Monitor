export const id = 283;
export const ids = [283];
export const modules = {
  41309: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => pQ,
      d: () => RQ,
      f: () => yQ,
      h: () => VQ,
      k: () => rQ,
      o: () => BQ,
      s: () => jQ,
      w: () => IQ
    });
    var wQ = XQ(37370),
      qQ = XQ(37546),
      TQ = XQ(37404),
      zQ = XQ(41313),
      sQ = XQ(40491),
      FQ = XQ(40277),
      PQ = XQ(40314),
      gQ = XQ(40286),
      JQ = XQ(37418);
    const rQ = Object.freeze(new wQ.h(0, 0, 0, 0)),
      IQ = Object.freeze(wQ.s.Zero()),
      jQ = Object.freeze(wQ.q.Zero()),
      BQ = Object.freeze(FQ.e.Zero()),
      yQ = Object.freeze(qQ.b.Black()),
      VQ = Object.freeze(new qQ.d(0, 0, 0, 0)),
      DQ = {
        key: 0,
        repeatCount: 0,
        nw: 2
      };
    class pQ {
      static _PrepareAnimation(QQ, WQ, XQ, TQ, zQ, sQ, PQ, gQ) {
        let JQ;
        if (!isNaN(parseFloat(zQ)) && isFinite(zQ) ? JQ = pQ.ANIMATIONTYPE_FLOAT : zQ instanceof wQ.h ? JQ = pQ.ANIMATIONTYPE_QUATERNION : zQ instanceof wQ.s ? JQ = pQ.ANIMATIONTYPE_VECTOR3 : zQ instanceof wQ.q ? JQ = pQ.ANIMATIONTYPE_VECTOR2 : zQ instanceof qQ.b ? JQ = pQ.ANIMATIONTYPE_COLOR3 : zQ instanceof qQ.d ? JQ = pQ.ANIMATIONTYPE_COLOR4 : zQ instanceof FQ.e && (JQ = pQ.ANIMATIONTYPE_SIZE), void 0 == JQ) return null;
        const rQ = new pQ(QQ, WQ, XQ, JQ, PQ),
          IQ = [{
            frame: 0,
            value: zQ
          }, {
            frame: TQ,
            value: sQ
          }];
        return rQ.setKeys(IQ), void 0 !== gQ && rQ.setEasingFunction(gQ), rQ
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const QQ of this._runtimeAnimations)
          if (!QQ.isStopped()) return !0;
        return !1
      }
      constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
        this.name = QQ, this.targetProperty = WQ, this.framePerSecond = XQ, this.dataType = wQ, this.nw = qQ, this.enableBlending = TQ, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = WQ.split("."), this.dataType = wQ, this.nw = void 0 === qQ ? pQ.ANIMATIONLOOPMODE_CYCLE : qQ, this.uniqueId = pQ._UniqueIdGenerator++
      }
      toString(QQ) {
        let WQ = "Name: " + this.name + ", property: " + this.targetProperty;
        if (WQ += ", datatype: " + ["Float", "vj", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], WQ += ", nKeys: " + (this._keys ? this._keys.length : "none"), WQ += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), QQ) {
          WQ += ", Ranges: {";
          let QQ = !0;
          for (const XQ in this._ranges) QQ || (WQ += ", "), QQ = !1, WQ += XQ;
          WQ += "}"
        }
        return WQ
      }
      addEvent(QQ) {
        this._events.push(QQ), this._events.sort(((QQ, WQ) => QQ.frame - WQ.frame))
      }
      removeEvents(QQ) {
        for (let WQ = 0; WQ < this._events.length; WQ++) this._events[WQ].frame === QQ && (this._events.splice(WQ, 1), WQ--)
      }
      getEvents() {
        return this._events
      }
      createRange(QQ, WQ, XQ) {
        this._ranges[QQ] || (this._ranges[QQ] = new zQ.b(QQ, WQ, XQ))
      }
      deleteRange(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const XQ = this._ranges[QQ];
        if (XQ) {
          if (WQ) {
            const QQ = XQ.from,
              WQ = XQ.to;
            for (let XQ = this._keys.length - 1; XQ >= 0; XQ--) this._keys[XQ].frame >= QQ && this._keys[XQ].frame <= WQ && this._keys.splice(XQ, 1)
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
        for (let WQ = 0, XQ = this._keys.length; WQ < XQ; WQ++) QQ < this._keys[WQ].frame && (QQ = this._keys[WQ].frame);
        return QQ
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(QQ) {
        this._easingFunction = QQ
      }
      floatInterpolateFunction(QQ, WQ, XQ) {
        return (0, TQ.Lerp)(QQ, WQ, XQ)
      }
      floatInterpolateFunctionWithTangents(QQ, WQ, XQ, wQ, qQ) {
        return (0, TQ.Hermite)(QQ, WQ, XQ, wQ, qQ)
      }
      quaternionInterpolateFunction(QQ, WQ, XQ) {
        return wQ.h.Slerp(QQ, WQ, XQ)
      }
      quaternionInterpolateFunctionWithTangents(QQ, WQ, XQ, qQ, TQ) {
        return wQ.h.Hermite(QQ, WQ, XQ, qQ, TQ).normalize()
      }
      vector3InterpolateFunction(QQ, WQ, XQ) {
        return wQ.s.Lerp(QQ, WQ, XQ)
      }
      vector3InterpolateFunctionWithTangents(QQ, WQ, XQ, qQ, TQ) {
        return wQ.s.Hermite(QQ, WQ, XQ, qQ, TQ)
      }
      vector2InterpolateFunction(QQ, WQ, XQ) {
        return wQ.q.Lerp(QQ, WQ, XQ)
      }
      vector2InterpolateFunctionWithTangents(QQ, WQ, XQ, qQ, TQ) {
        return wQ.q.Hermite(QQ, WQ, XQ, qQ, TQ)
      }
      sizeInterpolateFunction(QQ, WQ, XQ) {
        return FQ.e.Lerp(QQ, WQ, XQ)
      }
      color3InterpolateFunction(QQ, WQ, XQ) {
        return qQ.b.Lerp(QQ, WQ, XQ)
      }
      color3InterpolateFunctionWithTangents(QQ, WQ, XQ, wQ, TQ) {
        return qQ.b.Hermite(QQ, WQ, XQ, wQ, TQ)
      }
      color4InterpolateFunction(QQ, WQ, XQ) {
        return qQ.d.Lerp(QQ, WQ, XQ)
      }
      color4InterpolateFunctionWithTangents(QQ, WQ, XQ, wQ, TQ) {
        return qQ.d.Hermite(QQ, WQ, XQ, wQ, TQ)
      }
      _getKeyValue(QQ) {
        return "function" === typeof QQ ? QQ() : QQ
      }
      evaluate(QQ) {
        return DQ.key = 0, this._interpolate(QQ, DQ)
      }
      _interpolate(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (WQ.nw === pQ.ANIMATIONLOOPMODE_CONSTANT && WQ.repeatCount > 0) return WQ.highLimitValue.clone ? WQ.highLimitValue.clone() : WQ.highLimitValue;
        const wQ = this._keys;
        let qQ;
        if (this._coreAnimation) qQ = this._coreAnimation._key;
        else {
          const TQ = wQ.length;
          for (qQ = WQ.key; qQ >= 0 && QQ < wQ[qQ].frame;) --qQ;
          for (; qQ + 1 <= TQ - 1 && QQ >= wQ[qQ + 1].frame;) ++qQ;
          if (WQ.key = qQ, qQ < 0) return XQ ? void 0 : this._getKeyValue(wQ[0].value);
          if (qQ + 1 > TQ - 1) return XQ ? void 0 : this._getKeyValue(wQ[TQ - 1].value);
          this._key = qQ
        }
        const TQ = wQ[qQ],
          zQ = wQ[qQ + 1];
        if (XQ && (QQ === TQ.frame || QQ === zQ.frame)) return;
        const sQ = this._getKeyValue(TQ.value),
          FQ = this._getKeyValue(zQ.value);
        if (1 === TQ.interpolation) return zQ.frame > QQ ? sQ : FQ;
        const PQ = void 0 !== TQ.outTangent && void 0 !== zQ.inTangent,
          gQ = zQ.frame - TQ.frame;
        let JQ = (QQ - TQ.frame) / gQ;
        const DQ = TQ.easingFunction || this.getEasingFunction();
        switch (DQ && (JQ = DQ.ease(JQ)), this.dataType) {
          case pQ.ANIMATIONTYPE_FLOAT: {
            const QQ = PQ ? this.floatInterpolateFunctionWithTangents(sQ, TQ.outTangent * gQ, FQ, zQ.inTangent * gQ, JQ) : this.floatInterpolateFunction(sQ, FQ, JQ);
            switch (WQ.nw) {
              case pQ.ANIMATIONLOOPMODE_CYCLE:
              case pQ.ANIMATIONLOOPMODE_CONSTANT:
              case pQ.ANIMATIONLOOPMODE_YOYO:
                return QQ;
              case pQ.ANIMATIONLOOPMODE_RELATIVE:
              case pQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (WQ.offsetValue ?? 0) * WQ.repeatCount + QQ
            }
            break
          }
          case pQ.ANIMATIONTYPE_QUATERNION: {
            const QQ = PQ ? this.quaternionInterpolateFunctionWithTangents(sQ, TQ.outTangent.scale(gQ), FQ, zQ.inTangent.scale(gQ), JQ) : this.quaternionInterpolateFunction(sQ, FQ, JQ);
            switch (WQ.nw) {
              case pQ.ANIMATIONLOOPMODE_CYCLE:
              case pQ.ANIMATIONLOOPMODE_CONSTANT:
              case pQ.ANIMATIONLOOPMODE_YOYO:
                return QQ;
              case pQ.ANIMATIONLOOPMODE_RELATIVE:
              case pQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return QQ.addInPlace((WQ.offsetValue || rQ).scale(WQ.repeatCount))
            }
            return QQ
          }
          case pQ.ANIMATIONTYPE_VECTOR3: {
            const QQ = PQ ? this.vector3InterpolateFunctionWithTangents(sQ, TQ.outTangent.scale(gQ), FQ, zQ.inTangent.scale(gQ), JQ) : this.vector3InterpolateFunction(sQ, FQ, JQ);
            switch (WQ.nw) {
              case pQ.ANIMATIONLOOPMODE_CYCLE:
              case pQ.ANIMATIONLOOPMODE_CONSTANT:
              case pQ.ANIMATIONLOOPMODE_YOYO:
                return QQ;
              case pQ.ANIMATIONLOOPMODE_RELATIVE:
              case pQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return QQ.add((WQ.offsetValue || IQ).scale(WQ.repeatCount))
            }
            break
          }
          case pQ.ANIMATIONTYPE_VECTOR2: {
            const QQ = PQ ? this.vector2InterpolateFunctionWithTangents(sQ, TQ.outTangent.scale(gQ), FQ, zQ.inTangent.scale(gQ), JQ) : this.vector2InterpolateFunction(sQ, FQ, JQ);
            switch (WQ.nw) {
              case pQ.ANIMATIONLOOPMODE_CYCLE:
              case pQ.ANIMATIONLOOPMODE_CONSTANT:
              case pQ.ANIMATIONLOOPMODE_YOYO:
                return QQ;
              case pQ.ANIMATIONLOOPMODE_RELATIVE:
              case pQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return QQ.add((WQ.offsetValue || jQ).scale(WQ.repeatCount))
            }
            break
          }
          case pQ.ANIMATIONTYPE_SIZE:
            switch (WQ.nw) {
              case pQ.ANIMATIONLOOPMODE_CYCLE:
              case pQ.ANIMATIONLOOPMODE_CONSTANT:
              case pQ.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(sQ, FQ, JQ);
              case pQ.ANIMATIONLOOPMODE_RELATIVE:
              case pQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(sQ, FQ, JQ).add((WQ.offsetValue || BQ).scale(WQ.repeatCount))
            }
            break;
          case pQ.ANIMATIONTYPE_COLOR3: {
            const QQ = PQ ? this.color3InterpolateFunctionWithTangents(sQ, TQ.outTangent.scale(gQ), FQ, zQ.inTangent.scale(gQ), JQ) : this.color3InterpolateFunction(sQ, FQ, JQ);
            switch (WQ.nw) {
              case pQ.ANIMATIONLOOPMODE_CYCLE:
              case pQ.ANIMATIONLOOPMODE_CONSTANT:
              case pQ.ANIMATIONLOOPMODE_YOYO:
                return QQ;
              case pQ.ANIMATIONLOOPMODE_RELATIVE:
              case pQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return QQ.add((WQ.offsetValue || yQ).scale(WQ.repeatCount))
            }
            break
          }
          case pQ.ANIMATIONTYPE_COLOR4: {
            const QQ = PQ ? this.color4InterpolateFunctionWithTangents(sQ, TQ.outTangent.scale(gQ), FQ, zQ.inTangent.scale(gQ), JQ) : this.color4InterpolateFunction(sQ, FQ, JQ);
            switch (WQ.nw) {
              case pQ.ANIMATIONLOOPMODE_CYCLE:
              case pQ.ANIMATIONLOOPMODE_CONSTANT:
              case pQ.ANIMATIONLOOPMODE_YOYO:
                return QQ;
              case pQ.ANIMATIONLOOPMODE_RELATIVE:
              case pQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return QQ.add((WQ.offsetValue || VQ).scale(WQ.repeatCount))
            }
            break
          }
          case pQ.ANIMATIONTYPE_MATRIX:
            switch (WQ.nw) {
              case pQ.ANIMATIONLOOPMODE_CYCLE:
              case pQ.ANIMATIONLOOPMODE_CONSTANT:
              case pQ.ANIMATIONLOOPMODE_YOYO:
                return pQ.AllowMatricesInterpolation ? this.matrixInterpolateFunction(sQ, FQ, JQ, WQ.workValue) : sQ;
              case pQ.ANIMATIONLOOPMODE_RELATIVE:
              case pQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return sQ
            }
        }
        return 0
      }
      matrixInterpolateFunction(QQ, WQ, XQ, qQ) {
        return pQ.AllowMatrixDecomposeForInterpolation ? qQ ? (wQ.e.DecomposeLerpToRef(QQ, WQ, XQ, qQ), qQ) : wQ.e.DecomposeLerp(QQ, WQ, XQ) : qQ ? (wQ.e.LerpToRef(QQ, WQ, XQ, qQ), qQ) : wQ.e.Lerp(QQ, WQ, XQ)
      }
      clone() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WQ = new pQ(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.nw);
        if (WQ.enableBlending = this.enableBlending, WQ.blendingSpeed = this.blendingSpeed, this._keys && WQ.setKeys(this._keys, !1, QQ), this._ranges) {
          WQ._ranges = {};
          for (const QQ in this._ranges) {
            const XQ = this._ranges[QQ];
            XQ && (WQ._ranges[QQ] = XQ.clone())
          }
        }
        return WQ
      }
      setKeys(QQ) {
        let WQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = QQ;
        else if (this._keys = QQ.slice(0), WQ)
          for (let XQ = 0; XQ < this._keys.length; XQ++) {
            const QQ = this._keys[XQ];
            this._keys[XQ] = {
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
        DQ.key = 0;
        const WQ = this._interpolate(QQ, DQ, !0);
        if (!WQ) return this._keys[DQ.key].frame === QQ ? DQ.key : DQ.key + 1;
        const XQ = {
          frame: QQ,
          value: WQ.clone ? WQ.clone() : WQ
        };
        return this._keys.splice(DQ.key + 1, 0, XQ), DQ.key + 1
      }
      serialize() {
        const QQ = {};
        QQ.name = this.name, QQ.property = this.targetProperty, QQ.framePerSecond = this.framePerSecond, QQ.dataType = this.dataType, QQ.loopBehavior = this.nw, QQ.enableBlending = this.enableBlending, QQ.blendingSpeed = this.blendingSpeed;
        const WQ = this.dataType;
        QQ.keys = [];
        const XQ = this.getKeys();
        for (let wQ = 0; wQ < XQ.length; wQ++) {
          const qQ = XQ[wQ],
            TQ = {};
          switch (TQ.frame = qQ.frame, WQ) {
            case pQ.ANIMATIONTYPE_FLOAT:
              TQ.values = [qQ.value], void 0 !== qQ.inTangent && TQ.values.push(qQ.inTangent), void 0 !== qQ.outTangent && (void 0 === qQ.inTangent && TQ.values.push(void 0), TQ.values.push(qQ.outTangent)), void 0 !== qQ.interpolation && (void 0 === qQ.inTangent && TQ.values.push(void 0), void 0 === qQ.outTangent && TQ.values.push(void 0), TQ.values.push(qQ.interpolation));
              break;
            case pQ.ANIMATIONTYPE_QUATERNION:
            case pQ.ANIMATIONTYPE_MATRIX:
            case pQ.ANIMATIONTYPE_VECTOR3:
            case pQ.ANIMATIONTYPE_COLOR3:
            case pQ.ANIMATIONTYPE_COLOR4:
              TQ.values = qQ.value.awQ(), void 0 != qQ.inTangent && TQ.values.push(qQ.inTangent.awQ()), void 0 != qQ.outTangent && (void 0 === qQ.inTangent && TQ.values.push(void 0), TQ.values.push(qQ.outTangent.awQ())), void 0 !== qQ.interpolation && (void 0 === qQ.inTangent && TQ.values.push(void 0), void 0 === qQ.outTangent && TQ.values.push(void 0), TQ.values.push(qQ.interpolation))
          }
          QQ.keys.push(TQ)
        }
        QQ.Qy = [];
        for (const wQ in this._ranges) {
          const WQ = this._ranges[wQ];
          if (!WQ) continue;
          const XQ = {};
          XQ.name = wQ, XQ.from = WQ.from, XQ.to = WQ.to, QQ.Qy.push(XQ)
        }
        return QQ
      }
      static _UniversalLerp(QQ, WQ, XQ) {
        const wQ = QQ.constructor;
        return wQ.Lerp ? wQ.Lerp(QQ, WQ, XQ) : wQ.Slerp ? wQ.Slerp(QQ, WQ, XQ) : QQ.toFixed ? QQ * (1 - XQ) + XQ * WQ : WQ
      }
    }

    function GQ(QQ, WQ, XQ) {
      let qQ;
      qQ = "object" === typeof WQ ? WQ : {
        referenceFrame: WQ ?? 0,
        range: XQ,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let TQ = QQ;
      qQ.cloneOriginalAnimation && (TQ = QQ.clone(), TQ.name = qQ.clonedAnimationName || TQ.name);
      const zQ = TQ.getKeys();
      if (!zQ.length) return TQ;
      const sQ = qQ.referenceFrame && qQ.referenceFrame >= 0 ? qQ.referenceFrame : 0;
      let FQ = 0;
      const PQ = zQ[0];
      let gQ = zQ.length - 1;
      const JQ = zQ[gQ],
        rQ = {
          referenceValue: PQ.value,
          referencePosition: wQ.m.vj[0],
          referenceQuaternion: wQ.m.Quaternion[0],
          referenceScaling: wQ.m.vj[1],
          keyPosition: wQ.m.vj[2],
          keyQuaternion: wQ.m.Quaternion[1],
          keyScaling: wQ.m.vj[3]
        };
      let IQ = PQ.frame,
        jQ = JQ.frame;
      if (qQ.range) {
        const QQ = TQ.getRange(qQ.range);
        QQ && (IQ = QQ.from, jQ = QQ.to)
      } else IQ = qQ.fromFrame ?? IQ, jQ = qQ.toFrame ?? jQ;
      IQ !== PQ.frame && (FQ = TQ.createKeyForFrame(IQ)), jQ !== JQ.frame && (gQ = TQ.createKeyForFrame(jQ));
      const BQ = TQ.getKeys();
      if (1 === BQ.length) {
        const QQ = TQ._getKeyValue(BQ[0].value);
        rQ.referenceValue = QQ.clone ? QQ.clone() : QQ
      } else if (sQ <= PQ.frame) {
        const QQ = TQ._getKeyValue(PQ.value);
        rQ.referenceValue = QQ.clone ? QQ.clone() : QQ
      } else if (sQ >= JQ.frame) {
        const QQ = TQ._getKeyValue(JQ.value);
        rQ.referenceValue = QQ.clone ? QQ.clone() : QQ
      } else {
        DQ.key = 0;
        const QQ = TQ._interpolate(sQ, DQ);
        rQ.referenceValue = QQ.clone ? QQ.clone() : QQ
      }
      TQ.dataType === pQ.ANIMATIONTYPE_QUATERNION ? rQ.referenceValue.normalize().conjugateInPlace() : TQ.dataType === pQ.ANIMATIONTYPE_MATRIX && (rQ.referenceValue.decompose(rQ.referenceScaling, rQ.referenceQuaternion, rQ.referencePosition), rQ.referenceQuaternion.normalize().conjugateInPlace());
      let yQ = Number.MAX_VALUE;
      const VQ = qQ.clipKeys ? [] : null;
      for (let DQ = FQ; DQ <= gQ; DQ++) {
        let QQ = BQ[DQ];
        if ((VQ || qQ.cloneOriginalAnimation) && (QQ = {
            frame: QQ.frame,
            value: QQ.value.clone ? QQ.value.clone() : QQ.value,
            inTangent: QQ.inTangent,
            outTangent: QQ.outTangent,
            interpolation: QQ.interpolation,
            lockedTangent: QQ.lockedTangent,
            easingFunction: QQ.easingFunction
          }, VQ && (yQ === Number.MAX_VALUE && (yQ = QQ.frame), QQ.frame -= yQ, VQ.push(QQ))), !DQ || TQ.dataType === pQ.ANIMATIONTYPE_FLOAT || QQ.value !== PQ.value) switch (TQ.dataType) {
          case pQ.ANIMATIONTYPE_MATRIX:
            QQ.value.decompose(rQ.keyScaling, rQ.keyQuaternion, rQ.keyPosition), rQ.keyPosition.YwQ(rQ.referencePosition), rQ.keyScaling.divideInPlace(rQ.referenceScaling), rQ.referenceQuaternion.multiplyToRef(rQ.keyQuaternion, rQ.keyQuaternion), wQ.e.ComposeToRef(rQ.keyScaling, rQ.keyQuaternion, rQ.keyPosition, QQ.value);
            break;
          case pQ.ANIMATIONTYPE_QUATERNION:
            rQ.referenceValue.multiplyToRef(QQ.value, QQ.value);
            break;
          case pQ.ANIMATIONTYPE_VECTOR2:
          case pQ.ANIMATIONTYPE_VECTOR3:
          case pQ.ANIMATIONTYPE_COLOR3:
          case pQ.ANIMATIONTYPE_COLOR4:
            QQ.value.subtractToRef(rQ.referenceValue, QQ.value);
            break;
          case pQ.ANIMATIONTYPE_SIZE:
            QQ.value.width -= rQ.referenceValue.width, QQ.value.height -= rQ.referenceValue.height;
            break;
          default:
            QQ.value -= rQ.referenceValue
        }
      }
      return VQ && TQ.setKeys(VQ, !0), TQ
    }

    function UQ(QQ, WQ, XQ, wQ) {
      const qQ = new pQ(QQ + "Animation", QQ, XQ, WQ, pQ.ANIMATIONLOOPMODE_CONSTANT);
      return qQ.setEasingFunction(wQ), qQ
    }

    function bQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ) {
      const JQ = pQ._PrepareAnimation(QQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ);
      return JQ ? (WQ.sE && (gQ = WQ.sE()), gQ ? gQ.beginDirectAnimation(WQ, [JQ], 0, qQ, JQ.nw !== pQ.ANIMATIONLOOPMODE_CONSTANT, 1, PQ) : null) : null
    }

    function vQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ) {
      const JQ = pQ._PrepareAnimation(QQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ);
      if (!JQ) return null;
      return WQ.sE().beginDirectHierarchyAnimation(WQ, XQ, [JQ], 0, TQ, 1 === JQ.nw, 1, gQ)
    }

    function dQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ) {
      const gQ = pQ._PrepareAnimation(QQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ);
      return gQ ? (WQ.animations.push(gQ), WQ.sE().beginAnimation(WQ, 0, qQ, 1 === gQ.nw, 1, PQ)) : null
    }

    function HQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      let sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        FQ = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        PQ = arguments.length > 9 ? arguments[9] : void 0;
      if (zQ <= 0) return XQ[QQ] = WQ, sQ && sQ(), null;
      const gQ = qQ * (zQ / 1e3);
      TQ.setKeys(PQ ?? [{
        frame: 0,
        value: XQ[QQ].clone ? XQ[QQ].clone() : XQ[QQ]
      }, {
        frame: gQ,
        value: WQ
      }]), XQ.animations || (XQ.animations = []), XQ.animations.push(TQ);
      return wQ.beginAnimation(XQ, 0, gQ, !1, 1, sQ ?? void 0, void 0, FQ)
    }

    function aQ(QQ, WQ) {
      gQ.b.AppendSerializedAnimations(QQ, WQ)
    }

    function lQ(QQ) {
      const WQ = new pQ(QQ.name, QQ.property, QQ.framePerSecond, QQ.dataType, QQ.loopBehavior),
        XQ = QQ.dataType,
        TQ = [];
      let zQ, sQ;
      for (QQ.enableBlending && (WQ.enableBlending = QQ.enableBlending), QQ.blendingSpeed && (WQ.blendingSpeed = QQ.blendingSpeed), sQ = 0; sQ < QQ.keys.length; sQ++) {
        const WQ = QQ.keys[sQ];
        let FQ, PQ, gQ;
        switch (XQ) {
          case pQ.ANIMATIONTYPE_FLOAT:
            zQ = WQ.values[0], WQ.values.length >= 2 && (FQ = WQ.values[1]), WQ.values.length >= 3 && (PQ = WQ.values[2]), WQ.values.length >= 4 && (gQ = WQ.values[3]);
            break;
          case pQ.ANIMATIONTYPE_QUATERNION:
            if (zQ = wQ.h.FromArray(WQ.values), WQ.values.length >= 8) {
              const QQ = wQ.h.FromArray(WQ.values.slice(4, 8));
              QQ.equals(wQ.h.Zero()) || (FQ = QQ)
            }
            if (WQ.values.length >= 12) {
              const QQ = wQ.h.FromArray(WQ.values.slice(8, 12));
              QQ.equals(wQ.h.Zero()) || (PQ = QQ)
            }
            WQ.values.length >= 13 && (gQ = WQ.values[12]);
            break;
          case pQ.ANIMATIONTYPE_MATRIX:
            zQ = wQ.e.FromArray(WQ.values), WQ.values.length >= 17 && (gQ = WQ.values[16]);
            break;
          case pQ.ANIMATIONTYPE_COLOR3:
            zQ = qQ.b.FromArray(WQ.values), WQ.values[3] && (FQ = qQ.b.FromArray(WQ.values[3])), WQ.values[4] && (PQ = qQ.b.FromArray(WQ.values[4])), WQ.values[5] && (gQ = WQ.values[5]);
            break;
          case pQ.ANIMATIONTYPE_COLOR4:
            zQ = qQ.d.FromArray(WQ.values), WQ.values[4] && (FQ = qQ.d.FromArray(WQ.values[4])), WQ.values[5] && (PQ = qQ.d.FromArray(WQ.values[5])), WQ.values[6] && (gQ = WQ.values[6]);
            break;
          case pQ.ANIMATIONTYPE_VECTOR3:
          default:
            zQ = wQ.s.FromArray(WQ.values), WQ.values[3] && (FQ = wQ.s.FromArray(WQ.values[3])), WQ.values[4] && (PQ = wQ.s.FromArray(WQ.values[4])), WQ.values[5] && (gQ = WQ.values[5])
        }
        const JQ = {};
        JQ.frame = WQ.frame, JQ.value = zQ, void 0 != FQ && (JQ.inTangent = FQ), void 0 != PQ && (JQ.outTangent = PQ), void 0 != gQ && (JQ.interpolation = gQ), TQ.push(JQ)
      }
      if (WQ.setKeys(TQ), QQ.Qy)
        for (sQ = 0; sQ < QQ.Qy.length; sQ++) zQ = QQ.Qy[sQ], WQ.createRange(zQ.name, zQ.from, zQ.to);
      return WQ
    }
    async function hQ(QQ, WQ) {
      return await new Promise(((XQ, wQ) => {
        const qQ = new PQ.b;
        qQ.addEventListener("readystatechange", (() => {
          if (4 == qQ.readyState)
            if (200 == qQ.status) {
              let WQ = JSON.parse(qQ.responseText);
              if (WQ.animations && (WQ = WQ.animations), WQ.length) {
                const QQ = [];
                for (const XQ of WQ) QQ.push(lQ(XQ));
                XQ(QQ)
              } else {
                const wQ = lQ(WQ);
                QQ && (wQ.name = QQ), XQ(wQ)
              }
            } else wQ("Unable to load the animation")
        })), qQ.open("GET", WQ), qQ.send()
      }))
    }
    async function iQ(QQ) {
      const WQ = this?.SnippetUrl ?? pQ.SnippetUrl;
      return await new Promise(((XQ, wQ) => {
        const qQ = new PQ.b;
        qQ.addEventListener("readystatechange", (() => {
          if (4 == qQ.readyState)
            if (200 == qQ.status) {
              const WQ = JSON.parse(JSON.parse(qQ.responseText).jsonPayload);
              if (WQ.animations) {
                const wQ = JSON.parse(WQ.animations),
                  qQ = [];
                for (const WQ of wQ.animations) {
                  const XQ = lQ(WQ);
                  XQ.snippetId = QQ, qQ.push(XQ)
                }
                XQ(qQ)
              } else {
                const wQ = lQ(JSON.parse(WQ.animation));
                wQ.snippetId = QQ, XQ(wQ)
              }
            } else wQ("Unable to load the snippet " + QQ)
        })), qQ.open("GET", WQ + "/" + QQ.replace(/#/g, "/")), qQ.send()
      }))
    }
    pQ._UniqueIdGenerator = 0, pQ.AllowMatricesInterpolation = !1, pQ.AllowMatrixDecomposeForInterpolation = !0, pQ.InheritOriginalValueFromActiveAnimations = !1, pQ.SnippetUrl = "https://snippet.babylonjs.com", pQ.ANIMATIONTYPE_FLOAT = 0, pQ.ANIMATIONTYPE_VECTOR3 = 1, pQ.ANIMATIONTYPE_QUATERNION = 2, pQ.ANIMATIONTYPE_MATRIX = 3, pQ.ANIMATIONTYPE_COLOR3 = 4, pQ.ANIMATIONTYPE_COLOR4 = 7, pQ.ANIMATIONTYPE_VECTOR2 = 5, pQ.ANIMATIONTYPE_SIZE = 6, pQ.ANIMATIONLOOPMODE_RELATIVE = 0, pQ.ANIMATIONLOOPMODE_CYCLE = 1, pQ.ANIMATIONLOOPMODE_CONSTANT = 2, pQ.ANIMATIONLOOPMODE_YOYO = 4, pQ.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const cQ = iQ;
    let AQ = !1;

    function RQ() {
      AQ || (AQ = !0, pQ.Parse = lQ, pQ.ParseFromFileAsync = hQ, pQ.ParseFromSnippetAsync = iQ, pQ.CreateFromSnippetAsync = cQ, pQ.CreateAnimation = UQ, pQ.CreateAndStartAnimation = bQ, pQ.CreateAndStartHierarchyAnimation = vQ, pQ.CreateMergeAndStartAnimation = dQ, pQ.MakeAnimationAdditive = GQ, pQ.TransitionTo = HQ, pQ.AppendSerializedAnimations = aQ, (0, JQ.d)("BABYLON.Animation", pQ), sQ.e._AnimationRangeFactory = (QQ, WQ, XQ) => new zQ.b(QQ, WQ, XQ))
    }
  },
  41313: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ
    });
    class wQ {
      constructor(QQ, WQ, XQ) {
        this.name = QQ, this.from = WQ, this.to = XQ
      }
      clone() {
        return new wQ(this.name, this.from, this.to)
      }
    }
  },
  41373: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ.d,
      f: () => wQ.l
    });
    var wQ = XQ(40404);
    (0, wQ.e)()
  },
  41354: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ.g
    });
    var wQ = XQ(40724);
    (0, wQ.c)()
  },
  41326: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ.b
    });
    var wQ = XQ(40712);
    (0, wQ.f)()
  },
  41379: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ.d
    });
    var wQ = XQ(40651);
    (0, wQ.h)()
  },
  41320: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ.d
    });
    var wQ = XQ(40690);
    (0, wQ.b)()
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);