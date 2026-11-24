export const id = 279;
export const ids = [279];
export const modules = {
  41242: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => qT,
      g: () => XT,
      k: () => cT,
      n: () => vT,
      p: () => LT,
      r: () => ZT,
      s: () => BT,
      v: () => pT
    });
    var WT = mT(37188),
      zT = mT(37367),
      MT = mT(37226),
      gT = mT(41249),
      nT = mT(40335),
      HT = mT(40114),
      kT = mT(40155),
      jT = mT(40122),
      lT = mT(37239);
    const LT = Object.freeze(new WT.f(0, 0, 0, 0)),
      pT = Object.freeze(WT.p.Zero()),
      BT = Object.freeze(WT.o.Zero()),
      ZT = Object.freeze(HT.d.Zero()),
      cT = Object.freeze(zT.d.Black()),
      vT = Object.freeze(new zT.g(0, 0, 0, 0)),
      fT = {
        key: 0,
        repeatCount: 0,
        NW: 2
      };
    class qT {
      static _PrepareAnimation(TT, UT, mT, MT, gT, nT, kT, jT) {
        let lT;
        if (!isNaN(parseFloat(gT)) && isFinite(gT) ? lT = qT.ANIMATIONTYPE_FLOAT : gT instanceof WT.f ? lT = qT.ANIMATIONTYPE_QUATERNION : gT instanceof WT.p ? lT = qT.ANIMATIONTYPE_VECTOR3 : gT instanceof WT.o ? lT = qT.ANIMATIONTYPE_VECTOR2 : gT instanceof zT.d ? lT = qT.ANIMATIONTYPE_COLOR3 : gT instanceof zT.g ? lT = qT.ANIMATIONTYPE_COLOR4 : gT instanceof HT.d && (lT = qT.ANIMATIONTYPE_SIZE), void 0 == lT) return null;
        const LT = new qT(TT, UT, mT, lT, kT),
          pT = [{
            frame: 0,
            value: gT
          }, {
            frame: MT,
            value: nT
          }];
        return LT.setKeys(pT), void 0 !== jT && LT.setEasingFunction(jT), LT
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const TT of this._runtimeAnimations)
          if (!TT.isStopped()) return !0;
        return !1
      }
      constructor(TT, UT, mT, WT, zT, MT) {
        this.name = TT, this.targetProperty = UT, this.framePerSecond = mT, this.dataType = WT, this.NW = zT, this.enableBlending = MT, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = UT.split("."), this.dataType = WT, this.NW = void 0 === zT ? qT.ANIMATIONLOOPMODE_CYCLE : zT, this.uniqueId = qT._UniqueIdGenerator++
      }
      toString(TT) {
        let UT = "Name: " + this.name + ", property: " + this.targetProperty;
        if (UT += ", datatype: " + ["Float", "JB", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], UT += ", nKeys: " + (this._keys ? this._keys.length : "none"), UT += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), TT) {
          UT += ", Ranges: {";
          let TT = !0;
          for (const mT in this._ranges) TT || (UT += ", "), TT = !1, UT += mT;
          UT += "}"
        }
        return UT
      }
      addEvent(TT) {
        this._events.push(TT), this._events.sort(((TT, UT) => TT.frame - UT.frame))
      }
      removeEvents(TT) {
        for (let UT = 0; UT < this._events.length; UT++) this._events[UT].frame === TT && (this._events.splice(UT, 1), UT--)
      }
      getEvents() {
        return this._events
      }
      createRange(TT, UT, mT) {
        this._ranges[TT] || (this._ranges[TT] = new gT.d(TT, UT, mT))
      }
      deleteRange(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const mT = this._ranges[TT];
        if (mT) {
          if (UT) {
            const TT = mT.from,
              UT = mT.to;
            for (let mT = this._keys.length - 1; mT >= 0; mT--) this._keys[mT].frame >= TT && this._keys[mT].frame <= UT && this._keys.splice(mT, 1)
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
        for (let UT = 0, mT = this._keys.length; UT < mT; UT++) TT < this._keys[UT].frame && (TT = this._keys[UT].frame);
        return TT
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(TT) {
        this._easingFunction = TT
      }
      floatInterpolateFunction(TT, UT, mT) {
        return (0, MT.Lerp)(TT, UT, mT)
      }
      floatInterpolateFunctionWithTangents(TT, UT, mT, WT, zT) {
        return (0, MT.Hermite)(TT, UT, mT, WT, zT)
      }
      quaternionInterpolateFunction(TT, UT, mT) {
        return WT.f.Slerp(TT, UT, mT)
      }
      quaternionInterpolateFunctionWithTangents(TT, UT, mT, zT, MT) {
        return WT.f.Hermite(TT, UT, mT, zT, MT).normalize()
      }
      vector3InterpolateFunction(TT, UT, mT) {
        return WT.p.Lerp(TT, UT, mT)
      }
      vector3InterpolateFunctionWithTangents(TT, UT, mT, zT, MT) {
        return WT.p.Hermite(TT, UT, mT, zT, MT)
      }
      vector2InterpolateFunction(TT, UT, mT) {
        return WT.o.Lerp(TT, UT, mT)
      }
      vector2InterpolateFunctionWithTangents(TT, UT, mT, zT, MT) {
        return WT.o.Hermite(TT, UT, mT, zT, MT)
      }
      sizeInterpolateFunction(TT, UT, mT) {
        return HT.d.Lerp(TT, UT, mT)
      }
      color3InterpolateFunction(TT, UT, mT) {
        return zT.d.Lerp(TT, UT, mT)
      }
      color3InterpolateFunctionWithTangents(TT, UT, mT, WT, MT) {
        return zT.d.Hermite(TT, UT, mT, WT, MT)
      }
      color4InterpolateFunction(TT, UT, mT) {
        return zT.g.Lerp(TT, UT, mT)
      }
      color4InterpolateFunctionWithTangents(TT, UT, mT, WT, MT) {
        return zT.g.Hermite(TT, UT, mT, WT, MT)
      }
      _getKeyValue(TT) {
        return "function" === typeof TT ? TT() : TT
      }
      evaluate(TT) {
        return fT.key = 0, this._interpolate(TT, fT)
      }
      _interpolate(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (UT.NW === qT.ANIMATIONLOOPMODE_CONSTANT && UT.repeatCount > 0) return UT.highLimitValue.clone ? UT.highLimitValue.clone() : UT.highLimitValue;
        const WT = this._keys;
        let zT;
        if (this._coreAnimation) zT = this._coreAnimation._key;
        else {
          const MT = WT.length;
          for (zT = UT.key; zT >= 0 && TT < WT[zT].frame;) --zT;
          for (; zT + 1 <= MT - 1 && TT >= WT[zT + 1].frame;) ++zT;
          if (UT.key = zT, zT < 0) return mT ? void 0 : this._getKeyValue(WT[0].value);
          if (zT + 1 > MT - 1) return mT ? void 0 : this._getKeyValue(WT[MT - 1].value);
          this._key = zT
        }
        const MT = WT[zT],
          gT = WT[zT + 1];
        if (mT && (TT === MT.frame || TT === gT.frame)) return;
        const nT = this._getKeyValue(MT.value),
          HT = this._getKeyValue(gT.value);
        if (1 === MT.interpolation) return gT.frame > TT ? nT : HT;
        const kT = void 0 !== MT.outTangent && void 0 !== gT.inTangent,
          jT = gT.frame - MT.frame;
        let lT = (TT - MT.frame) / jT;
        const fT = MT.easingFunction || this.getEasingFunction();
        switch (fT && (lT = fT.ease(lT)), this.dataType) {
          case qT.ANIMATIONTYPE_FLOAT: {
            const TT = kT ? this.floatInterpolateFunctionWithTangents(nT, MT.outTangent * jT, HT, gT.inTangent * jT, lT) : this.floatInterpolateFunction(nT, HT, lT);
            switch (UT.NW) {
              case qT.ANIMATIONLOOPMODE_CYCLE:
              case qT.ANIMATIONLOOPMODE_CONSTANT:
              case qT.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case qT.ANIMATIONLOOPMODE_RELATIVE:
              case qT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (UT.offsetValue ?? 0) * UT.repeatCount + TT
            }
            break
          }
          case qT.ANIMATIONTYPE_QUATERNION: {
            const TT = kT ? this.quaternionInterpolateFunctionWithTangents(nT, MT.outTangent.scale(jT), HT, gT.inTangent.scale(jT), lT) : this.quaternionInterpolateFunction(nT, HT, lT);
            switch (UT.NW) {
              case qT.ANIMATIONLOOPMODE_CYCLE:
              case qT.ANIMATIONLOOPMODE_CONSTANT:
              case qT.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case qT.ANIMATIONLOOPMODE_RELATIVE:
              case qT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TT.addInPlace((UT.offsetValue || LT).scale(UT.repeatCount))
            }
            return TT
          }
          case qT.ANIMATIONTYPE_VECTOR3: {
            const TT = kT ? this.vector3InterpolateFunctionWithTangents(nT, MT.outTangent.scale(jT), HT, gT.inTangent.scale(jT), lT) : this.vector3InterpolateFunction(nT, HT, lT);
            switch (UT.NW) {
              case qT.ANIMATIONLOOPMODE_CYCLE:
              case qT.ANIMATIONLOOPMODE_CONSTANT:
              case qT.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case qT.ANIMATIONLOOPMODE_RELATIVE:
              case qT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TT.add((UT.offsetValue || pT).scale(UT.repeatCount))
            }
            break
          }
          case qT.ANIMATIONTYPE_VECTOR2: {
            const TT = kT ? this.vector2InterpolateFunctionWithTangents(nT, MT.outTangent.scale(jT), HT, gT.inTangent.scale(jT), lT) : this.vector2InterpolateFunction(nT, HT, lT);
            switch (UT.NW) {
              case qT.ANIMATIONLOOPMODE_CYCLE:
              case qT.ANIMATIONLOOPMODE_CONSTANT:
              case qT.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case qT.ANIMATIONLOOPMODE_RELATIVE:
              case qT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TT.add((UT.offsetValue || BT).scale(UT.repeatCount))
            }
            break
          }
          case qT.ANIMATIONTYPE_SIZE:
            switch (UT.NW) {
              case qT.ANIMATIONLOOPMODE_CYCLE:
              case qT.ANIMATIONLOOPMODE_CONSTANT:
              case qT.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(nT, HT, lT);
              case qT.ANIMATIONLOOPMODE_RELATIVE:
              case qT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(nT, HT, lT).add((UT.offsetValue || ZT).scale(UT.repeatCount))
            }
            break;
          case qT.ANIMATIONTYPE_COLOR3: {
            const TT = kT ? this.color3InterpolateFunctionWithTangents(nT, MT.outTangent.scale(jT), HT, gT.inTangent.scale(jT), lT) : this.color3InterpolateFunction(nT, HT, lT);
            switch (UT.NW) {
              case qT.ANIMATIONLOOPMODE_CYCLE:
              case qT.ANIMATIONLOOPMODE_CONSTANT:
              case qT.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case qT.ANIMATIONLOOPMODE_RELATIVE:
              case qT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TT.add((UT.offsetValue || cT).scale(UT.repeatCount))
            }
            break
          }
          case qT.ANIMATIONTYPE_COLOR4: {
            const TT = kT ? this.color4InterpolateFunctionWithTangents(nT, MT.outTangent.scale(jT), HT, gT.inTangent.scale(jT), lT) : this.color4InterpolateFunction(nT, HT, lT);
            switch (UT.NW) {
              case qT.ANIMATIONLOOPMODE_CYCLE:
              case qT.ANIMATIONLOOPMODE_CONSTANT:
              case qT.ANIMATIONLOOPMODE_YOYO:
                return TT;
              case qT.ANIMATIONLOOPMODE_RELATIVE:
              case qT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TT.add((UT.offsetValue || vT).scale(UT.repeatCount))
            }
            break
          }
          case qT.ANIMATIONTYPE_MATRIX:
            switch (UT.NW) {
              case qT.ANIMATIONLOOPMODE_CYCLE:
              case qT.ANIMATIONLOOPMODE_CONSTANT:
              case qT.ANIMATIONLOOPMODE_YOYO:
                return qT.AllowMatricesInterpolation ? this.matrixInterpolateFunction(nT, HT, lT, UT.workValue) : nT;
              case qT.ANIMATIONLOOPMODE_RELATIVE:
              case qT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return nT
            }
        }
        return 0
      }
      matrixInterpolateFunction(TT, UT, mT, zT) {
        return qT.AllowMatrixDecomposeForInterpolation ? zT ? (WT.e.DecomposeLerpToRef(TT, UT, mT, zT), zT) : WT.e.DecomposeLerp(TT, UT, mT) : zT ? (WT.e.LerpToRef(TT, UT, mT, zT), zT) : WT.e.Lerp(TT, UT, mT)
      }
      clone() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const UT = new qT(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.NW);
        if (UT.enableBlending = this.enableBlending, UT.blendingSpeed = this.blendingSpeed, this._keys && UT.setKeys(this._keys, !1, TT), this._ranges) {
          UT._ranges = {};
          for (const TT in this._ranges) {
            const mT = this._ranges[TT];
            mT && (UT._ranges[TT] = mT.clone())
          }
        }
        return UT
      }
      setKeys(TT) {
        let UT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = TT;
        else if (this._keys = TT.slice(0), UT)
          for (let mT = 0; mT < this._keys.length; mT++) {
            const TT = this._keys[mT];
            this._keys[mT] = {
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
        fT.key = 0;
        const UT = this._interpolate(TT, fT, !0);
        if (!UT) return this._keys[fT.key].frame === TT ? fT.key : fT.key + 1;
        const mT = {
          frame: TT,
          value: UT.clone ? UT.clone() : UT
        };
        return this._keys.splice(fT.key + 1, 0, mT), fT.key + 1
      }
      serialize() {
        const TT = {};
        TT.name = this.name, TT.property = this.targetProperty, TT.framePerSecond = this.framePerSecond, TT.dataType = this.dataType, TT.loopBehavior = this.NW, TT.enableBlending = this.enableBlending, TT.blendingSpeed = this.blendingSpeed;
        const UT = this.dataType;
        TT.keys = [];
        const mT = this.getKeys();
        for (let WT = 0; WT < mT.length; WT++) {
          const zT = mT[WT],
            MT = {};
          switch (MT.frame = zT.frame, UT) {
            case qT.ANIMATIONTYPE_FLOAT:
              MT.values = [zT.value], void 0 !== zT.inTangent && MT.values.push(zT.inTangent), void 0 !== zT.outTangent && (void 0 === zT.inTangent && MT.values.push(void 0), MT.values.push(zT.outTangent)), void 0 !== zT.interpolation && (void 0 === zT.inTangent && MT.values.push(void 0), void 0 === zT.outTangent && MT.values.push(void 0), MT.values.push(zT.interpolation));
              break;
            case qT.ANIMATIONTYPE_QUATERNION:
            case qT.ANIMATIONTYPE_MATRIX:
            case qT.ANIMATIONTYPE_VECTOR3:
            case qT.ANIMATIONTYPE_COLOR3:
            case qT.ANIMATIONTYPE_COLOR4:
              MT.values = zT.value.cWT(), void 0 != zT.inTangent && MT.values.push(zT.inTangent.cWT()), void 0 != zT.outTangent && (void 0 === zT.inTangent && MT.values.push(void 0), MT.values.push(zT.outTangent.cWT())), void 0 !== zT.interpolation && (void 0 === zT.inTangent && MT.values.push(void 0), void 0 === zT.outTangent && MT.values.push(void 0), MT.values.push(zT.interpolation))
          }
          TT.keys.push(MT)
        }
        TT.hZ = [];
        for (const WT in this._ranges) {
          const UT = this._ranges[WT];
          if (!UT) continue;
          const mT = {};
          mT.name = WT, mT.from = UT.from, mT.to = UT.to, TT.hZ.push(mT)
        }
        return TT
      }
      static _UniversalLerp(TT, UT, mT) {
        const WT = TT.constructor;
        return WT.Lerp ? WT.Lerp(TT, UT, mT) : WT.Slerp ? WT.Slerp(TT, UT, mT) : TT.toFixed ? TT * (1 - mT) + mT * UT : UT
      }
    }

    function iT(TT, UT, mT) {
      let zT;
      zT = "object" === typeof UT ? UT : {
        referenceFrame: UT ?? 0,
        range: mT,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let MT = TT;
      zT.cloneOriginalAnimation && (MT = TT.clone(), MT.name = zT.clonedAnimationName || MT.name);
      const gT = MT.getKeys();
      if (!gT.length) return MT;
      const nT = zT.referenceFrame && zT.referenceFrame >= 0 ? zT.referenceFrame : 0;
      let HT = 0;
      const kT = gT[0];
      let jT = gT.length - 1;
      const lT = gT[jT],
        LT = {
          referenceValue: kT.value,
          referencePosition: WT.l.JB[0],
          referenceQuaternion: WT.l.Quaternion[0],
          referenceScaling: WT.l.JB[1],
          keyPosition: WT.l.JB[2],
          keyQuaternion: WT.l.Quaternion[1],
          keyScaling: WT.l.JB[3]
        };
      let pT = kT.frame,
        BT = lT.frame;
      if (zT.range) {
        const TT = MT.getRange(zT.range);
        TT && (pT = TT.from, BT = TT.to)
      } else pT = zT.fromFrame ?? pT, BT = zT.toFrame ?? BT;
      pT !== kT.frame && (HT = MT.createKeyForFrame(pT)), BT !== lT.frame && (jT = MT.createKeyForFrame(BT));
      const ZT = MT.getKeys();
      if (1 === ZT.length) {
        const TT = MT._getKeyValue(ZT[0].value);
        LT.referenceValue = TT.clone ? TT.clone() : TT
      } else if (nT <= kT.frame) {
        const TT = MT._getKeyValue(kT.value);
        LT.referenceValue = TT.clone ? TT.clone() : TT
      } else if (nT >= lT.frame) {
        const TT = MT._getKeyValue(lT.value);
        LT.referenceValue = TT.clone ? TT.clone() : TT
      } else {
        fT.key = 0;
        const TT = MT._interpolate(nT, fT);
        LT.referenceValue = TT.clone ? TT.clone() : TT
      }
      MT.dataType === qT.ANIMATIONTYPE_QUATERNION ? LT.referenceValue.normalize().conjugateInPlace() : MT.dataType === qT.ANIMATIONTYPE_MATRIX && (LT.referenceValue.decompose(LT.referenceScaling, LT.referenceQuaternion, LT.referencePosition), LT.referenceQuaternion.normalize().conjugateInPlace());
      let cT = Number.MAX_VALUE;
      const vT = zT.clipKeys ? [] : null;
      for (let fT = HT; fT <= jT; fT++) {
        let TT = ZT[fT];
        if ((vT || zT.cloneOriginalAnimation) && (TT = {
            frame: TT.frame,
            value: TT.value.clone ? TT.value.clone() : TT.value,
            inTangent: TT.inTangent,
            outTangent: TT.outTangent,
            interpolation: TT.interpolation,
            lockedTangent: TT.lockedTangent,
            easingFunction: TT.easingFunction
          }, vT && (cT === Number.MAX_VALUE && (cT = TT.frame), TT.frame -= cT, vT.push(TT))), !fT || MT.dataType === qT.ANIMATIONTYPE_FLOAT || TT.value !== kT.value) switch (MT.dataType) {
          case qT.ANIMATIONTYPE_MATRIX:
            TT.value.decompose(LT.keyScaling, LT.keyQuaternion, LT.keyPosition), LT.keyPosition.FWT(LT.referencePosition), LT.keyScaling.divideInPlace(LT.referenceScaling), LT.referenceQuaternion.multiplyToRef(LT.keyQuaternion, LT.keyQuaternion), WT.e.ComposeToRef(LT.keyScaling, LT.keyQuaternion, LT.keyPosition, TT.value);
            break;
          case qT.ANIMATIONTYPE_QUATERNION:
            LT.referenceValue.multiplyToRef(TT.value, TT.value);
            break;
          case qT.ANIMATIONTYPE_VECTOR2:
          case qT.ANIMATIONTYPE_VECTOR3:
          case qT.ANIMATIONTYPE_COLOR3:
          case qT.ANIMATIONTYPE_COLOR4:
            TT.value.subtractToRef(LT.referenceValue, TT.value);
            break;
          case qT.ANIMATIONTYPE_SIZE:
            TT.value.width -= LT.referenceValue.width, TT.value.height -= LT.referenceValue.height;
            break;
          default:
            TT.value -= LT.referenceValue
        }
      }
      return vT && MT.setKeys(vT, !0), MT
    }

    function bT(TT, UT, mT, WT) {
      const zT = new qT(TT + "Animation", TT, mT, UT, qT.ANIMATIONLOOPMODE_CONSTANT);
      return zT.setEasingFunction(WT), zT
    }

    function OT(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT) {
      const lT = qT._PrepareAnimation(TT, mT, WT, zT, MT, gT, nT, HT);
      return lT ? (UT.KF && (jT = UT.KF()), jT ? jT.beginDirectAnimation(UT, [lT], 0, zT, lT.NW !== qT.ANIMATIONLOOPMODE_CONSTANT, 1, kT) : null) : null
    }

    function eT(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT) {
      const lT = qT._PrepareAnimation(TT, WT, zT, MT, gT, nT, HT, kT);
      if (!lT) return null;
      return UT.KF().beginDirectHierarchyAnimation(UT, mT, [lT], 0, MT, 1 === lT.NW, 1, jT)
    }

    function YT(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT) {
      const jT = qT._PrepareAnimation(TT, mT, WT, zT, MT, gT, nT, HT);
      return jT ? (UT.animations.push(jT), UT.KF().beginAnimation(UT, 0, zT, 1 === jT.NW, 1, kT)) : null
    }

    function JT(TT, UT, mT, WT, zT, MT, gT) {
      let nT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        HT = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        kT = arguments.length > 9 ? arguments[9] : void 0;
      if (gT <= 0) return mT[TT] = UT, nT && nT(), null;
      const jT = zT * (gT / 1e3);
      MT.setKeys(kT ?? [{
        frame: 0,
        value: mT[TT].clone ? mT[TT].clone() : mT[TT]
      }, {
        frame: jT,
        value: UT
      }]), mT.animations || (mT.animations = []), mT.animations.push(MT);
      return WT.beginAnimation(mT, 0, jT, !1, 1, nT ?? void 0, void 0, HT)
    }

    function xT(TT, UT) {
      jT.e.AppendSerializedAnimations(TT, UT)
    }

    function dT(TT) {
      const UT = new qT(TT.name, TT.property, TT.framePerSecond, TT.dataType, TT.loopBehavior),
        mT = TT.dataType,
        MT = [];
      let gT, nT;
      for (TT.enableBlending && (UT.enableBlending = TT.enableBlending), TT.blendingSpeed && (UT.blendingSpeed = TT.blendingSpeed), nT = 0; nT < TT.keys.length; nT++) {
        const UT = TT.keys[nT];
        let HT, kT, jT;
        switch (mT) {
          case qT.ANIMATIONTYPE_FLOAT:
            gT = UT.values[0], UT.values.length >= 2 && (HT = UT.values[1]), UT.values.length >= 3 && (kT = UT.values[2]), UT.values.length >= 4 && (jT = UT.values[3]);
            break;
          case qT.ANIMATIONTYPE_QUATERNION:
            if (gT = WT.f.FromArray(UT.values), UT.values.length >= 8) {
              const TT = WT.f.FromArray(UT.values.slice(4, 8));
              TT.equals(WT.f.Zero()) || (HT = TT)
            }
            if (UT.values.length >= 12) {
              const TT = WT.f.FromArray(UT.values.slice(8, 12));
              TT.equals(WT.f.Zero()) || (kT = TT)
            }
            UT.values.length >= 13 && (jT = UT.values[12]);
            break;
          case qT.ANIMATIONTYPE_MATRIX:
            gT = WT.e.FromArray(UT.values), UT.values.length >= 17 && (jT = UT.values[16]);
            break;
          case qT.ANIMATIONTYPE_COLOR3:
            gT = zT.d.FromArray(UT.values), UT.values[3] && (HT = zT.d.FromArray(UT.values[3])), UT.values[4] && (kT = zT.d.FromArray(UT.values[4])), UT.values[5] && (jT = UT.values[5]);
            break;
          case qT.ANIMATIONTYPE_COLOR4:
            gT = zT.g.FromArray(UT.values), UT.values[4] && (HT = zT.g.FromArray(UT.values[4])), UT.values[5] && (kT = zT.g.FromArray(UT.values[5])), UT.values[6] && (jT = UT.values[6]);
            break;
          case qT.ANIMATIONTYPE_VECTOR3:
          default:
            gT = WT.p.FromArray(UT.values), UT.values[3] && (HT = WT.p.FromArray(UT.values[3])), UT.values[4] && (kT = WT.p.FromArray(UT.values[4])), UT.values[5] && (jT = UT.values[5])
        }
        const lT = {};
        lT.frame = UT.frame, lT.value = gT, void 0 != HT && (lT.inTangent = HT), void 0 != kT && (lT.outTangent = kT), void 0 != jT && (lT.interpolation = jT), MT.push(lT)
      }
      if (UT.setKeys(MT), TT.hZ)
        for (nT = 0; nT < TT.hZ.length; nT++) gT = TT.hZ[nT], UT.createRange(gT.name, gT.from, gT.to);
      return UT
    }
    async function wT(TT, UT) {
      return await new Promise(((mT, WT) => {
        const zT = new kT.b;
        zT.addEventListener("readystatechange", (() => {
          if (4 == zT.readyState)
            if (200 == zT.status) {
              let UT = JSON.parse(zT.responseText);
              if (UT.animations && (UT = UT.animations), UT.length) {
                const TT = [];
                for (const mT of UT) TT.push(dT(mT));
                mT(TT)
              } else {
                const WT = dT(UT);
                TT && (WT.name = TT), mT(WT)
              }
            } else WT("Unable to load the animation")
        })), zT.open("GET", UT), zT.send()
      }))
    }
    async function tT(TT) {
      const UT = this?.SnippetUrl ?? qT.SnippetUrl;
      return await new Promise(((mT, WT) => {
        const zT = new kT.b;
        zT.addEventListener("readystatechange", (() => {
          if (4 == zT.readyState)
            if (200 == zT.status) {
              const UT = JSON.parse(JSON.parse(zT.responseText).jsonPayload);
              if (UT.animations) {
                const WT = JSON.parse(UT.animations),
                  zT = [];
                for (const UT of WT.animations) {
                  const mT = dT(UT);
                  mT.snippetId = TT, zT.push(mT)
                }
                mT(zT)
              } else {
                const WT = dT(JSON.parse(UT.animation));
                WT.snippetId = TT, mT(WT)
              }
            } else WT("Unable to load the snippet " + TT)
        })), zT.open("GET", UT + "/" + TT.replace(/#/g, "/")), zT.send()
      }))
    }
    qT._UniqueIdGenerator = 0, qT.AllowMatricesInterpolation = !1, qT.AllowMatrixDecomposeForInterpolation = !0, qT.InheritOriginalValueFromActiveAnimations = !1, qT.SnippetUrl = "https://snippet.babylonjs.com", qT.ANIMATIONTYPE_FLOAT = 0, qT.ANIMATIONTYPE_VECTOR3 = 1, qT.ANIMATIONTYPE_QUATERNION = 2, qT.ANIMATIONTYPE_MATRIX = 3, qT.ANIMATIONTYPE_COLOR3 = 4, qT.ANIMATIONTYPE_COLOR4 = 7, qT.ANIMATIONTYPE_VECTOR2 = 5, qT.ANIMATIONTYPE_SIZE = 6, qT.ANIMATIONLOOPMODE_RELATIVE = 0, qT.ANIMATIONLOOPMODE_CYCLE = 1, qT.ANIMATIONLOOPMODE_CONSTANT = 2, qT.ANIMATIONLOOPMODE_YOYO = 4, qT.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const aT = tT;
    let yT = !1;

    function XT() {
      yT || (yT = !0, qT.Parse = dT, qT.ParseFromFileAsync = wT, qT.ParseFromSnippetAsync = tT, qT.CreateFromSnippetAsync = aT, qT.CreateAnimation = bT, qT.CreateAndStartAnimation = OT, qT.CreateAndStartHierarchyAnimation = eT, qT.CreateMergeAndStartAnimation = YT, qT.MakeAnimationAdditive = iT, qT.TransitionTo = JT, qT.AppendSerializedAnimations = xT, (0, lT.h)("BABYLON.Animation", qT), nT.d._AnimationRangeFactory = (TT, UT, mT) => new gT.d(TT, UT, mT))
    }
  },
  41249: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT
    });
    class WT {
      constructor(TT, UT, mT) {
        this.name = TT, this.from = UT, this.to = mT
      }
      clone() {
        return new WT(this.name, this.from, this.to)
      }
    }
  },
  41309: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT.c,
      i: () => WT.i
    });
    var WT = mT(40257);
    (0, WT.d)()
  },
  41284: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT.g
    });
    var WT = mT(40602);
    (0, WT.c)()
  },
  41265: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => WT.d
    });
    var WT = mT(40585);
    (0, WT.g)()
  },
  41318: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT.d
    });
    var WT = mT(40535);
    (0, WT.f)()
  },
  41256: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => WT.c
    });
    var WT = mT(40569);
    (0, WT.b)()
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);