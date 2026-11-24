export const id = 279;
export const ids = [279];
export const modules = {
  41315: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Hp,
      h: () => Qp,
      j: () => wp,
      m: () => vp,
      o: () => Pp,
      p: () => Up,
      t: () => yp,
      w: () => Wp
    });
    var Op = cp(37320),
      op = cp(37487),
      Ip = cp(37356),
      Sp = cp(41320),
      xp = cp(40415),
      Lp = cp(40225),
      Yp = cp(40261),
      Dp = cp(40233),
      Ap = cp(37368);
    const Pp = Object.freeze(new Op.f(0, 0, 0, 0)),
      Wp = Object.freeze(Op.o.Zero()),
      yp = Object.freeze(Op.l.Zero()),
      Up = Object.freeze(Lp.c.Zero()),
      wp = Object.freeze(op.d.Black()),
      vp = Object.freeze(new op.h(0, 0, 0, 0)),
      tp = {
        key: 0,
        repeatCount: 0,
        Yo: 2
      };
    class Hp {
      static _PrepareAnimation(pp, ip, cp, Ip, Sp, xp, Yp, Dp) {
        let Ap;
        if (!isNaN(parseFloat(Sp)) && isFinite(Sp) ? Ap = Hp.ANIMATIONTYPE_FLOAT : Sp instanceof Op.f ? Ap = Hp.ANIMATIONTYPE_QUATERNION : Sp instanceof Op.o ? Ap = Hp.ANIMATIONTYPE_VECTOR3 : Sp instanceof Op.l ? Ap = Hp.ANIMATIONTYPE_VECTOR2 : Sp instanceof op.d ? Ap = Hp.ANIMATIONTYPE_COLOR3 : Sp instanceof op.h ? Ap = Hp.ANIMATIONTYPE_COLOR4 : Sp instanceof Lp.c && (Ap = Hp.ANIMATIONTYPE_SIZE), void 0 == Ap) return null;
        const Pp = new Hp(pp, ip, cp, Ap, Yp),
          Wp = [{
            frame: 0,
            value: Sp
          }, {
            frame: Ip,
            value: xp
          }];
        return Pp.setKeys(Wp), void 0 !== Dp && Pp.setEasingFunction(Dp), Pp
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const pp of this._runtimeAnimations)
          if (!pp.isStopped()) return !0;
        return !1
      }
      constructor(pp, ip, cp, Op, op, Ip) {
        this.name = pp, this.targetProperty = ip, this.framePerSecond = cp, this.dataType = Op, this.Yo = op, this.enableBlending = Ip, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = ip.split("."), this.dataType = Op, this.Yo = void 0 === op ? Hp.ANIMATIONLOOPMODE_CYCLE : op, this.uniqueId = Hp._UniqueIdGenerator++
      }
      toString(pp) {
        let ip = "Name: " + this.name + ", property: " + this.targetProperty;
        if (ip += ", datatype: " + ["Float", "Zy", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], ip += ", nKeys: " + (this._keys ? this._keys.length : "none"), ip += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), pp) {
          ip += ", Ranges: {";
          let pp = !0;
          for (const cp in this._ranges) pp || (ip += ", "), pp = !1, ip += cp;
          ip += "}"
        }
        return ip
      }
      addEvent(pp) {
        this._events.push(pp), this._events.sort(((pp, ip) => pp.frame - ip.frame))
      }
      removeEvents(pp) {
        for (let ip = 0; ip < this._events.length; ip++) this._events[ip].frame === pp && (this._events.splice(ip, 1), ip--)
      }
      getEvents() {
        return this._events
      }
      createRange(pp, ip, cp) {
        this._ranges[pp] || (this._ranges[pp] = new Sp.d(pp, ip, cp))
      }
      deleteRange(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const cp = this._ranges[pp];
        if (cp) {
          if (ip) {
            const pp = cp.from,
              ip = cp.to;
            for (let cp = this._keys.length - 1; cp >= 0; cp--) this._keys[cp].frame >= pp && this._keys[cp].frame <= ip && this._keys.splice(cp, 1)
          }
          this._ranges[pp] = null
        }
      }
      getRange(pp) {
        return this._ranges[pp]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let pp = 0;
        for (let ip = 0, cp = this._keys.length; ip < cp; ip++) pp < this._keys[ip].frame && (pp = this._keys[ip].frame);
        return pp
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(pp) {
        this._easingFunction = pp
      }
      floatInterpolateFunction(pp, ip, cp) {
        return (0, Ip.Lerp)(pp, ip, cp)
      }
      floatInterpolateFunctionWithTangents(pp, ip, cp, Op, op) {
        return (0, Ip.Hermite)(pp, ip, cp, Op, op)
      }
      quaternionInterpolateFunction(pp, ip, cp) {
        return Op.f.Slerp(pp, ip, cp)
      }
      quaternionInterpolateFunctionWithTangents(pp, ip, cp, op, Ip) {
        return Op.f.Hermite(pp, ip, cp, op, Ip).normalize()
      }
      vector3InterpolateFunction(pp, ip, cp) {
        return Op.o.Lerp(pp, ip, cp)
      }
      vector3InterpolateFunctionWithTangents(pp, ip, cp, op, Ip) {
        return Op.o.Hermite(pp, ip, cp, op, Ip)
      }
      vector2InterpolateFunction(pp, ip, cp) {
        return Op.l.Lerp(pp, ip, cp)
      }
      vector2InterpolateFunctionWithTangents(pp, ip, cp, op, Ip) {
        return Op.l.Hermite(pp, ip, cp, op, Ip)
      }
      sizeInterpolateFunction(pp, ip, cp) {
        return Lp.c.Lerp(pp, ip, cp)
      }
      color3InterpolateFunction(pp, ip, cp) {
        return op.d.Lerp(pp, ip, cp)
      }
      color3InterpolateFunctionWithTangents(pp, ip, cp, Op, Ip) {
        return op.d.Hermite(pp, ip, cp, Op, Ip)
      }
      color4InterpolateFunction(pp, ip, cp) {
        return op.h.Lerp(pp, ip, cp)
      }
      color4InterpolateFunctionWithTangents(pp, ip, cp, Op, Ip) {
        return op.h.Hermite(pp, ip, cp, Op, Ip)
      }
      _getKeyValue(pp) {
        return "function" === typeof pp ? pp() : pp
      }
      evaluate(pp) {
        return tp.key = 0, this._interpolate(pp, tp)
      }
      _interpolate(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (ip.Yo === Hp.ANIMATIONLOOPMODE_CONSTANT && ip.repeatCount > 0) return ip.highLimitValue.clone ? ip.highLimitValue.clone() : ip.highLimitValue;
        const Op = this._keys;
        let op;
        if (this._coreAnimation) op = this._coreAnimation._key;
        else {
          const Ip = Op.length;
          for (op = ip.key; op >= 0 && pp < Op[op].frame;) --op;
          for (; op + 1 <= Ip - 1 && pp >= Op[op + 1].frame;) ++op;
          if (ip.key = op, op < 0) return cp ? void 0 : this._getKeyValue(Op[0].value);
          if (op + 1 > Ip - 1) return cp ? void 0 : this._getKeyValue(Op[Ip - 1].value);
          this._key = op
        }
        const Ip = Op[op],
          Sp = Op[op + 1];
        if (cp && (pp === Ip.frame || pp === Sp.frame)) return;
        const xp = this._getKeyValue(Ip.value),
          Lp = this._getKeyValue(Sp.value);
        if (1 === Ip.interpolation) return Sp.frame > pp ? xp : Lp;
        const Yp = void 0 !== Ip.outTangent && void 0 !== Sp.inTangent,
          Dp = Sp.frame - Ip.frame;
        let Ap = (pp - Ip.frame) / Dp;
        const tp = Ip.easingFunction || this.getEasingFunction();
        switch (tp && (Ap = tp.ease(Ap)), this.dataType) {
          case Hp.ANIMATIONTYPE_FLOAT: {
            const pp = Yp ? this.floatInterpolateFunctionWithTangents(xp, Ip.outTangent * Dp, Lp, Sp.inTangent * Dp, Ap) : this.floatInterpolateFunction(xp, Lp, Ap);
            switch (ip.Yo) {
              case Hp.ANIMATIONLOOPMODE_CYCLE:
              case Hp.ANIMATIONLOOPMODE_CONSTANT:
              case Hp.ANIMATIONLOOPMODE_YOYO:
                return pp;
              case Hp.ANIMATIONLOOPMODE_RELATIVE:
              case Hp.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (ip.offsetValue ?? 0) * ip.repeatCount + pp
            }
            break
          }
          case Hp.ANIMATIONTYPE_QUATERNION: {
            const pp = Yp ? this.quaternionInterpolateFunctionWithTangents(xp, Ip.outTangent.scale(Dp), Lp, Sp.inTangent.scale(Dp), Ap) : this.quaternionInterpolateFunction(xp, Lp, Ap);
            switch (ip.Yo) {
              case Hp.ANIMATIONLOOPMODE_CYCLE:
              case Hp.ANIMATIONLOOPMODE_CONSTANT:
              case Hp.ANIMATIONLOOPMODE_YOYO:
                return pp;
              case Hp.ANIMATIONLOOPMODE_RELATIVE:
              case Hp.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return pp.addInPlace((ip.offsetValue || Pp).scale(ip.repeatCount))
            }
            return pp
          }
          case Hp.ANIMATIONTYPE_VECTOR3: {
            const pp = Yp ? this.vector3InterpolateFunctionWithTangents(xp, Ip.outTangent.scale(Dp), Lp, Sp.inTangent.scale(Dp), Ap) : this.vector3InterpolateFunction(xp, Lp, Ap);
            switch (ip.Yo) {
              case Hp.ANIMATIONLOOPMODE_CYCLE:
              case Hp.ANIMATIONLOOPMODE_CONSTANT:
              case Hp.ANIMATIONLOOPMODE_YOYO:
                return pp;
              case Hp.ANIMATIONLOOPMODE_RELATIVE:
              case Hp.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return pp.add((ip.offsetValue || Wp).scale(ip.repeatCount))
            }
            break
          }
          case Hp.ANIMATIONTYPE_VECTOR2: {
            const pp = Yp ? this.vector2InterpolateFunctionWithTangents(xp, Ip.outTangent.scale(Dp), Lp, Sp.inTangent.scale(Dp), Ap) : this.vector2InterpolateFunction(xp, Lp, Ap);
            switch (ip.Yo) {
              case Hp.ANIMATIONLOOPMODE_CYCLE:
              case Hp.ANIMATIONLOOPMODE_CONSTANT:
              case Hp.ANIMATIONLOOPMODE_YOYO:
                return pp;
              case Hp.ANIMATIONLOOPMODE_RELATIVE:
              case Hp.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return pp.add((ip.offsetValue || yp).scale(ip.repeatCount))
            }
            break
          }
          case Hp.ANIMATIONTYPE_SIZE:
            switch (ip.Yo) {
              case Hp.ANIMATIONLOOPMODE_CYCLE:
              case Hp.ANIMATIONLOOPMODE_CONSTANT:
              case Hp.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(xp, Lp, Ap);
              case Hp.ANIMATIONLOOPMODE_RELATIVE:
              case Hp.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(xp, Lp, Ap).add((ip.offsetValue || Up).scale(ip.repeatCount))
            }
            break;
          case Hp.ANIMATIONTYPE_COLOR3: {
            const pp = Yp ? this.color3InterpolateFunctionWithTangents(xp, Ip.outTangent.scale(Dp), Lp, Sp.inTangent.scale(Dp), Ap) : this.color3InterpolateFunction(xp, Lp, Ap);
            switch (ip.Yo) {
              case Hp.ANIMATIONLOOPMODE_CYCLE:
              case Hp.ANIMATIONLOOPMODE_CONSTANT:
              case Hp.ANIMATIONLOOPMODE_YOYO:
                return pp;
              case Hp.ANIMATIONLOOPMODE_RELATIVE:
              case Hp.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return pp.add((ip.offsetValue || wp).scale(ip.repeatCount))
            }
            break
          }
          case Hp.ANIMATIONTYPE_COLOR4: {
            const pp = Yp ? this.color4InterpolateFunctionWithTangents(xp, Ip.outTangent.scale(Dp), Lp, Sp.inTangent.scale(Dp), Ap) : this.color4InterpolateFunction(xp, Lp, Ap);
            switch (ip.Yo) {
              case Hp.ANIMATIONLOOPMODE_CYCLE:
              case Hp.ANIMATIONLOOPMODE_CONSTANT:
              case Hp.ANIMATIONLOOPMODE_YOYO:
                return pp;
              case Hp.ANIMATIONLOOPMODE_RELATIVE:
              case Hp.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return pp.add((ip.offsetValue || vp).scale(ip.repeatCount))
            }
            break
          }
          case Hp.ANIMATIONTYPE_MATRIX:
            switch (ip.Yo) {
              case Hp.ANIMATIONLOOPMODE_CYCLE:
              case Hp.ANIMATIONLOOPMODE_CONSTANT:
              case Hp.ANIMATIONLOOPMODE_YOYO:
                return Hp.AllowMatricesInterpolation ? this.matrixInterpolateFunction(xp, Lp, Ap, ip.workValue) : xp;
              case Hp.ANIMATIONLOOPMODE_RELATIVE:
              case Hp.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return xp
            }
        }
        return 0
      }
      matrixInterpolateFunction(pp, ip, cp, op) {
        return Hp.AllowMatrixDecomposeForInterpolation ? op ? (Op.b.DecomposeLerpToRef(pp, ip, cp, op), op) : Op.b.DecomposeLerp(pp, ip, cp) : op ? (Op.b.LerpToRef(pp, ip, cp, op), op) : Op.b.Lerp(pp, ip, cp)
      }
      clone() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ip = new Hp(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.Yo);
        if (ip.enableBlending = this.enableBlending, ip.blendingSpeed = this.blendingSpeed, this._keys && ip.setKeys(this._keys, !1, pp), this._ranges) {
          ip._ranges = {};
          for (const pp in this._ranges) {
            const cp = this._ranges[pp];
            cp && (ip._ranges[pp] = cp.clone())
          }
        }
        return ip
      }
      setKeys(pp) {
        let ip = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = pp;
        else if (this._keys = pp.slice(0), ip)
          for (let cp = 0; cp < this._keys.length; cp++) {
            const pp = this._keys[cp];
            this._keys[cp] = {
              frame: pp.frame,
              value: pp.value.clone ? pp.value.clone() : pp.value,
              inTangent: pp.inTangent && pp.inTangent.clone ? pp.inTangent.clone() : pp.inTangent,
              outTangent: pp.outTangent && pp.outTangent.clone ? pp.outTangent.clone() : pp.outTangent,
              interpolation: pp.interpolation,
              lockedTangent: pp.lockedTangent,
              easingFunction: pp.easingFunction
            }
          }
      }
      createKeyForFrame(pp) {
        tp.key = 0;
        const ip = this._interpolate(pp, tp, !0);
        if (!ip) return this._keys[tp.key].frame === pp ? tp.key : tp.key + 1;
        const cp = {
          frame: pp,
          value: ip.clone ? ip.clone() : ip
        };
        return this._keys.splice(tp.key + 1, 0, cp), tp.key + 1
      }
      serialize() {
        const pp = {};
        pp.name = this.name, pp.property = this.targetProperty, pp.framePerSecond = this.framePerSecond, pp.dataType = this.dataType, pp.loopBehavior = this.Yo, pp.enableBlending = this.enableBlending, pp.blendingSpeed = this.blendingSpeed;
        const ip = this.dataType;
        pp.keys = [];
        const cp = this.getKeys();
        for (let Op = 0; Op < cp.length; Op++) {
          const op = cp[Op],
            Ip = {};
          switch (Ip.frame = op.frame, ip) {
            case Hp.ANIMATIONTYPE_FLOAT:
              Ip.values = [op.value], void 0 !== op.inTangent && Ip.values.push(op.inTangent), void 0 !== op.outTangent && (void 0 === op.inTangent && Ip.values.push(void 0), Ip.values.push(op.outTangent)), void 0 !== op.interpolation && (void 0 === op.inTangent && Ip.values.push(void 0), void 0 === op.outTangent && Ip.values.push(void 0), Ip.values.push(op.interpolation));
              break;
            case Hp.ANIMATIONTYPE_QUATERNION:
            case Hp.ANIMATIONTYPE_MATRIX:
            case Hp.ANIMATIONTYPE_VECTOR3:
            case Hp.ANIMATIONTYPE_COLOR3:
            case Hp.ANIMATIONTYPE_COLOR4:
              Ip.values = op.value.BOp(), void 0 != op.inTangent && Ip.values.push(op.inTangent.BOp()), void 0 != op.outTangent && (void 0 === op.inTangent && Ip.values.push(void 0), Ip.values.push(op.outTangent.BOp())), void 0 !== op.interpolation && (void 0 === op.inTangent && Ip.values.push(void 0), void 0 === op.outTangent && Ip.values.push(void 0), Ip.values.push(op.interpolation))
          }
          pp.keys.push(Ip)
        }
        pp.By = [];
        for (const Op in this._ranges) {
          const ip = this._ranges[Op];
          if (!ip) continue;
          const cp = {};
          cp.name = Op, cp.from = ip.from, cp.to = ip.to, pp.By.push(cp)
        }
        return pp
      }
      static _UniversalLerp(pp, ip, cp) {
        const Op = pp.constructor;
        return Op.Lerp ? Op.Lerp(pp, ip, cp) : Op.Slerp ? Op.Slerp(pp, ip, cp) : pp.toFixed ? pp * (1 - cp) + cp * ip : ip
      }
    }

    function dp(pp, ip, cp) {
      let op;
      op = "object" === typeof ip ? ip : {
        referenceFrame: ip ?? 0,
        range: cp,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let Ip = pp;
      op.cloneOriginalAnimation && (Ip = pp.clone(), Ip.name = op.clonedAnimationName || Ip.name);
      const Sp = Ip.getKeys();
      if (!Sp.length) return Ip;
      const xp = op.referenceFrame && op.referenceFrame >= 0 ? op.referenceFrame : 0;
      let Lp = 0;
      const Yp = Sp[0];
      let Dp = Sp.length - 1;
      const Ap = Sp[Dp],
        Pp = {
          referenceValue: Yp.value,
          referencePosition: Op.i.Zy[0],
          referenceQuaternion: Op.i.Quaternion[0],
          referenceScaling: Op.i.Zy[1],
          keyPosition: Op.i.Zy[2],
          keyQuaternion: Op.i.Quaternion[1],
          keyScaling: Op.i.Zy[3]
        };
      let Wp = Yp.frame,
        yp = Ap.frame;
      if (op.range) {
        const pp = Ip.getRange(op.range);
        pp && (Wp = pp.from, yp = pp.to)
      } else Wp = op.fromFrame ?? Wp, yp = op.toFrame ?? yp;
      Wp !== Yp.frame && (Lp = Ip.createKeyForFrame(Wp)), yp !== Ap.frame && (Dp = Ip.createKeyForFrame(yp));
      const Up = Ip.getKeys();
      if (1 === Up.length) {
        const pp = Ip._getKeyValue(Up[0].value);
        Pp.referenceValue = pp.clone ? pp.clone() : pp
      } else if (xp <= Yp.frame) {
        const pp = Ip._getKeyValue(Yp.value);
        Pp.referenceValue = pp.clone ? pp.clone() : pp
      } else if (xp >= Ap.frame) {
        const pp = Ip._getKeyValue(Ap.value);
        Pp.referenceValue = pp.clone ? pp.clone() : pp
      } else {
        tp.key = 0;
        const pp = Ip._interpolate(xp, tp);
        Pp.referenceValue = pp.clone ? pp.clone() : pp
      }
      Ip.dataType === Hp.ANIMATIONTYPE_QUATERNION ? Pp.referenceValue.normalize().conjugateInPlace() : Ip.dataType === Hp.ANIMATIONTYPE_MATRIX && (Pp.referenceValue.decompose(Pp.referenceScaling, Pp.referenceQuaternion, Pp.referencePosition), Pp.referenceQuaternion.normalize().conjugateInPlace());
      let wp = Number.MAX_VALUE;
      const vp = op.clipKeys ? [] : null;
      for (let tp = Lp; tp <= Dp; tp++) {
        let pp = Up[tp];
        if ((vp || op.cloneOriginalAnimation) && (pp = {
            frame: pp.frame,
            value: pp.value.clone ? pp.value.clone() : pp.value,
            inTangent: pp.inTangent,
            outTangent: pp.outTangent,
            interpolation: pp.interpolation,
            lockedTangent: pp.lockedTangent,
            easingFunction: pp.easingFunction
          }, vp && (wp === Number.MAX_VALUE && (wp = pp.frame), pp.frame -= wp, vp.push(pp))), !tp || Ip.dataType === Hp.ANIMATIONTYPE_FLOAT || pp.value !== Yp.value) switch (Ip.dataType) {
          case Hp.ANIMATIONTYPE_MATRIX:
            pp.value.decompose(Pp.keyScaling, Pp.keyQuaternion, Pp.keyPosition), Pp.keyPosition.Iop(Pp.referencePosition), Pp.keyScaling.divideInPlace(Pp.referenceScaling), Pp.referenceQuaternion.multiplyToRef(Pp.keyQuaternion, Pp.keyQuaternion), Op.b.ComposeToRef(Pp.keyScaling, Pp.keyQuaternion, Pp.keyPosition, pp.value);
            break;
          case Hp.ANIMATIONTYPE_QUATERNION:
            Pp.referenceValue.multiplyToRef(pp.value, pp.value);
            break;
          case Hp.ANIMATIONTYPE_VECTOR2:
          case Hp.ANIMATIONTYPE_VECTOR3:
          case Hp.ANIMATIONTYPE_COLOR3:
          case Hp.ANIMATIONTYPE_COLOR4:
            pp.value.subtractToRef(Pp.referenceValue, pp.value);
            break;
          case Hp.ANIMATIONTYPE_SIZE:
            pp.value.width -= Pp.referenceValue.width, pp.value.height -= Pp.referenceValue.height;
            break;
          default:
            pp.value -= Pp.referenceValue
        }
      }
      return vp && Ip.setKeys(vp, !0), Ip
    }

    function ep(pp, ip, cp, Op) {
      const op = new Hp(pp + "Animation", pp, cp, ip, Hp.ANIMATIONLOOPMODE_CONSTANT);
      return op.setEasingFunction(Op), op
    }

    function jp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp) {
      const Ap = Hp._PrepareAnimation(pp, cp, Op, op, Ip, Sp, xp, Lp);
      return Ap ? (ip.Gl && (Dp = ip.Gl()), Dp ? Dp.beginDirectAnimation(ip, [Ap], 0, op, Ap.Yo !== Hp.ANIMATIONLOOPMODE_CONSTANT, 1, Yp) : null) : null
    }

    function kp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp) {
      const Ap = Hp._PrepareAnimation(pp, Op, op, Ip, Sp, xp, Lp, Yp);
      if (!Ap) return null;
      return ip.Gl().beginDirectHierarchyAnimation(ip, cp, [Ap], 0, Ip, 1 === Ap.Yo, 1, Dp)
    }

    function mp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
      const Dp = Hp._PrepareAnimation(pp, cp, Op, op, Ip, Sp, xp, Lp);
      return Dp ? (ip.animations.push(Dp), ip.Gl().beginAnimation(ip, 0, op, 1 === Dp.Yo, 1, Yp)) : null
    }

    function Rp(pp, ip, cp, Op, op, Ip, Sp) {
      let xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Lp = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Yp = arguments.length > 9 ? arguments[9] : void 0;
      if (Sp <= 0) return cp[pp] = ip, xp && xp(), null;
      const Dp = op * (Sp / 1e3);
      Ip.setKeys(Yp ?? [{
        frame: 0,
        value: cp[pp].clone ? cp[pp].clone() : cp[pp]
      }, {
        frame: Dp,
        value: ip
      }]), cp.animations || (cp.animations = []), cp.animations.push(Ip);
      return Op.beginAnimation(cp, 0, Dp, !1, 1, xp ?? void 0, void 0, Lp)
    }

    function qp(pp, ip) {
      Dp.c.AppendSerializedAnimations(pp, ip)
    }

    function Mp(pp) {
      const ip = new Hp(pp.name, pp.property, pp.framePerSecond, pp.dataType, pp.loopBehavior),
        cp = pp.dataType,
        Ip = [];
      let Sp, xp;
      for (pp.enableBlending && (ip.enableBlending = pp.enableBlending), pp.blendingSpeed && (ip.blendingSpeed = pp.blendingSpeed), xp = 0; xp < pp.keys.length; xp++) {
        const ip = pp.keys[xp];
        let Lp, Yp, Dp;
        switch (cp) {
          case Hp.ANIMATIONTYPE_FLOAT:
            Sp = ip.values[0], ip.values.length >= 2 && (Lp = ip.values[1]), ip.values.length >= 3 && (Yp = ip.values[2]), ip.values.length >= 4 && (Dp = ip.values[3]);
            break;
          case Hp.ANIMATIONTYPE_QUATERNION:
            if (Sp = Op.f.FromArray(ip.values), ip.values.length >= 8) {
              const pp = Op.f.FromArray(ip.values.slice(4, 8));
              pp.equals(Op.f.Zero()) || (Lp = pp)
            }
            if (ip.values.length >= 12) {
              const pp = Op.f.FromArray(ip.values.slice(8, 12));
              pp.equals(Op.f.Zero()) || (Yp = pp)
            }
            ip.values.length >= 13 && (Dp = ip.values[12]);
            break;
          case Hp.ANIMATIONTYPE_MATRIX:
            Sp = Op.b.FromArray(ip.values), ip.values.length >= 17 && (Dp = ip.values[16]);
            break;
          case Hp.ANIMATIONTYPE_COLOR3:
            Sp = op.d.FromArray(ip.values), ip.values[3] && (Lp = op.d.FromArray(ip.values[3])), ip.values[4] && (Yp = op.d.FromArray(ip.values[4])), ip.values[5] && (Dp = ip.values[5]);
            break;
          case Hp.ANIMATIONTYPE_COLOR4:
            Sp = op.h.FromArray(ip.values), ip.values[4] && (Lp = op.h.FromArray(ip.values[4])), ip.values[5] && (Yp = op.h.FromArray(ip.values[5])), ip.values[6] && (Dp = ip.values[6]);
            break;
          case Hp.ANIMATIONTYPE_VECTOR3:
          default:
            Sp = Op.o.FromArray(ip.values), ip.values[3] && (Lp = Op.o.FromArray(ip.values[3])), ip.values[4] && (Yp = Op.o.FromArray(ip.values[4])), ip.values[5] && (Dp = ip.values[5])
        }
        const Ap = {};
        Ap.frame = ip.frame, Ap.value = Sp, void 0 != Lp && (Ap.inTangent = Lp), void 0 != Yp && (Ap.outTangent = Yp), void 0 != Dp && (Ap.interpolation = Dp), Ip.push(Ap)
      }
      if (ip.setKeys(Ip), pp.By)
        for (xp = 0; xp < pp.By.length; xp++) Sp = pp.By[xp], ip.createRange(Sp.name, Sp.from, Sp.to);
      return ip
    }
    async function Cp(pp, ip) {
      return await new Promise(((cp, Op) => {
        const op = new Yp.e;
        op.addEventListener("readystatechange", (() => {
          if (4 == op.readyState)
            if (200 == op.status) {
              let ip = JSON.parse(op.responseText);
              if (ip.animations && (ip = ip.animations), ip.length) {
                const pp = [];
                for (const cp of ip) pp.push(Mp(cp));
                cp(pp)
              } else {
                const Op = Mp(ip);
                pp && (Op.name = pp), cp(Op)
              }
            } else Op("Unable to load the animation")
        })), op.open("GET", ip), op.send()
      }))
    }
    async function Ep(pp) {
      const ip = this?.SnippetUrl ?? Hp.SnippetUrl;
      return await new Promise(((cp, Op) => {
        const op = new Yp.e;
        op.addEventListener("readystatechange", (() => {
          if (4 == op.readyState)
            if (200 == op.status) {
              const ip = JSON.parse(JSON.parse(op.responseText).jsonPayload);
              if (ip.animations) {
                const Op = JSON.parse(ip.animations),
                  op = [];
                for (const ip of Op.animations) {
                  const cp = Mp(ip);
                  cp.snippetId = pp, op.push(cp)
                }
                cp(op)
              } else {
                const Op = Mp(JSON.parse(ip.animation));
                Op.snippetId = pp, cp(Op)
              }
            } else Op("Unable to load the snippet " + pp)
        })), op.open("GET", ip + "/" + pp.replace(/#/g, "/")), op.send()
      }))
    }
    Hp._UniqueIdGenerator = 0, Hp.AllowMatricesInterpolation = !1, Hp.AllowMatrixDecomposeForInterpolation = !0, Hp.InheritOriginalValueFromActiveAnimations = !1, Hp.SnippetUrl = "https://snippet.babylonjs.com", Hp.ANIMATIONTYPE_FLOAT = 0, Hp.ANIMATIONTYPE_VECTOR3 = 1, Hp.ANIMATIONTYPE_QUATERNION = 2, Hp.ANIMATIONTYPE_MATRIX = 3, Hp.ANIMATIONTYPE_COLOR3 = 4, Hp.ANIMATIONTYPE_COLOR4 = 7, Hp.ANIMATIONTYPE_VECTOR2 = 5, Hp.ANIMATIONTYPE_SIZE = 6, Hp.ANIMATIONLOOPMODE_RELATIVE = 0, Hp.ANIMATIONLOOPMODE_CYCLE = 1, Hp.ANIMATIONLOOPMODE_CONSTANT = 2, Hp.ANIMATIONLOOPMODE_YOYO = 4, Hp.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const Xp = Ep;
    let lp = !1;

    function Qp() {
      lp || (lp = !0, Hp.Parse = Mp, Hp.ParseFromFileAsync = Cp, Hp.ParseFromSnippetAsync = Ep, Hp.CreateFromSnippetAsync = Xp, Hp.CreateAnimation = ep, Hp.CreateAndStartAnimation = jp, Hp.CreateAndStartHierarchyAnimation = kp, Hp.CreateMergeAndStartAnimation = mp, Hp.MakeAnimationAdditive = dp, Hp.TransitionTo = Rp, Hp.AppendSerializedAnimations = qp, (0, Ap.g)("BABYLON.Animation", Hp), xp.b._AnimationRangeFactory = (pp, ip, cp) => new Sp.d(pp, ip, cp))
    }
  },
  41320: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op
    });
    class Op {
      constructor(pp, ip, cp) {
        this.name = pp, this.from = ip, this.to = cp
      }
      clone() {
        return new Op(this.name, this.from, this.to)
      }
    }
  },
  41378: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op.b,
      f: () => Op.j
    });
    var Op = cp(40342);
    (0, Op.f)()
  },
  41353: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op.d
    });
    var Op = cp(40654);
    (0, Op.c)()
  },
  41333: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op.d
    });
    var Op = cp(40638);
    (0, Op.h)()
  },
  41383: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op.d
    });
    var Op = cp(40577);
    (0, Op.e)()
  },
  41325: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op.d
    });
    var Op = cp(40617);
    (0, Op.b)()
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);