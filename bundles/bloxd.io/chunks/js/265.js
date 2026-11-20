export const id = 265;
export const ids = [265];
export const modules = {
  40709: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => ST,
      d: () => eT,
      e: () => hT,
      i: () => NT,
      k: () => CT,
      m: () => tT,
      q: () => vT,
      u: () => jT
    });
    var lT = cT(36892),
      MT = cT(37093),
      KT = cT(36937),
      OT = cT(40718),
      yT = cT(39846),
      fT = cT(39638),
      xT = cT(39675),
      IT = cT(39645),
      AT = cT(36949);
    const CT = Object.freeze(new lT.f(0, 0, 0, 0)),
      jT = Object.freeze(lT.m.Zero()),
      vT = Object.freeze(lT.i.Zero()),
      tT = Object.freeze(fT.e.Zero()),
      hT = Object.freeze(MT.c.Black()),
      NT = Object.freeze(new MT.g(0, 0, 0, 0)),
      QT = {
        key: 0,
        repeatCount: 0,
        tM: 2
      };
    class ST {
      static _PrepareAnimation(TT, kT, cT, KT, OT, yT, xT, IT) {
        let AT;
        if (!isNaN(parseFloat(OT)) && isFinite(OT) ? AT = ST.ANIMATIONTYPE_FLOAT : OT instanceof lT.f ? AT = ST.ANIMATIONTYPE_QUATERNION : OT instanceof lT.m ? AT = ST.ANIMATIONTYPE_VECTOR3 : OT instanceof lT.i ? AT = ST.ANIMATIONTYPE_VECTOR2 : OT instanceof MT.c ? AT = ST.ANIMATIONTYPE_COLOR3 : OT instanceof MT.g ? AT = ST.ANIMATIONTYPE_COLOR4 : OT instanceof fT.e && (AT = ST.ANIMATIONTYPE_SIZE), void 0 == AT) return null;
        const CT = new ST(TT, kT, cT, AT, xT),
          jT = [{
            frame: 0,
            value: OT
          }, {
            frame: KT,
            value: yT
          }];
        return CT.setKeys(jT), void 0 !== IT && CT.setEasingFunction(IT), CT
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const TT of this._runtimeAnimations)
          if (!TT.isStopped()) return !0;
        return !1
      }
      constructor(TT, kT, cT, lT, MT, KT) {
        this.name = TT, this.targetProperty = kT, this.framePerSecond = cT, this.dataType = lT, this.tM = MT, this.enableBlending = KT, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = kT.split("."), this.dataType = lT, this.tM = void 0 === MT ? ST.ANIMATIONLOOPMODE_CYCLE : MT, this.uniqueId = ST._UniqueIdGenerator++
      }
      toString(TT) {
        let kT = "Name: " + this.name + ", property: " + this.targetProperty;
        if (kT += ", datatype: " + ["Float", "Fv", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], kT += ", nKeys: " + (this._keys ? this._keys.length : "none"), kT += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), TT) {
          kT += ", Ranges: {";
          let TT = !0;
          for (const cT in this._ranges) TT || (kT += ", "), TT = !1, kT += cT;
          kT += "}"
        }
        return kT
      }
      addEvent(TT) {
        this._events.push(TT), this._events.sort(((TT, kT) => TT.frame - kT.frame))
      }
      removeEvents(TT) {
        for (let kT = 0; kT < this._events.length; kT++) this._events[kT].frame === TT && (this._events.splice(kT, 1), kT--)
      }
      getEvents() {
        return this._events
      }
      createRange(TT, kT, cT) {
        this._ranges[TT] || (this._ranges[TT] = new OT.d(TT, kT, cT))
      }
      deleteRange(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const cT = this._ranges[TT];
        if (cT) {
          if (kT) {
            const TT = cT.from,
              kT = cT.to;
            for (let cT = this._keys.length - 1; cT >= 0; cT--) this._keys[cT].frame >= TT && this._keys[cT].frame <= kT && this._keys.splice(cT, 1)
          }
          this._ranges[TT] = null
        }
      }
      getRange(TT) {
        return this._ranges[TT]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let TT = 0;
        for (let kT = 0, cT = this._keys.length; kT < cT; kT++) TT < this._keys[kT].frame && (TT = this._keys[kT].frame);
        return TT
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(TT) {
        this._easingFunction = TT
      }
      floatInterpolateFunction(TT, kT, cT) {
        return (0, KT.Lerp)(TT, kT, cT)
      }
      floatInterpolateFunctionWithTangents(TT, kT, cT, lT, MT) {
        return (0, KT.Hermite)(TT, kT, cT, lT, MT)
      }
      quaternionInterpolateFunction(TT, kT, cT) {
        return lT.f.Slerp(TT, kT, cT)
      }
      quaternionInterpolateFunctionWithTangents(TT, kT, cT, MT, KT) {
        return lT.f.Hermite(TT, kT, cT, MT, KT).normalize()
      }
      vector3InterpolateFunction(TT, kT, cT) {
        return lT.m.Lerp(TT, kT, cT)
      }
      vector3InterpolateFunctionWithTangents(TT, kT, cT, MT, KT) {
        return lT.m.Hermite(TT, kT, cT, MT, KT)
      }
      vector2InterpolateFunction(TT, kT, cT) {
        return lT.i.Lerp(TT, kT, cT)
      }
      vector2InterpolateFunctionWithTangents(TT, kT, cT, MT, KT) {
        return lT.i.Hermite(TT, kT, cT, MT, KT)
      }
      sizeInterpolateFunction(TT, kT, cT) {
        return fT.e.Lerp(TT, kT, cT)
      }
      color3InterpolateFunction(TT, kT, cT) {
        return MT.c.Lerp(TT, kT, cT)
      }
      color3InterpolateFunctionWithTangents(TT, kT, cT, lT, KT) {
        return MT.c.Hermite(TT, kT, cT, lT, KT)
      }
      color4InterpolateFunction(TT, kT, cT) {
        return MT.g.Lerp(TT, kT, cT)
      }
      color4InterpolateFunctionWithTangents(TT, kT, cT, lT, KT) {
        return MT.g.Hermite(TT, kT, cT, lT, KT)
      }
      _getKeyValue(TT) {
        return "function" === typeof TT ? TT() : TT
      }
      evaluate(TT) {
        return QT.key = 0, this._interpolate(TT, QT)
      }
      _interpolate(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (kT.tM === ST.ANIMATIONLOOPMODE_CONSTANT && kT.repeatCount > 0) return kT.highLimitValue.clone ? kT.highLimitValue.clone() : kT.highLimitValue;
        const lT = this._keys;
        let MT;
        if (this._coreAnimation) MT = this._coreAnimation._key;
        else {
          const KT = lT.length;
          for (MT = kT.key; MT >= 0 && TT < lT[MT].frame;) --MT;
          for (; MT + 1 <= KT - 1 && TT >= lT[MT + 1].frame;) ++MT;
          if (kT.key = MT, MT < 0) return cT ? void 0 : this._getKeyValue(lT[0].value);
          if (MT + 1 > KT - 1) return cT ? void 0 : this._getKeyValue(lT[KT - 1].value);
          this._key = MT
        }
        const KT = lT[MT],
          OT = lT[MT + 1];
        if (cT && (TT === KT.frame || TT === OT.frame)) return;
        const yT = this._getKeyValue(KT.value),
          fT = this._getKeyValue(OT.value);
        if (1 === KT.interpolation) return OT.frame > TT ? yT : fT;
        const xT = void 0 !== KT.outTangent && void 0 !== OT.inTangent,
          IT = OT.frame - KT.frame;
        let AT = (TT - KT.frame) / IT;
        const QT = KT.easingFunction || this.getEasingFunction();
        switch (QT && (AT = QT.ease(AT)), this.dataType) {
          case ST.ANIMATIONTYPE_FLOAT: {
            const TT = xT ? this.floatInterpolateFunctionWithTangents(yT, KT.outTangent * IT, fT, OT.inTangent * IT, AT) : this.floatInterpolateFunction(yT, fT, AT);
            switch (kT.tM) {
              case ST.ANIMATIONLOOPMODE_CYCLE:
              case ST.ANIMATIONLOOPMODE_CONSTANT:
              case ST.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case ST.ANIMATIONLOOPMODE_RELATIVE:
              case ST.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (kT.offsetValue ?? 0) * kT.repeatCount + TT
            }
            break
          }
          case ST.ANIMATIONTYPE_QUATERNION: {
            const TT = xT ? this.quaternionInterpolateFunctionWithTangents(yT, KT.outTangent.scale(IT), fT, OT.inTangent.scale(IT), AT) : this.quaternionInterpolateFunction(yT, fT, AT);
            switch (kT.tM) {
              case ST.ANIMATIONLOOPMODE_CYCLE:
              case ST.ANIMATIONLOOPMODE_CONSTANT:
              case ST.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case ST.ANIMATIONLOOPMODE_RELATIVE:
              case ST.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TT.addInPlace((kT.offsetValue || CT).scale(kT.repeatCount))
            }
            return TT
          }
          case ST.ANIMATIONTYPE_VECTOR3: {
            const TT = xT ? this.vector3InterpolateFunctionWithTangents(yT, KT.outTangent.scale(IT), fT, OT.inTangent.scale(IT), AT) : this.vector3InterpolateFunction(yT, fT, AT);
            switch (kT.tM) {
              case ST.ANIMATIONLOOPMODE_CYCLE:
              case ST.ANIMATIONLOOPMODE_CONSTANT:
              case ST.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case ST.ANIMATIONLOOPMODE_RELATIVE:
              case ST.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TT.add((kT.offsetValue || jT).scale(kT.repeatCount))
            }
            break
          }
          case ST.ANIMATIONTYPE_VECTOR2: {
            const TT = xT ? this.vector2InterpolateFunctionWithTangents(yT, KT.outTangent.scale(IT), fT, OT.inTangent.scale(IT), AT) : this.vector2InterpolateFunction(yT, fT, AT);
            switch (kT.tM) {
              case ST.ANIMATIONLOOPMODE_CYCLE:
              case ST.ANIMATIONLOOPMODE_CONSTANT:
              case ST.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case ST.ANIMATIONLOOPMODE_RELATIVE:
              case ST.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TT.add((kT.offsetValue || vT).scale(kT.repeatCount))
            }
            break
          }
          case ST.ANIMATIONTYPE_SIZE:
            switch (kT.tM) {
              case ST.ANIMATIONLOOPMODE_CYCLE:
              case ST.ANIMATIONLOOPMODE_CONSTANT:
              case ST.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(yT, fT, AT);
              case ST.ANIMATIONLOOPMODE_RELATIVE:
              case ST.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(yT, fT, AT).add((kT.offsetValue || tT).scale(kT.repeatCount))
            }
            break;
          case ST.ANIMATIONTYPE_COLOR3: {
            const TT = xT ? this.color3InterpolateFunctionWithTangents(yT, KT.outTangent.scale(IT), fT, OT.inTangent.scale(IT), AT) : this.color3InterpolateFunction(yT, fT, AT);
            switch (kT.tM) {
              case ST.ANIMATIONLOOPMODE_CYCLE:
              case ST.ANIMATIONLOOPMODE_CONSTANT:
              case ST.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case ST.ANIMATIONLOOPMODE_RELATIVE:
              case ST.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TT.add((kT.offsetValue || hT).scale(kT.repeatCount))
            }
            break
          }
          case ST.ANIMATIONTYPE_COLOR4: {
            const TT = xT ? this.color4InterpolateFunctionWithTangents(yT, KT.outTangent.scale(IT), fT, OT.inTangent.scale(IT), AT) : this.color4InterpolateFunction(yT, fT, AT);
            switch (kT.tM) {
              case ST.ANIMATIONLOOPMODE_CYCLE:
              case ST.ANIMATIONLOOPMODE_CONSTANT:
              case ST.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case ST.ANIMATIONLOOPMODE_RELATIVE:
              case ST.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TT.add((kT.offsetValue || NT).scale(kT.repeatCount))
            }
            break
          }
          case ST.ANIMATIONTYPE_MATRIX:
            switch (kT.tM) {
              case ST.ANIMATIONLOOPMODE_CYCLE:
              case ST.ANIMATIONLOOPMODE_CONSTANT:
              case ST.ANIMATIONLOOPMODE_YOYO:
                return ST.AllowMatricesInterpolation ? this.matrixInterpolateFunction(yT, fT, AT, kT.workValue) : yT;
              case ST.ANIMATIONLOOPMODE_RELATIVE:
              case ST.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return yT
            }
        }
        return 0
      }
      matrixInterpolateFunction(TT, kT, cT, MT) {
        return ST.AllowMatrixDecomposeForInterpolation ? MT ? (lT.d.DecomposeLerpToRef(TT, kT, cT, MT), MT) : lT.d.DecomposeLerp(TT, kT, cT) : MT ? (lT.d.LerpToRef(TT, kT, cT, MT), MT) : lT.d.Lerp(TT, kT, cT)
      }
      clone() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const kT = new ST(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.tM);
        if (kT.enableBlending = this.enableBlending, kT.blendingSpeed = this.blendingSpeed, this._keys && kT.setKeys(this._keys, !1, TT), this._ranges) {
          kT._ranges = {};
          for (const TT in this._ranges) {
            const cT = this._ranges[TT];
            cT && (kT._ranges[TT] = cT.clone())
          }
        }
        return kT
      }
      setKeys(TT) {
        let kT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = TT;
        else if (this._keys = TT.slice(0), kT)
          for (let cT = 0; cT < this._keys.length; cT++) {
            const TT = this._keys[cT];
            this._keys[cT] = {
              frame: TT.frame,
              value: TT.value.clone ? TT.value.clone() : TT.value,
              inTangent: TT.inTangent && TT.inTangent.clone ? TT.inTangent.clone() : TT.inTangent,
              outTangent: TT.outTangent && TT.outTangent.clone ? TT.outTangent.clone() : TT.outTangent,
              interpolation: TT.interpolation,
              lockedTangent: TT.lockedTangent,
              easingFunction: TT.easingFunction
            }
          }
      }
      createKeyForFrame(TT) {
        QT.key = 0;
        const kT = this._interpolate(TT, QT, !0);
        if (!kT) return this._keys[QT.key].frame === TT ? QT.key : QT.key + 1;
        const cT = {
          frame: TT,
          value: kT.clone ? kT.clone() : kT
        };
        return this._keys.splice(QT.key + 1, 0, cT), QT.key + 1
      }
      serialize() {
        const TT = {};
        TT.name = this.name, TT.property = this.targetProperty, TT.framePerSecond = this.framePerSecond, TT.dataType = this.dataType, TT.loopBehavior = this.tM, TT.enableBlending = this.enableBlending, TT.blendingSpeed = this.blendingSpeed;
        const kT = this.dataType;
        TT.keys = [];
        const cT = this.getKeys();
        for (let lT = 0; lT < cT.length; lT++) {
          const MT = cT[lT],
            KT = {};
          switch (KT.frame = MT.frame, kT) {
            case ST.ANIMATIONTYPE_FLOAT:
              KT.values = [MT.value], void 0 !== MT.inTangent && KT.values.push(MT.inTangent), void 0 !== MT.outTangent && (void 0 === MT.inTangent && KT.values.push(void 0), KT.values.push(MT.outTangent)), void 0 !== MT.interpolation && (void 0 === MT.inTangent && KT.values.push(void 0), void 0 === MT.outTangent && KT.values.push(void 0), KT.values.push(MT.interpolation));
              break;
            case ST.ANIMATIONTYPE_QUATERNION:
            case ST.ANIMATIONTYPE_MATRIX:
            case ST.ANIMATIONTYPE_VECTOR3:
            case ST.ANIMATIONTYPE_COLOR3:
            case ST.ANIMATIONTYPE_COLOR4:
              KT.values = MT.value.acT(), void 0 != MT.inTangent && KT.values.push(MT.inTangent.acT()), void 0 != MT.outTangent && (void 0 === MT.inTangent && KT.values.push(void 0), KT.values.push(MT.outTangent.acT())), void 0 !== MT.interpolation && (void 0 === MT.inTangent && KT.values.push(void 0), void 0 === MT.outTangent && KT.values.push(void 0), KT.values.push(MT.interpolation))
          }
          TT.keys.push(KT)
        }
        TT.qt = [];
        for (const lT in this._ranges) {
          const kT = this._ranges[lT];
          if (!kT) continue;
          const cT = {};
          cT.name = lT, cT.from = kT.from, cT.to = kT.to, TT.qt.push(cT)
        }
        return TT
      }
      static _UniversalLerp(TT, kT, cT) {
        const lT = TT.constructor;
        return lT.Lerp ? lT.Lerp(TT, kT, cT) : lT.Slerp ? lT.Slerp(TT, kT, cT) : TT.toFixed ? TT * (1 - cT) + cT * kT : kT
      }
    }

    function DT(TT, kT, cT) {
      let MT;
      MT = "object" === typeof kT ? kT : {
        referenceFrame: kT ?? 0,
        range: cT,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let KT = TT;
      MT.cloneOriginalAnimation && (KT = TT.clone(), KT.name = MT.clonedAnimationName || KT.name);
      const OT = KT.getKeys();
      if (!OT.length) return KT;
      const yT = MT.referenceFrame && MT.referenceFrame >= 0 ? MT.referenceFrame : 0;
      let fT = 0;
      const xT = OT[0];
      let IT = OT.length - 1;
      const AT = OT[IT],
        CT = {
          referenceValue: xT.value,
          referencePosition: lT.h.Fv[0],
          referenceQuaternion: lT.h.Quaternion[0],
          referenceScaling: lT.h.Fv[1],
          keyPosition: lT.h.Fv[2],
          keyQuaternion: lT.h.Quaternion[1],
          keyScaling: lT.h.Fv[3]
        };
      let jT = xT.frame,
        vT = AT.frame;
      if (MT.range) {
        const TT = KT.getRange(MT.range);
        TT && (jT = TT.from, vT = TT.to)
      } else jT = MT.fromFrame ?? jT, vT = MT.toFrame ?? vT;
      jT !== xT.frame && (fT = KT.createKeyForFrame(jT)), vT !== AT.frame && (IT = KT.createKeyForFrame(vT));
      const tT = KT.getKeys();
      if (1 === tT.length) {
        const TT = KT._getKeyValue(tT[0].value);
        CT.referenceValue = TT.clone ? TT.clone() : TT
      } else if (yT <= xT.frame) {
        const TT = KT._getKeyValue(xT.value);
        CT.referenceValue = TT.clone ? TT.clone() : TT
      } else if (yT >= AT.frame) {
        const TT = KT._getKeyValue(AT.value);
        CT.referenceValue = TT.clone ? TT.clone() : TT
      } else {
        QT.key = 0;
        const TT = KT._interpolate(yT, QT);
        CT.referenceValue = TT.clone ? TT.clone() : TT
      }
      KT.dataType === ST.ANIMATIONTYPE_QUATERNION ? CT.referenceValue.normalize().conjugateInPlace() : KT.dataType === ST.ANIMATIONTYPE_MATRIX && (CT.referenceValue.decompose(CT.referenceScaling, CT.referenceQuaternion, CT.referencePosition), CT.referenceQuaternion.normalize().conjugateInPlace());
      let hT = Number.MAX_VALUE;
      const NT = MT.clipKeys ? [] : null;
      for (let QT = fT; QT <= IT; QT++) {
        let TT = tT[QT];
        if ((NT || MT.cloneOriginalAnimation) && (TT = {
            frame: TT.frame,
            value: TT.value.clone ? TT.value.clone() : TT.value,
            inTangent: TT.inTangent,
            outTangent: TT.outTangent,
            interpolation: TT.interpolation,
            lockedTangent: TT.lockedTangent,
            easingFunction: TT.easingFunction
          }, NT && (hT === Number.MAX_VALUE && (hT = TT.frame), TT.frame -= hT, NT.push(TT))), !QT || KT.dataType === ST.ANIMATIONTYPE_FLOAT || TT.value !== xT.value) switch (KT.dataType) {
          case ST.ANIMATIONTYPE_MATRIX:
            TT.value.decompose(CT.keyScaling, CT.keyQuaternion, CT.keyPosition), CT.keyPosition.gcT(CT.referencePosition), CT.keyScaling.divideInPlace(CT.referenceScaling), CT.referenceQuaternion.multiplyToRef(CT.keyQuaternion, CT.keyQuaternion), lT.d.ComposeToRef(CT.keyScaling, CT.keyQuaternion, CT.keyPosition, TT.value);
            break;
          case ST.ANIMATIONTYPE_QUATERNION:
            CT.referenceValue.multiplyToRef(TT.value, TT.value);
            break;
          case ST.ANIMATIONTYPE_VECTOR2:
          case ST.ANIMATIONTYPE_VECTOR3:
          case ST.ANIMATIONTYPE_COLOR3:
          case ST.ANIMATIONTYPE_COLOR4:
            TT.value.subtractToRef(CT.referenceValue, TT.value);
            break;
          case ST.ANIMATIONTYPE_SIZE:
            TT.value.width -= CT.referenceValue.width, TT.value.height -= CT.referenceValue.height;
            break;
          default:
            TT.value -= CT.referenceValue
        }
      }
      return NT && KT.setKeys(NT, !0), KT
    }

    function aT(TT, kT, cT, lT) {
      const MT = new ST(TT + "Animation", TT, cT, kT, ST.ANIMATIONLOOPMODE_CONSTANT);
      return MT.setEasingFunction(lT), MT
    }

    function FT(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT) {
      const AT = ST._PrepareAnimation(TT, cT, lT, MT, KT, OT, yT, fT);
      return AT ? (kT.NJ && (IT = kT.NJ()), IT ? IT.beginDirectAnimation(kT, [AT], 0, MT, AT.tM !== ST.ANIMATIONLOOPMODE_CONSTANT, 1, xT) : null) : null
    }

    function rT(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT) {
      const AT = ST._PrepareAnimation(TT, lT, MT, KT, OT, yT, fT, xT);
      if (!AT) return null;
      return kT.NJ().beginDirectHierarchyAnimation(kT, cT, [AT], 0, KT, 1 === AT.tM, 1, IT)
    }

    function PT(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT) {
      const IT = ST._PrepareAnimation(TT, cT, lT, MT, KT, OT, yT, fT);
      return IT ? (kT.animations.push(IT), kT.NJ().beginAnimation(kT, 0, MT, 1 === IT.tM, 1, xT)) : null
    }

    function wT(TT, kT, cT, lT, MT, KT, OT) {
      let yT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        fT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        xT = arguments.length > 9 ? arguments[9] : void 0;
      if (OT <= 0) return cT[TT] = kT, yT && yT(), null;
      const IT = MT * (OT / 1e3);
      KT.setKeys(xT ?? [{
        frame: 0,
        value: cT[TT].clone ? cT[TT].clone() : cT[TT]
      }, {
        frame: IT,
        value: kT
      }]), cT.animations || (cT.animations = []), cT.animations.push(KT);
      return lT.beginAnimation(cT, 0, IT, !1, 1, yT ?? void 0, void 0, fT)
    }

    function mT(TT, kT) {
      IT.d.AppendSerializedAnimations(TT, kT)
    }

    function bT(TT) {
      const kT = new ST(TT.name, TT.property, TT.framePerSecond, TT.dataType, TT.loopBehavior),
        cT = TT.dataType,
        KT = [];
      let OT, yT;
      for (TT.enableBlending && (kT.enableBlending = TT.enableBlending), TT.blendingSpeed && (kT.blendingSpeed = TT.blendingSpeed), yT = 0; yT < TT.keys.length; yT++) {
        const kT = TT.keys[yT];
        let fT, xT, IT;
        switch (cT) {
          case ST.ANIMATIONTYPE_FLOAT:
            OT = kT.values[0], kT.values.length >= 2 && (fT = kT.values[1]), kT.values.length >= 3 && (xT = kT.values[2]), kT.values.length >= 4 && (IT = kT.values[3]);
            break;
          case ST.ANIMATIONTYPE_QUATERNION:
            if (OT = lT.f.FromArray(kT.values), kT.values.length >= 8) {
              const TT = lT.f.FromArray(kT.values.slice(4, 8));
              TT.equals(lT.f.Zero()) || (fT = TT)
            }
            if (kT.values.length >= 12) {
              const TT = lT.f.FromArray(kT.values.slice(8, 12));
              TT.equals(lT.f.Zero()) || (xT = TT)
            }
            kT.values.length >= 13 && (IT = kT.values[12]);
            break;
          case ST.ANIMATIONTYPE_MATRIX:
            OT = lT.d.FromArray(kT.values), kT.values.length >= 17 && (IT = kT.values[16]);
            break;
          case ST.ANIMATIONTYPE_COLOR3:
            OT = MT.c.FromArray(kT.values), kT.values[3] && (fT = MT.c.FromArray(kT.values[3])), kT.values[4] && (xT = MT.c.FromArray(kT.values[4])), kT.values[5] && (IT = kT.values[5]);
            break;
          case ST.ANIMATIONTYPE_COLOR4:
            OT = MT.g.FromArray(kT.values), kT.values[4] && (fT = MT.g.FromArray(kT.values[4])), kT.values[5] && (xT = MT.g.FromArray(kT.values[5])), kT.values[6] && (IT = kT.values[6]);
            break;
          case ST.ANIMATIONTYPE_VECTOR3:
          default:
            OT = lT.m.FromArray(kT.values), kT.values[3] && (fT = lT.m.FromArray(kT.values[3])), kT.values[4] && (xT = lT.m.FromArray(kT.values[4])), kT.values[5] && (IT = kT.values[5])
        }
        const AT = {};
        AT.frame = kT.frame, AT.value = OT, void 0 != fT && (AT.inTangent = fT), void 0 != xT && (AT.outTangent = xT), void 0 != IT && (AT.interpolation = IT), KT.push(AT)
      }
      if (kT.setKeys(KT), TT.qt)
        for (yT = 0; yT < TT.qt.length; yT++) OT = TT.qt[yT], kT.createRange(OT.name, OT.from, OT.to);
      return kT
    }
    async function zT(TT, kT) {
      return await new Promise(((cT, lT) => {
        const MT = new xT.b;
        MT.addEventListener("readystatechange", (() => {
          if (4 == MT.readyState)
            if (200 == MT.status) {
              let kT = JSON.parse(MT.responseText);
              if (kT.animations && (kT = kT.animations), kT.length) {
                const TT = [];
                for (const cT of kT) TT.push(bT(cT));
                cT(TT)
              } else {
                const lT = bT(kT);
                TT && (lT.name = TT), cT(lT)
              }
            } else lT("Unable to load the animation")
        })), MT.open("GET", kT), MT.send()
      }))
    }
    async function JT(TT) {
      const kT = this?.SnippetUrl ?? ST.SnippetUrl;
      return await new Promise(((cT, lT) => {
        const MT = new xT.b;
        MT.addEventListener("readystatechange", (() => {
          if (4 == MT.readyState)
            if (200 == MT.status) {
              const kT = JSON.parse(JSON.parse(MT.responseText).jsonPayload);
              if (kT.animations) {
                const lT = JSON.parse(kT.animations),
                  MT = [];
                for (const kT of lT.animations) {
                  const cT = bT(kT);
                  cT.snippetId = TT, MT.push(cT)
                }
                cT(MT)
              } else {
                const lT = bT(JSON.parse(kT.animation));
                lT.snippetId = TT, cT(lT)
              }
            } else lT("Unable to load the snippet " + TT)
        })), MT.open("GET", kT + "/" + TT.replace(/#/g, "/")), MT.send()
      }))
    }
    ST._UniqueIdGenerator = 0, ST.AllowMatricesInterpolation = !1, ST.AllowMatrixDecomposeForInterpolation = !0, ST.InheritOriginalValueFromActiveAnimations = !1, ST.SnippetUrl = "https://snippet.babylonjs.com", ST.ANIMATIONTYPE_FLOAT = 0, ST.ANIMATIONTYPE_VECTOR3 = 1, ST.ANIMATIONTYPE_QUATERNION = 2, ST.ANIMATIONTYPE_MATRIX = 3, ST.ANIMATIONTYPE_COLOR3 = 4, ST.ANIMATIONTYPE_COLOR4 = 7, ST.ANIMATIONTYPE_VECTOR2 = 5, ST.ANIMATIONTYPE_SIZE = 6, ST.ANIMATIONLOOPMODE_RELATIVE = 0, ST.ANIMATIONLOOPMODE_CYCLE = 1, ST.ANIMATIONLOOPMODE_CONSTANT = 2, ST.ANIMATIONLOOPMODE_YOYO = 4, ST.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const oT = JT;
    let HT = !1;

    function eT() {
      HT || (HT = !0, ST.Parse = bT, ST.ParseFromFileAsync = zT, ST.ParseFromSnippetAsync = JT, ST.CreateFromSnippetAsync = oT, ST.CreateAnimation = aT, ST.CreateAndStartAnimation = FT, ST.CreateAndStartHierarchyAnimation = rT, ST.CreateMergeAndStartAnimation = PT, ST.MakeAnimationAdditive = DT, ST.TransitionTo = wT, ST.AppendSerializedAnimations = mT, (0, AT.g)("BABYLON.Animation", ST), yT.b._AnimationRangeFactory = (TT, kT, cT) => new OT.d(TT, kT, cT))
    }
  },
  40718: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT
    });
    class lT {
      constructor(TT, kT, cT) {
        this.name = TT, this.from = kT, this.to = cT
      }
      clone() {
        return new lT(this.name, this.from, this.to)
      }
    }
  },
  40774: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT.d,
      i: () => lT.l
    });
    var lT = cT(39782);
    (0, lT.h)()
  },
  40752: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT.f
    });
    var lT = cT(40111);
    (0, lT.b)()
  },
  40734: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT.c
    });
    var lT = cT(40095);
    (0, lT.f)()
  },
  40778: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => lT.e
    });
    var lT = cT(40025);
    (0, lT.i)()
  },
  40726: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => lT.f
    });
    var lT = cT(40071);
    (0, lT.b)()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);