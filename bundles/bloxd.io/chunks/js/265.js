export const id = 265;
export const ids = [265];
export const modules = {
  41082: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Gd,
      e: () => jd,
      i: () => ed,
      l: () => Rd,
      p: () => ld,
      q: () => Od,
      u: () => Ld,
      x: () => Qd
    });
    var pd = kd(37251),
      Nd = kd(37443),
      Wd = kd(37289),
      Pd = kd(41088),
      Zd = kd(40205),
      gd = kd(39981),
      Cd = kd(40010),
      Kd = kd(39983),
      od = kd(37303);
    const ld = Object.freeze(new pd.d(0, 0, 0, 0)),
      Qd = Object.freeze(pd.n.Zero()),
      Ld = Object.freeze(pd.k.Zero()),
      Od = Object.freeze(gd.c.Zero()),
      ed = Object.freeze(Nd.c.Black()),
      Rd = Object.freeze(new Nd.g(0, 0, 0, 0)),
      Id = {
        key: 0,
        repeatCount: 0,
        Od: 2
      };
    class Gd {
      static _PrepareAnimation(dd, Jd, kd, Wd, Pd, Zd, Cd, Kd) {
        let od;
        if (!isNaN(parseFloat(Pd)) && isFinite(Pd) ? od = Gd.ANIMATIONTYPE_FLOAT : Pd instanceof pd.d ? od = Gd.ANIMATIONTYPE_QUATERNION : Pd instanceof pd.n ? od = Gd.ANIMATIONTYPE_VECTOR3 : Pd instanceof pd.k ? od = Gd.ANIMATIONTYPE_VECTOR2 : Pd instanceof Nd.c ? od = Gd.ANIMATIONTYPE_COLOR3 : Pd instanceof Nd.g ? od = Gd.ANIMATIONTYPE_COLOR4 : Pd instanceof gd.c && (od = Gd.ANIMATIONTYPE_SIZE), void 0 == od) return null;
        const ld = new Gd(dd, Jd, kd, od, Cd),
          Qd = [{
            frame: 0,
            value: Pd
          }, {
            frame: Wd,
            value: Zd
          }];
        return ld.setKeys(Qd), void 0 !== Kd && ld.setEasingFunction(Kd), ld
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const dd of this._runtimeAnimations)
          if (!dd.isStopped()) return !0;
        return !1
      }
      constructor(dd, Jd, kd, pd, Nd, Wd) {
        this.name = dd, this.targetProperty = Jd, this.framePerSecond = kd, this.dataType = pd, this.Od = Nd, this.enableBlending = Wd, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = Jd.split("."), this.dataType = pd, this.Od = void 0 === Nd ? Gd.ANIMATIONLOOPMODE_CYCLE : Nd, this.uniqueId = Gd._UniqueIdGenerator++
      }
      toString(dd) {
        let Jd = "Name: " + this.name + ", property: " + this.targetProperty;
        if (Jd += ", datatype: " + ["Float", "IL", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], Jd += ", nKeys: " + (this._keys ? this._keys.length : "none"), Jd += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), dd) {
          Jd += ", Ranges: {";
          let dd = !0;
          for (const kd in this._ranges) dd || (Jd += ", "), dd = !1, Jd += kd;
          Jd += "}"
        }
        return Jd
      }
      addEvent(dd) {
        this._events.push(dd), this._events.sort(((dd, Jd) => dd.frame - Jd.frame))
      }
      removeEvents(dd) {
        for (let Jd = 0; Jd < this._events.length; Jd++) this._events[Jd].frame === dd && (this._events.splice(Jd, 1), Jd--)
      }
      getEvents() {
        return this._events
      }
      createRange(dd, Jd, kd) {
        this._ranges[dd] || (this._ranges[dd] = new Pd.b(dd, Jd, kd))
      }
      deleteRange(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const kd = this._ranges[dd];
        if (kd) {
          if (Jd) {
            const dd = kd.from,
              Jd = kd.to;
            for (let kd = this._keys.length - 1; kd >= 0; kd--) this._keys[kd].frame >= dd && this._keys[kd].frame <= Jd && this._keys.splice(kd, 1)
          }
          this._ranges[dd] = null
        }
      }
      getRange(dd) {
        return this._ranges[dd]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let dd = 0;
        for (let Jd = 0, kd = this._keys.length; Jd < kd; Jd++) dd < this._keys[Jd].frame && (dd = this._keys[Jd].frame);
        return dd
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(dd) {
        this._easingFunction = dd
      }
      floatInterpolateFunction(dd, Jd, kd) {
        return (0, Wd.Lerp)(dd, Jd, kd)
      }
      floatInterpolateFunctionWithTangents(dd, Jd, kd, pd, Nd) {
        return (0, Wd.Hermite)(dd, Jd, kd, pd, Nd)
      }
      quaternionInterpolateFunction(dd, Jd, kd) {
        return pd.d.Slerp(dd, Jd, kd)
      }
      quaternionInterpolateFunctionWithTangents(dd, Jd, kd, Nd, Wd) {
        return pd.d.Hermite(dd, Jd, kd, Nd, Wd).normalize()
      }
      vector3InterpolateFunction(dd, Jd, kd) {
        return pd.n.Lerp(dd, Jd, kd)
      }
      vector3InterpolateFunctionWithTangents(dd, Jd, kd, Nd, Wd) {
        return pd.n.Hermite(dd, Jd, kd, Nd, Wd)
      }
      vector2InterpolateFunction(dd, Jd, kd) {
        return pd.k.Lerp(dd, Jd, kd)
      }
      vector2InterpolateFunctionWithTangents(dd, Jd, kd, Nd, Wd) {
        return pd.k.Hermite(dd, Jd, kd, Nd, Wd)
      }
      sizeInterpolateFunction(dd, Jd, kd) {
        return gd.c.Lerp(dd, Jd, kd)
      }
      color3InterpolateFunction(dd, Jd, kd) {
        return Nd.c.Lerp(dd, Jd, kd)
      }
      color3InterpolateFunctionWithTangents(dd, Jd, kd, pd, Wd) {
        return Nd.c.Hermite(dd, Jd, kd, pd, Wd)
      }
      color4InterpolateFunction(dd, Jd, kd) {
        return Nd.g.Lerp(dd, Jd, kd)
      }
      color4InterpolateFunctionWithTangents(dd, Jd, kd, pd, Wd) {
        return Nd.g.Hermite(dd, Jd, kd, pd, Wd)
      }
      _getKeyValue(dd) {
        return "function" === typeof dd ? dd() : dd
      }
      evaluate(dd) {
        return Id.key = 0, this._interpolate(dd, Id)
      }
      _interpolate(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (Jd.Od === Gd.ANIMATIONLOOPMODE_CONSTANT && Jd.repeatCount > 0) return Jd.highLimitValue.clone ? Jd.highLimitValue.clone() : Jd.highLimitValue;
        const pd = this._keys;
        let Nd;
        if (this._coreAnimation) Nd = this._coreAnimation._key;
        else {
          const Wd = pd.length;
          for (Nd = Jd.key; Nd >= 0 && dd < pd[Nd].frame;) --Nd;
          for (; Nd + 1 <= Wd - 1 && dd >= pd[Nd + 1].frame;) ++Nd;
          if (Jd.key = Nd, Nd < 0) return kd ? void 0 : this._getKeyValue(pd[0].value);
          if (Nd + 1 > Wd - 1) return kd ? void 0 : this._getKeyValue(pd[Wd - 1].value);
          this._key = Nd
        }
        const Wd = pd[Nd],
          Pd = pd[Nd + 1];
        if (kd && (dd === Wd.frame || dd === Pd.frame)) return;
        const Zd = this._getKeyValue(Wd.value),
          gd = this._getKeyValue(Pd.value);
        if (1 === Wd.interpolation) return Pd.frame > dd ? Zd : gd;
        const Cd = void 0 !== Wd.outTangent && void 0 !== Pd.inTangent,
          Kd = Pd.frame - Wd.frame;
        let od = (dd - Wd.frame) / Kd;
        const Id = Wd.easingFunction || this.getEasingFunction();
        switch (Id && (od = Id.ease(od)), this.dataType) {
          case Gd.ANIMATIONTYPE_FLOAT: {
            const dd = Cd ? this.floatInterpolateFunctionWithTangents(Zd, Wd.outTangent * Kd, gd, Pd.inTangent * Kd, od) : this.floatInterpolateFunction(Zd, gd, od);
            switch (Jd.Od) {
              case Gd.ANIMATIONLOOPMODE_CYCLE:
              case Gd.ANIMATIONLOOPMODE_CONSTANT:
              case Gd.ANIMATIONLOOPMODE_YOYO:
                return dd;
              case Gd.ANIMATIONLOOPMODE_RELATIVE:
              case Gd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (Jd.offsetValue ?? 0) * Jd.repeatCount + dd
            }
            break
          }
          case Gd.ANIMATIONTYPE_QUATERNION: {
            const dd = Cd ? this.quaternionInterpolateFunctionWithTangents(Zd, Wd.outTangent.scale(Kd), gd, Pd.inTangent.scale(Kd), od) : this.quaternionInterpolateFunction(Zd, gd, od);
            switch (Jd.Od) {
              case Gd.ANIMATIONLOOPMODE_CYCLE:
              case Gd.ANIMATIONLOOPMODE_CONSTANT:
              case Gd.ANIMATIONLOOPMODE_YOYO:
                return dd;
              case Gd.ANIMATIONLOOPMODE_RELATIVE:
              case Gd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return dd.addInPlace((Jd.offsetValue || ld).scale(Jd.repeatCount))
            }
            return dd
          }
          case Gd.ANIMATIONTYPE_VECTOR3: {
            const dd = Cd ? this.vector3InterpolateFunctionWithTangents(Zd, Wd.outTangent.scale(Kd), gd, Pd.inTangent.scale(Kd), od) : this.vector3InterpolateFunction(Zd, gd, od);
            switch (Jd.Od) {
              case Gd.ANIMATIONLOOPMODE_CYCLE:
              case Gd.ANIMATIONLOOPMODE_CONSTANT:
              case Gd.ANIMATIONLOOPMODE_YOYO:
                return dd;
              case Gd.ANIMATIONLOOPMODE_RELATIVE:
              case Gd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return dd.add((Jd.offsetValue || Qd).scale(Jd.repeatCount))
            }
            break
          }
          case Gd.ANIMATIONTYPE_VECTOR2: {
            const dd = Cd ? this.vector2InterpolateFunctionWithTangents(Zd, Wd.outTangent.scale(Kd), gd, Pd.inTangent.scale(Kd), od) : this.vector2InterpolateFunction(Zd, gd, od);
            switch (Jd.Od) {
              case Gd.ANIMATIONLOOPMODE_CYCLE:
              case Gd.ANIMATIONLOOPMODE_CONSTANT:
              case Gd.ANIMATIONLOOPMODE_YOYO:
                return dd;
              case Gd.ANIMATIONLOOPMODE_RELATIVE:
              case Gd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return dd.add((Jd.offsetValue || Ld).scale(Jd.repeatCount))
            }
            break
          }
          case Gd.ANIMATIONTYPE_SIZE:
            switch (Jd.Od) {
              case Gd.ANIMATIONLOOPMODE_CYCLE:
              case Gd.ANIMATIONLOOPMODE_CONSTANT:
              case Gd.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(Zd, gd, od);
              case Gd.ANIMATIONLOOPMODE_RELATIVE:
              case Gd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(Zd, gd, od).add((Jd.offsetValue || Od).scale(Jd.repeatCount))
            }
            break;
          case Gd.ANIMATIONTYPE_COLOR3: {
            const dd = Cd ? this.color3InterpolateFunctionWithTangents(Zd, Wd.outTangent.scale(Kd), gd, Pd.inTangent.scale(Kd), od) : this.color3InterpolateFunction(Zd, gd, od);
            switch (Jd.Od) {
              case Gd.ANIMATIONLOOPMODE_CYCLE:
              case Gd.ANIMATIONLOOPMODE_CONSTANT:
              case Gd.ANIMATIONLOOPMODE_YOYO:
                return dd;
              case Gd.ANIMATIONLOOPMODE_RELATIVE:
              case Gd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return dd.add((Jd.offsetValue || ed).scale(Jd.repeatCount))
            }
            break
          }
          case Gd.ANIMATIONTYPE_COLOR4: {
            const dd = Cd ? this.color4InterpolateFunctionWithTangents(Zd, Wd.outTangent.scale(Kd), gd, Pd.inTangent.scale(Kd), od) : this.color4InterpolateFunction(Zd, gd, od);
            switch (Jd.Od) {
              case Gd.ANIMATIONLOOPMODE_CYCLE:
              case Gd.ANIMATIONLOOPMODE_CONSTANT:
              case Gd.ANIMATIONLOOPMODE_YOYO:
                return dd;
              case Gd.ANIMATIONLOOPMODE_RELATIVE:
              case Gd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return dd.add((Jd.offsetValue || Rd).scale(Jd.repeatCount))
            }
            break
          }
          case Gd.ANIMATIONTYPE_MATRIX:
            switch (Jd.Od) {
              case Gd.ANIMATIONLOOPMODE_CYCLE:
              case Gd.ANIMATIONLOOPMODE_CONSTANT:
              case Gd.ANIMATIONLOOPMODE_YOYO:
                return Gd.AllowMatricesInterpolation ? this.matrixInterpolateFunction(Zd, gd, od, Jd.workValue) : Zd;
              case Gd.ANIMATIONLOOPMODE_RELATIVE:
              case Gd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return Zd
            }
        }
        return 0
      }
      matrixInterpolateFunction(dd, Jd, kd, Nd) {
        return Gd.AllowMatrixDecomposeForInterpolation ? Nd ? (pd.b.DecomposeLerpToRef(dd, Jd, kd, Nd), Nd) : pd.b.DecomposeLerp(dd, Jd, kd) : Nd ? (pd.b.LerpToRef(dd, Jd, kd, Nd), Nd) : pd.b.Lerp(dd, Jd, kd)
      }
      clone() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Jd = new Gd(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.Od);
        if (Jd.enableBlending = this.enableBlending, Jd.blendingSpeed = this.blendingSpeed, this._keys && Jd.setKeys(this._keys, !1, dd), this._ranges) {
          Jd._ranges = {};
          for (const dd in this._ranges) {
            const kd = this._ranges[dd];
            kd && (Jd._ranges[dd] = kd.clone())
          }
        }
        return Jd
      }
      setKeys(dd) {
        let Jd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = dd;
        else if (this._keys = dd.slice(0), Jd)
          for (let kd = 0; kd < this._keys.length; kd++) {
            const dd = this._keys[kd];
            this._keys[kd] = {
              frame: dd.frame,
              value: dd.value.clone ? dd.value.clone() : dd.value,
              inTangent: dd.inTangent && dd.inTangent.clone ? dd.inTangent.clone() : dd.inTangent,
              outTangent: dd.outTangent && dd.outTangent.clone ? dd.outTangent.clone() : dd.outTangent,
              interpolation: dd.interpolation,
              lockedTangent: dd.lockedTangent,
              easingFunction: dd.easingFunction
            }
          }
      }
      createKeyForFrame(dd) {
        Id.key = 0;
        const Jd = this._interpolate(dd, Id, !0);
        if (!Jd) return this._keys[Id.key].frame === dd ? Id.key : Id.key + 1;
        const kd = {
          frame: dd,
          value: Jd.clone ? Jd.clone() : Jd
        };
        return this._keys.splice(Id.key + 1, 0, kd), Id.key + 1
      }
      serialize() {
        const dd = {};
        dd.name = this.name, dd.property = this.targetProperty, dd.framePerSecond = this.framePerSecond, dd.dataType = this.dataType, dd.loopBehavior = this.Od, dd.enableBlending = this.enableBlending, dd.blendingSpeed = this.blendingSpeed;
        const Jd = this.dataType;
        dd.keys = [];
        const kd = this.getKeys();
        for (let pd = 0; pd < kd.length; pd++) {
          const Nd = kd[pd],
            Wd = {};
          switch (Wd.frame = Nd.frame, Jd) {
            case Gd.ANIMATIONTYPE_FLOAT:
              Wd.values = [Nd.value], void 0 !== Nd.inTangent && Wd.values.push(Nd.inTangent), void 0 !== Nd.outTangent && (void 0 === Nd.inTangent && Wd.values.push(void 0), Wd.values.push(Nd.outTangent)), void 0 !== Nd.interpolation && (void 0 === Nd.inTangent && Wd.values.push(void 0), void 0 === Nd.outTangent && Wd.values.push(void 0), Wd.values.push(Nd.interpolation));
              break;
            case Gd.ANIMATIONTYPE_QUATERNION:
            case Gd.ANIMATIONTYPE_MATRIX:
            case Gd.ANIMATIONTYPE_VECTOR3:
            case Gd.ANIMATIONTYPE_COLOR3:
            case Gd.ANIMATIONTYPE_COLOR4:
              Wd.values = Nd.value.spd(), void 0 != Nd.inTangent && Wd.values.push(Nd.inTangent.spd()), void 0 != Nd.outTangent && (void 0 === Nd.inTangent && Wd.values.push(void 0), Wd.values.push(Nd.outTangent.spd())), void 0 !== Nd.interpolation && (void 0 === Nd.inTangent && Wd.values.push(void 0), void 0 === Nd.outTangent && Wd.values.push(void 0), Wd.values.push(Nd.interpolation))
          }
          dd.keys.push(Wd)
        }
        dd.UO = [];
        for (const pd in this._ranges) {
          const Jd = this._ranges[pd];
          if (!Jd) continue;
          const kd = {};
          kd.name = pd, kd.from = Jd.from, kd.to = Jd.to, dd.UO.push(kd)
        }
        return dd
      }
      static _UniversalLerp(dd, Jd, kd) {
        const pd = dd.constructor;
        return pd.Lerp ? pd.Lerp(dd, Jd, kd) : pd.Slerp ? pd.Slerp(dd, Jd, kd) : dd.toFixed ? dd * (1 - kd) + kd * Jd : Jd
      }
    }

    function vd(dd, Jd, kd) {
      let Nd;
      Nd = "object" === typeof Jd ? Jd : {
        referenceFrame: Jd ?? 0,
        range: kd,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let Wd = dd;
      Nd.cloneOriginalAnimation && (Wd = dd.clone(), Wd.name = Nd.clonedAnimationName || Wd.name);
      const Pd = Wd.getKeys();
      if (!Pd.length) return Wd;
      const Zd = Nd.referenceFrame && Nd.referenceFrame >= 0 ? Nd.referenceFrame : 0;
      let gd = 0;
      const Cd = Pd[0];
      let Kd = Pd.length - 1;
      const od = Pd[Kd],
        ld = {
          referenceValue: Cd.value,
          referencePosition: pd.h.IL[0],
          referenceQuaternion: pd.h.Quaternion[0],
          referenceScaling: pd.h.IL[1],
          keyPosition: pd.h.IL[2],
          keyQuaternion: pd.h.Quaternion[1],
          keyScaling: pd.h.IL[3]
        };
      let Qd = Cd.frame,
        Ld = od.frame;
      if (Nd.range) {
        const dd = Wd.getRange(Nd.range);
        dd && (Qd = dd.from, Ld = dd.to)
      } else Qd = Nd.fromFrame ?? Qd, Ld = Nd.toFrame ?? Ld;
      Qd !== Cd.frame && (gd = Wd.createKeyForFrame(Qd)), Ld !== od.frame && (Kd = Wd.createKeyForFrame(Ld));
      const Od = Wd.getKeys();
      if (1 === Od.length) {
        const dd = Wd._getKeyValue(Od[0].value);
        ld.referenceValue = dd.clone ? dd.clone() : dd
      } else if (Zd <= Cd.frame) {
        const dd = Wd._getKeyValue(Cd.value);
        ld.referenceValue = dd.clone ? dd.clone() : dd
      } else if (Zd >= od.frame) {
        const dd = Wd._getKeyValue(od.value);
        ld.referenceValue = dd.clone ? dd.clone() : dd
      } else {
        Id.key = 0;
        const dd = Wd._interpolate(Zd, Id);
        ld.referenceValue = dd.clone ? dd.clone() : dd
      }
      Wd.dataType === Gd.ANIMATIONTYPE_QUATERNION ? ld.referenceValue.normalize().conjugateInPlace() : Wd.dataType === Gd.ANIMATIONTYPE_MATRIX && (ld.referenceValue.decompose(ld.referenceScaling, ld.referenceQuaternion, ld.referencePosition), ld.referenceQuaternion.normalize().conjugateInPlace());
      let ed = Number.MAX_VALUE;
      const Rd = Nd.clipKeys ? [] : null;
      for (let Id = gd; Id <= Kd; Id++) {
        let dd = Od[Id];
        if ((Rd || Nd.cloneOriginalAnimation) && (dd = {
            frame: dd.frame,
            value: dd.value.clone ? dd.value.clone() : dd.value,
            inTangent: dd.inTangent,
            outTangent: dd.outTangent,
            interpolation: dd.interpolation,
            lockedTangent: dd.lockedTangent,
            easingFunction: dd.easingFunction
          }, Rd && (ed === Number.MAX_VALUE && (ed = dd.frame), dd.frame -= ed, Rd.push(dd))), !Id || Wd.dataType === Gd.ANIMATIONTYPE_FLOAT || dd.value !== Cd.value) switch (Wd.dataType) {
          case Gd.ANIMATIONTYPE_MATRIX:
            dd.value.decompose(ld.keyScaling, ld.keyQuaternion, ld.keyPosition), ld.keyPosition.hpd(ld.referencePosition), ld.keyScaling.divideInPlace(ld.referenceScaling), ld.referenceQuaternion.multiplyToRef(ld.keyQuaternion, ld.keyQuaternion), pd.b.ComposeToRef(ld.keyScaling, ld.keyQuaternion, ld.keyPosition, dd.value);
            break;
          case Gd.ANIMATIONTYPE_QUATERNION:
            ld.referenceValue.multiplyToRef(dd.value, dd.value);
            break;
          case Gd.ANIMATIONTYPE_VECTOR2:
          case Gd.ANIMATIONTYPE_VECTOR3:
          case Gd.ANIMATIONTYPE_COLOR3:
          case Gd.ANIMATIONTYPE_COLOR4:
            dd.value.subtractToRef(ld.referenceValue, dd.value);
            break;
          case Gd.ANIMATIONTYPE_SIZE:
            dd.value.width -= ld.referenceValue.width, dd.value.height -= ld.referenceValue.height;
            break;
          default:
            dd.value -= ld.referenceValue
        }
      }
      return Rd && Wd.setKeys(Rd, !0), Wd
    }

    function xd(dd, Jd, kd, pd) {
      const Nd = new Gd(dd + "Animation", dd, kd, Jd, Gd.ANIMATIONLOOPMODE_CONSTANT);
      return Nd.setEasingFunction(pd), Nd
    }

    function qd(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd) {
      const od = Gd._PrepareAnimation(dd, kd, pd, Nd, Wd, Pd, Zd, gd);
      return od ? (Jd.Wm && (Kd = Jd.Wm()), Kd ? Kd.beginDirectAnimation(Jd, [od], 0, Nd, od.Od !== Gd.ANIMATIONLOOPMODE_CONSTANT, 1, Cd) : null) : null
    }

    function Bd(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd) {
      const od = Gd._PrepareAnimation(dd, pd, Nd, Wd, Pd, Zd, gd, Cd);
      if (!od) return null;
      return Jd.Wm().beginDirectHierarchyAnimation(Jd, kd, [od], 0, Wd, 1 === od.Od, 1, Kd)
    }

    function sd(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd) {
      const Kd = Gd._PrepareAnimation(dd, kd, pd, Nd, Wd, Pd, Zd, gd);
      return Kd ? (Jd.animations.push(Kd), Jd.Wm().beginAnimation(Jd, 0, Nd, 1 === Kd.Od, 1, Cd)) : null
    }

    function ad(dd, Jd, kd, pd, Nd, Wd, Pd) {
      let Zd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        gd = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Cd = arguments.length > 9 ? arguments[9] : void 0;
      if (Pd <= 0) return kd[dd] = Jd, Zd && Zd(), null;
      const Kd = Nd * (Pd / 1e3);
      Wd.setKeys(Cd ?? [{
        frame: 0,
        value: kd[dd].clone ? kd[dd].clone() : kd[dd]
      }, {
        frame: Kd,
        value: Jd
      }]), kd.animations || (kd.animations = []), kd.animations.push(Wd);
      return pd.beginAnimation(kd, 0, Kd, !1, 1, Zd ?? void 0, void 0, gd)
    }

    function Md(dd, Jd) {
      Kd.c.AppendSerializedAnimations(dd, Jd)
    }

    function Fd(dd) {
      const Jd = new Gd(dd.name, dd.property, dd.framePerSecond, dd.dataType, dd.loopBehavior),
        kd = dd.dataType,
        Wd = [];
      let Pd, Zd;
      for (dd.enableBlending && (Jd.enableBlending = dd.enableBlending), dd.blendingSpeed && (Jd.blendingSpeed = dd.blendingSpeed), Zd = 0; Zd < dd.keys.length; Zd++) {
        const Jd = dd.keys[Zd];
        let gd, Cd, Kd;
        switch (kd) {
          case Gd.ANIMATIONTYPE_FLOAT:
            Pd = Jd.values[0], Jd.values.length >= 2 && (gd = Jd.values[1]), Jd.values.length >= 3 && (Cd = Jd.values[2]), Jd.values.length >= 4 && (Kd = Jd.values[3]);
            break;
          case Gd.ANIMATIONTYPE_QUATERNION:
            if (Pd = pd.d.FromArray(Jd.values), Jd.values.length >= 8) {
              const dd = pd.d.FromArray(Jd.values.slice(4, 8));
              dd.equals(pd.d.Zero()) || (gd = dd)
            }
            if (Jd.values.length >= 12) {
              const dd = pd.d.FromArray(Jd.values.slice(8, 12));
              dd.equals(pd.d.Zero()) || (Cd = dd)
            }
            Jd.values.length >= 13 && (Kd = Jd.values[12]);
            break;
          case Gd.ANIMATIONTYPE_MATRIX:
            Pd = pd.b.FromArray(Jd.values), Jd.values.length >= 17 && (Kd = Jd.values[16]);
            break;
          case Gd.ANIMATIONTYPE_COLOR3:
            Pd = Nd.c.FromArray(Jd.values), Jd.values[3] && (gd = Nd.c.FromArray(Jd.values[3])), Jd.values[4] && (Cd = Nd.c.FromArray(Jd.values[4])), Jd.values[5] && (Kd = Jd.values[5]);
            break;
          case Gd.ANIMATIONTYPE_COLOR4:
            Pd = Nd.g.FromArray(Jd.values), Jd.values[4] && (gd = Nd.g.FromArray(Jd.values[4])), Jd.values[5] && (Cd = Nd.g.FromArray(Jd.values[5])), Jd.values[6] && (Kd = Jd.values[6]);
            break;
          case Gd.ANIMATIONTYPE_VECTOR3:
          default:
            Pd = pd.n.FromArray(Jd.values), Jd.values[3] && (gd = pd.n.FromArray(Jd.values[3])), Jd.values[4] && (Cd = pd.n.FromArray(Jd.values[4])), Jd.values[5] && (Kd = Jd.values[5])
        }
        const od = {};
        od.frame = Jd.frame, od.value = Pd, void 0 != gd && (od.inTangent = gd), void 0 != Cd && (od.outTangent = Cd), void 0 != Kd && (od.interpolation = Kd), Wd.push(od)
      }
      if (Jd.setKeys(Wd), dd.UO)
        for (Zd = 0; Zd < dd.UO.length; Zd++) Pd = dd.UO[Zd], Jd.createRange(Pd.name, Pd.from, Pd.to);
      return Jd
    }
    async function Yd(dd, Jd) {
      return await new Promise(((kd, pd) => {
        const Nd = new Cd.b;
        Nd.addEventListener("readystatechange", (() => {
          if (4 == Nd.readyState)
            if (200 == Nd.status) {
              let Jd = JSON.parse(Nd.responseText);
              if (Jd.animations && (Jd = Jd.animations), Jd.length) {
                const dd = [];
                for (const kd of Jd) dd.push(Fd(kd));
                kd(dd)
              } else {
                const pd = Fd(Jd);
                dd && (pd.name = dd), kd(pd)
              }
            } else pd("Unable to load the animation")
        })), Nd.open("GET", Jd), Nd.send()
      }))
    }
    async function md(dd) {
      const Jd = this?.SnippetUrl ?? Gd.SnippetUrl;
      return await new Promise(((kd, pd) => {
        const Nd = new Cd.b;
        Nd.addEventListener("readystatechange", (() => {
          if (4 == Nd.readyState)
            if (200 == Nd.status) {
              const Jd = JSON.parse(JSON.parse(Nd.responseText).jsonPayload);
              if (Jd.animations) {
                const pd = JSON.parse(Jd.animations),
                  Nd = [];
                for (const Jd of pd.animations) {
                  const kd = Fd(Jd);
                  kd.snippetId = dd, Nd.push(kd)
                }
                kd(Nd)
              } else {
                const pd = Fd(JSON.parse(Jd.animation));
                pd.snippetId = dd, kd(pd)
              }
            } else pd("Unable to load the snippet " + dd)
        })), Nd.open("GET", Jd + "/" + dd.replace(/#/g, "/")), Nd.send()
      }))
    }
    Gd._UniqueIdGenerator = 0, Gd.AllowMatricesInterpolation = !1, Gd.AllowMatrixDecomposeForInterpolation = !0, Gd.InheritOriginalValueFromActiveAnimations = !1, Gd.SnippetUrl = "https://snippet.babylonjs.com", Gd.ANIMATIONTYPE_FLOAT = 0, Gd.ANIMATIONTYPE_VECTOR3 = 1, Gd.ANIMATIONTYPE_QUATERNION = 2, Gd.ANIMATIONTYPE_MATRIX = 3, Gd.ANIMATIONTYPE_COLOR3 = 4, Gd.ANIMATIONTYPE_COLOR4 = 7, Gd.ANIMATIONTYPE_VECTOR2 = 5, Gd.ANIMATIONTYPE_SIZE = 6, Gd.ANIMATIONLOOPMODE_RELATIVE = 0, Gd.ANIMATIONLOOPMODE_CYCLE = 1, Gd.ANIMATIONLOOPMODE_CONSTANT = 2, Gd.ANIMATIONLOOPMODE_YOYO = 4, Gd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const bd = md;
    let Sd = !1;

    function jd() {
      Sd || (Sd = !0, Gd.Parse = Fd, Gd.ParseFromFileAsync = Yd, Gd.ParseFromSnippetAsync = md, Gd.CreateFromSnippetAsync = bd, Gd.CreateAnimation = xd, Gd.CreateAndStartAnimation = qd, Gd.CreateAndStartHierarchyAnimation = Bd, Gd.CreateMergeAndStartAnimation = sd, Gd.MakeAnimationAdditive = vd, Gd.TransitionTo = ad, Gd.AppendSerializedAnimations = Md, (0, od.h)("BABYLON.Animation", Gd), Zd.c._AnimationRangeFactory = (dd, Jd, kd) => new Pd.b(dd, Jd, kd))
    }
  },
  41088: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    class pd {
      constructor(dd, Jd, kd) {
        this.name = dd, this.from = Jd, this.to = kd
      }
      clone() {
        return new pd(this.name, this.from, this.to)
      }
    }
  },
  41134: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd.e,
      f: () => pd.j
    });
    var pd = kd(40115);
    (0, pd.f)()
  },
  41115: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd.c
    });
    var pd = kd(40471);
    (0, pd.b)()
  },
  41095: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd.c
    });
    var pd = kd(40456);
    (0, pd.e)()
  },
  41140: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => pd.b
    });
    var pd = kd(40393);
    (0, pd.d)()
  },
  41090: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => pd.d
    });
    var pd = kd(40428);
    (0, pd.b)()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);