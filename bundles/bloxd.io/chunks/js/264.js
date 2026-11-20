export const id = 264;
export const ids = [264];
export const modules = {
  40519: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Nb,
      e: () => Eb,
      g: () => Qb,
      h: () => eb,
      j: () => Xb,
      m: () => lb,
      o: () => mb,
      s: () => nb
    });
    var kb = sb(36656),
      Wb = sb(36830),
      ab = sb(36688),
      Tb = sb(40523),
      Ub = sb(39667),
      Ib = sb(39433),
      Hb = sb(39475),
      fb = sb(39441),
      Mb = sb(36698);
    const Xb = Object.freeze(new kb.f(0, 0, 0, 0)),
      nb = Object.freeze(kb.p.Zero()),
      mb = Object.freeze(kb.n.Zero()),
      lb = Object.freeze(Ib.c.Zero()),
      Qb = Object.freeze(Wb.e.Black()),
      eb = Object.freeze(new Wb.g(0, 0, 0, 0)),
      Cb = {
        key: 0,
        repeatCount: 0,
        Aa: 2
      };
    class Nb {
      static _PrepareAnimation(bb, cb, sb, ab, Tb, Ub, Hb, fb) {
        let Mb;
        if (!isNaN(parseFloat(Tb)) && isFinite(Tb) ? Mb = Nb.ANIMATIONTYPE_FLOAT : Tb instanceof kb.f ? Mb = Nb.ANIMATIONTYPE_QUATERNION : Tb instanceof kb.p ? Mb = Nb.ANIMATIONTYPE_VECTOR3 : Tb instanceof kb.n ? Mb = Nb.ANIMATIONTYPE_VECTOR2 : Tb instanceof Wb.e ? Mb = Nb.ANIMATIONTYPE_COLOR3 : Tb instanceof Wb.g ? Mb = Nb.ANIMATIONTYPE_COLOR4 : Tb instanceof Ib.c && (Mb = Nb.ANIMATIONTYPE_SIZE), void 0 == Mb) return null;
        const Xb = new Nb(bb, cb, sb, Mb, Hb),
          nb = [{
            frame: 0,
            value: Tb
          }, {
            frame: ab,
            value: Ub
          }];
        return Xb.setKeys(nb), void 0 !== fb && Xb.setEasingFunction(fb), Xb
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const bb of this._runtimeAnimations)
          if (!bb.isStopped()) return !0;
        return !1
      }
      constructor(bb, cb, sb, kb, Wb, ab) {
        this.name = bb, this.targetProperty = cb, this.framePerSecond = sb, this.dataType = kb, this.Aa = Wb, this.enableBlending = ab, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = cb.split("."), this.dataType = kb, this.Aa = void 0 === Wb ? Nb.ANIMATIONLOOPMODE_CYCLE : Wb, this.uniqueId = Nb._UniqueIdGenerator++
      }
      toString(bb) {
        let cb = "Name: " + this.name + ", property: " + this.targetProperty;
        if (cb += ", datatype: " + ["Float", "Fm", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], cb += ", nKeys: " + (this._keys ? this._keys.length : "none"), cb += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), bb) {
          cb += ", Ranges: {";
          let bb = !0;
          for (const sb in this._ranges) bb || (cb += ", "), bb = !1, cb += sb;
          cb += "}"
        }
        return cb
      }
      addEvent(bb) {
        this._events.push(bb), this._events.sort(((bb, cb) => bb.frame - cb.frame))
      }
      removeEvents(bb) {
        for (let cb = 0; cb < this._events.length; cb++) this._events[cb].frame === bb && (this._events.splice(cb, 1), cb--)
      }
      getEvents() {
        return this._events
      }
      createRange(bb, cb, sb) {
        this._ranges[bb] || (this._ranges[bb] = new Tb.c(bb, cb, sb))
      }
      deleteRange(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const sb = this._ranges[bb];
        if (sb) {
          if (cb) {
            const bb = sb.from,
              cb = sb.to;
            for (let sb = this._keys.length - 1; sb >= 0; sb--) this._keys[sb].frame >= bb && this._keys[sb].frame <= cb && this._keys.splice(sb, 1)
          }
          this._ranges[bb] = null
        }
      }
      getRange(bb) {
        return this._ranges[bb]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let bb = 0;
        for (let cb = 0, sb = this._keys.length; cb < sb; cb++) bb < this._keys[cb].frame && (bb = this._keys[cb].frame);
        return bb
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(bb) {
        this._easingFunction = bb
      }
      floatInterpolateFunction(bb, cb, sb) {
        return (0, ab.Lerp)(bb, cb, sb)
      }
      floatInterpolateFunctionWithTangents(bb, cb, sb, kb, Wb) {
        return (0, ab.Hermite)(bb, cb, sb, kb, Wb)
      }
      quaternionInterpolateFunction(bb, cb, sb) {
        return kb.f.Slerp(bb, cb, sb)
      }
      quaternionInterpolateFunctionWithTangents(bb, cb, sb, Wb, ab) {
        return kb.f.Hermite(bb, cb, sb, Wb, ab).normalize()
      }
      vector3InterpolateFunction(bb, cb, sb) {
        return kb.p.Lerp(bb, cb, sb)
      }
      vector3InterpolateFunctionWithTangents(bb, cb, sb, Wb, ab) {
        return kb.p.Hermite(bb, cb, sb, Wb, ab)
      }
      vector2InterpolateFunction(bb, cb, sb) {
        return kb.n.Lerp(bb, cb, sb)
      }
      vector2InterpolateFunctionWithTangents(bb, cb, sb, Wb, ab) {
        return kb.n.Hermite(bb, cb, sb, Wb, ab)
      }
      sizeInterpolateFunction(bb, cb, sb) {
        return Ib.c.Lerp(bb, cb, sb)
      }
      color3InterpolateFunction(bb, cb, sb) {
        return Wb.e.Lerp(bb, cb, sb)
      }
      color3InterpolateFunctionWithTangents(bb, cb, sb, kb, ab) {
        return Wb.e.Hermite(bb, cb, sb, kb, ab)
      }
      color4InterpolateFunction(bb, cb, sb) {
        return Wb.g.Lerp(bb, cb, sb)
      }
      color4InterpolateFunctionWithTangents(bb, cb, sb, kb, ab) {
        return Wb.g.Hermite(bb, cb, sb, kb, ab)
      }
      _getKeyValue(bb) {
        return "function" === typeof bb ? bb() : bb
      }
      evaluate(bb) {
        return Cb.key = 0, this._interpolate(bb, Cb)
      }
      _interpolate(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (cb.Aa === Nb.ANIMATIONLOOPMODE_CONSTANT && cb.repeatCount > 0) return cb.highLimitValue.clone ? cb.highLimitValue.clone() : cb.highLimitValue;
        const kb = this._keys;
        let Wb;
        if (this._coreAnimation) Wb = this._coreAnimation._key;
        else {
          const ab = kb.length;
          for (Wb = cb.key; Wb >= 0 && bb < kb[Wb].frame;) --Wb;
          for (; Wb + 1 <= ab - 1 && bb >= kb[Wb + 1].frame;) ++Wb;
          if (cb.key = Wb, Wb < 0) return sb ? void 0 : this._getKeyValue(kb[0].value);
          if (Wb + 1 > ab - 1) return sb ? void 0 : this._getKeyValue(kb[ab - 1].value);
          this._key = Wb
        }
        const ab = kb[Wb],
          Tb = kb[Wb + 1];
        if (sb && (bb === ab.frame || bb === Tb.frame)) return;
        const Ub = this._getKeyValue(ab.value),
          Ib = this._getKeyValue(Tb.value);
        if (1 === ab.interpolation) return Tb.frame > bb ? Ub : Ib;
        const Hb = void 0 !== ab.outTangent && void 0 !== Tb.inTangent,
          fb = Tb.frame - ab.frame;
        let Mb = (bb - ab.frame) / fb;
        const Cb = ab.easingFunction || this.getEasingFunction();
        switch (Cb && (Mb = Cb.ease(Mb)), this.dataType) {
          case Nb.ANIMATIONTYPE_FLOAT: {
            const bb = Hb ? this.floatInterpolateFunctionWithTangents(Ub, ab.outTangent * fb, Ib, Tb.inTangent * fb, Mb) : this.floatInterpolateFunction(Ub, Ib, Mb);
            switch (cb.Aa) {
              case Nb.ANIMATIONLOOPMODE_CYCLE:
              case Nb.ANIMATIONLOOPMODE_CONSTANT:
              case Nb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Nb.ANIMATIONLOOPMODE_RELATIVE:
              case Nb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (cb.offsetValue ?? 0) * cb.repeatCount + bb
            }
            break
          }
          case Nb.ANIMATIONTYPE_QUATERNION: {
            const bb = Hb ? this.quaternionInterpolateFunctionWithTangents(Ub, ab.outTangent.scale(fb), Ib, Tb.inTangent.scale(fb), Mb) : this.quaternionInterpolateFunction(Ub, Ib, Mb);
            switch (cb.Aa) {
              case Nb.ANIMATIONLOOPMODE_CYCLE:
              case Nb.ANIMATIONLOOPMODE_CONSTANT:
              case Nb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Nb.ANIMATIONLOOPMODE_RELATIVE:
              case Nb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.addInPlace((cb.offsetValue || Xb).scale(cb.repeatCount))
            }
            return bb
          }
          case Nb.ANIMATIONTYPE_VECTOR3: {
            const bb = Hb ? this.vector3InterpolateFunctionWithTangents(Ub, ab.outTangent.scale(fb), Ib, Tb.inTangent.scale(fb), Mb) : this.vector3InterpolateFunction(Ub, Ib, Mb);
            switch (cb.Aa) {
              case Nb.ANIMATIONLOOPMODE_CYCLE:
              case Nb.ANIMATIONLOOPMODE_CONSTANT:
              case Nb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Nb.ANIMATIONLOOPMODE_RELATIVE:
              case Nb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((cb.offsetValue || nb).scale(cb.repeatCount))
            }
            break
          }
          case Nb.ANIMATIONTYPE_VECTOR2: {
            const bb = Hb ? this.vector2InterpolateFunctionWithTangents(Ub, ab.outTangent.scale(fb), Ib, Tb.inTangent.scale(fb), Mb) : this.vector2InterpolateFunction(Ub, Ib, Mb);
            switch (cb.Aa) {
              case Nb.ANIMATIONLOOPMODE_CYCLE:
              case Nb.ANIMATIONLOOPMODE_CONSTANT:
              case Nb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Nb.ANIMATIONLOOPMODE_RELATIVE:
              case Nb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((cb.offsetValue || mb).scale(cb.repeatCount))
            }
            break
          }
          case Nb.ANIMATIONTYPE_SIZE:
            switch (cb.Aa) {
              case Nb.ANIMATIONLOOPMODE_CYCLE:
              case Nb.ANIMATIONLOOPMODE_CONSTANT:
              case Nb.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(Ub, Ib, Mb);
              case Nb.ANIMATIONLOOPMODE_RELATIVE:
              case Nb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(Ub, Ib, Mb).add((cb.offsetValue || lb).scale(cb.repeatCount))
            }
            break;
          case Nb.ANIMATIONTYPE_COLOR3: {
            const bb = Hb ? this.color3InterpolateFunctionWithTangents(Ub, ab.outTangent.scale(fb), Ib, Tb.inTangent.scale(fb), Mb) : this.color3InterpolateFunction(Ub, Ib, Mb);
            switch (cb.Aa) {
              case Nb.ANIMATIONLOOPMODE_CYCLE:
              case Nb.ANIMATIONLOOPMODE_CONSTANT:
              case Nb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Nb.ANIMATIONLOOPMODE_RELATIVE:
              case Nb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((cb.offsetValue || Qb).scale(cb.repeatCount))
            }
            break
          }
          case Nb.ANIMATIONTYPE_COLOR4: {
            const bb = Hb ? this.color4InterpolateFunctionWithTangents(Ub, ab.outTangent.scale(fb), Ib, Tb.inTangent.scale(fb), Mb) : this.color4InterpolateFunction(Ub, Ib, Mb);
            switch (cb.Aa) {
              case Nb.ANIMATIONLOOPMODE_CYCLE:
              case Nb.ANIMATIONLOOPMODE_CONSTANT:
              case Nb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Nb.ANIMATIONLOOPMODE_RELATIVE:
              case Nb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((cb.offsetValue || eb).scale(cb.repeatCount))
            }
            break
          }
          case Nb.ANIMATIONTYPE_MATRIX:
            switch (cb.Aa) {
              case Nb.ANIMATIONLOOPMODE_CYCLE:
              case Nb.ANIMATIONLOOPMODE_CONSTANT:
              case Nb.ANIMATIONLOOPMODE_YOYO:
                return Nb.AllowMatricesInterpolation ? this.matrixInterpolateFunction(Ub, Ib, Mb, cb.workValue) : Ub;
              case Nb.ANIMATIONLOOPMODE_RELATIVE:
              case Nb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return Ub
            }
        }
        return 0
      }
      matrixInterpolateFunction(bb, cb, sb, Wb) {
        return Nb.AllowMatrixDecomposeForInterpolation ? Wb ? (kb.e.DecomposeLerpToRef(bb, cb, sb, Wb), Wb) : kb.e.DecomposeLerp(bb, cb, sb) : Wb ? (kb.e.LerpToRef(bb, cb, sb, Wb), Wb) : kb.e.Lerp(bb, cb, sb)
      }
      clone() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cb = new Nb(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.Aa);
        if (cb.enableBlending = this.enableBlending, cb.blendingSpeed = this.blendingSpeed, this._keys && cb.setKeys(this._keys, !1, bb), this._ranges) {
          cb._ranges = {};
          for (const bb in this._ranges) {
            const sb = this._ranges[bb];
            sb && (cb._ranges[bb] = sb.clone())
          }
        }
        return cb
      }
      setKeys(bb) {
        let cb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = bb;
        else if (this._keys = bb.slice(0), cb)
          for (let sb = 0; sb < this._keys.length; sb++) {
            const bb = this._keys[sb];
            this._keys[sb] = {
              frame: bb.frame,
              value: bb.value.clone ? bb.value.clone() : bb.value,
              inTangent: bb.inTangent && bb.inTangent.clone ? bb.inTangent.clone() : bb.inTangent,
              outTangent: bb.outTangent && bb.outTangent.clone ? bb.outTangent.clone() : bb.outTangent,
              interpolation: bb.interpolation,
              lockedTangent: bb.lockedTangent,
              easingFunction: bb.easingFunction
            }
          }
      }
      createKeyForFrame(bb) {
        Cb.key = 0;
        const cb = this._interpolate(bb, Cb, !0);
        if (!cb) return this._keys[Cb.key].frame === bb ? Cb.key : Cb.key + 1;
        const sb = {
          frame: bb,
          value: cb.clone ? cb.clone() : cb
        };
        return this._keys.splice(Cb.key + 1, 0, sb), Cb.key + 1
      }
      serialize() {
        const bb = {};
        bb.name = this.name, bb.property = this.targetProperty, bb.framePerSecond = this.framePerSecond, bb.dataType = this.dataType, bb.loopBehavior = this.Aa, bb.enableBlending = this.enableBlending, bb.blendingSpeed = this.blendingSpeed;
        const cb = this.dataType;
        bb.keys = [];
        const sb = this.getKeys();
        for (let kb = 0; kb < sb.length; kb++) {
          const Wb = sb[kb],
            ab = {};
          switch (ab.frame = Wb.frame, cb) {
            case Nb.ANIMATIONTYPE_FLOAT:
              ab.values = [Wb.value], void 0 !== Wb.inTangent && ab.values.push(Wb.inTangent), void 0 !== Wb.outTangent && (void 0 === Wb.inTangent && ab.values.push(void 0), ab.values.push(Wb.outTangent)), void 0 !== Wb.interpolation && (void 0 === Wb.inTangent && ab.values.push(void 0), void 0 === Wb.outTangent && ab.values.push(void 0), ab.values.push(Wb.interpolation));
              break;
            case Nb.ANIMATIONTYPE_QUATERNION:
            case Nb.ANIMATIONTYPE_MATRIX:
            case Nb.ANIMATIONTYPE_VECTOR3:
            case Nb.ANIMATIONTYPE_COLOR3:
            case Nb.ANIMATIONTYPE_COLOR4:
              ab.values = Wb.value.Osb(), void 0 != Wb.inTangent && ab.values.push(Wb.inTangent.Osb()), void 0 != Wb.outTangent && (void 0 === Wb.inTangent && ab.values.push(void 0), ab.values.push(Wb.outTangent.Osb())), void 0 !== Wb.interpolation && (void 0 === Wb.inTangent && ab.values.push(void 0), void 0 === Wb.outTangent && ab.values.push(void 0), ab.values.push(Wb.interpolation))
          }
          bb.keys.push(ab)
        }
        bb.uQ = [];
        for (const kb in this._ranges) {
          const cb = this._ranges[kb];
          if (!cb) continue;
          const sb = {};
          sb.name = kb, sb.from = cb.from, sb.to = cb.to, bb.uQ.push(sb)
        }
        return bb
      }
      static _UniversalLerp(bb, cb, sb) {
        const kb = bb.constructor;
        return kb.Lerp ? kb.Lerp(bb, cb, sb) : kb.Slerp ? kb.Slerp(bb, cb, sb) : bb.toFixed ? bb * (1 - sb) + sb * cb : cb
      }
    }

    function Vb(bb, cb, sb) {
      let Wb;
      Wb = "object" === typeof cb ? cb : {
        referenceFrame: cb ?? 0,
        range: sb,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let ab = bb;
      Wb.cloneOriginalAnimation && (ab = bb.clone(), ab.name = Wb.clonedAnimationName || ab.name);
      const Tb = ab.getKeys();
      if (!Tb.length) return ab;
      const Ub = Wb.referenceFrame && Wb.referenceFrame >= 0 ? Wb.referenceFrame : 0;
      let Ib = 0;
      const Hb = Tb[0];
      let fb = Tb.length - 1;
      const Mb = Tb[fb],
        Xb = {
          referenceValue: Hb.value,
          referencePosition: kb.m.Fm[0],
          referenceQuaternion: kb.m.Quaternion[0],
          referenceScaling: kb.m.Fm[1],
          keyPosition: kb.m.Fm[2],
          keyQuaternion: kb.m.Quaternion[1],
          keyScaling: kb.m.Fm[3]
        };
      let nb = Hb.frame,
        mb = Mb.frame;
      if (Wb.range) {
        const bb = ab.getRange(Wb.range);
        bb && (nb = bb.from, mb = bb.to)
      } else nb = Wb.fromFrame ?? nb, mb = Wb.toFrame ?? mb;
      nb !== Hb.frame && (Ib = ab.createKeyForFrame(nb)), mb !== Mb.frame && (fb = ab.createKeyForFrame(mb));
      const lb = ab.getKeys();
      if (1 === lb.length) {
        const bb = ab._getKeyValue(lb[0].value);
        Xb.referenceValue = bb.clone ? bb.clone() : bb
      } else if (Ub <= Hb.frame) {
        const bb = ab._getKeyValue(Hb.value);
        Xb.referenceValue = bb.clone ? bb.clone() : bb
      } else if (Ub >= Mb.frame) {
        const bb = ab._getKeyValue(Mb.value);
        Xb.referenceValue = bb.clone ? bb.clone() : bb
      } else {
        Cb.key = 0;
        const bb = ab._interpolate(Ub, Cb);
        Xb.referenceValue = bb.clone ? bb.clone() : bb
      }
      ab.dataType === Nb.ANIMATIONTYPE_QUATERNION ? Xb.referenceValue.normalize().conjugateInPlace() : ab.dataType === Nb.ANIMATIONTYPE_MATRIX && (Xb.referenceValue.decompose(Xb.referenceScaling, Xb.referenceQuaternion, Xb.referencePosition), Xb.referenceQuaternion.normalize().conjugateInPlace());
      let Qb = Number.MAX_VALUE;
      const eb = Wb.clipKeys ? [] : null;
      for (let Cb = Ib; Cb <= fb; Cb++) {
        let bb = lb[Cb];
        if ((eb || Wb.cloneOriginalAnimation) && (bb = {
            frame: bb.frame,
            value: bb.value.clone ? bb.value.clone() : bb.value,
            inTangent: bb.inTangent,
            outTangent: bb.outTangent,
            interpolation: bb.interpolation,
            lockedTangent: bb.lockedTangent,
            easingFunction: bb.easingFunction
          }, eb && (Qb === Number.MAX_VALUE && (Qb = bb.frame), bb.frame -= Qb, eb.push(bb))), !Cb || ab.dataType === Nb.ANIMATIONTYPE_FLOAT || bb.value !== Hb.value) switch (ab.dataType) {
          case Nb.ANIMATIONTYPE_MATRIX:
            bb.value.decompose(Xb.keyScaling, Xb.keyQuaternion, Xb.keyPosition), Xb.keyPosition.Wkb(Xb.referencePosition), Xb.keyScaling.divideInPlace(Xb.referenceScaling), Xb.referenceQuaternion.multiplyToRef(Xb.keyQuaternion, Xb.keyQuaternion), kb.e.ComposeToRef(Xb.keyScaling, Xb.keyQuaternion, Xb.keyPosition, bb.value);
            break;
          case Nb.ANIMATIONTYPE_QUATERNION:
            Xb.referenceValue.multiplyToRef(bb.value, bb.value);
            break;
          case Nb.ANIMATIONTYPE_VECTOR2:
          case Nb.ANIMATIONTYPE_VECTOR3:
          case Nb.ANIMATIONTYPE_COLOR3:
          case Nb.ANIMATIONTYPE_COLOR4:
            bb.value.subtractToRef(Xb.referenceValue, bb.value);
            break;
          case Nb.ANIMATIONTYPE_SIZE:
            bb.value.width -= Xb.referenceValue.width, bb.value.height -= Xb.referenceValue.height;
            break;
          default:
            bb.value -= Xb.referenceValue
        }
      }
      return eb && ab.setKeys(eb, !0), ab
    }

    function Lb(bb, cb, sb, kb) {
      const Wb = new Nb(bb + "Animation", bb, sb, cb, Nb.ANIMATIONLOOPMODE_CONSTANT);
      return Wb.setEasingFunction(kb), Wb
    }

    function ub(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb) {
      const Mb = Nb._PrepareAnimation(bb, sb, kb, Wb, ab, Tb, Ub, Ib);
      return Mb ? (cb.EY && (fb = cb.EY()), fb ? fb.beginDirectAnimation(cb, [Mb], 0, Wb, Mb.Aa !== Nb.ANIMATIONLOOPMODE_CONSTANT, 1, Hb) : null) : null
    }

    function Yb(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb) {
      const Mb = Nb._PrepareAnimation(bb, kb, Wb, ab, Tb, Ub, Ib, Hb);
      if (!Mb) return null;
      return cb.EY().beginDirectHierarchyAnimation(cb, sb, [Mb], 0, ab, 1 === Mb.Aa, 1, fb)
    }

    function hb(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb) {
      const fb = Nb._PrepareAnimation(bb, sb, kb, Wb, ab, Tb, Ub, Ib);
      return fb ? (cb.animations.push(fb), cb.EY().beginAnimation(cb, 0, Wb, 1 === fb.Aa, 1, Hb)) : null
    }

    function Jb(bb, cb, sb, kb, Wb, ab, Tb) {
      let Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Ib = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Hb = arguments.length > 9 ? arguments[9] : void 0;
      if (Tb <= 0) return sb[bb] = cb, Ub && Ub(), null;
      const fb = Wb * (Tb / 1e3);
      ab.setKeys(Hb ?? [{
        frame: 0,
        value: sb[bb].clone ? sb[bb].clone() : sb[bb]
      }, {
        frame: fb,
        value: cb
      }]), sb.animations || (sb.animations = []), sb.animations.push(ab);
      return kb.beginAnimation(sb, 0, fb, !1, 1, Ub ?? void 0, void 0, Ib)
    }

    function gb(bb, cb) {
      fb.d.AppendSerializedAnimations(bb, cb)
    }

    function Bb(bb) {
      const cb = new Nb(bb.name, bb.property, bb.framePerSecond, bb.dataType, bb.loopBehavior),
        sb = bb.dataType,
        ab = [];
      let Tb, Ub;
      for (bb.enableBlending && (cb.enableBlending = bb.enableBlending), bb.blendingSpeed && (cb.blendingSpeed = bb.blendingSpeed), Ub = 0; Ub < bb.keys.length; Ub++) {
        const cb = bb.keys[Ub];
        let Ib, Hb, fb;
        switch (sb) {
          case Nb.ANIMATIONTYPE_FLOAT:
            Tb = cb.values[0], cb.values.length >= 2 && (Ib = cb.values[1]), cb.values.length >= 3 && (Hb = cb.values[2]), cb.values.length >= 4 && (fb = cb.values[3]);
            break;
          case Nb.ANIMATIONTYPE_QUATERNION:
            if (Tb = kb.f.FromArray(cb.values), cb.values.length >= 8) {
              const bb = kb.f.FromArray(cb.values.slice(4, 8));
              bb.equals(kb.f.Zero()) || (Ib = bb)
            }
            if (cb.values.length >= 12) {
              const bb = kb.f.FromArray(cb.values.slice(8, 12));
              bb.equals(kb.f.Zero()) || (Hb = bb)
            }
            cb.values.length >= 13 && (fb = cb.values[12]);
            break;
          case Nb.ANIMATIONTYPE_MATRIX:
            Tb = kb.e.FromArray(cb.values), cb.values.length >= 17 && (fb = cb.values[16]);
            break;
          case Nb.ANIMATIONTYPE_COLOR3:
            Tb = Wb.e.FromArray(cb.values), cb.values[3] && (Ib = Wb.e.FromArray(cb.values[3])), cb.values[4] && (Hb = Wb.e.FromArray(cb.values[4])), cb.values[5] && (fb = cb.values[5]);
            break;
          case Nb.ANIMATIONTYPE_COLOR4:
            Tb = Wb.g.FromArray(cb.values), cb.values[4] && (Ib = Wb.g.FromArray(cb.values[4])), cb.values[5] && (Hb = Wb.g.FromArray(cb.values[5])), cb.values[6] && (fb = cb.values[6]);
            break;
          case Nb.ANIMATIONTYPE_VECTOR3:
          default:
            Tb = kb.p.FromArray(cb.values), cb.values[3] && (Ib = kb.p.FromArray(cb.values[3])), cb.values[4] && (Hb = kb.p.FromArray(cb.values[4])), cb.values[5] && (fb = cb.values[5])
        }
        const Mb = {};
        Mb.frame = cb.frame, Mb.value = Tb, void 0 != Ib && (Mb.inTangent = Ib), void 0 != Hb && (Mb.outTangent = Hb), void 0 != fb && (Mb.interpolation = fb), ab.push(Mb)
      }
      if (cb.setKeys(ab), bb.uQ)
        for (Ub = 0; Ub < bb.uQ.length; Ub++) Tb = bb.uQ[Ub], cb.createRange(Tb.name, Tb.from, Tb.to);
      return cb
    }
    async function tb(bb, cb) {
      return await new Promise(((sb, kb) => {
        const Wb = new Hb.c;
        Wb.addEventListener("readystatechange", (() => {
          if (4 == Wb.readyState)
            if (200 == Wb.status) {
              let cb = JSON.parse(Wb.responseText);
              if (cb.animations && (cb = cb.animations), cb.length) {
                const bb = [];
                for (const sb of cb) bb.push(Bb(sb));
                sb(bb)
              } else {
                const kb = Bb(cb);
                bb && (kb.name = bb), sb(kb)
              }
            } else kb("Unable to load the animation")
        })), Wb.open("GET", cb), Wb.send()
      }))
    }
    async function yb(bb) {
      const cb = this?.SnippetUrl ?? Nb.SnippetUrl;
      return await new Promise(((sb, kb) => {
        const Wb = new Hb.c;
        Wb.addEventListener("readystatechange", (() => {
          if (4 == Wb.readyState)
            if (200 == Wb.status) {
              const cb = JSON.parse(JSON.parse(Wb.responseText).jsonPayload);
              if (cb.animations) {
                const kb = JSON.parse(cb.animations),
                  Wb = [];
                for (const cb of kb.animations) {
                  const sb = Bb(cb);
                  sb.snippetId = bb, Wb.push(sb)
                }
                sb(Wb)
              } else {
                const kb = Bb(JSON.parse(cb.animation));
                kb.snippetId = bb, sb(kb)
              }
            } else kb("Unable to load the snippet " + bb)
        })), Wb.open("GET", cb + "/" + bb.replace(/#/g, "/")), Wb.send()
      }))
    }
    Nb._UniqueIdGenerator = 0, Nb.AllowMatricesInterpolation = !1, Nb.AllowMatrixDecomposeForInterpolation = !0, Nb.InheritOriginalValueFromActiveAnimations = !1, Nb.SnippetUrl = "https://snippet.babylonjs.com", Nb.ANIMATIONTYPE_FLOAT = 0, Nb.ANIMATIONTYPE_VECTOR3 = 1, Nb.ANIMATIONTYPE_QUATERNION = 2, Nb.ANIMATIONTYPE_MATRIX = 3, Nb.ANIMATIONTYPE_COLOR3 = 4, Nb.ANIMATIONTYPE_COLOR4 = 7, Nb.ANIMATIONTYPE_VECTOR2 = 5, Nb.ANIMATIONTYPE_SIZE = 6, Nb.ANIMATIONLOOPMODE_RELATIVE = 0, Nb.ANIMATIONLOOPMODE_CYCLE = 1, Nb.ANIMATIONLOOPMODE_CONSTANT = 2, Nb.ANIMATIONLOOPMODE_YOYO = 4, Nb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const Pb = yb;
    let Db = !1;

    function Eb() {
      Db || (Db = !0, Nb.Parse = Bb, Nb.ParseFromFileAsync = tb, Nb.ParseFromSnippetAsync = yb, Nb.CreateFromSnippetAsync = Pb, Nb.CreateAnimation = Lb, Nb.CreateAndStartAnimation = ub, Nb.CreateAndStartHierarchyAnimation = Yb, Nb.CreateMergeAndStartAnimation = hb, Nb.MakeAnimationAdditive = Vb, Nb.TransitionTo = Jb, Nb.AppendSerializedAnimations = gb, (0, Mb.h)("BABYLON.Animation", Nb), Ub.c._AnimationRangeFactory = (bb, cb, sb) => new Tb.c(bb, cb, sb))
    }
  },
  40523: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    class kb {
      constructor(bb, cb, sb) {
        this.name = bb, this.from = cb, this.to = sb
      }
      clone() {
        return new kb(this.name, this.from, this.to)
      }
    }
  },
  40567: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb.b,
      f: () => kb.l
    });
    var kb = sb(39576);
    (0, kb.f)()
  },
  40546: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb.e
    });
    var kb = sb(39895);
    (0, kb.b)()
  },
  40531: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb.e
    });
    var kb = sb(39884);
    (0, kb.i)()
  },
  40574: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb.b
    });
    var kb = sb(39835);
    (0, kb.d)()
  },
  40528: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb.c
    });
    var kb = sb(39867);
    (0, kb.b)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);