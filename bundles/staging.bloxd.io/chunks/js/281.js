export const id = 281;
export const ids = [281];
export const modules = {
  40011: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => gT,
      e: () => UT,
      i: () => MT,
      j: () => rT,
      k: () => LT,
      o: () => KT,
      q: () => cT,
      s: () => xT
    });
    var iT = IT(36118),
      zT = IT(36177),
      kT = IT(36156),
      WT = IT(40016),
      XT = IT(38994),
      BT = IT(38790),
      FT = IT(38835),
      ST = IT(38799),
      DT = IT(36166);
    const LT = Object.freeze(new iT.c(0, 0, 0, 0)),
      xT = Object.freeze(iT.m.Zero()),
      cT = Object.freeze(iT.j.Zero()),
      KT = Object.freeze(BT.d.Zero()),
      MT = Object.freeze(zT.e.Black()),
      rT = Object.freeze(new zT.i(0, 0, 0, 0)),
      AT = {
        key: 0,
        repeatCount: 0,
        Kz: 2
      };
    class gT {
      static _PrepareAnimation(TT, oT, IT, kT, WT, XT, FT, ST) {
        let DT;
        if (!isNaN(parseFloat(WT)) && isFinite(WT) ? DT = gT.ANIMATIONTYPE_FLOAT : WT instanceof iT.c ? DT = gT.ANIMATIONTYPE_QUATERNION : WT instanceof iT.m ? DT = gT.ANIMATIONTYPE_VECTOR3 : WT instanceof iT.j ? DT = gT.ANIMATIONTYPE_VECTOR2 : WT instanceof zT.e ? DT = gT.ANIMATIONTYPE_COLOR3 : WT instanceof zT.i ? DT = gT.ANIMATIONTYPE_COLOR4 : WT instanceof BT.d && (DT = gT.ANIMATIONTYPE_SIZE), void 0 == DT) return null;
        const LT = new gT(TT, oT, IT, DT, FT),
          xT = [{
            frame: 0,
            value: WT
          }, {
            frame: kT,
            value: XT
          }];
        return LT.setKeys(xT), void 0 !== ST && LT.setEasingFunction(ST), LT
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const TT of this._runtimeAnimations)
          if (!TT.isStopped()) return !0;
        return !1
      }
      constructor(TT, oT, IT, iT, zT, kT) {
        this.name = TT, this.targetProperty = oT, this.framePerSecond = IT, this.dataType = iT, this.Kz = zT, this.enableBlending = kT, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = oT.split("."), this.dataType = iT, this.Kz = void 0 === zT ? gT.ANIMATIONLOOPMODE_CYCLE : zT, this.uniqueId = gT._UniqueIdGenerator++
      }
      toString(TT) {
        let oT = "Name: " + this.name + ", property: " + this.targetProperty;
        if (oT += ", datatype: " + ["Float", "sc", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], oT += ", nKeys: " + (this._keys ? this._keys.length : "none"), oT += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), TT) {
          oT += ", Ranges: {";
          let TT = !0;
          for (const IT in this._ranges) TT || (oT += ", "), TT = !1, oT += IT;
          oT += "}"
        }
        return oT
      }
      addEvent(TT) {
        this._events.push(TT), this._events.sort(((TT, oT) => TT.frame - oT.frame))
      }
      removeEvents(TT) {
        for (let oT = 0; oT < this._events.length; oT++) this._events[oT].frame === TT && (this._events.splice(oT, 1), oT--)
      }
      getEvents() {
        return this._events
      }
      createRange(TT, oT, IT) {
        this._ranges[TT] || (this._ranges[TT] = new WT.e(TT, oT, IT))
      }
      deleteRange(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const IT = this._ranges[TT];
        if (IT) {
          if (oT) {
            const TT = IT.from,
              oT = IT.to;
            for (let IT = this._keys.length - 1; IT >= 0; IT--) this._keys[IT].frame >= TT && this._keys[IT].frame <= oT && this._keys.splice(IT, 1)
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
        for (let oT = 0, IT = this._keys.length; oT < IT; oT++) TT < this._keys[oT].frame && (TT = this._keys[oT].frame);
        return TT
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(TT) {
        this._easingFunction = TT
      }
      floatInterpolateFunction(TT, oT, IT) {
        return (0, kT.Lerp)(TT, oT, IT)
      }
      floatInterpolateFunctionWithTangents(TT, oT, IT, iT, zT) {
        return (0, kT.Hermite)(TT, oT, IT, iT, zT)
      }
      quaternionInterpolateFunction(TT, oT, IT) {
        return iT.c.Slerp(TT, oT, IT)
      }
      quaternionInterpolateFunctionWithTangents(TT, oT, IT, zT, kT) {
        return iT.c.Hermite(TT, oT, IT, zT, kT).normalize()
      }
      vector3InterpolateFunction(TT, oT, IT) {
        return iT.m.Lerp(TT, oT, IT)
      }
      vector3InterpolateFunctionWithTangents(TT, oT, IT, zT, kT) {
        return iT.m.Hermite(TT, oT, IT, zT, kT)
      }
      vector2InterpolateFunction(TT, oT, IT) {
        return iT.j.Lerp(TT, oT, IT)
      }
      vector2InterpolateFunctionWithTangents(TT, oT, IT, zT, kT) {
        return iT.j.Hermite(TT, oT, IT, zT, kT)
      }
      sizeInterpolateFunction(TT, oT, IT) {
        return BT.d.Lerp(TT, oT, IT)
      }
      color3InterpolateFunction(TT, oT, IT) {
        return zT.e.Lerp(TT, oT, IT)
      }
      color3InterpolateFunctionWithTangents(TT, oT, IT, iT, kT) {
        return zT.e.Hermite(TT, oT, IT, iT, kT)
      }
      color4InterpolateFunction(TT, oT, IT) {
        return zT.i.Lerp(TT, oT, IT)
      }
      color4InterpolateFunctionWithTangents(TT, oT, IT, iT, kT) {
        return zT.i.Hermite(TT, oT, IT, iT, kT)
      }
      _getKeyValue(TT) {
        return "function" === typeof TT ? TT() : TT
      }
      evaluate(TT) {
        return AT.key = 0, this._interpolate(TT, AT)
      }
      _interpolate(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (oT.Kz === gT.ANIMATIONLOOPMODE_CONSTANT && oT.repeatCount > 0) return oT.highLimitValue.clone ? oT.highLimitValue.clone() : oT.highLimitValue;
        const iT = this._keys;
        let zT;
        if (this._coreAnimation) zT = this._coreAnimation._key;
        else {
          const kT = iT.length;
          for (zT = oT.key; zT >= 0 && TT < iT[zT].frame;) --zT;
          for (; zT + 1 <= kT - 1 && TT >= iT[zT + 1].frame;) ++zT;
          if (oT.key = zT, zT < 0) return IT ? void 0 : this._getKeyValue(iT[0].value);
          if (zT + 1 > kT - 1) return IT ? void 0 : this._getKeyValue(iT[kT - 1].value);
          this._key = zT
        }
        const kT = iT[zT],
          WT = iT[zT + 1];
        if (IT && (TT === kT.frame || TT === WT.frame)) return;
        const XT = this._getKeyValue(kT.value),
          BT = this._getKeyValue(WT.value);
        if (1 === kT.interpolation) return WT.frame > TT ? XT : BT;
        const FT = void 0 !== kT.outTangent && void 0 !== WT.inTangent,
          ST = WT.frame - kT.frame;
        let DT = (TT - kT.frame) / ST;
        const AT = kT.easingFunction || this.getEasingFunction();
        switch (AT && (DT = AT.ease(DT)), this.dataType) {
          case gT.ANIMATIONTYPE_FLOAT: {
            const TT = FT ? this.floatInterpolateFunctionWithTangents(XT, kT.outTangent * ST, BT, WT.inTangent * ST, DT) : this.floatInterpolateFunction(XT, BT, DT);
            switch (oT.Kz) {
              case gT.ANIMATIONLOOPMODE_CYCLE:
              case gT.ANIMATIONLOOPMODE_CONSTANT:
              case gT.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case gT.ANIMATIONLOOPMODE_RELATIVE:
              case gT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (oT.offsetValue ?? 0) * oT.repeatCount + TT
            }
            break
          }
          case gT.ANIMATIONTYPE_QUATERNION: {
            const TT = FT ? this.quaternionInterpolateFunctionWithTangents(XT, kT.outTangent.scale(ST), BT, WT.inTangent.scale(ST), DT) : this.quaternionInterpolateFunction(XT, BT, DT);
            switch (oT.Kz) {
              case gT.ANIMATIONLOOPMODE_CYCLE:
              case gT.ANIMATIONLOOPMODE_CONSTANT:
              case gT.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case gT.ANIMATIONLOOPMODE_RELATIVE:
              case gT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TT.addInPlace((oT.offsetValue || LT).scale(oT.repeatCount))
            }
            return TT
          }
          case gT.ANIMATIONTYPE_VECTOR3: {
            const TT = FT ? this.vector3InterpolateFunctionWithTangents(XT, kT.outTangent.scale(ST), BT, WT.inTangent.scale(ST), DT) : this.vector3InterpolateFunction(XT, BT, DT);
            switch (oT.Kz) {
              case gT.ANIMATIONLOOPMODE_CYCLE:
              case gT.ANIMATIONLOOPMODE_CONSTANT:
              case gT.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case gT.ANIMATIONLOOPMODE_RELATIVE:
              case gT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TT.add((oT.offsetValue || xT).scale(oT.repeatCount))
            }
            break
          }
          case gT.ANIMATIONTYPE_VECTOR2: {
            const TT = FT ? this.vector2InterpolateFunctionWithTangents(XT, kT.outTangent.scale(ST), BT, WT.inTangent.scale(ST), DT) : this.vector2InterpolateFunction(XT, BT, DT);
            switch (oT.Kz) {
              case gT.ANIMATIONLOOPMODE_CYCLE:
              case gT.ANIMATIONLOOPMODE_CONSTANT:
              case gT.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case gT.ANIMATIONLOOPMODE_RELATIVE:
              case gT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TT.add((oT.offsetValue || cT).scale(oT.repeatCount))
            }
            break
          }
          case gT.ANIMATIONTYPE_SIZE:
            switch (oT.Kz) {
              case gT.ANIMATIONLOOPMODE_CYCLE:
              case gT.ANIMATIONLOOPMODE_CONSTANT:
              case gT.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(XT, BT, DT);
              case gT.ANIMATIONLOOPMODE_RELATIVE:
              case gT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(XT, BT, DT).add((oT.offsetValue || KT).scale(oT.repeatCount))
            }
            break;
          case gT.ANIMATIONTYPE_COLOR3: {
            const TT = FT ? this.color3InterpolateFunctionWithTangents(XT, kT.outTangent.scale(ST), BT, WT.inTangent.scale(ST), DT) : this.color3InterpolateFunction(XT, BT, DT);
            switch (oT.Kz) {
              case gT.ANIMATIONLOOPMODE_CYCLE:
              case gT.ANIMATIONLOOPMODE_CONSTANT:
              case gT.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case gT.ANIMATIONLOOPMODE_RELATIVE:
              case gT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TT.add((oT.offsetValue || MT).scale(oT.repeatCount))
            }
            break
          }
          case gT.ANIMATIONTYPE_COLOR4: {
            const TT = FT ? this.color4InterpolateFunctionWithTangents(XT, kT.outTangent.scale(ST), BT, WT.inTangent.scale(ST), DT) : this.color4InterpolateFunction(XT, BT, DT);
            switch (oT.Kz) {
              case gT.ANIMATIONLOOPMODE_CYCLE:
              case gT.ANIMATIONLOOPMODE_CONSTANT:
              case gT.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case gT.ANIMATIONLOOPMODE_RELATIVE:
              case gT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TT.add((oT.offsetValue || rT).scale(oT.repeatCount))
            }
            break
          }
          case gT.ANIMATIONTYPE_MATRIX:
            switch (oT.Kz) {
              case gT.ANIMATIONLOOPMODE_CYCLE:
              case gT.ANIMATIONLOOPMODE_CONSTANT:
              case gT.ANIMATIONLOOPMODE_YOYO:
                return gT.AllowMatricesInterpolation ? this.matrixInterpolateFunction(XT, BT, DT, oT.workValue) : XT;
              case gT.ANIMATIONLOOPMODE_RELATIVE:
              case gT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return XT
            }
        }
        return 0
      }
      matrixInterpolateFunction(TT, oT, IT, zT) {
        return gT.AllowMatrixDecomposeForInterpolation ? zT ? (iT.b.DecomposeLerpToRef(TT, oT, IT, zT), zT) : iT.b.DecomposeLerp(TT, oT, IT) : zT ? (iT.b.LerpToRef(TT, oT, IT, zT), zT) : iT.b.Lerp(TT, oT, IT)
      }
      clone() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const oT = new gT(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.Kz);
        if (oT.enableBlending = this.enableBlending, oT.blendingSpeed = this.blendingSpeed, this._keys && oT.setKeys(this._keys, !1, TT), this._ranges) {
          oT._ranges = {};
          for (const TT in this._ranges) {
            const IT = this._ranges[TT];
            IT && (oT._ranges[TT] = IT.clone())
          }
        }
        return oT
      }
      setKeys(TT) {
        let oT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = TT;
        else if (this._keys = TT.slice(0), oT)
          for (let IT = 0; IT < this._keys.length; IT++) {
            const TT = this._keys[IT];
            this._keys[IT] = {
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
        AT.key = 0;
        const oT = this._interpolate(TT, AT, !0);
        if (!oT) return this._keys[AT.key].frame === TT ? AT.key : AT.key + 1;
        const IT = {
          frame: TT,
          value: oT.clone ? oT.clone() : oT
        };
        return this._keys.splice(AT.key + 1, 0, IT), AT.key + 1
      }
      serialize() {
        const TT = {};
        TT.name = this.name, TT.property = this.targetProperty, TT.framePerSecond = this.framePerSecond, TT.dataType = this.dataType, TT.loopBehavior = this.Kz, TT.enableBlending = this.enableBlending, TT.blendingSpeed = this.blendingSpeed;
        const oT = this.dataType;
        TT.keys = [];
        const IT = this.getKeys();
        for (let iT = 0; iT < IT.length; iT++) {
          const zT = IT[iT],
            kT = {};
          switch (kT.frame = zT.frame, oT) {
            case gT.ANIMATIONTYPE_FLOAT:
              kT.values = [zT.value], void 0 !== zT.inTangent && kT.values.push(zT.inTangent), void 0 !== zT.outTangent && (void 0 === zT.inTangent && kT.values.push(void 0), kT.values.push(zT.outTangent)), void 0 !== zT.interpolation && (void 0 === zT.inTangent && kT.values.push(void 0), void 0 === zT.outTangent && kT.values.push(void 0), kT.values.push(zT.interpolation));
              break;
            case gT.ANIMATIONTYPE_QUATERNION:
            case gT.ANIMATIONTYPE_MATRIX:
            case gT.ANIMATIONTYPE_VECTOR3:
            case gT.ANIMATIONTYPE_COLOR3:
            case gT.ANIMATIONTYPE_COLOR4:
              kT.values = zT.value.bIT(), void 0 != zT.inTangent && kT.values.push(zT.inTangent.bIT()), void 0 != zT.outTangent && (void 0 === zT.inTangent && kT.values.push(void 0), kT.values.push(zT.outTangent.bIT())), void 0 !== zT.interpolation && (void 0 === zT.inTangent && kT.values.push(void 0), void 0 === zT.outTangent && kT.values.push(void 0), kT.values.push(zT.interpolation))
          }
          TT.keys.push(kT)
        }
        TT.ec = [];
        for (const iT in this._ranges) {
          const oT = this._ranges[iT];
          if (!oT) continue;
          const IT = {};
          IT.name = iT, IT.from = oT.from, IT.to = oT.to, TT.ec.push(IT)
        }
        return TT
      }
      static _UniversalLerp(TT, oT, IT) {
        const iT = TT.constructor;
        return iT.Lerp ? iT.Lerp(TT, oT, IT) : iT.Slerp ? iT.Slerp(TT, oT, IT) : TT.toFixed ? TT * (1 - IT) + IT * oT : oT
      }
    }

    function hT(TT, oT, IT) {
      let zT;
      zT = "object" === typeof oT ? oT : {
        referenceFrame: oT ?? 0,
        range: IT,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let kT = TT;
      zT.cloneOriginalAnimation && (kT = TT.clone(), kT.name = zT.clonedAnimationName || kT.name);
      const WT = kT.getKeys();
      if (!WT.length) return kT;
      const XT = zT.referenceFrame && zT.referenceFrame >= 0 ? zT.referenceFrame : 0;
      let BT = 0;
      const FT = WT[0];
      let ST = WT.length - 1;
      const DT = WT[ST],
        LT = {
          referenceValue: FT.value,
          referencePosition: iT.i.sc[0],
          referenceQuaternion: iT.i.Quaternion[0],
          referenceScaling: iT.i.sc[1],
          keyPosition: iT.i.sc[2],
          keyQuaternion: iT.i.Quaternion[1],
          keyScaling: iT.i.sc[3]
        };
      let xT = FT.frame,
        cT = DT.frame;
      if (zT.range) {
        const TT = kT.getRange(zT.range);
        TT && (xT = TT.from, cT = TT.to)
      } else xT = zT.fromFrame ?? xT, cT = zT.toFrame ?? cT;
      xT !== FT.frame && (BT = kT.createKeyForFrame(xT)), cT !== DT.frame && (ST = kT.createKeyForFrame(cT));
      const KT = kT.getKeys();
      if (1 === KT.length) {
        const TT = kT._getKeyValue(KT[0].value);
        LT.referenceValue = TT.clone ? TT.clone() : TT
      } else if (XT <= FT.frame) {
        const TT = kT._getKeyValue(FT.value);
        LT.referenceValue = TT.clone ? TT.clone() : TT
      } else if (XT >= DT.frame) {
        const TT = kT._getKeyValue(DT.value);
        LT.referenceValue = TT.clone ? TT.clone() : TT
      } else {
        AT.key = 0;
        const TT = kT._interpolate(XT, AT);
        LT.referenceValue = TT.clone ? TT.clone() : TT
      }
      kT.dataType === gT.ANIMATIONTYPE_QUATERNION ? LT.referenceValue.normalize().conjugateInPlace() : kT.dataType === gT.ANIMATIONTYPE_MATRIX && (LT.referenceValue.decompose(LT.referenceScaling, LT.referenceQuaternion, LT.referencePosition), LT.referenceQuaternion.normalize().conjugateInPlace());
      let MT = Number.MAX_VALUE;
      const rT = zT.clipKeys ? [] : null;
      for (let AT = BT; AT <= ST; AT++) {
        let TT = KT[AT];
        if ((rT || zT.cloneOriginalAnimation) && (TT = {
            frame: TT.frame,
            value: TT.value.clone ? TT.value.clone() : TT.value,
            inTangent: TT.inTangent,
            outTangent: TT.outTangent,
            interpolation: TT.interpolation,
            lockedTangent: TT.lockedTangent,
            easingFunction: TT.easingFunction
          }, rT && (MT === Number.MAX_VALUE && (MT = TT.frame), TT.frame -= MT, rT.push(TT))), !AT || kT.dataType === gT.ANIMATIONTYPE_FLOAT || TT.value !== FT.value) switch (kT.dataType) {
          case gT.ANIMATIONTYPE_MATRIX:
            TT.value.decompose(LT.keyScaling, LT.keyQuaternion, LT.keyPosition), LT.keyPosition.SiT(LT.referencePosition), LT.keyScaling.divideInPlace(LT.referenceScaling), LT.referenceQuaternion.multiplyToRef(LT.keyQuaternion, LT.keyQuaternion), iT.b.ComposeToRef(LT.keyScaling, LT.keyQuaternion, LT.keyPosition, TT.value);
            break;
          case gT.ANIMATIONTYPE_QUATERNION:
            LT.referenceValue.multiplyToRef(TT.value, TT.value);
            break;
          case gT.ANIMATIONTYPE_VECTOR2:
          case gT.ANIMATIONTYPE_VECTOR3:
          case gT.ANIMATIONTYPE_COLOR3:
          case gT.ANIMATIONTYPE_COLOR4:
            TT.value.subtractToRef(LT.referenceValue, TT.value);
            break;
          case gT.ANIMATIONTYPE_SIZE:
            TT.value.width -= LT.referenceValue.width, TT.value.height -= LT.referenceValue.height;
            break;
          default:
            TT.value -= LT.referenceValue
        }
      }
      return rT && kT.setKeys(rT, !0), kT
    }

    function wT(TT, oT, IT, iT) {
      const zT = new gT(TT + "Animation", TT, IT, oT, gT.ANIMATIONLOOPMODE_CONSTANT);
      return zT.setEasingFunction(iT), zT
    }

    function mT(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST) {
      const DT = gT._PrepareAnimation(TT, IT, iT, zT, kT, WT, XT, BT);
      return DT ? (oT.pC && (ST = oT.pC()), ST ? ST.beginDirectAnimation(oT, [DT], 0, zT, DT.Kz !== gT.ANIMATIONLOOPMODE_CONSTANT, 1, FT) : null) : null
    }

    function eT(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST) {
      const DT = gT._PrepareAnimation(TT, iT, zT, kT, WT, XT, BT, FT);
      if (!DT) return null;
      return oT.pC().beginDirectHierarchyAnimation(oT, IT, [DT], 0, kT, 1 === DT.Kz, 1, ST)
    }

    function RT(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT) {
      const ST = gT._PrepareAnimation(TT, IT, iT, zT, kT, WT, XT, BT);
      return ST ? (oT.animations.push(ST), oT.pC().beginAnimation(oT, 0, zT, 1 === ST.Kz, 1, FT)) : null
    }

    function uT(TT, oT, IT, iT, zT, kT, WT) {
      let XT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        BT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        FT = arguments.length > 9 ? arguments[9] : void 0;
      if (WT <= 0) return IT[TT] = oT, XT && XT(), null;
      const ST = zT * (WT / 1e3);
      kT.setKeys(FT ?? [{
        frame: 0,
        value: IT[TT].clone ? IT[TT].clone() : IT[TT]
      }, {
        frame: ST,
        value: oT
      }]), IT.animations || (IT.animations = []), IT.animations.push(kT);
      return iT.beginAnimation(IT, 0, ST, !1, 1, XT ?? void 0, void 0, BT)
    }

    function vT(TT, oT) {
      ST.c.AppendSerializedAnimations(TT, oT)
    }

    function ET(TT) {
      const oT = new gT(TT.name, TT.property, TT.framePerSecond, TT.dataType, TT.loopBehavior),
        IT = TT.dataType,
        kT = [];
      let WT, XT;
      for (TT.enableBlending && (oT.enableBlending = TT.enableBlending), TT.blendingSpeed && (oT.blendingSpeed = TT.blendingSpeed), XT = 0; XT < TT.keys.length; XT++) {
        const oT = TT.keys[XT];
        let BT, FT, ST;
        switch (IT) {
          case gT.ANIMATIONTYPE_FLOAT:
            WT = oT.values[0], oT.values.length >= 2 && (BT = oT.values[1]), oT.values.length >= 3 && (FT = oT.values[2]), oT.values.length >= 4 && (ST = oT.values[3]);
            break;
          case gT.ANIMATIONTYPE_QUATERNION:
            if (WT = iT.c.FromArray(oT.values), oT.values.length >= 8) {
              const TT = iT.c.FromArray(oT.values.slice(4, 8));
              TT.equals(iT.c.Zero()) || (BT = TT)
            }
            if (oT.values.length >= 12) {
              const TT = iT.c.FromArray(oT.values.slice(8, 12));
              TT.equals(iT.c.Zero()) || (FT = TT)
            }
            oT.values.length >= 13 && (ST = oT.values[12]);
            break;
          case gT.ANIMATIONTYPE_MATRIX:
            WT = iT.b.FromArray(oT.values), oT.values.length >= 17 && (ST = oT.values[16]);
            break;
          case gT.ANIMATIONTYPE_COLOR3:
            WT = zT.e.FromArray(oT.values), oT.values[3] && (BT = zT.e.FromArray(oT.values[3])), oT.values[4] && (FT = zT.e.FromArray(oT.values[4])), oT.values[5] && (ST = oT.values[5]);
            break;
          case gT.ANIMATIONTYPE_COLOR4:
            WT = zT.i.FromArray(oT.values), oT.values[4] && (BT = zT.i.FromArray(oT.values[4])), oT.values[5] && (FT = zT.i.FromArray(oT.values[5])), oT.values[6] && (ST = oT.values[6]);
            break;
          case gT.ANIMATIONTYPE_VECTOR3:
          default:
            WT = iT.m.FromArray(oT.values), oT.values[3] && (BT = iT.m.FromArray(oT.values[3])), oT.values[4] && (FT = iT.m.FromArray(oT.values[4])), oT.values[5] && (ST = oT.values[5])
        }
        const DT = {};
        DT.frame = oT.frame, DT.value = WT, void 0 != BT && (DT.inTangent = BT), void 0 != FT && (DT.outTangent = FT), void 0 != ST && (DT.interpolation = ST), kT.push(DT)
      }
      if (oT.setKeys(kT), TT.ec)
        for (XT = 0; XT < TT.ec.length; XT++) WT = TT.ec[XT], oT.createRange(WT.name, WT.from, WT.to);
      return oT
    }
    async function fT(TT, oT) {
      return await new Promise(((IT, iT) => {
        const zT = new FT.b;
        zT.addEventListener("readystatechange", (() => {
          if (4 == zT.readyState)
            if (200 == zT.status) {
              let oT = JSON.parse(zT.responseText);
              if (oT.animations && (oT = oT.animations), oT.length) {
                const TT = [];
                for (const IT of oT) TT.push(ET(IT));
                IT(TT)
              } else {
                const iT = ET(oT);
                TT && (iT.name = TT), IT(iT)
              }
            } else iT("Unable to load the animation")
        })), zT.open("GET", oT), zT.send()
      }))
    }
    async function CT(TT) {
      const oT = this?.SnippetUrl ?? gT.SnippetUrl;
      return await new Promise(((IT, iT) => {
        const zT = new FT.b;
        zT.addEventListener("readystatechange", (() => {
          if (4 == zT.readyState)
            if (200 == zT.status) {
              const oT = JSON.parse(JSON.parse(zT.responseText).jsonPayload);
              if (oT.animations) {
                const iT = JSON.parse(oT.animations),
                  zT = [];
                for (const oT of iT.animations) {
                  const IT = ET(oT);
                  IT.snippetId = TT, zT.push(IT)
                }
                IT(zT)
              } else {
                const iT = ET(JSON.parse(oT.animation));
                iT.snippetId = TT, IT(iT)
              }
            } else iT("Unable to load the snippet " + TT)
        })), zT.open("GET", oT + "/" + TT.replace(/#/g, "/")), zT.send()
      }))
    }
    gT._UniqueIdGenerator = 0, gT.AllowMatricesInterpolation = !1, gT.AllowMatrixDecomposeForInterpolation = !0, gT.InheritOriginalValueFromActiveAnimations = !1, gT.SnippetUrl = "https://snippet.babylonjs.com", gT.ANIMATIONTYPE_FLOAT = 0, gT.ANIMATIONTYPE_VECTOR3 = 1, gT.ANIMATIONTYPE_QUATERNION = 2, gT.ANIMATIONTYPE_MATRIX = 3, gT.ANIMATIONTYPE_COLOR3 = 4, gT.ANIMATIONTYPE_COLOR4 = 7, gT.ANIMATIONTYPE_VECTOR2 = 5, gT.ANIMATIONTYPE_SIZE = 6, gT.ANIMATIONLOOPMODE_RELATIVE = 0, gT.ANIMATIONLOOPMODE_CYCLE = 1, gT.ANIMATIONLOOPMODE_CONSTANT = 2, gT.ANIMATIONLOOPMODE_YOYO = 4, gT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const jT = CT;
    let JT = !1;

    function UT() {
      JT || (JT = !0, gT.Parse = ET, gT.ParseFromFileAsync = fT, gT.ParseFromSnippetAsync = CT, gT.CreateFromSnippetAsync = jT, gT.CreateAnimation = wT, gT.CreateAndStartAnimation = mT, gT.CreateAndStartHierarchyAnimation = eT, gT.CreateMergeAndStartAnimation = RT, gT.MakeAnimationAdditive = hT, gT.TransitionTo = uT, gT.AppendSerializedAnimations = vT, (0, DT.h)("BABYLON.Animation", gT), XT.c._AnimationRangeFactory = (TT, oT, IT) => new WT.e(TT, oT, IT))
    }
  },
  40016: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => iT
    });
    class iT {
      constructor(TT, oT, IT) {
        this.name = TT, this.from = oT, this.to = IT
      }
      clone() {
        return new iT(this.name, this.from, this.to)
      }
    }
  },
  40072: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT.d,
      d: () => iT.i
    });
    var iT = IT(38923);
    (0, iT.e)()
  },
  40055: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT.g
    });
    var iT = IT(39270);
    (0, iT.c)()
  },
  40029: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT.c
    });
    var iT = IT(39256);
    (0, iT.f)()
  },
  40079: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => iT.e
    });
    var iT = IT(39192);
    (0, iT.i)()
  },
  40023: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT.g
    });
    var iT = IT(39233);
    (0, iT.c)()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);