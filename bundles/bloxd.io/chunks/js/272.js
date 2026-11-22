export const id = 272;
export const ids = [272];
export const modules = {
  40684: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => yk,
      d: () => zk,
      g: () => wk,
      h: () => lk,
      l: () => xk,
      p: () => Hk,
      s: () => Uk,
      t: () => nk
    });
    var Dk = ik(36698),
      fk = ik(36874),
      Sk = ik(36729),
      bk = ik(40690),
      rk = ik(39787),
      Pk = ik(39583),
      mk = ik(39612),
      Mk = ik(39585),
      Kk = ik(36734);
    const xk = Object.freeze(new Dk.c(0, 0, 0, 0)),
      nk = Object.freeze(Dk.o.Zero()),
      Uk = Object.freeze(Dk.l.Zero()),
      Hk = Object.freeze(Pk.c.Zero()),
      wk = Object.freeze(fk.e.Black()),
      lk = Object.freeze(new fk.f(0, 0, 0, 0)),
      pk = {
        key: 0,
        repeatCount: 0,
        zi: 2
      };
    class yk {
      static _PrepareAnimation(kk, ek, ik, Sk, bk, rk, mk, Mk) {
        let Kk;
        if (!isNaN(parseFloat(bk)) && isFinite(bk) ? Kk = yk.ANIMATIONTYPE_FLOAT : bk instanceof Dk.c ? Kk = yk.ANIMATIONTYPE_QUATERNION : bk instanceof Dk.o ? Kk = yk.ANIMATIONTYPE_VECTOR3 : bk instanceof Dk.l ? Kk = yk.ANIMATIONTYPE_VECTOR2 : bk instanceof fk.e ? Kk = yk.ANIMATIONTYPE_COLOR3 : bk instanceof fk.f ? Kk = yk.ANIMATIONTYPE_COLOR4 : bk instanceof Pk.c && (Kk = yk.ANIMATIONTYPE_SIZE), void 0 == Kk) return null;
        const xk = new yk(kk, ek, ik, Kk, mk),
          nk = [{
            frame: 0,
            value: bk
          }, {
            frame: Sk,
            value: rk
          }];
        return xk.setKeys(nk), void 0 !== Mk && xk.setEasingFunction(Mk), xk
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const kk of this._runtimeAnimations)
          if (!kk.isStopped()) return !0;
        return !1
      }
      constructor(kk, ek, ik, Dk, fk, Sk) {
        this.name = kk, this.targetProperty = ek, this.framePerSecond = ik, this.dataType = Dk, this.zi = fk, this.enableBlending = Sk, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = ek.split("."), this.dataType = Dk, this.zi = void 0 === fk ? yk.ANIMATIONLOOPMODE_CYCLE : fk, this.uniqueId = yk._UniqueIdGenerator++
      }
      toString(kk) {
        let ek = "Name: " + this.name + ", property: " + this.targetProperty;
        if (ek += ", datatype: " + ["Float", "eH", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], ek += ", nKeys: " + (this._keys ? this._keys.length : "none"), ek += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), kk) {
          ek += ", Ranges: {";
          let kk = !0;
          for (const ik in this._ranges) kk || (ek += ", "), kk = !1, ek += ik;
          ek += "}"
        }
        return ek
      }
      addEvent(kk) {
        this._events.push(kk), this._events.sort(((kk, ek) => kk.frame - ek.frame))
      }
      removeEvents(kk) {
        for (let ek = 0; ek < this._events.length; ek++) this._events[ek].frame === kk && (this._events.splice(ek, 1), ek--)
      }
      getEvents() {
        return this._events
      }
      createRange(kk, ek, ik) {
        this._ranges[kk] || (this._ranges[kk] = new bk.b(kk, ek, ik))
      }
      deleteRange(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ik = this._ranges[kk];
        if (ik) {
          if (ek) {
            const kk = ik.from,
              ek = ik.to;
            for (let ik = this._keys.length - 1; ik >= 0; ik--) this._keys[ik].frame >= kk && this._keys[ik].frame <= ek && this._keys.splice(ik, 1)
          }
          this._ranges[kk] = null
        }
      }
      getRange(kk) {
        return this._ranges[kk]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let kk = 0;
        for (let ek = 0, ik = this._keys.length; ek < ik; ek++) kk < this._keys[ek].frame && (kk = this._keys[ek].frame);
        return kk
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(kk) {
        this._easingFunction = kk
      }
      floatInterpolateFunction(kk, ek, ik) {
        return (0, Sk.Lerp)(kk, ek, ik)
      }
      floatInterpolateFunctionWithTangents(kk, ek, ik, Dk, fk) {
        return (0, Sk.Hermite)(kk, ek, ik, Dk, fk)
      }
      quaternionInterpolateFunction(kk, ek, ik) {
        return Dk.c.Slerp(kk, ek, ik)
      }
      quaternionInterpolateFunctionWithTangents(kk, ek, ik, fk, Sk) {
        return Dk.c.Hermite(kk, ek, ik, fk, Sk).normalize()
      }
      vector3InterpolateFunction(kk, ek, ik) {
        return Dk.o.Lerp(kk, ek, ik)
      }
      vector3InterpolateFunctionWithTangents(kk, ek, ik, fk, Sk) {
        return Dk.o.Hermite(kk, ek, ik, fk, Sk)
      }
      vector2InterpolateFunction(kk, ek, ik) {
        return Dk.l.Lerp(kk, ek, ik)
      }
      vector2InterpolateFunctionWithTangents(kk, ek, ik, fk, Sk) {
        return Dk.l.Hermite(kk, ek, ik, fk, Sk)
      }
      sizeInterpolateFunction(kk, ek, ik) {
        return Pk.c.Lerp(kk, ek, ik)
      }
      color3InterpolateFunction(kk, ek, ik) {
        return fk.e.Lerp(kk, ek, ik)
      }
      color3InterpolateFunctionWithTangents(kk, ek, ik, Dk, Sk) {
        return fk.e.Hermite(kk, ek, ik, Dk, Sk)
      }
      color4InterpolateFunction(kk, ek, ik) {
        return fk.f.Lerp(kk, ek, ik)
      }
      color4InterpolateFunctionWithTangents(kk, ek, ik, Dk, Sk) {
        return fk.f.Hermite(kk, ek, ik, Dk, Sk)
      }
      _getKeyValue(kk) {
        return "function" === typeof kk ? kk() : kk
      }
      evaluate(kk) {
        return pk.key = 0, this._interpolate(kk, pk)
      }
      _interpolate(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (ek.zi === yk.ANIMATIONLOOPMODE_CONSTANT && ek.repeatCount > 0) return ek.highLimitValue.clone ? ek.highLimitValue.clone() : ek.highLimitValue;
        const Dk = this._keys;
        let fk;
        if (this._coreAnimation) fk = this._coreAnimation._key;
        else {
          const Sk = Dk.length;
          for (fk = ek.key; fk >= 0 && kk < Dk[fk].frame;) --fk;
          for (; fk + 1 <= Sk - 1 && kk >= Dk[fk + 1].frame;) ++fk;
          if (ek.key = fk, fk < 0) return ik ? void 0 : this._getKeyValue(Dk[0].value);
          if (fk + 1 > Sk - 1) return ik ? void 0 : this._getKeyValue(Dk[Sk - 1].value);
          this._key = fk
        }
        const Sk = Dk[fk],
          bk = Dk[fk + 1];
        if (ik && (kk === Sk.frame || kk === bk.frame)) return;
        const rk = this._getKeyValue(Sk.value),
          Pk = this._getKeyValue(bk.value);
        if (1 === Sk.interpolation) return bk.frame > kk ? rk : Pk;
        const mk = void 0 !== Sk.outTangent && void 0 !== bk.inTangent,
          Mk = bk.frame - Sk.frame;
        let Kk = (kk - Sk.frame) / Mk;
        const pk = Sk.easingFunction || this.getEasingFunction();
        switch (pk && (Kk = pk.ease(Kk)), this.dataType) {
          case yk.ANIMATIONTYPE_FLOAT: {
            const kk = mk ? this.floatInterpolateFunctionWithTangents(rk, Sk.outTangent * Mk, Pk, bk.inTangent * Mk, Kk) : this.floatInterpolateFunction(rk, Pk, Kk);
            switch (ek.zi) {
              case yk.ANIMATIONLOOPMODE_CYCLE:
              case yk.ANIMATIONLOOPMODE_CONSTANT:
              case yk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case yk.ANIMATIONLOOPMODE_RELATIVE:
              case yk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (ek.offsetValue ?? 0) * ek.repeatCount + kk
            }
            break
          }
          case yk.ANIMATIONTYPE_QUATERNION: {
            const kk = mk ? this.quaternionInterpolateFunctionWithTangents(rk, Sk.outTangent.scale(Mk), Pk, bk.inTangent.scale(Mk), Kk) : this.quaternionInterpolateFunction(rk, Pk, Kk);
            switch (ek.zi) {
              case yk.ANIMATIONLOOPMODE_CYCLE:
              case yk.ANIMATIONLOOPMODE_CONSTANT:
              case yk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case yk.ANIMATIONLOOPMODE_RELATIVE:
              case yk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kk.addInPlace((ek.offsetValue || xk).scale(ek.repeatCount))
            }
            return kk
          }
          case yk.ANIMATIONTYPE_VECTOR3: {
            const kk = mk ? this.vector3InterpolateFunctionWithTangents(rk, Sk.outTangent.scale(Mk), Pk, bk.inTangent.scale(Mk), Kk) : this.vector3InterpolateFunction(rk, Pk, Kk);
            switch (ek.zi) {
              case yk.ANIMATIONLOOPMODE_CYCLE:
              case yk.ANIMATIONLOOPMODE_CONSTANT:
              case yk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case yk.ANIMATIONLOOPMODE_RELATIVE:
              case yk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kk.add((ek.offsetValue || nk).scale(ek.repeatCount))
            }
            break
          }
          case yk.ANIMATIONTYPE_VECTOR2: {
            const kk = mk ? this.vector2InterpolateFunctionWithTangents(rk, Sk.outTangent.scale(Mk), Pk, bk.inTangent.scale(Mk), Kk) : this.vector2InterpolateFunction(rk, Pk, Kk);
            switch (ek.zi) {
              case yk.ANIMATIONLOOPMODE_CYCLE:
              case yk.ANIMATIONLOOPMODE_CONSTANT:
              case yk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case yk.ANIMATIONLOOPMODE_RELATIVE:
              case yk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kk.add((ek.offsetValue || Uk).scale(ek.repeatCount))
            }
            break
          }
          case yk.ANIMATIONTYPE_SIZE:
            switch (ek.zi) {
              case yk.ANIMATIONLOOPMODE_CYCLE:
              case yk.ANIMATIONLOOPMODE_CONSTANT:
              case yk.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(rk, Pk, Kk);
              case yk.ANIMATIONLOOPMODE_RELATIVE:
              case yk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(rk, Pk, Kk).add((ek.offsetValue || Hk).scale(ek.repeatCount))
            }
            break;
          case yk.ANIMATIONTYPE_COLOR3: {
            const kk = mk ? this.color3InterpolateFunctionWithTangents(rk, Sk.outTangent.scale(Mk), Pk, bk.inTangent.scale(Mk), Kk) : this.color3InterpolateFunction(rk, Pk, Kk);
            switch (ek.zi) {
              case yk.ANIMATIONLOOPMODE_CYCLE:
              case yk.ANIMATIONLOOPMODE_CONSTANT:
              case yk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case yk.ANIMATIONLOOPMODE_RELATIVE:
              case yk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kk.add((ek.offsetValue || wk).scale(ek.repeatCount))
            }
            break
          }
          case yk.ANIMATIONTYPE_COLOR4: {
            const kk = mk ? this.color4InterpolateFunctionWithTangents(rk, Sk.outTangent.scale(Mk), Pk, bk.inTangent.scale(Mk), Kk) : this.color4InterpolateFunction(rk, Pk, Kk);
            switch (ek.zi) {
              case yk.ANIMATIONLOOPMODE_CYCLE:
              case yk.ANIMATIONLOOPMODE_CONSTANT:
              case yk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case yk.ANIMATIONLOOPMODE_RELATIVE:
              case yk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kk.add((ek.offsetValue || lk).scale(ek.repeatCount))
            }
            break
          }
          case yk.ANIMATIONTYPE_MATRIX:
            switch (ek.zi) {
              case yk.ANIMATIONLOOPMODE_CYCLE:
              case yk.ANIMATIONLOOPMODE_CONSTANT:
              case yk.ANIMATIONLOOPMODE_YOYO:
                return yk.AllowMatricesInterpolation ? this.matrixInterpolateFunction(rk, Pk, Kk, ek.workValue) : rk;
              case yk.ANIMATIONLOOPMODE_RELATIVE:
              case yk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return rk
            }
        }
        return 0
      }
      matrixInterpolateFunction(kk, ek, ik, fk) {
        return yk.AllowMatrixDecomposeForInterpolation ? fk ? (Dk.b.DecomposeLerpToRef(kk, ek, ik, fk), fk) : Dk.b.DecomposeLerp(kk, ek, ik) : fk ? (Dk.b.LerpToRef(kk, ek, ik, fk), fk) : Dk.b.Lerp(kk, ek, ik)
      }
      clone() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ek = new yk(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.zi);
        if (ek.enableBlending = this.enableBlending, ek.blendingSpeed = this.blendingSpeed, this._keys && ek.setKeys(this._keys, !1, kk), this._ranges) {
          ek._ranges = {};
          for (const kk in this._ranges) {
            const ik = this._ranges[kk];
            ik && (ek._ranges[kk] = ik.clone())
          }
        }
        return ek
      }
      setKeys(kk) {
        let ek = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = kk;
        else if (this._keys = kk.slice(0), ek)
          for (let ik = 0; ik < this._keys.length; ik++) {
            const kk = this._keys[ik];
            this._keys[ik] = {
              frame: kk.frame,
              value: kk.value.clone ? kk.value.clone() : kk.value,
              inTangent: kk.inTangent && kk.inTangent.clone ? kk.inTangent.clone() : kk.inTangent,
              outTangent: kk.outTangent && kk.outTangent.clone ? kk.outTangent.clone() : kk.outTangent,
              interpolation: kk.interpolation,
              lockedTangent: kk.lockedTangent,
              easingFunction: kk.easingFunction
            }
          }
      }
      createKeyForFrame(kk) {
        pk.key = 0;
        const ek = this._interpolate(kk, pk, !0);
        if (!ek) return this._keys[pk.key].frame === kk ? pk.key : pk.key + 1;
        const ik = {
          frame: kk,
          value: ek.clone ? ek.clone() : ek
        };
        return this._keys.splice(pk.key + 1, 0, ik), pk.key + 1
      }
      serialize() {
        const kk = {};
        kk.name = this.name, kk.property = this.targetProperty, kk.framePerSecond = this.framePerSecond, kk.dataType = this.dataType, kk.loopBehavior = this.zi, kk.enableBlending = this.enableBlending, kk.blendingSpeed = this.blendingSpeed;
        const ek = this.dataType;
        kk.keys = [];
        const ik = this.getKeys();
        for (let Dk = 0; Dk < ik.length; Dk++) {
          const fk = ik[Dk],
            Sk = {};
          switch (Sk.frame = fk.frame, ek) {
            case yk.ANIMATIONTYPE_FLOAT:
              Sk.values = [fk.value], void 0 !== fk.inTangent && Sk.values.push(fk.inTangent), void 0 !== fk.outTangent && (void 0 === fk.inTangent && Sk.values.push(void 0), Sk.values.push(fk.outTangent)), void 0 !== fk.interpolation && (void 0 === fk.inTangent && Sk.values.push(void 0), void 0 === fk.outTangent && Sk.values.push(void 0), Sk.values.push(fk.interpolation));
              break;
            case yk.ANIMATIONTYPE_QUATERNION:
            case yk.ANIMATIONTYPE_MATRIX:
            case yk.ANIMATIONTYPE_VECTOR3:
            case yk.ANIMATIONTYPE_COLOR3:
            case yk.ANIMATIONTYPE_COLOR4:
              Sk.values = fk.value.Tik(), void 0 != fk.inTangent && Sk.values.push(fk.inTangent.Tik()), void 0 != fk.outTangent && (void 0 === fk.inTangent && Sk.values.push(void 0), Sk.values.push(fk.outTangent.Tik())), void 0 !== fk.interpolation && (void 0 === fk.inTangent && Sk.values.push(void 0), void 0 === fk.outTangent && Sk.values.push(void 0), Sk.values.push(fk.interpolation))
          }
          kk.keys.push(Sk)
        }
        kk.lw = [];
        for (const Dk in this._ranges) {
          const ek = this._ranges[Dk];
          if (!ek) continue;
          const ik = {};
          ik.name = Dk, ik.from = ek.from, ik.to = ek.to, kk.lw.push(ik)
        }
        return kk
      }
      static _UniversalLerp(kk, ek, ik) {
        const Dk = kk.constructor;
        return Dk.Lerp ? Dk.Lerp(kk, ek, ik) : Dk.Slerp ? Dk.Slerp(kk, ek, ik) : kk.toFixed ? kk * (1 - ik) + ik * ek : ek
      }
    }

    function Yk(kk, ek, ik) {
      let fk;
      fk = "object" === typeof ek ? ek : {
        referenceFrame: ek ?? 0,
        range: ik,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let Sk = kk;
      fk.cloneOriginalAnimation && (Sk = kk.clone(), Sk.name = fk.clonedAnimationName || Sk.name);
      const bk = Sk.getKeys();
      if (!bk.length) return Sk;
      const rk = fk.referenceFrame && fk.referenceFrame >= 0 ? fk.referenceFrame : 0;
      let Pk = 0;
      const mk = bk[0];
      let Mk = bk.length - 1;
      const Kk = bk[Mk],
        xk = {
          referenceValue: mk.value,
          referencePosition: Dk.j.eH[0],
          referenceQuaternion: Dk.j.Quaternion[0],
          referenceScaling: Dk.j.eH[1],
          keyPosition: Dk.j.eH[2],
          keyQuaternion: Dk.j.Quaternion[1],
          keyScaling: Dk.j.eH[3]
        };
      let nk = mk.frame,
        Uk = Kk.frame;
      if (fk.range) {
        const kk = Sk.getRange(fk.range);
        kk && (nk = kk.from, Uk = kk.to)
      } else nk = fk.fromFrame ?? nk, Uk = fk.toFrame ?? Uk;
      nk !== mk.frame && (Pk = Sk.createKeyForFrame(nk)), Uk !== Kk.frame && (Mk = Sk.createKeyForFrame(Uk));
      const Hk = Sk.getKeys();
      if (1 === Hk.length) {
        const kk = Sk._getKeyValue(Hk[0].value);
        xk.referenceValue = kk.clone ? kk.clone() : kk
      } else if (rk <= mk.frame) {
        const kk = Sk._getKeyValue(mk.value);
        xk.referenceValue = kk.clone ? kk.clone() : kk
      } else if (rk >= Kk.frame) {
        const kk = Sk._getKeyValue(Kk.value);
        xk.referenceValue = kk.clone ? kk.clone() : kk
      } else {
        pk.key = 0;
        const kk = Sk._interpolate(rk, pk);
        xk.referenceValue = kk.clone ? kk.clone() : kk
      }
      Sk.dataType === yk.ANIMATIONTYPE_QUATERNION ? xk.referenceValue.normalize().conjugateInPlace() : Sk.dataType === yk.ANIMATIONTYPE_MATRIX && (xk.referenceValue.decompose(xk.referenceScaling, xk.referenceQuaternion, xk.referencePosition), xk.referenceQuaternion.normalize().conjugateInPlace());
      let wk = Number.MAX_VALUE;
      const lk = fk.clipKeys ? [] : null;
      for (let pk = Pk; pk <= Mk; pk++) {
        let kk = Hk[pk];
        if ((lk || fk.cloneOriginalAnimation) && (kk = {
            frame: kk.frame,
            value: kk.value.clone ? kk.value.clone() : kk.value,
            inTangent: kk.inTangent,
            outTangent: kk.outTangent,
            interpolation: kk.interpolation,
            lockedTangent: kk.lockedTangent,
            easingFunction: kk.easingFunction
          }, lk && (wk === Number.MAX_VALUE && (wk = kk.frame), kk.frame -= wk, lk.push(kk))), !pk || Sk.dataType === yk.ANIMATIONTYPE_FLOAT || kk.value !== mk.value) switch (Sk.dataType) {
          case yk.ANIMATIONTYPE_MATRIX:
            kk.value.decompose(xk.keyScaling, xk.keyQuaternion, xk.keyPosition), xk.keyPosition.KDk(xk.referencePosition), xk.keyScaling.divideInPlace(xk.referenceScaling), xk.referenceQuaternion.multiplyToRef(xk.keyQuaternion, xk.keyQuaternion), Dk.b.ComposeToRef(xk.keyScaling, xk.keyQuaternion, xk.keyPosition, kk.value);
            break;
          case yk.ANIMATIONTYPE_QUATERNION:
            xk.referenceValue.multiplyToRef(kk.value, kk.value);
            break;
          case yk.ANIMATIONTYPE_VECTOR2:
          case yk.ANIMATIONTYPE_VECTOR3:
          case yk.ANIMATIONTYPE_COLOR3:
          case yk.ANIMATIONTYPE_COLOR4:
            kk.value.subtractToRef(xk.referenceValue, kk.value);
            break;
          case yk.ANIMATIONTYPE_SIZE:
            kk.value.width -= xk.referenceValue.width, kk.value.height -= xk.referenceValue.height;
            break;
          default:
            kk.value -= xk.referenceValue
        }
      }
      return lk && Sk.setKeys(lk, !0), Sk
    }

    function Lk(kk, ek, ik, Dk) {
      const fk = new yk(kk + "Animation", kk, ik, ek, yk.ANIMATIONLOOPMODE_CONSTANT);
      return fk.setEasingFunction(Dk), fk
    }

    function Ck(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk) {
      const Kk = yk._PrepareAnimation(kk, ik, Dk, fk, Sk, bk, rk, Pk);
      return Kk ? (ek.XF && (Mk = ek.XF()), Mk ? Mk.beginDirectAnimation(ek, [Kk], 0, fk, Kk.zi !== yk.ANIMATIONLOOPMODE_CONSTANT, 1, mk) : null) : null
    }

    function Ak(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk) {
      const Kk = yk._PrepareAnimation(kk, Dk, fk, Sk, bk, rk, Pk, mk);
      if (!Kk) return null;
      return ek.XF().beginDirectHierarchyAnimation(ek, ik, [Kk], 0, Sk, 1 === Kk.zi, 1, Mk)
    }

    function jk(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) {
      const Mk = yk._PrepareAnimation(kk, ik, Dk, fk, Sk, bk, rk, Pk);
      return Mk ? (ek.animations.push(Mk), ek.XF().beginAnimation(ek, 0, fk, 1 === Mk.zi, 1, mk)) : null
    }

    function sk(kk, ek, ik, Dk, fk, Sk, bk) {
      let rk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Pk = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        mk = arguments.length > 9 ? arguments[9] : void 0;
      if (bk <= 0) return ik[kk] = ek, rk && rk(), null;
      const Mk = fk * (bk / 1e3);
      Sk.setKeys(mk ?? [{
        frame: 0,
        value: ik[kk].clone ? ik[kk].clone() : ik[kk]
      }, {
        frame: Mk,
        value: ek
      }]), ik.animations || (ik.animations = []), ik.animations.push(Sk);
      return Dk.beginAnimation(ik, 0, Mk, !1, 1, rk ?? void 0, void 0, Pk)
    }

    function dk(kk, ek) {
      Mk.b.AppendSerializedAnimations(kk, ek)
    }

    function Vk(kk) {
      const ek = new yk(kk.name, kk.property, kk.framePerSecond, kk.dataType, kk.loopBehavior),
        ik = kk.dataType,
        Sk = [];
      let bk, rk;
      for (kk.enableBlending && (ek.enableBlending = kk.enableBlending), kk.blendingSpeed && (ek.blendingSpeed = kk.blendingSpeed), rk = 0; rk < kk.keys.length; rk++) {
        const ek = kk.keys[rk];
        let Pk, mk, Mk;
        switch (ik) {
          case yk.ANIMATIONTYPE_FLOAT:
            bk = ek.values[0], ek.values.length >= 2 && (Pk = ek.values[1]), ek.values.length >= 3 && (mk = ek.values[2]), ek.values.length >= 4 && (Mk = ek.values[3]);
            break;
          case yk.ANIMATIONTYPE_QUATERNION:
            if (bk = Dk.c.FromArray(ek.values), ek.values.length >= 8) {
              const kk = Dk.c.FromArray(ek.values.slice(4, 8));
              kk.equals(Dk.c.Zero()) || (Pk = kk)
            }
            if (ek.values.length >= 12) {
              const kk = Dk.c.FromArray(ek.values.slice(8, 12));
              kk.equals(Dk.c.Zero()) || (mk = kk)
            }
            ek.values.length >= 13 && (Mk = ek.values[12]);
            break;
          case yk.ANIMATIONTYPE_MATRIX:
            bk = Dk.b.FromArray(ek.values), ek.values.length >= 17 && (Mk = ek.values[16]);
            break;
          case yk.ANIMATIONTYPE_COLOR3:
            bk = fk.e.FromArray(ek.values), ek.values[3] && (Pk = fk.e.FromArray(ek.values[3])), ek.values[4] && (mk = fk.e.FromArray(ek.values[4])), ek.values[5] && (Mk = ek.values[5]);
            break;
          case yk.ANIMATIONTYPE_COLOR4:
            bk = fk.f.FromArray(ek.values), ek.values[4] && (Pk = fk.f.FromArray(ek.values[4])), ek.values[5] && (mk = fk.f.FromArray(ek.values[5])), ek.values[6] && (Mk = ek.values[6]);
            break;
          case yk.ANIMATIONTYPE_VECTOR3:
          default:
            bk = Dk.o.FromArray(ek.values), ek.values[3] && (Pk = Dk.o.FromArray(ek.values[3])), ek.values[4] && (mk = Dk.o.FromArray(ek.values[4])), ek.values[5] && (Mk = ek.values[5])
        }
        const Kk = {};
        Kk.frame = ek.frame, Kk.value = bk, void 0 != Pk && (Kk.inTangent = Pk), void 0 != mk && (Kk.outTangent = mk), void 0 != Mk && (Kk.interpolation = Mk), Sk.push(Kk)
      }
      if (ek.setKeys(Sk), kk.lw)
        for (rk = 0; rk < kk.lw.length; rk++) bk = kk.lw[rk], ek.createRange(bk.name, bk.from, bk.to);
      return ek
    }
    async function Fk(kk, ek) {
      return await new Promise(((ik, Dk) => {
        const fk = new mk.d;
        fk.addEventListener("readystatechange", (() => {
          if (4 == fk.readyState)
            if (200 == fk.status) {
              let ek = JSON.parse(fk.responseText);
              if (ek.animations && (ek = ek.animations), ek.length) {
                const kk = [];
                for (const ik of ek) kk.push(Vk(ik));
                ik(kk)
              } else {
                const Dk = Vk(ek);
                kk && (Dk.name = kk), ik(Dk)
              }
            } else Dk("Unable to load the animation")
        })), fk.open("GET", ek), fk.send()
      }))
    }
    async function uk(kk) {
      const ek = this?.SnippetUrl ?? yk.SnippetUrl;
      return await new Promise(((ik, Dk) => {
        const fk = new mk.d;
        fk.addEventListener("readystatechange", (() => {
          if (4 == fk.readyState)
            if (200 == fk.status) {
              const ek = JSON.parse(JSON.parse(fk.responseText).jsonPayload);
              if (ek.animations) {
                const Dk = JSON.parse(ek.animations),
                  fk = [];
                for (const ek of Dk.animations) {
                  const ik = Vk(ek);
                  ik.snippetId = kk, fk.push(ik)
                }
                ik(fk)
              } else {
                const Dk = Vk(JSON.parse(ek.animation));
                Dk.snippetId = kk, ik(Dk)
              }
            } else Dk("Unable to load the snippet " + kk)
        })), fk.open("GET", ek + "/" + kk.replace(/#/g, "/")), fk.send()
      }))
    }
    yk._UniqueIdGenerator = 0, yk.AllowMatricesInterpolation = !1, yk.AllowMatrixDecomposeForInterpolation = !0, yk.InheritOriginalValueFromActiveAnimations = !1, yk.SnippetUrl = "https://snippet.babylonjs.com", yk.ANIMATIONTYPE_FLOAT = 0, yk.ANIMATIONTYPE_VECTOR3 = 1, yk.ANIMATIONTYPE_QUATERNION = 2, yk.ANIMATIONTYPE_MATRIX = 3, yk.ANIMATIONTYPE_COLOR3 = 4, yk.ANIMATIONTYPE_COLOR4 = 7, yk.ANIMATIONTYPE_VECTOR2 = 5, yk.ANIMATIONTYPE_SIZE = 6, yk.ANIMATIONLOOPMODE_RELATIVE = 0, yk.ANIMATIONLOOPMODE_CYCLE = 1, yk.ANIMATIONLOOPMODE_CONSTANT = 2, yk.ANIMATIONLOOPMODE_YOYO = 4, yk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const qk = uk;
    let Ik = !1;

    function zk() {
      Ik || (Ik = !0, yk.Parse = Vk, yk.ParseFromFileAsync = Fk, yk.ParseFromSnippetAsync = uk, yk.CreateFromSnippetAsync = qk, yk.CreateAnimation = Lk, yk.CreateAndStartAnimation = Ck, yk.CreateAndStartHierarchyAnimation = Ak, yk.CreateMergeAndStartAnimation = jk, yk.MakeAnimationAdditive = Yk, yk.TransitionTo = sk, yk.AppendSerializedAnimations = dk, (0, Kk.h)("BABYLON.Animation", yk), rk.b._AnimationRangeFactory = (kk, ek, ik) => new bk.b(kk, ek, ik))
    }
  },
  40690: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    class Dk {
      constructor(kk, ek, ik) {
        this.name = kk, this.from = ek, this.to = ik
      }
      clone() {
        return new Dk(this.name, this.from, this.to)
      }
    }
  },
  40729: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk.b,
      h: () => Dk.e
    });
    var Dk = ik(39708);
    (0, Dk.c)()
  },
  40720: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk.f
    });
    var Dk = ik(40053);
    (0, Dk.c)()
  },
  40701: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk.b
    });
    var Dk = ik(40045);
    (0, Dk.c)()
  },
  40732: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk.e
    });
    var Dk = ik(39997);
    (0, Dk.f)()
  },
  40693: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk.i
    });
    var Dk = ik(40018);
    (0, Dk.e)()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);