export const id = 264;
export const ids = [264];
export const modules = {
  40521: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => vk,
      e: () => ck,
      f: () => fk,
      h: () => mk,
      i: () => Jk,
      k: () => yk,
      m: () => ek,
      q: () => Ak
    });
    var Rk = Bk(36758),
      tk = Bk(36917),
      ak = Bk(36790),
      Xk = Bk(40527),
      bk = Bk(39628),
      wk = Bk(39408),
      dk = Bk(39445),
      sk = Bk(39414),
      Vk = Bk(36798);
    const Jk = Object.freeze(new Rk.e(0, 0, 0, 0)),
      Ak = Object.freeze(Rk.s.Zero()),
      ek = Object.freeze(Rk.p.Zero()),
      yk = Object.freeze(wk.d.Zero()),
      fk = Object.freeze(tk.e.Black()),
      mk = Object.freeze(new tk.i(0, 0, 0, 0)),
      Wk = {
        key: 0,
        repeatCount: 0,
        Oa: 2
      };
    class vk {
      static _PrepareAnimation(kk, Fk, Bk, ak, Xk, bk, dk, sk) {
        let Vk;
        if (!isNaN(parseFloat(Xk)) && isFinite(Xk) ? Vk = vk.ANIMATIONTYPE_FLOAT : Xk instanceof Rk.e ? Vk = vk.ANIMATIONTYPE_QUATERNION : Xk instanceof Rk.s ? Vk = vk.ANIMATIONTYPE_VECTOR3 : Xk instanceof Rk.p ? Vk = vk.ANIMATIONTYPE_VECTOR2 : Xk instanceof tk.e ? Vk = vk.ANIMATIONTYPE_COLOR3 : Xk instanceof tk.i ? Vk = vk.ANIMATIONTYPE_COLOR4 : Xk instanceof wk.d && (Vk = vk.ANIMATIONTYPE_SIZE), void 0 == Vk) return null;
        const Jk = new vk(kk, Fk, Bk, Vk, dk),
          Ak = [{
            frame: 0,
            value: Xk
          }, {
            frame: ak,
            value: bk
          }];
        return Jk.setKeys(Ak), void 0 !== sk && Jk.setEasingFunction(sk), Jk
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const kk of this._runtimeAnimations)
          if (!kk.isStopped()) return !0;
        return !1
      }
      constructor(kk, Fk, Bk, Rk, tk, ak) {
        this.name = kk, this.targetProperty = Fk, this.framePerSecond = Bk, this.dataType = Rk, this.Oa = tk, this.enableBlending = ak, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = Fk.split("."), this.dataType = Rk, this.Oa = void 0 === tk ? vk.ANIMATIONLOOPMODE_CYCLE : tk, this.uniqueId = vk._UniqueIdGenerator++
      }
      toString(kk) {
        let Fk = "Name: " + this.name + ", property: " + this.targetProperty;
        if (Fk += ", datatype: " + ["Float", "Qe", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], Fk += ", nKeys: " + (this._keys ? this._keys.length : "none"), Fk += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), kk) {
          Fk += ", Ranges: {";
          let kk = !0;
          for (const Bk in this._ranges) kk || (Fk += ", "), kk = !1, Fk += Bk;
          Fk += "}"
        }
        return Fk
      }
      addEvent(kk) {
        this._events.push(kk), this._events.sort(((kk, Fk) => kk.frame - Fk.frame))
      }
      removeEvents(kk) {
        for (let Fk = 0; Fk < this._events.length; Fk++) this._events[Fk].frame === kk && (this._events.splice(Fk, 1), Fk--)
      }
      getEvents() {
        return this._events
      }
      createRange(kk, Fk, Bk) {
        this._ranges[kk] || (this._ranges[kk] = new Xk.c(kk, Fk, Bk))
      }
      deleteRange(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Bk = this._ranges[kk];
        if (Bk) {
          if (Fk) {
            const kk = Bk.from,
              Fk = Bk.to;
            for (let Bk = this._keys.length - 1; Bk >= 0; Bk--) this._keys[Bk].frame >= kk && this._keys[Bk].frame <= Fk && this._keys.splice(Bk, 1)
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
        for (let Fk = 0, Bk = this._keys.length; Fk < Bk; Fk++) kk < this._keys[Fk].frame && (kk = this._keys[Fk].frame);
        return kk
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(kk) {
        this._easingFunction = kk
      }
      floatInterpolateFunction(kk, Fk, Bk) {
        return (0, ak.Lerp)(kk, Fk, Bk)
      }
      floatInterpolateFunctionWithTangents(kk, Fk, Bk, Rk, tk) {
        return (0, ak.Hermite)(kk, Fk, Bk, Rk, tk)
      }
      quaternionInterpolateFunction(kk, Fk, Bk) {
        return Rk.e.Slerp(kk, Fk, Bk)
      }
      quaternionInterpolateFunctionWithTangents(kk, Fk, Bk, tk, ak) {
        return Rk.e.Hermite(kk, Fk, Bk, tk, ak).normalize()
      }
      vector3InterpolateFunction(kk, Fk, Bk) {
        return Rk.s.Lerp(kk, Fk, Bk)
      }
      vector3InterpolateFunctionWithTangents(kk, Fk, Bk, tk, ak) {
        return Rk.s.Hermite(kk, Fk, Bk, tk, ak)
      }
      vector2InterpolateFunction(kk, Fk, Bk) {
        return Rk.p.Lerp(kk, Fk, Bk)
      }
      vector2InterpolateFunctionWithTangents(kk, Fk, Bk, tk, ak) {
        return Rk.p.Hermite(kk, Fk, Bk, tk, ak)
      }
      sizeInterpolateFunction(kk, Fk, Bk) {
        return wk.d.Lerp(kk, Fk, Bk)
      }
      color3InterpolateFunction(kk, Fk, Bk) {
        return tk.e.Lerp(kk, Fk, Bk)
      }
      color3InterpolateFunctionWithTangents(kk, Fk, Bk, Rk, ak) {
        return tk.e.Hermite(kk, Fk, Bk, Rk, ak)
      }
      color4InterpolateFunction(kk, Fk, Bk) {
        return tk.i.Lerp(kk, Fk, Bk)
      }
      color4InterpolateFunctionWithTangents(kk, Fk, Bk, Rk, ak) {
        return tk.i.Hermite(kk, Fk, Bk, Rk, ak)
      }
      _getKeyValue(kk) {
        return "function" === typeof kk ? kk() : kk
      }
      evaluate(kk) {
        return Wk.key = 0, this._interpolate(kk, Wk)
      }
      _interpolate(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (Fk.Oa === vk.ANIMATIONLOOPMODE_CONSTANT && Fk.repeatCount > 0) return Fk.highLimitValue.clone ? Fk.highLimitValue.clone() : Fk.highLimitValue;
        const Rk = this._keys;
        let tk;
        if (this._coreAnimation) tk = this._coreAnimation._key;
        else {
          const ak = Rk.length;
          for (tk = Fk.key; tk >= 0 && kk < Rk[tk].frame;) --tk;
          for (; tk + 1 <= ak - 1 && kk >= Rk[tk + 1].frame;) ++tk;
          if (Fk.key = tk, tk < 0) return Bk ? void 0 : this._getKeyValue(Rk[0].value);
          if (tk + 1 > ak - 1) return Bk ? void 0 : this._getKeyValue(Rk[ak - 1].value);
          this._key = tk
        }
        const ak = Rk[tk],
          Xk = Rk[tk + 1];
        if (Bk && (kk === ak.frame || kk === Xk.frame)) return;
        const bk = this._getKeyValue(ak.value),
          wk = this._getKeyValue(Xk.value);
        if (1 === ak.interpolation) return Xk.frame > kk ? bk : wk;
        const dk = void 0 !== ak.outTangent && void 0 !== Xk.inTangent,
          sk = Xk.frame - ak.frame;
        let Vk = (kk - ak.frame) / sk;
        const Wk = ak.easingFunction || this.getEasingFunction();
        switch (Wk && (Vk = Wk.ease(Vk)), this.dataType) {
          case vk.ANIMATIONTYPE_FLOAT: {
            const kk = dk ? this.floatInterpolateFunctionWithTangents(bk, ak.outTangent * sk, wk, Xk.inTangent * sk, Vk) : this.floatInterpolateFunction(bk, wk, Vk);
            switch (Fk.Oa) {
              case vk.ANIMATIONLOOPMODE_CYCLE:
              case vk.ANIMATIONLOOPMODE_CONSTANT:
              case vk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case vk.ANIMATIONLOOPMODE_RELATIVE:
              case vk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (Fk.offsetValue ?? 0) * Fk.repeatCount + kk
            }
            break
          }
          case vk.ANIMATIONTYPE_QUATERNION: {
            const kk = dk ? this.quaternionInterpolateFunctionWithTangents(bk, ak.outTangent.scale(sk), wk, Xk.inTangent.scale(sk), Vk) : this.quaternionInterpolateFunction(bk, wk, Vk);
            switch (Fk.Oa) {
              case vk.ANIMATIONLOOPMODE_CYCLE:
              case vk.ANIMATIONLOOPMODE_CONSTANT:
              case vk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case vk.ANIMATIONLOOPMODE_RELATIVE:
              case vk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kk.addInPlace((Fk.offsetValue || Jk).scale(Fk.repeatCount))
            }
            return kk
          }
          case vk.ANIMATIONTYPE_VECTOR3: {
            const kk = dk ? this.vector3InterpolateFunctionWithTangents(bk, ak.outTangent.scale(sk), wk, Xk.inTangent.scale(sk), Vk) : this.vector3InterpolateFunction(bk, wk, Vk);
            switch (Fk.Oa) {
              case vk.ANIMATIONLOOPMODE_CYCLE:
              case vk.ANIMATIONLOOPMODE_CONSTANT:
              case vk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case vk.ANIMATIONLOOPMODE_RELATIVE:
              case vk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kk.add((Fk.offsetValue || Ak).scale(Fk.repeatCount))
            }
            break
          }
          case vk.ANIMATIONTYPE_VECTOR2: {
            const kk = dk ? this.vector2InterpolateFunctionWithTangents(bk, ak.outTangent.scale(sk), wk, Xk.inTangent.scale(sk), Vk) : this.vector2InterpolateFunction(bk, wk, Vk);
            switch (Fk.Oa) {
              case vk.ANIMATIONLOOPMODE_CYCLE:
              case vk.ANIMATIONLOOPMODE_CONSTANT:
              case vk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case vk.ANIMATIONLOOPMODE_RELATIVE:
              case vk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kk.add((Fk.offsetValue || ek).scale(Fk.repeatCount))
            }
            break
          }
          case vk.ANIMATIONTYPE_SIZE:
            switch (Fk.Oa) {
              case vk.ANIMATIONLOOPMODE_CYCLE:
              case vk.ANIMATIONLOOPMODE_CONSTANT:
              case vk.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(bk, wk, Vk);
              case vk.ANIMATIONLOOPMODE_RELATIVE:
              case vk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(bk, wk, Vk).add((Fk.offsetValue || yk).scale(Fk.repeatCount))
            }
            break;
          case vk.ANIMATIONTYPE_COLOR3: {
            const kk = dk ? this.color3InterpolateFunctionWithTangents(bk, ak.outTangent.scale(sk), wk, Xk.inTangent.scale(sk), Vk) : this.color3InterpolateFunction(bk, wk, Vk);
            switch (Fk.Oa) {
              case vk.ANIMATIONLOOPMODE_CYCLE:
              case vk.ANIMATIONLOOPMODE_CONSTANT:
              case vk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case vk.ANIMATIONLOOPMODE_RELATIVE:
              case vk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kk.add((Fk.offsetValue || fk).scale(Fk.repeatCount))
            }
            break
          }
          case vk.ANIMATIONTYPE_COLOR4: {
            const kk = dk ? this.color4InterpolateFunctionWithTangents(bk, ak.outTangent.scale(sk), wk, Xk.inTangent.scale(sk), Vk) : this.color4InterpolateFunction(bk, wk, Vk);
            switch (Fk.Oa) {
              case vk.ANIMATIONLOOPMODE_CYCLE:
              case vk.ANIMATIONLOOPMODE_CONSTANT:
              case vk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case vk.ANIMATIONLOOPMODE_RELATIVE:
              case vk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kk.add((Fk.offsetValue || mk).scale(Fk.repeatCount))
            }
            break
          }
          case vk.ANIMATIONTYPE_MATRIX:
            switch (Fk.Oa) {
              case vk.ANIMATIONLOOPMODE_CYCLE:
              case vk.ANIMATIONLOOPMODE_CONSTANT:
              case vk.ANIMATIONLOOPMODE_YOYO:
                return vk.AllowMatricesInterpolation ? this.matrixInterpolateFunction(bk, wk, Vk, Fk.workValue) : bk;
              case vk.ANIMATIONLOOPMODE_RELATIVE:
              case vk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bk
            }
        }
        return 0
      }
      matrixInterpolateFunction(kk, Fk, Bk, tk) {
        return vk.AllowMatrixDecomposeForInterpolation ? tk ? (Rk.c.DecomposeLerpToRef(kk, Fk, Bk, tk), tk) : Rk.c.DecomposeLerp(kk, Fk, Bk) : tk ? (Rk.c.LerpToRef(kk, Fk, Bk, tk), tk) : Rk.c.Lerp(kk, Fk, Bk)
      }
      clone() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = new vk(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.Oa);
        if (Fk.enableBlending = this.enableBlending, Fk.blendingSpeed = this.blendingSpeed, this._keys && Fk.setKeys(this._keys, !1, kk), this._ranges) {
          Fk._ranges = {};
          for (const kk in this._ranges) {
            const Bk = this._ranges[kk];
            Bk && (Fk._ranges[kk] = Bk.clone())
          }
        }
        return Fk
      }
      setKeys(kk) {
        let Fk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = kk;
        else if (this._keys = kk.slice(0), Fk)
          for (let Bk = 0; Bk < this._keys.length; Bk++) {
            const kk = this._keys[Bk];
            this._keys[Bk] = {
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
        Wk.key = 0;
        const Fk = this._interpolate(kk, Wk, !0);
        if (!Fk) return this._keys[Wk.key].frame === kk ? Wk.key : Wk.key + 1;
        const Bk = {
          frame: kk,
          value: Fk.clone ? Fk.clone() : Fk
        };
        return this._keys.splice(Wk.key + 1, 0, Bk), Wk.key + 1
      }
      serialize() {
        const kk = {};
        kk.name = this.name, kk.property = this.targetProperty, kk.framePerSecond = this.framePerSecond, kk.dataType = this.dataType, kk.loopBehavior = this.Oa, kk.enableBlending = this.enableBlending, kk.blendingSpeed = this.blendingSpeed;
        const Fk = this.dataType;
        kk.keys = [];
        const Bk = this.getKeys();
        for (let Rk = 0; Rk < Bk.length; Rk++) {
          const tk = Bk[Rk],
            ak = {};
          switch (ak.frame = tk.frame, Fk) {
            case vk.ANIMATIONTYPE_FLOAT:
              ak.values = [tk.value], void 0 !== tk.inTangent && ak.values.push(tk.inTangent), void 0 !== tk.outTangent && (void 0 === tk.inTangent && ak.values.push(void 0), ak.values.push(tk.outTangent)), void 0 !== tk.interpolation && (void 0 === tk.inTangent && ak.values.push(void 0), void 0 === tk.outTangent && ak.values.push(void 0), ak.values.push(tk.interpolation));
              break;
            case vk.ANIMATIONTYPE_QUATERNION:
            case vk.ANIMATIONTYPE_MATRIX:
            case vk.ANIMATIONTYPE_VECTOR3:
            case vk.ANIMATIONTYPE_COLOR3:
            case vk.ANIMATIONTYPE_COLOR4:
              ak.values = tk.value.PBk(), void 0 != tk.inTangent && ak.values.push(tk.inTangent.PBk()), void 0 != tk.outTangent && (void 0 === tk.inTangent && ak.values.push(void 0), ak.values.push(tk.outTangent.PBk())), void 0 !== tk.interpolation && (void 0 === tk.inTangent && ak.values.push(void 0), void 0 === tk.outTangent && ak.values.push(void 0), ak.values.push(tk.interpolation))
          }
          kk.keys.push(ak)
        }
        kk.hb = [];
        for (const Rk in this._ranges) {
          const Fk = this._ranges[Rk];
          if (!Fk) continue;
          const Bk = {};
          Bk.name = Rk, Bk.from = Fk.from, Bk.to = Fk.to, kk.hb.push(Bk)
        }
        return kk
      }
      static _UniversalLerp(kk, Fk, Bk) {
        const Rk = kk.constructor;
        return Rk.Lerp ? Rk.Lerp(kk, Fk, Bk) : Rk.Slerp ? Rk.Slerp(kk, Fk, Bk) : kk.toFixed ? kk * (1 - Bk) + Bk * Fk : Fk
      }
    }

    function ik(kk, Fk, Bk) {
      let tk;
      tk = "object" === typeof Fk ? Fk : {
        referenceFrame: Fk ?? 0,
        range: Bk,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let ak = kk;
      tk.cloneOriginalAnimation && (ak = kk.clone(), ak.name = tk.clonedAnimationName || ak.name);
      const Xk = ak.getKeys();
      if (!Xk.length) return ak;
      const bk = tk.referenceFrame && tk.referenceFrame >= 0 ? tk.referenceFrame : 0;
      let wk = 0;
      const dk = Xk[0];
      let sk = Xk.length - 1;
      const Vk = Xk[sk],
        Jk = {
          referenceValue: dk.value,
          referencePosition: Rk.l.Qe[0],
          referenceQuaternion: Rk.l.Quaternion[0],
          referenceScaling: Rk.l.Qe[1],
          keyPosition: Rk.l.Qe[2],
          keyQuaternion: Rk.l.Quaternion[1],
          keyScaling: Rk.l.Qe[3]
        };
      let Ak = dk.frame,
        ek = Vk.frame;
      if (tk.range) {
        const kk = ak.getRange(tk.range);
        kk && (Ak = kk.from, ek = kk.to)
      } else Ak = tk.fromFrame ?? Ak, ek = tk.toFrame ?? ek;
      Ak !== dk.frame && (wk = ak.createKeyForFrame(Ak)), ek !== Vk.frame && (sk = ak.createKeyForFrame(ek));
      const yk = ak.getKeys();
      if (1 === yk.length) {
        const kk = ak._getKeyValue(yk[0].value);
        Jk.referenceValue = kk.clone ? kk.clone() : kk
      } else if (bk <= dk.frame) {
        const kk = ak._getKeyValue(dk.value);
        Jk.referenceValue = kk.clone ? kk.clone() : kk
      } else if (bk >= Vk.frame) {
        const kk = ak._getKeyValue(Vk.value);
        Jk.referenceValue = kk.clone ? kk.clone() : kk
      } else {
        Wk.key = 0;
        const kk = ak._interpolate(bk, Wk);
        Jk.referenceValue = kk.clone ? kk.clone() : kk
      }
      ak.dataType === vk.ANIMATIONTYPE_QUATERNION ? Jk.referenceValue.normalize().conjugateInPlace() : ak.dataType === vk.ANIMATIONTYPE_MATRIX && (Jk.referenceValue.decompose(Jk.referenceScaling, Jk.referenceQuaternion, Jk.referencePosition), Jk.referenceQuaternion.normalize().conjugateInPlace());
      let fk = Number.MAX_VALUE;
      const mk = tk.clipKeys ? [] : null;
      for (let Wk = wk; Wk <= sk; Wk++) {
        let kk = yk[Wk];
        if ((mk || tk.cloneOriginalAnimation) && (kk = {
            frame: kk.frame,
            value: kk.value.clone ? kk.value.clone() : kk.value,
            inTangent: kk.inTangent,
            outTangent: kk.outTangent,
            interpolation: kk.interpolation,
            lockedTangent: kk.lockedTangent,
            easingFunction: kk.easingFunction
          }, mk && (fk === Number.MAX_VALUE && (fk = kk.frame), kk.frame -= fk, mk.push(kk))), !Wk || ak.dataType === vk.ANIMATIONTYPE_FLOAT || kk.value !== dk.value) switch (ak.dataType) {
          case vk.ANIMATIONTYPE_MATRIX:
            kk.value.decompose(Jk.keyScaling, Jk.keyQuaternion, Jk.keyPosition), Jk.keyPosition.wRk(Jk.referencePosition), Jk.keyScaling.divideInPlace(Jk.referenceScaling), Jk.referenceQuaternion.multiplyToRef(Jk.keyQuaternion, Jk.keyQuaternion), Rk.c.ComposeToRef(Jk.keyScaling, Jk.keyQuaternion, Jk.keyPosition, kk.value);
            break;
          case vk.ANIMATIONTYPE_QUATERNION:
            Jk.referenceValue.multiplyToRef(kk.value, kk.value);
            break;
          case vk.ANIMATIONTYPE_VECTOR2:
          case vk.ANIMATIONTYPE_VECTOR3:
          case vk.ANIMATIONTYPE_COLOR3:
          case vk.ANIMATIONTYPE_COLOR4:
            kk.value.subtractToRef(Jk.referenceValue, kk.value);
            break;
          case vk.ANIMATIONTYPE_SIZE:
            kk.value.width -= Jk.referenceValue.width, kk.value.height -= Jk.referenceValue.height;
            break;
          default:
            kk.value -= Jk.referenceValue
        }
      }
      return mk && ak.setKeys(mk, !0), ak
    }

    function Yk(kk, Fk, Bk, Rk) {
      const tk = new vk(kk + "Animation", kk, Bk, Fk, vk.ANIMATIONLOOPMODE_CONSTANT);
      return tk.setEasingFunction(Rk), tk
    }

    function Lk(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk) {
      const Vk = vk._PrepareAnimation(kk, Bk, Rk, tk, ak, Xk, bk, wk);
      return Vk ? (Fk.XN && (sk = Fk.XN()), sk ? sk.beginDirectAnimation(Fk, [Vk], 0, tk, Vk.Oa !== vk.ANIMATIONLOOPMODE_CONSTANT, 1, dk) : null) : null
    }

    function Ok(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk) {
      const Vk = vk._PrepareAnimation(kk, Rk, tk, ak, Xk, bk, wk, dk);
      if (!Vk) return null;
      return Fk.XN().beginDirectHierarchyAnimation(Fk, Bk, [Vk], 0, ak, 1 === Vk.Oa, 1, sk)
    }

    function Ek(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk) {
      const sk = vk._PrepareAnimation(kk, Bk, Rk, tk, ak, Xk, bk, wk);
      return sk ? (Fk.animations.push(sk), Fk.XN().beginAnimation(Fk, 0, tk, 1 === sk.Oa, 1, dk)) : null
    }

    function Sk(kk, Fk, Bk, Rk, tk, ak, Xk) {
      let bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        wk = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        dk = arguments.length > 9 ? arguments[9] : void 0;
      if (Xk <= 0) return Bk[kk] = Fk, bk && bk(), null;
      const sk = tk * (Xk / 1e3);
      ak.setKeys(dk ?? [{
        frame: 0,
        value: Bk[kk].clone ? Bk[kk].clone() : Bk[kk]
      }, {
        frame: sk,
        value: Fk
      }]), Bk.animations || (Bk.animations = []), Bk.animations.push(ak);
      return Rk.beginAnimation(Bk, 0, sk, !1, 1, bk ?? void 0, void 0, wk)
    }

    function Nk(kk, Fk) {
      sk.c.AppendSerializedAnimations(kk, Fk)
    }

    function Hk(kk) {
      const Fk = new vk(kk.name, kk.property, kk.framePerSecond, kk.dataType, kk.loopBehavior),
        Bk = kk.dataType,
        ak = [];
      let Xk, bk;
      for (kk.enableBlending && (Fk.enableBlending = kk.enableBlending), kk.blendingSpeed && (Fk.blendingSpeed = kk.blendingSpeed), bk = 0; bk < kk.keys.length; bk++) {
        const Fk = kk.keys[bk];
        let wk, dk, sk;
        switch (Bk) {
          case vk.ANIMATIONTYPE_FLOAT:
            Xk = Fk.values[0], Fk.values.length >= 2 && (wk = Fk.values[1]), Fk.values.length >= 3 && (dk = Fk.values[2]), Fk.values.length >= 4 && (sk = Fk.values[3]);
            break;
          case vk.ANIMATIONTYPE_QUATERNION:
            if (Xk = Rk.e.FromArray(Fk.values), Fk.values.length >= 8) {
              const kk = Rk.e.FromArray(Fk.values.slice(4, 8));
              kk.equals(Rk.e.Zero()) || (wk = kk)
            }
            if (Fk.values.length >= 12) {
              const kk = Rk.e.FromArray(Fk.values.slice(8, 12));
              kk.equals(Rk.e.Zero()) || (dk = kk)
            }
            Fk.values.length >= 13 && (sk = Fk.values[12]);
            break;
          case vk.ANIMATIONTYPE_MATRIX:
            Xk = Rk.c.FromArray(Fk.values), Fk.values.length >= 17 && (sk = Fk.values[16]);
            break;
          case vk.ANIMATIONTYPE_COLOR3:
            Xk = tk.e.FromArray(Fk.values), Fk.values[3] && (wk = tk.e.FromArray(Fk.values[3])), Fk.values[4] && (dk = tk.e.FromArray(Fk.values[4])), Fk.values[5] && (sk = Fk.values[5]);
            break;
          case vk.ANIMATIONTYPE_COLOR4:
            Xk = tk.i.FromArray(Fk.values), Fk.values[4] && (wk = tk.i.FromArray(Fk.values[4])), Fk.values[5] && (dk = tk.i.FromArray(Fk.values[5])), Fk.values[6] && (sk = Fk.values[6]);
            break;
          case vk.ANIMATIONTYPE_VECTOR3:
          default:
            Xk = Rk.s.FromArray(Fk.values), Fk.values[3] && (wk = Rk.s.FromArray(Fk.values[3])), Fk.values[4] && (dk = Rk.s.FromArray(Fk.values[4])), Fk.values[5] && (sk = Fk.values[5])
        }
        const Vk = {};
        Vk.frame = Fk.frame, Vk.value = Xk, void 0 != wk && (Vk.inTangent = wk), void 0 != dk && (Vk.outTangent = dk), void 0 != sk && (Vk.interpolation = sk), ak.push(Vk)
      }
      if (Fk.setKeys(ak), kk.hb)
        for (bk = 0; bk < kk.hb.length; bk++) Xk = kk.hb[bk], Fk.createRange(Xk.name, Xk.from, Xk.to);
      return Fk
    }
    async function uk(kk, Fk) {
      return await new Promise(((Bk, Rk) => {
        const tk = new dk.d;
        tk.addEventListener("readystatechange", (() => {
          if (4 == tk.readyState)
            if (200 == tk.status) {
              let Fk = JSON.parse(tk.responseText);
              if (Fk.animations && (Fk = Fk.animations), Fk.length) {
                const kk = [];
                for (const Bk of Fk) kk.push(Hk(Bk));
                Bk(kk)
              } else {
                const Rk = Hk(Fk);
                kk && (Rk.name = kk), Bk(Rk)
              }
            } else Rk("Unable to load the animation")
        })), tk.open("GET", Fk), tk.send()
      }))
    }
    async function Mk(kk) {
      const Fk = this?.SnippetUrl ?? vk.SnippetUrl;
      return await new Promise(((Bk, Rk) => {
        const tk = new dk.d;
        tk.addEventListener("readystatechange", (() => {
          if (4 == tk.readyState)
            if (200 == tk.status) {
              const Fk = JSON.parse(JSON.parse(tk.responseText).jsonPayload);
              if (Fk.animations) {
                const Rk = JSON.parse(Fk.animations),
                  tk = [];
                for (const Fk of Rk.animations) {
                  const Bk = Hk(Fk);
                  Bk.snippetId = kk, tk.push(Bk)
                }
                Bk(tk)
              } else {
                const Rk = Hk(JSON.parse(Fk.animation));
                Rk.snippetId = kk, Bk(Rk)
              }
            } else Rk("Unable to load the snippet " + kk)
        })), tk.open("GET", Fk + "/" + kk.replace(/#/g, "/")), tk.send()
      }))
    }
    vk._UniqueIdGenerator = 0, vk.AllowMatricesInterpolation = !1, vk.AllowMatrixDecomposeForInterpolation = !0, vk.InheritOriginalValueFromActiveAnimations = !1, vk.SnippetUrl = "https://snippet.babylonjs.com", vk.ANIMATIONTYPE_FLOAT = 0, vk.ANIMATIONTYPE_VECTOR3 = 1, vk.ANIMATIONTYPE_QUATERNION = 2, vk.ANIMATIONTYPE_MATRIX = 3, vk.ANIMATIONTYPE_COLOR3 = 4, vk.ANIMATIONTYPE_COLOR4 = 7, vk.ANIMATIONTYPE_VECTOR2 = 5, vk.ANIMATIONTYPE_SIZE = 6, vk.ANIMATIONLOOPMODE_RELATIVE = 0, vk.ANIMATIONLOOPMODE_CYCLE = 1, vk.ANIMATIONLOOPMODE_CONSTANT = 2, vk.ANIMATIONLOOPMODE_YOYO = 4, vk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const gk = Mk;
    let Uk = !1;

    function ck() {
      Uk || (Uk = !0, vk.Parse = Hk, vk.ParseFromFileAsync = uk, vk.ParseFromSnippetAsync = Mk, vk.CreateFromSnippetAsync = gk, vk.CreateAnimation = Yk, vk.CreateAndStartAnimation = Lk, vk.CreateAndStartHierarchyAnimation = Ok, vk.CreateMergeAndStartAnimation = Ek, vk.MakeAnimationAdditive = ik, vk.TransitionTo = Sk, vk.AppendSerializedAnimations = Nk, (0, Vk.d)("BABYLON.Animation", vk), bk.b._AnimationRangeFactory = (kk, Fk, Bk) => new Xk.c(kk, Fk, Bk))
    }
  },
  40527: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk
    });
    class Rk {
      constructor(kk, Fk, Bk) {
        this.name = kk, this.from = Fk, this.to = Bk
      }
      clone() {
        return new Rk(this.name, this.from, this.to)
      }
    }
  },
  40583: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk.d,
      e: () => Rk.n
    });
    var Rk = Bk(39541);
    (0, Rk.h)()
  },
  40570: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk.f
    });
    var Rk = Bk(39895);
    (0, Rk.e)()
  },
  40541: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk.b
    });
    var Rk = Bk(39879);
    (0, Rk.d)()
  },
  40592: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk.b
    });
    var Rk = Bk(39817);
    (0, Rk.d)()
  },
  40536: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk.e
    });
    var Rk = Bk(39857);
    (0, Rk.c)()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);