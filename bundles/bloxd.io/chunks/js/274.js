export const id = 274;
export const ids = [274];
export const modules = {
  41107: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Pk,
      d: () => uk,
      h: () => Hk,
      i: () => Jk,
      j: () => Zk,
      l: () => wk,
      n: () => ek,
      r: () => jk
    });
    var Xk = Ik(37153),
      Tk = Ik(37331),
      ik = Ik(37189),
      yk = Ik(41111),
      lk = Ik(40218),
      ak = Ik(40016),
      qk = Ik(40040),
      Lk = Ik(40021),
      tk = Ik(37201);
    const Zk = Object.freeze(new Xk.f(0, 0, 0, 0)),
      jk = Object.freeze(Xk.t.Zero()),
      ek = Object.freeze(Xk.p.Zero()),
      wk = Object.freeze(ak.d.Zero()),
      Hk = Object.freeze(Tk.e.Black()),
      Jk = Object.freeze(new Tk.h(0, 0, 0, 0)),
      xk = {
        key: 0,
        repeatCount: 0,
        Fi: 2
      };
    class Pk {
      static _PrepareAnimation(kk, Fk, Ik, ik, yk, lk, qk, Lk) {
        let tk;
        if (!isNaN(parseFloat(yk)) && isFinite(yk) ? tk = Pk.ANIMATIONTYPE_FLOAT : yk instanceof Xk.f ? tk = Pk.ANIMATIONTYPE_QUATERNION : yk instanceof Xk.t ? tk = Pk.ANIMATIONTYPE_VECTOR3 : yk instanceof Xk.p ? tk = Pk.ANIMATIONTYPE_VECTOR2 : yk instanceof Tk.e ? tk = Pk.ANIMATIONTYPE_COLOR3 : yk instanceof Tk.h ? tk = Pk.ANIMATIONTYPE_COLOR4 : yk instanceof ak.d && (tk = Pk.ANIMATIONTYPE_SIZE), void 0 == tk) return null;
        const Zk = new Pk(kk, Fk, Ik, tk, qk),
          jk = [{
            frame: 0,
            value: yk
          }, {
            frame: ik,
            value: lk
          }];
        return Zk.setKeys(jk), void 0 !== Lk && Zk.setEasingFunction(Lk), Zk
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const kk of this._runtimeAnimations)
          if (!kk.isStopped()) return !0;
        return !1
      }
      constructor(kk, Fk, Ik, Xk, Tk, ik) {
        this.name = kk, this.targetProperty = Fk, this.framePerSecond = Ik, this.dataType = Xk, this.Fi = Tk, this.enableBlending = ik, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = Fk.split("."), this.dataType = Xk, this.Fi = void 0 === Tk ? Pk.ANIMATIONLOOPMODE_CYCLE : Tk, this.uniqueId = Pk._UniqueIdGenerator++
      }
      toString(kk) {
        let Fk = "Name: " + this.name + ", property: " + this.targetProperty;
        if (Fk += ", datatype: " + ["Float", "Ge", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], Fk += ", nKeys: " + (this._keys ? this._keys.length : "none"), Fk += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), kk) {
          Fk += ", Ranges: {";
          let kk = !0;
          for (const Ik in this._ranges) kk || (Fk += ", "), kk = !1, Fk += Ik;
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
      createRange(kk, Fk, Ik) {
        this._ranges[kk] || (this._ranges[kk] = new yk.b(kk, Fk, Ik))
      }
      deleteRange(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Ik = this._ranges[kk];
        if (Ik) {
          if (Fk) {
            const kk = Ik.from,
              Fk = Ik.to;
            for (let Ik = this._keys.length - 1; Ik >= 0; Ik--) this._keys[Ik].frame >= kk && this._keys[Ik].frame <= Fk && this._keys.splice(Ik, 1)
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
        for (let Fk = 0, Ik = this._keys.length; Fk < Ik; Fk++) kk < this._keys[Fk].frame && (kk = this._keys[Fk].frame);
        return kk
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(kk) {
        this._easingFunction = kk
      }
      floatInterpolateFunction(kk, Fk, Ik) {
        return (0, ik.Lerp)(kk, Fk, Ik)
      }
      floatInterpolateFunctionWithTangents(kk, Fk, Ik, Xk, Tk) {
        return (0, ik.Hermite)(kk, Fk, Ik, Xk, Tk)
      }
      quaternionInterpolateFunction(kk, Fk, Ik) {
        return Xk.f.Slerp(kk, Fk, Ik)
      }
      quaternionInterpolateFunctionWithTangents(kk, Fk, Ik, Tk, ik) {
        return Xk.f.Hermite(kk, Fk, Ik, Tk, ik).normalize()
      }
      vector3InterpolateFunction(kk, Fk, Ik) {
        return Xk.t.Lerp(kk, Fk, Ik)
      }
      vector3InterpolateFunctionWithTangents(kk, Fk, Ik, Tk, ik) {
        return Xk.t.Hermite(kk, Fk, Ik, Tk, ik)
      }
      vector2InterpolateFunction(kk, Fk, Ik) {
        return Xk.p.Lerp(kk, Fk, Ik)
      }
      vector2InterpolateFunctionWithTangents(kk, Fk, Ik, Tk, ik) {
        return Xk.p.Hermite(kk, Fk, Ik, Tk, ik)
      }
      sizeInterpolateFunction(kk, Fk, Ik) {
        return ak.d.Lerp(kk, Fk, Ik)
      }
      color3InterpolateFunction(kk, Fk, Ik) {
        return Tk.e.Lerp(kk, Fk, Ik)
      }
      color3InterpolateFunctionWithTangents(kk, Fk, Ik, Xk, ik) {
        return Tk.e.Hermite(kk, Fk, Ik, Xk, ik)
      }
      color4InterpolateFunction(kk, Fk, Ik) {
        return Tk.h.Lerp(kk, Fk, Ik)
      }
      color4InterpolateFunctionWithTangents(kk, Fk, Ik, Xk, ik) {
        return Tk.h.Hermite(kk, Fk, Ik, Xk, ik)
      }
      _getKeyValue(kk) {
        return "function" === typeof kk ? kk() : kk
      }
      evaluate(kk) {
        return xk.key = 0, this._interpolate(kk, xk)
      }
      _interpolate(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (Fk.Fi === Pk.ANIMATIONLOOPMODE_CONSTANT && Fk.repeatCount > 0) return Fk.highLimitValue.clone ? Fk.highLimitValue.clone() : Fk.highLimitValue;
        const Xk = this._keys;
        let Tk;
        if (this._coreAnimation) Tk = this._coreAnimation._key;
        else {
          const ik = Xk.length;
          for (Tk = Fk.key; Tk >= 0 && kk < Xk[Tk].frame;) --Tk;
          for (; Tk + 1 <= ik - 1 && kk >= Xk[Tk + 1].frame;) ++Tk;
          if (Fk.key = Tk, Tk < 0) return Ik ? void 0 : this._getKeyValue(Xk[0].value);
          if (Tk + 1 > ik - 1) return Ik ? void 0 : this._getKeyValue(Xk[ik - 1].value);
          this._key = Tk
        }
        const ik = Xk[Tk],
          yk = Xk[Tk + 1];
        if (Ik && (kk === ik.frame || kk === yk.frame)) return;
        const lk = this._getKeyValue(ik.value),
          ak = this._getKeyValue(yk.value);
        if (1 === ik.interpolation) return yk.frame > kk ? lk : ak;
        const qk = void 0 !== ik.outTangent && void 0 !== yk.inTangent,
          Lk = yk.frame - ik.frame;
        let tk = (kk - ik.frame) / Lk;
        const xk = ik.easingFunction || this.getEasingFunction();
        switch (xk && (tk = xk.ease(tk)), this.dataType) {
          case Pk.ANIMATIONTYPE_FLOAT: {
            const kk = qk ? this.floatInterpolateFunctionWithTangents(lk, ik.outTangent * Lk, ak, yk.inTangent * Lk, tk) : this.floatInterpolateFunction(lk, ak, tk);
            switch (Fk.Fi) {
              case Pk.ANIMATIONLOOPMODE_CYCLE:
              case Pk.ANIMATIONLOOPMODE_CONSTANT:
              case Pk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case Pk.ANIMATIONLOOPMODE_RELATIVE:
              case Pk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (Fk.offsetValue ?? 0) * Fk.repeatCount + kk
            }
            break
          }
          case Pk.ANIMATIONTYPE_QUATERNION: {
            const kk = qk ? this.quaternionInterpolateFunctionWithTangents(lk, ik.outTangent.scale(Lk), ak, yk.inTangent.scale(Lk), tk) : this.quaternionInterpolateFunction(lk, ak, tk);
            switch (Fk.Fi) {
              case Pk.ANIMATIONLOOPMODE_CYCLE:
              case Pk.ANIMATIONLOOPMODE_CONSTANT:
              case Pk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case Pk.ANIMATIONLOOPMODE_RELATIVE:
              case Pk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kk.addInPlace((Fk.offsetValue || Zk).scale(Fk.repeatCount))
            }
            return kk
          }
          case Pk.ANIMATIONTYPE_VECTOR3: {
            const kk = qk ? this.vector3InterpolateFunctionWithTangents(lk, ik.outTangent.scale(Lk), ak, yk.inTangent.scale(Lk), tk) : this.vector3InterpolateFunction(lk, ak, tk);
            switch (Fk.Fi) {
              case Pk.ANIMATIONLOOPMODE_CYCLE:
              case Pk.ANIMATIONLOOPMODE_CONSTANT:
              case Pk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case Pk.ANIMATIONLOOPMODE_RELATIVE:
              case Pk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kk.add((Fk.offsetValue || jk).scale(Fk.repeatCount))
            }
            break
          }
          case Pk.ANIMATIONTYPE_VECTOR2: {
            const kk = qk ? this.vector2InterpolateFunctionWithTangents(lk, ik.outTangent.scale(Lk), ak, yk.inTangent.scale(Lk), tk) : this.vector2InterpolateFunction(lk, ak, tk);
            switch (Fk.Fi) {
              case Pk.ANIMATIONLOOPMODE_CYCLE:
              case Pk.ANIMATIONLOOPMODE_CONSTANT:
              case Pk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case Pk.ANIMATIONLOOPMODE_RELATIVE:
              case Pk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kk.add((Fk.offsetValue || ek).scale(Fk.repeatCount))
            }
            break
          }
          case Pk.ANIMATIONTYPE_SIZE:
            switch (Fk.Fi) {
              case Pk.ANIMATIONLOOPMODE_CYCLE:
              case Pk.ANIMATIONLOOPMODE_CONSTANT:
              case Pk.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(lk, ak, tk);
              case Pk.ANIMATIONLOOPMODE_RELATIVE:
              case Pk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(lk, ak, tk).add((Fk.offsetValue || wk).scale(Fk.repeatCount))
            }
            break;
          case Pk.ANIMATIONTYPE_COLOR3: {
            const kk = qk ? this.color3InterpolateFunctionWithTangents(lk, ik.outTangent.scale(Lk), ak, yk.inTangent.scale(Lk), tk) : this.color3InterpolateFunction(lk, ak, tk);
            switch (Fk.Fi) {
              case Pk.ANIMATIONLOOPMODE_CYCLE:
              case Pk.ANIMATIONLOOPMODE_CONSTANT:
              case Pk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case Pk.ANIMATIONLOOPMODE_RELATIVE:
              case Pk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kk.add((Fk.offsetValue || Hk).scale(Fk.repeatCount))
            }
            break
          }
          case Pk.ANIMATIONTYPE_COLOR4: {
            const kk = qk ? this.color4InterpolateFunctionWithTangents(lk, ik.outTangent.scale(Lk), ak, yk.inTangent.scale(Lk), tk) : this.color4InterpolateFunction(lk, ak, tk);
            switch (Fk.Fi) {
              case Pk.ANIMATIONLOOPMODE_CYCLE:
              case Pk.ANIMATIONLOOPMODE_CONSTANT:
              case Pk.ANIMATIONLOOPMODE_YOYO:
                return kk;
              case Pk.ANIMATIONLOOPMODE_RELATIVE:
              case Pk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return kk.add((Fk.offsetValue || Jk).scale(Fk.repeatCount))
            }
            break
          }
          case Pk.ANIMATIONTYPE_MATRIX:
            switch (Fk.Fi) {
              case Pk.ANIMATIONLOOPMODE_CYCLE:
              case Pk.ANIMATIONLOOPMODE_CONSTANT:
              case Pk.ANIMATIONLOOPMODE_YOYO:
                return Pk.AllowMatricesInterpolation ? this.matrixInterpolateFunction(lk, ak, tk, Fk.workValue) : lk;
              case Pk.ANIMATIONLOOPMODE_RELATIVE:
              case Pk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return lk
            }
        }
        return 0
      }
      matrixInterpolateFunction(kk, Fk, Ik, Tk) {
        return Pk.AllowMatrixDecomposeForInterpolation ? Tk ? (Xk.c.DecomposeLerpToRef(kk, Fk, Ik, Tk), Tk) : Xk.c.DecomposeLerp(kk, Fk, Ik) : Tk ? (Xk.c.LerpToRef(kk, Fk, Ik, Tk), Tk) : Xk.c.Lerp(kk, Fk, Ik)
      }
      clone() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = new Pk(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.Fi);
        if (Fk.enableBlending = this.enableBlending, Fk.blendingSpeed = this.blendingSpeed, this._keys && Fk.setKeys(this._keys, !1, kk), this._ranges) {
          Fk._ranges = {};
          for (const kk in this._ranges) {
            const Ik = this._ranges[kk];
            Ik && (Fk._ranges[kk] = Ik.clone())
          }
        }
        return Fk
      }
      setKeys(kk) {
        let Fk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = kk;
        else if (this._keys = kk.slice(0), Fk)
          for (let Ik = 0; Ik < this._keys.length; Ik++) {
            const kk = this._keys[Ik];
            this._keys[Ik] = {
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
        xk.key = 0;
        const Fk = this._interpolate(kk, xk, !0);
        if (!Fk) return this._keys[xk.key].frame === kk ? xk.key : xk.key + 1;
        const Ik = {
          frame: kk,
          value: Fk.clone ? Fk.clone() : Fk
        };
        return this._keys.splice(xk.key + 1, 0, Ik), xk.key + 1
      }
      serialize() {
        const kk = {};
        kk.name = this.name, kk.property = this.targetProperty, kk.framePerSecond = this.framePerSecond, kk.dataType = this.dataType, kk.loopBehavior = this.Fi, kk.enableBlending = this.enableBlending, kk.blendingSpeed = this.blendingSpeed;
        const Fk = this.dataType;
        kk.keys = [];
        const Ik = this.getKeys();
        for (let Xk = 0; Xk < Ik.length; Xk++) {
          const Tk = Ik[Xk],
            ik = {};
          switch (ik.frame = Tk.frame, Fk) {
            case Pk.ANIMATIONTYPE_FLOAT:
              ik.values = [Tk.value], void 0 !== Tk.inTangent && ik.values.push(Tk.inTangent), void 0 !== Tk.outTangent && (void 0 === Tk.inTangent && ik.values.push(void 0), ik.values.push(Tk.outTangent)), void 0 !== Tk.interpolation && (void 0 === Tk.inTangent && ik.values.push(void 0), void 0 === Tk.outTangent && ik.values.push(void 0), ik.values.push(Tk.interpolation));
              break;
            case Pk.ANIMATIONTYPE_QUATERNION:
            case Pk.ANIMATIONTYPE_MATRIX:
            case Pk.ANIMATIONTYPE_VECTOR3:
            case Pk.ANIMATIONTYPE_COLOR3:
            case Pk.ANIMATIONTYPE_COLOR4:
              ik.values = Tk.value.iXk(), void 0 != Tk.inTangent && ik.values.push(Tk.inTangent.iXk()), void 0 != Tk.outTangent && (void 0 === Tk.inTangent && ik.values.push(void 0), ik.values.push(Tk.outTangent.iXk())), void 0 !== Tk.interpolation && (void 0 === Tk.inTangent && ik.values.push(void 0), void 0 === Tk.outTangent && ik.values.push(void 0), ik.values.push(Tk.interpolation))
          }
          kk.keys.push(ik)
        }
        kk.nZ = [];
        for (const Xk in this._ranges) {
          const Fk = this._ranges[Xk];
          if (!Fk) continue;
          const Ik = {};
          Ik.name = Xk, Ik.from = Fk.from, Ik.to = Fk.to, kk.nZ.push(Ik)
        }
        return kk
      }
      static _UniversalLerp(kk, Fk, Ik) {
        const Xk = kk.constructor;
        return Xk.Lerp ? Xk.Lerp(kk, Fk, Ik) : Xk.Slerp ? Xk.Slerp(kk, Fk, Ik) : kk.toFixed ? kk * (1 - Ik) + Ik * Fk : Fk
      }
    }

    function Kk(kk, Fk, Ik) {
      let Tk;
      Tk = "object" === typeof Fk ? Fk : {
        referenceFrame: Fk ?? 0,
        range: Ik,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let ik = kk;
      Tk.cloneOriginalAnimation && (ik = kk.clone(), ik.name = Tk.clonedAnimationName || ik.name);
      const yk = ik.getKeys();
      if (!yk.length) return ik;
      const lk = Tk.referenceFrame && Tk.referenceFrame >= 0 ? Tk.referenceFrame : 0;
      let ak = 0;
      const qk = yk[0];
      let Lk = yk.length - 1;
      const tk = yk[Lk],
        Zk = {
          referenceValue: qk.value,
          referencePosition: Xk.l.Ge[0],
          referenceQuaternion: Xk.l.Quaternion[0],
          referenceScaling: Xk.l.Ge[1],
          keyPosition: Xk.l.Ge[2],
          keyQuaternion: Xk.l.Quaternion[1],
          keyScaling: Xk.l.Ge[3]
        };
      let jk = qk.frame,
        ek = tk.frame;
      if (Tk.range) {
        const kk = ik.getRange(Tk.range);
        kk && (jk = kk.from, ek = kk.to)
      } else jk = Tk.fromFrame ?? jk, ek = Tk.toFrame ?? ek;
      jk !== qk.frame && (ak = ik.createKeyForFrame(jk)), ek !== tk.frame && (Lk = ik.createKeyForFrame(ek));
      const wk = ik.getKeys();
      if (1 === wk.length) {
        const kk = ik._getKeyValue(wk[0].value);
        Zk.referenceValue = kk.clone ? kk.clone() : kk
      } else if (lk <= qk.frame) {
        const kk = ik._getKeyValue(qk.value);
        Zk.referenceValue = kk.clone ? kk.clone() : kk
      } else if (lk >= tk.frame) {
        const kk = ik._getKeyValue(tk.value);
        Zk.referenceValue = kk.clone ? kk.clone() : kk
      } else {
        xk.key = 0;
        const kk = ik._interpolate(lk, xk);
        Zk.referenceValue = kk.clone ? kk.clone() : kk
      }
      ik.dataType === Pk.ANIMATIONTYPE_QUATERNION ? Zk.referenceValue.normalize().conjugateInPlace() : ik.dataType === Pk.ANIMATIONTYPE_MATRIX && (Zk.referenceValue.decompose(Zk.referenceScaling, Zk.referenceQuaternion, Zk.referencePosition), Zk.referenceQuaternion.normalize().conjugateInPlace());
      let Hk = Number.MAX_VALUE;
      const Jk = Tk.clipKeys ? [] : null;
      for (let xk = ak; xk <= Lk; xk++) {
        let kk = wk[xk];
        if ((Jk || Tk.cloneOriginalAnimation) && (kk = {
            frame: kk.frame,
            value: kk.value.clone ? kk.value.clone() : kk.value,
            inTangent: kk.inTangent,
            outTangent: kk.outTangent,
            interpolation: kk.interpolation,
            lockedTangent: kk.lockedTangent,
            easingFunction: kk.easingFunction
          }, Jk && (Hk === Number.MAX_VALUE && (Hk = kk.frame), kk.frame -= Hk, Jk.push(kk))), !xk || ik.dataType === Pk.ANIMATIONTYPE_FLOAT || kk.value !== qk.value) switch (ik.dataType) {
          case Pk.ANIMATIONTYPE_MATRIX:
            kk.value.decompose(Zk.keyScaling, Zk.keyQuaternion, Zk.keyPosition), Zk.keyPosition.zXk(Zk.referencePosition), Zk.keyScaling.divideInPlace(Zk.referenceScaling), Zk.referenceQuaternion.multiplyToRef(Zk.keyQuaternion, Zk.keyQuaternion), Xk.c.ComposeToRef(Zk.keyScaling, Zk.keyQuaternion, Zk.keyPosition, kk.value);
            break;
          case Pk.ANIMATIONTYPE_QUATERNION:
            Zk.referenceValue.multiplyToRef(kk.value, kk.value);
            break;
          case Pk.ANIMATIONTYPE_VECTOR2:
          case Pk.ANIMATIONTYPE_VECTOR3:
          case Pk.ANIMATIONTYPE_COLOR3:
          case Pk.ANIMATIONTYPE_COLOR4:
            kk.value.subtractToRef(Zk.referenceValue, kk.value);
            break;
          case Pk.ANIMATIONTYPE_SIZE:
            kk.value.width -= Zk.referenceValue.width, kk.value.height -= Zk.referenceValue.height;
            break;
          default:
            kk.value -= Zk.referenceValue
        }
      }
      return Jk && ik.setKeys(Jk, !0), ik
    }

    function Qk(kk, Fk, Ik, Xk) {
      const Tk = new Pk(kk + "Animation", kk, Ik, Fk, Pk.ANIMATIONLOOPMODE_CONSTANT);
      return Tk.setEasingFunction(Xk), Tk
    }

    function sk(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk) {
      const tk = Pk._PrepareAnimation(kk, Ik, Xk, Tk, ik, yk, lk, ak);
      return tk ? (Fk.mG && (Lk = Fk.mG()), Lk ? Lk.beginDirectAnimation(Fk, [tk], 0, Tk, tk.Fi !== Pk.ANIMATIONLOOPMODE_CONSTANT, 1, qk) : null) : null
    }

    function Vk(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk) {
      const tk = Pk._PrepareAnimation(kk, Xk, Tk, ik, yk, lk, ak, qk);
      if (!tk) return null;
      return Fk.mG().beginDirectHierarchyAnimation(Fk, Ik, [tk], 0, ik, 1 === tk.Fi, 1, Lk)
    }

    function zk(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk) {
      const Lk = Pk._PrepareAnimation(kk, Ik, Xk, Tk, ik, yk, lk, ak);
      return Lk ? (Fk.animations.push(Lk), Fk.mG().beginAnimation(Fk, 0, Tk, 1 === Lk.Fi, 1, qk)) : null
    }

    function Sk(kk, Fk, Ik, Xk, Tk, ik, yk) {
      let lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        ak = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        qk = arguments.length > 9 ? arguments[9] : void 0;
      if (yk <= 0) return Ik[kk] = Fk, lk && lk(), null;
      const Lk = Tk * (yk / 1e3);
      ik.setKeys(qk ?? [{
        frame: 0,
        value: Ik[kk].clone ? Ik[kk].clone() : Ik[kk]
      }, {
        frame: Lk,
        value: Fk
      }]), Ik.animations || (Ik.animations = []), Ik.animations.push(ik);
      return Xk.beginAnimation(Ik, 0, Lk, !1, 1, lk ?? void 0, void 0, ak)
    }

    function vk(kk, Fk) {
      Lk.b.AppendSerializedAnimations(kk, Fk)
    }

    function Ek(kk) {
      const Fk = new Pk(kk.name, kk.property, kk.framePerSecond, kk.dataType, kk.loopBehavior),
        Ik = kk.dataType,
        ik = [];
      let yk, lk;
      for (kk.enableBlending && (Fk.enableBlending = kk.enableBlending), kk.blendingSpeed && (Fk.blendingSpeed = kk.blendingSpeed), lk = 0; lk < kk.keys.length; lk++) {
        const Fk = kk.keys[lk];
        let ak, qk, Lk;
        switch (Ik) {
          case Pk.ANIMATIONTYPE_FLOAT:
            yk = Fk.values[0], Fk.values.length >= 2 && (ak = Fk.values[1]), Fk.values.length >= 3 && (qk = Fk.values[2]), Fk.values.length >= 4 && (Lk = Fk.values[3]);
            break;
          case Pk.ANIMATIONTYPE_QUATERNION:
            if (yk = Xk.f.FromArray(Fk.values), Fk.values.length >= 8) {
              const kk = Xk.f.FromArray(Fk.values.slice(4, 8));
              kk.equals(Xk.f.Zero()) || (ak = kk)
            }
            if (Fk.values.length >= 12) {
              const kk = Xk.f.FromArray(Fk.values.slice(8, 12));
              kk.equals(Xk.f.Zero()) || (qk = kk)
            }
            Fk.values.length >= 13 && (Lk = Fk.values[12]);
            break;
          case Pk.ANIMATIONTYPE_MATRIX:
            yk = Xk.c.FromArray(Fk.values), Fk.values.length >= 17 && (Lk = Fk.values[16]);
            break;
          case Pk.ANIMATIONTYPE_COLOR3:
            yk = Tk.e.FromArray(Fk.values), Fk.values[3] && (ak = Tk.e.FromArray(Fk.values[3])), Fk.values[4] && (qk = Tk.e.FromArray(Fk.values[4])), Fk.values[5] && (Lk = Fk.values[5]);
            break;
          case Pk.ANIMATIONTYPE_COLOR4:
            yk = Tk.h.FromArray(Fk.values), Fk.values[4] && (ak = Tk.h.FromArray(Fk.values[4])), Fk.values[5] && (qk = Tk.h.FromArray(Fk.values[5])), Fk.values[6] && (Lk = Fk.values[6]);
            break;
          case Pk.ANIMATIONTYPE_VECTOR3:
          default:
            yk = Xk.t.FromArray(Fk.values), Fk.values[3] && (ak = Xk.t.FromArray(Fk.values[3])), Fk.values[4] && (qk = Xk.t.FromArray(Fk.values[4])), Fk.values[5] && (Lk = Fk.values[5])
        }
        const tk = {};
        tk.frame = Fk.frame, tk.value = yk, void 0 != ak && (tk.inTangent = ak), void 0 != qk && (tk.outTangent = qk), void 0 != Lk && (tk.interpolation = Lk), ik.push(tk)
      }
      if (Fk.setKeys(ik), kk.nZ)
        for (lk = 0; lk < kk.nZ.length; lk++) yk = kk.nZ[lk], Fk.createRange(yk.name, yk.from, yk.to);
      return Fk
    }
    async function Ok(kk, Fk) {
      return await new Promise(((Ik, Xk) => {
        const Tk = new qk.b;
        Tk.addEventListener("readystatechange", (() => {
          if (4 == Tk.readyState)
            if (200 == Tk.status) {
              let Fk = JSON.parse(Tk.responseText);
              if (Fk.animations && (Fk = Fk.animations), Fk.length) {
                const kk = [];
                for (const Ik of Fk) kk.push(Ek(Ik));
                Ik(kk)
              } else {
                const Xk = Ek(Fk);
                kk && (Xk.name = kk), Ik(Xk)
              }
            } else Xk("Unable to load the animation")
        })), Tk.open("GET", Fk), Tk.send()
      }))
    }
    async function nk(kk) {
      const Fk = this?.SnippetUrl ?? Pk.SnippetUrl;
      return await new Promise(((Ik, Xk) => {
        const Tk = new qk.b;
        Tk.addEventListener("readystatechange", (() => {
          if (4 == Tk.readyState)
            if (200 == Tk.status) {
              const Fk = JSON.parse(JSON.parse(Tk.responseText).jsonPayload);
              if (Fk.animations) {
                const Xk = JSON.parse(Fk.animations),
                  Tk = [];
                for (const Fk of Xk.animations) {
                  const Ik = Ek(Fk);
                  Ik.snippetId = kk, Tk.push(Ik)
                }
                Ik(Tk)
              } else {
                const Xk = Ek(JSON.parse(Fk.animation));
                Xk.snippetId = kk, Ik(Xk)
              }
            } else Xk("Unable to load the snippet " + kk)
        })), Tk.open("GET", Fk + "/" + kk.replace(/#/g, "/")), Tk.send()
      }))
    }
    Pk._UniqueIdGenerator = 0, Pk.AllowMatricesInterpolation = !1, Pk.AllowMatrixDecomposeForInterpolation = !0, Pk.InheritOriginalValueFromActiveAnimations = !1, Pk.SnippetUrl = "https://snippet.babylonjs.com", Pk.ANIMATIONTYPE_FLOAT = 0, Pk.ANIMATIONTYPE_VECTOR3 = 1, Pk.ANIMATIONTYPE_QUATERNION = 2, Pk.ANIMATIONTYPE_MATRIX = 3, Pk.ANIMATIONTYPE_COLOR3 = 4, Pk.ANIMATIONTYPE_COLOR4 = 7, Pk.ANIMATIONTYPE_VECTOR2 = 5, Pk.ANIMATIONTYPE_SIZE = 6, Pk.ANIMATIONLOOPMODE_RELATIVE = 0, Pk.ANIMATIONLOOPMODE_CYCLE = 1, Pk.ANIMATIONLOOPMODE_CONSTANT = 2, Pk.ANIMATIONLOOPMODE_YOYO = 4, Pk.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const Gk = nk;
    let pk = !1;

    function uk() {
      pk || (pk = !0, Pk.Parse = Ek, Pk.ParseFromFileAsync = Ok, Pk.ParseFromSnippetAsync = nk, Pk.CreateFromSnippetAsync = Gk, Pk.CreateAnimation = Qk, Pk.CreateAndStartAnimation = sk, Pk.CreateAndStartHierarchyAnimation = Vk, Pk.CreateMergeAndStartAnimation = zk, Pk.MakeAnimationAdditive = Kk, Pk.TransitionTo = Sk, Pk.AppendSerializedAnimations = vk, (0, tk.f)("BABYLON.Animation", Pk), lk.b._AnimationRangeFactory = (kk, Fk, Ik) => new yk.b(kk, Fk, Ik))
    }
  },
  41111: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk
    });
    class Xk {
      constructor(kk, Fk, Ik) {
        this.name = kk, this.from = Fk, this.to = Ik
      }
      clone() {
        return new Xk(this.name, this.from, this.to)
      }
    }
  },
  41158: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk.e,
      g: () => Xk.l
    });
    var Xk = Ik(40141);
    (0, Xk.f)()
  },
  41147: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk.g
    });
    var Xk = Ik(40489);
    (0, Xk.e)()
  },
  41117: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk.d
    });
    var Xk = Ik(40475);
    (0, Xk.f)()
  },
  41165: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk.b
    });
    var Xk = Ik(40417);
    (0, Xk.d)()
  },
  41114: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk.h
    });
    var Xk = Ik(40449);
    (0, Xk.d)()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);