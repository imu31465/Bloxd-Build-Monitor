export const id = 312;
export const ids = [312];
export const modules = {
  42772: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => mb,
      d: () => fb,
      f: () => Fb,
      j: () => Bb,
      n: () => Ub,
      r: () => Eb,
      s: () => Cb,
      u: () => tb
    });
    var eb = Mb(38285),
      Hb = Mb(38406),
      pb = Mb(38322),
      Vb = Mb(42781),
      gb = Mb(41886),
      lb = Mb(41693),
      Lb = Mb(41727),
      Ib = Mb(41697),
      Ob = Mb(38333);
    const Ub = Object.freeze(new eb.e(0, 0, 0, 0)),
      tb = Object.freeze(eb.o.Zero()),
      Cb = Object.freeze(eb.m.Zero()),
      Eb = Object.freeze(lb.b.Zero()),
      Fb = Object.freeze(Hb.e.Black()),
      Bb = Object.freeze(new Hb.f(0, 0, 0, 0)),
      sb = {
        key: 0,
        repeatCount: 0,
        sM: 2
      };
    class mb {
      static _PrepareAnimation(bb, wb, Mb, pb, Vb, gb, Lb, Ib) {
        let Ob;
        if (!isNaN(parseFloat(Vb)) && isFinite(Vb) ? Ob = mb.ANIMATIONTYPE_FLOAT : Vb instanceof eb.e ? Ob = mb.ANIMATIONTYPE_QUATERNION : Vb instanceof eb.o ? Ob = mb.ANIMATIONTYPE_VECTOR3 : Vb instanceof eb.m ? Ob = mb.ANIMATIONTYPE_VECTOR2 : Vb instanceof Hb.e ? Ob = mb.ANIMATIONTYPE_COLOR3 : Vb instanceof Hb.f ? Ob = mb.ANIMATIONTYPE_COLOR4 : Vb instanceof lb.b && (Ob = mb.ANIMATIONTYPE_SIZE), void 0 == Ob) return null;
        const Ub = new mb(bb, wb, Mb, Ob, Lb),
          tb = [{
            frame: 0,
            value: Vb
          }, {
            frame: pb,
            value: gb
          }];
        return Ub.setKeys(tb), void 0 !== Ib && Ub.setEasingFunction(Ib), Ub
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const bb of this._runtimeAnimations)
          if (!bb.isStopped()) return !0;
        return !1
      }
      constructor(bb, wb, Mb, eb, Hb, pb) {
        this.name = bb, this.targetProperty = wb, this.framePerSecond = Mb, this.dataType = eb, this.sM = Hb, this.enableBlending = pb, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = wb.split("."), this.dataType = eb, this.sM = void 0 === Hb ? mb.ANIMATIONLOOPMODE_CYCLE : Hb, this.uniqueId = mb._UniqueIdGenerator++
      }
      toString(bb) {
        let wb = "Name: " + this.name + ", property: " + this.targetProperty;
        if (wb += ", datatype: " + ["Float", "YC", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], wb += ", nKeys: " + (this._keys ? this._keys.length : "none"), wb += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), bb) {
          wb += ", Ranges: {";
          let bb = !0;
          for (const Mb in this._ranges) bb || (wb += ", "), bb = !1, wb += Mb;
          wb += "}"
        }
        return wb
      }
      addEvent(bb) {
        this._events.push(bb), this._events.sort(((bb, wb) => bb.frame - wb.frame))
      }
      removeEvents(bb) {
        for (let wb = 0; wb < this._events.length; wb++) this._events[wb].frame === bb && (this._events.splice(wb, 1), wb--)
      }
      getEvents() {
        return this._events
      }
      createRange(bb, wb, Mb) {
        this._ranges[bb] || (this._ranges[bb] = new Vb.c(bb, wb, Mb))
      }
      deleteRange(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Mb = this._ranges[bb];
        if (Mb) {
          if (wb) {
            const bb = Mb.from,
              wb = Mb.to;
            for (let Mb = this._keys.length - 1; Mb >= 0; Mb--) this._keys[Mb].frame >= bb && this._keys[Mb].frame <= wb && this._keys.splice(Mb, 1)
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
        for (let wb = 0, Mb = this._keys.length; wb < Mb; wb++) bb < this._keys[wb].frame && (bb = this._keys[wb].frame);
        return bb
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(bb) {
        this._easingFunction = bb
      }
      floatInterpolateFunction(bb, wb, Mb) {
        return (0, pb.Lerp)(bb, wb, Mb)
      }
      floatInterpolateFunctionWithTangents(bb, wb, Mb, eb, Hb) {
        return (0, pb.Hermite)(bb, wb, Mb, eb, Hb)
      }
      quaternionInterpolateFunction(bb, wb, Mb) {
        return eb.e.Slerp(bb, wb, Mb)
      }
      quaternionInterpolateFunctionWithTangents(bb, wb, Mb, Hb, pb) {
        return eb.e.Hermite(bb, wb, Mb, Hb, pb).normalize()
      }
      vector3InterpolateFunction(bb, wb, Mb) {
        return eb.o.Lerp(bb, wb, Mb)
      }
      vector3InterpolateFunctionWithTangents(bb, wb, Mb, Hb, pb) {
        return eb.o.Hermite(bb, wb, Mb, Hb, pb)
      }
      vector2InterpolateFunction(bb, wb, Mb) {
        return eb.m.Lerp(bb, wb, Mb)
      }
      vector2InterpolateFunctionWithTangents(bb, wb, Mb, Hb, pb) {
        return eb.m.Hermite(bb, wb, Mb, Hb, pb)
      }
      sizeInterpolateFunction(bb, wb, Mb) {
        return lb.b.Lerp(bb, wb, Mb)
      }
      color3InterpolateFunction(bb, wb, Mb) {
        return Hb.e.Lerp(bb, wb, Mb)
      }
      color3InterpolateFunctionWithTangents(bb, wb, Mb, eb, pb) {
        return Hb.e.Hermite(bb, wb, Mb, eb, pb)
      }
      color4InterpolateFunction(bb, wb, Mb) {
        return Hb.f.Lerp(bb, wb, Mb)
      }
      color4InterpolateFunctionWithTangents(bb, wb, Mb, eb, pb) {
        return Hb.f.Hermite(bb, wb, Mb, eb, pb)
      }
      _getKeyValue(bb) {
        return "function" === typeof bb ? bb() : bb
      }
      evaluate(bb) {
        return sb.key = 0, this._interpolate(bb, sb)
      }
      _interpolate(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (wb.sM === mb.ANIMATIONLOOPMODE_CONSTANT && wb.repeatCount > 0) return wb.highLimitValue.clone ? wb.highLimitValue.clone() : wb.highLimitValue;
        const eb = this._keys;
        let Hb;
        if (this._coreAnimation) Hb = this._coreAnimation._key;
        else {
          const pb = eb.length;
          for (Hb = wb.key; Hb >= 0 && bb < eb[Hb].frame;) --Hb;
          for (; Hb + 1 <= pb - 1 && bb >= eb[Hb + 1].frame;) ++Hb;
          if (wb.key = Hb, Hb < 0) return Mb ? void 0 : this._getKeyValue(eb[0].value);
          if (Hb + 1 > pb - 1) return Mb ? void 0 : this._getKeyValue(eb[pb - 1].value);
          this._key = Hb
        }
        const pb = eb[Hb],
          Vb = eb[Hb + 1];
        if (Mb && (bb === pb.frame || bb === Vb.frame)) return;
        const gb = this._getKeyValue(pb.value),
          lb = this._getKeyValue(Vb.value);
        if (1 === pb.interpolation) return Vb.frame > bb ? gb : lb;
        const Lb = void 0 !== pb.outTangent && void 0 !== Vb.inTangent,
          Ib = Vb.frame - pb.frame;
        let Ob = (bb - pb.frame) / Ib;
        const sb = pb.easingFunction || this.getEasingFunction();
        switch (sb && (Ob = sb.ease(Ob)), this.dataType) {
          case mb.ANIMATIONTYPE_FLOAT: {
            const bb = Lb ? this.floatInterpolateFunctionWithTangents(gb, pb.outTangent * Ib, lb, Vb.inTangent * Ib, Ob) : this.floatInterpolateFunction(gb, lb, Ob);
            switch (wb.sM) {
              case mb.ANIMATIONLOOPMODE_CYCLE:
              case mb.ANIMATIONLOOPMODE_CONSTANT:
              case mb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case mb.ANIMATIONLOOPMODE_RELATIVE:
              case mb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (wb.offsetValue ?? 0) * wb.repeatCount + bb
            }
            break
          }
          case mb.ANIMATIONTYPE_QUATERNION: {
            const bb = Lb ? this.quaternionInterpolateFunctionWithTangents(gb, pb.outTangent.scale(Ib), lb, Vb.inTangent.scale(Ib), Ob) : this.quaternionInterpolateFunction(gb, lb, Ob);
            switch (wb.sM) {
              case mb.ANIMATIONLOOPMODE_CYCLE:
              case mb.ANIMATIONLOOPMODE_CONSTANT:
              case mb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case mb.ANIMATIONLOOPMODE_RELATIVE:
              case mb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.addInPlace((wb.offsetValue || Ub).scale(wb.repeatCount))
            }
            return bb
          }
          case mb.ANIMATIONTYPE_VECTOR3: {
            const bb = Lb ? this.vector3InterpolateFunctionWithTangents(gb, pb.outTangent.scale(Ib), lb, Vb.inTangent.scale(Ib), Ob) : this.vector3InterpolateFunction(gb, lb, Ob);
            switch (wb.sM) {
              case mb.ANIMATIONLOOPMODE_CYCLE:
              case mb.ANIMATIONLOOPMODE_CONSTANT:
              case mb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case mb.ANIMATIONLOOPMODE_RELATIVE:
              case mb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((wb.offsetValue || tb).scale(wb.repeatCount))
            }
            break
          }
          case mb.ANIMATIONTYPE_VECTOR2: {
            const bb = Lb ? this.vector2InterpolateFunctionWithTangents(gb, pb.outTangent.scale(Ib), lb, Vb.inTangent.scale(Ib), Ob) : this.vector2InterpolateFunction(gb, lb, Ob);
            switch (wb.sM) {
              case mb.ANIMATIONLOOPMODE_CYCLE:
              case mb.ANIMATIONLOOPMODE_CONSTANT:
              case mb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case mb.ANIMATIONLOOPMODE_RELATIVE:
              case mb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((wb.offsetValue || Cb).scale(wb.repeatCount))
            }
            break
          }
          case mb.ANIMATIONTYPE_SIZE:
            switch (wb.sM) {
              case mb.ANIMATIONLOOPMODE_CYCLE:
              case mb.ANIMATIONLOOPMODE_CONSTANT:
              case mb.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(gb, lb, Ob);
              case mb.ANIMATIONLOOPMODE_RELATIVE:
              case mb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(gb, lb, Ob).add((wb.offsetValue || Eb).scale(wb.repeatCount))
            }
            break;
          case mb.ANIMATIONTYPE_COLOR3: {
            const bb = Lb ? this.color3InterpolateFunctionWithTangents(gb, pb.outTangent.scale(Ib), lb, Vb.inTangent.scale(Ib), Ob) : this.color3InterpolateFunction(gb, lb, Ob);
            switch (wb.sM) {
              case mb.ANIMATIONLOOPMODE_CYCLE:
              case mb.ANIMATIONLOOPMODE_CONSTANT:
              case mb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case mb.ANIMATIONLOOPMODE_RELATIVE:
              case mb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((wb.offsetValue || Fb).scale(wb.repeatCount))
            }
            break
          }
          case mb.ANIMATIONTYPE_COLOR4: {
            const bb = Lb ? this.color4InterpolateFunctionWithTangents(gb, pb.outTangent.scale(Ib), lb, Vb.inTangent.scale(Ib), Ob) : this.color4InterpolateFunction(gb, lb, Ob);
            switch (wb.sM) {
              case mb.ANIMATIONLOOPMODE_CYCLE:
              case mb.ANIMATIONLOOPMODE_CONSTANT:
              case mb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case mb.ANIMATIONLOOPMODE_RELATIVE:
              case mb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((wb.offsetValue || Bb).scale(wb.repeatCount))
            }
            break
          }
          case mb.ANIMATIONTYPE_MATRIX:
            switch (wb.sM) {
              case mb.ANIMATIONLOOPMODE_CYCLE:
              case mb.ANIMATIONLOOPMODE_CONSTANT:
              case mb.ANIMATIONLOOPMODE_YOYO:
                return mb.AllowMatricesInterpolation ? this.matrixInterpolateFunction(gb, lb, Ob, wb.workValue) : gb;
              case mb.ANIMATIONLOOPMODE_RELATIVE:
              case mb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return gb
            }
        }
        return 0
      }
      matrixInterpolateFunction(bb, wb, Mb, Hb) {
        return mb.AllowMatrixDecomposeForInterpolation ? Hb ? (eb.b.DecomposeLerpToRef(bb, wb, Mb, Hb), Hb) : eb.b.DecomposeLerp(bb, wb, Mb) : Hb ? (eb.b.LerpToRef(bb, wb, Mb, Hb), Hb) : eb.b.Lerp(bb, wb, Mb)
      }
      clone() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const wb = new mb(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.sM);
        if (wb.enableBlending = this.enableBlending, wb.blendingSpeed = this.blendingSpeed, this._keys && wb.setKeys(this._keys, !1, bb), this._ranges) {
          wb._ranges = {};
          for (const bb in this._ranges) {
            const Mb = this._ranges[bb];
            Mb && (wb._ranges[bb] = Mb.clone())
          }
        }
        return wb
      }
      setKeys(bb) {
        let wb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = bb;
        else if (this._keys = bb.slice(0), wb)
          for (let Mb = 0; Mb < this._keys.length; Mb++) {
            const bb = this._keys[Mb];
            this._keys[Mb] = {
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
        sb.key = 0;
        const wb = this._interpolate(bb, sb, !0);
        if (!wb) return this._keys[sb.key].frame === bb ? sb.key : sb.key + 1;
        const Mb = {
          frame: bb,
          value: wb.clone ? wb.clone() : wb
        };
        return this._keys.splice(sb.key + 1, 0, Mb), sb.key + 1
      }
      serialize() {
        const bb = {};
        bb.name = this.name, bb.property = this.targetProperty, bb.framePerSecond = this.framePerSecond, bb.dataType = this.dataType, bb.loopBehavior = this.sM, bb.enableBlending = this.enableBlending, bb.blendingSpeed = this.blendingSpeed;
        const wb = this.dataType;
        bb.keys = [];
        const Mb = this.getKeys();
        for (let eb = 0; eb < Mb.length; eb++) {
          const Hb = Mb[eb],
            pb = {};
          switch (pb.frame = Hb.frame, wb) {
            case mb.ANIMATIONTYPE_FLOAT:
              pb.values = [Hb.value], void 0 !== Hb.inTangent && pb.values.push(Hb.inTangent), void 0 !== Hb.outTangent && (void 0 === Hb.inTangent && pb.values.push(void 0), pb.values.push(Hb.outTangent)), void 0 !== Hb.interpolation && (void 0 === Hb.inTangent && pb.values.push(void 0), void 0 === Hb.outTangent && pb.values.push(void 0), pb.values.push(Hb.interpolation));
              break;
            case mb.ANIMATIONTYPE_QUATERNION:
            case mb.ANIMATIONTYPE_MATRIX:
            case mb.ANIMATIONTYPE_VECTOR3:
            case mb.ANIMATIONTYPE_COLOR3:
            case mb.ANIMATIONTYPE_COLOR4:
              pb.values = Hb.value.ppb(), void 0 != Hb.inTangent && pb.values.push(Hb.inTangent.ppb()), void 0 != Hb.outTangent && (void 0 === Hb.inTangent && pb.values.push(void 0), pb.values.push(Hb.outTangent.ppb())), void 0 !== Hb.interpolation && (void 0 === Hb.inTangent && pb.values.push(void 0), void 0 === Hb.outTangent && pb.values.push(void 0), pb.values.push(Hb.interpolation))
          }
          bb.keys.push(pb)
        }
        bb.gF = [];
        for (const eb in this._ranges) {
          const wb = this._ranges[eb];
          if (!wb) continue;
          const Mb = {};
          Mb.name = eb, Mb.from = wb.from, Mb.to = wb.to, bb.gF.push(Mb)
        }
        return bb
      }
      static _UniversalLerp(bb, wb, Mb) {
        const eb = bb.constructor;
        return eb.Lerp ? eb.Lerp(bb, wb, Mb) : eb.Slerp ? eb.Slerp(bb, wb, Mb) : bb.toFixed ? bb * (1 - Mb) + Mb * wb : wb
      }
    }

    function hb(bb, wb, Mb) {
      let Hb;
      Hb = "object" === typeof wb ? wb : {
        referenceFrame: wb ?? 0,
        range: Mb,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let pb = bb;
      Hb.cloneOriginalAnimation && (pb = bb.clone(), pb.name = Hb.clonedAnimationName || pb.name);
      const Vb = pb.getKeys();
      if (!Vb.length) return pb;
      const gb = Hb.referenceFrame && Hb.referenceFrame >= 0 ? Hb.referenceFrame : 0;
      let lb = 0;
      const Lb = Vb[0];
      let Ib = Vb.length - 1;
      const Ob = Vb[Ib],
        Ub = {
          referenceValue: Lb.value,
          referencePosition: eb.j.YC[0],
          referenceQuaternion: eb.j.Quaternion[0],
          referenceScaling: eb.j.YC[1],
          keyPosition: eb.j.YC[2],
          keyQuaternion: eb.j.Quaternion[1],
          keyScaling: eb.j.YC[3]
        };
      let tb = Lb.frame,
        Cb = Ob.frame;
      if (Hb.range) {
        const bb = pb.getRange(Hb.range);
        bb && (tb = bb.from, Cb = bb.to)
      } else tb = Hb.fromFrame ?? tb, Cb = Hb.toFrame ?? Cb;
      tb !== Lb.frame && (lb = pb.createKeyForFrame(tb)), Cb !== Ob.frame && (Ib = pb.createKeyForFrame(Cb));
      const Eb = pb.getKeys();
      if (1 === Eb.length) {
        const bb = pb._getKeyValue(Eb[0].value);
        Ub.referenceValue = bb.clone ? bb.clone() : bb
      } else if (gb <= Lb.frame) {
        const bb = pb._getKeyValue(Lb.value);
        Ub.referenceValue = bb.clone ? bb.clone() : bb
      } else if (gb >= Ob.frame) {
        const bb = pb._getKeyValue(Ob.value);
        Ub.referenceValue = bb.clone ? bb.clone() : bb
      } else {
        sb.key = 0;
        const bb = pb._interpolate(gb, sb);
        Ub.referenceValue = bb.clone ? bb.clone() : bb
      }
      pb.dataType === mb.ANIMATIONTYPE_QUATERNION ? Ub.referenceValue.normalize().conjugateInPlace() : pb.dataType === mb.ANIMATIONTYPE_MATRIX && (Ub.referenceValue.decompose(Ub.referenceScaling, Ub.referenceQuaternion, Ub.referencePosition), Ub.referenceQuaternion.normalize().conjugateInPlace());
      let Fb = Number.MAX_VALUE;
      const Bb = Hb.clipKeys ? [] : null;
      for (let sb = lb; sb <= Ib; sb++) {
        let bb = Eb[sb];
        if ((Bb || Hb.cloneOriginalAnimation) && (bb = {
            frame: bb.frame,
            value: bb.value.clone ? bb.value.clone() : bb.value,
            inTangent: bb.inTangent,
            outTangent: bb.outTangent,
            interpolation: bb.interpolation,
            lockedTangent: bb.lockedTangent,
            easingFunction: bb.easingFunction
          }, Bb && (Fb === Number.MAX_VALUE && (Fb = bb.frame), bb.frame -= Fb, Bb.push(bb))), !sb || pb.dataType === mb.ANIMATIONTYPE_FLOAT || bb.value !== Lb.value) switch (pb.dataType) {
          case mb.ANIMATIONTYPE_MATRIX:
            bb.value.decompose(Ub.keyScaling, Ub.keyQuaternion, Ub.keyPosition), Ub.keyPosition.zpb(Ub.referencePosition), Ub.keyScaling.divideInPlace(Ub.referenceScaling), Ub.referenceQuaternion.multiplyToRef(Ub.keyQuaternion, Ub.keyQuaternion), eb.b.ComposeToRef(Ub.keyScaling, Ub.keyQuaternion, Ub.keyPosition, bb.value);
            break;
          case mb.ANIMATIONTYPE_QUATERNION:
            Ub.referenceValue.multiplyToRef(bb.value, bb.value);
            break;
          case mb.ANIMATIONTYPE_VECTOR2:
          case mb.ANIMATIONTYPE_VECTOR3:
          case mb.ANIMATIONTYPE_COLOR3:
          case mb.ANIMATIONTYPE_COLOR4:
            bb.value.subtractToRef(Ub.referenceValue, bb.value);
            break;
          case mb.ANIMATIONTYPE_SIZE:
            bb.value.width -= Ub.referenceValue.width, bb.value.height -= Ub.referenceValue.height;
            break;
          default:
            bb.value -= Ub.referenceValue
        }
      }
      return Bb && pb.setKeys(Bb, !0), pb
    }

    function zb(bb, wb, Mb, eb) {
      const Hb = new mb(bb + "Animation", bb, Mb, wb, mb.ANIMATIONLOOPMODE_CONSTANT);
      return Hb.setEasingFunction(eb), Hb
    }

    function Xb(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib) {
      const Ob = mb._PrepareAnimation(bb, Mb, eb, Hb, pb, Vb, gb, lb);
      return Ob ? (wb.RJ && (Ib = wb.RJ()), Ib ? Ib.beginDirectAnimation(wb, [Ob], 0, Hb, Ob.sM !== mb.ANIMATIONLOOPMODE_CONSTANT, 1, Lb) : null) : null
    }

    function xb(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib) {
      const Ob = mb._PrepareAnimation(bb, eb, Hb, pb, Vb, gb, lb, Lb);
      if (!Ob) return null;
      return wb.RJ().beginDirectHierarchyAnimation(wb, Mb, [Ob], 0, pb, 1 === Ob.sM, 1, Ib)
    }

    function jb(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb) {
      const Ib = mb._PrepareAnimation(bb, Mb, eb, Hb, pb, Vb, gb, lb);
      return Ib ? (wb.animations.push(Ib), wb.RJ().beginAnimation(wb, 0, Hb, 1 === Ib.sM, 1, Lb)) : null
    }

    function Kb(bb, wb, Mb, eb, Hb, pb, Vb) {
      let gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        lb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Lb = arguments.length > 9 ? arguments[9] : void 0;
      if (Vb <= 0) return Mb[bb] = wb, gb && gb(), null;
      const Ib = Hb * (Vb / 1e3);
      pb.setKeys(Lb ?? [{
        frame: 0,
        value: Mb[bb].clone ? Mb[bb].clone() : Mb[bb]
      }, {
        frame: Ib,
        value: wb
      }]), Mb.animations || (Mb.animations = []), Mb.animations.push(pb);
      return eb.beginAnimation(Mb, 0, Ib, !1, 1, gb ?? void 0, void 0, lb)
    }

    function rb(bb, wb) {
      Ib.d.AppendSerializedAnimations(bb, wb)
    }

    function Rb(bb) {
      const wb = new mb(bb.name, bb.property, bb.framePerSecond, bb.dataType, bb.loopBehavior),
        Mb = bb.dataType,
        pb = [];
      let Vb, gb;
      for (bb.enableBlending && (wb.enableBlending = bb.enableBlending), bb.blendingSpeed && (wb.blendingSpeed = bb.blendingSpeed), gb = 0; gb < bb.keys.length; gb++) {
        const wb = bb.keys[gb];
        let lb, Lb, Ib;
        switch (Mb) {
          case mb.ANIMATIONTYPE_FLOAT:
            Vb = wb.values[0], wb.values.length >= 2 && (lb = wb.values[1]), wb.values.length >= 3 && (Lb = wb.values[2]), wb.values.length >= 4 && (Ib = wb.values[3]);
            break;
          case mb.ANIMATIONTYPE_QUATERNION:
            if (Vb = eb.e.FromArray(wb.values), wb.values.length >= 8) {
              const bb = eb.e.FromArray(wb.values.slice(4, 8));
              bb.equals(eb.e.Zero()) || (lb = bb)
            }
            if (wb.values.length >= 12) {
              const bb = eb.e.FromArray(wb.values.slice(8, 12));
              bb.equals(eb.e.Zero()) || (Lb = bb)
            }
            wb.values.length >= 13 && (Ib = wb.values[12]);
            break;
          case mb.ANIMATIONTYPE_MATRIX:
            Vb = eb.b.FromArray(wb.values), wb.values.length >= 17 && (Ib = wb.values[16]);
            break;
          case mb.ANIMATIONTYPE_COLOR3:
            Vb = Hb.e.FromArray(wb.values), wb.values[3] && (lb = Hb.e.FromArray(wb.values[3])), wb.values[4] && (Lb = Hb.e.FromArray(wb.values[4])), wb.values[5] && (Ib = wb.values[5]);
            break;
          case mb.ANIMATIONTYPE_COLOR4:
            Vb = Hb.f.FromArray(wb.values), wb.values[4] && (lb = Hb.f.FromArray(wb.values[4])), wb.values[5] && (Lb = Hb.f.FromArray(wb.values[5])), wb.values[6] && (Ib = wb.values[6]);
            break;
          case mb.ANIMATIONTYPE_VECTOR3:
          default:
            Vb = eb.o.FromArray(wb.values), wb.values[3] && (lb = eb.o.FromArray(wb.values[3])), wb.values[4] && (Lb = eb.o.FromArray(wb.values[4])), wb.values[5] && (Ib = wb.values[5])
        }
        const Ob = {};
        Ob.frame = wb.frame, Ob.value = Vb, void 0 != lb && (Ob.inTangent = lb), void 0 != Lb && (Ob.outTangent = Lb), void 0 != Ib && (Ob.interpolation = Ib), pb.push(Ob)
      }
      if (wb.setKeys(pb), bb.gF)
        for (gb = 0; gb < bb.gF.length; gb++) Vb = bb.gF[gb], wb.createRange(Vb.name, Vb.from, Vb.to);
      return wb
    }
    async function Db(bb, wb) {
      return await new Promise(((Mb, eb) => {
        const Hb = new Lb.b;
        Hb.addEventListener("readystatechange", (() => {
          if (4 == Hb.readyState)
            if (200 == Hb.status) {
              let wb = JSON.parse(Hb.responseText);
              if (wb.animations && (wb = wb.animations), wb.length) {
                const bb = [];
                for (const Mb of wb) bb.push(Rb(Mb));
                Mb(bb)
              } else {
                const eb = Rb(wb);
                bb && (eb.name = bb), Mb(eb)
              }
            } else eb("Unable to load the animation")
        })), Hb.open("GET", wb), Hb.send()
      }))
    }
    async function cb(bb) {
      const wb = this?.SnippetUrl ?? mb.SnippetUrl;
      return await new Promise(((Mb, eb) => {
        const Hb = new Lb.b;
        Hb.addEventListener("readystatechange", (() => {
          if (4 == Hb.readyState)
            if (200 == Hb.status) {
              const wb = JSON.parse(JSON.parse(Hb.responseText).jsonPayload);
              if (wb.animations) {
                const eb = JSON.parse(wb.animations),
                  Hb = [];
                for (const wb of eb.animations) {
                  const Mb = Rb(wb);
                  Mb.snippetId = bb, Hb.push(Mb)
                }
                Mb(Hb)
              } else {
                const eb = Rb(JSON.parse(wb.animation));
                eb.snippetId = bb, Mb(eb)
              }
            } else eb("Unable to load the snippet " + bb)
        })), Hb.open("GET", wb + "/" + bb.replace(/#/g, "/")), Hb.send()
      }))
    }
    mb._UniqueIdGenerator = 0, mb.AllowMatricesInterpolation = !1, mb.AllowMatrixDecomposeForInterpolation = !0, mb.InheritOriginalValueFromActiveAnimations = !1, mb.SnippetUrl = "https://snippet.babylonjs.com", mb.ANIMATIONTYPE_FLOAT = 0, mb.ANIMATIONTYPE_VECTOR3 = 1, mb.ANIMATIONTYPE_QUATERNION = 2, mb.ANIMATIONTYPE_MATRIX = 3, mb.ANIMATIONTYPE_COLOR3 = 4, mb.ANIMATIONTYPE_COLOR4 = 7, mb.ANIMATIONTYPE_VECTOR2 = 5, mb.ANIMATIONTYPE_SIZE = 6, mb.ANIMATIONLOOPMODE_RELATIVE = 0, mb.ANIMATIONLOOPMODE_CYCLE = 1, mb.ANIMATIONLOOPMODE_CONSTANT = 2, mb.ANIMATIONLOOPMODE_YOYO = 4, mb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const Yb = cb;
    let Zb = !1;

    function fb() {
      Zb || (Zb = !0, mb.Parse = Rb, mb.ParseFromFileAsync = Db, mb.ParseFromSnippetAsync = cb, mb.CreateFromSnippetAsync = Yb, mb.CreateAnimation = zb, mb.CreateAndStartAnimation = Xb, mb.CreateAndStartHierarchyAnimation = xb, mb.CreateMergeAndStartAnimation = jb, mb.MakeAnimationAdditive = hb, mb.TransitionTo = Kb, mb.AppendSerializedAnimations = rb, (0, Ob.e)("BABYLON.Animation", mb), gb.d._AnimationRangeFactory = (bb, wb, Mb) => new Vb.c(bb, wb, Mb))
    }
  },
  42781: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb
    });
    class eb {
      constructor(bb, wb, Mb) {
        this.name = bb, this.from = wb, this.to = Mb
      }
      clone() {
        return new eb(this.name, this.from, this.to)
      }
    }
  },
  42831: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb.d,
      f: () => eb.i
    });
    var eb = Mb(41816);
    (0, eb.e)()
  },
  42807: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb.f
    });
    var eb = Mb(42152);
    (0, eb.c)()
  },
  42792: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb.e
    });
    var eb = Mb(42140);
    (0, eb.i)()
  },
  42839: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => eb.e
    });
    var eb = Mb(42078);
    (0, eb.i)()
  },
  42787: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb.e
    });
    var eb = Mb(42116);
    (0, eb.d)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);