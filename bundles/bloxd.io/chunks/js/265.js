export const id = 265;
export const ids = [265];
export const modules = {
  40538: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Kb,
      f: () => tb,
      i: () => ob,
      m: () => Ab,
      q: () => wb,
      r: () => pb,
      s: () => Xb,
      w: () => Zb
    });
    var Bb = hb(36727),
      Ob = hb(36893),
      Gb = hb(36757),
      Ub = hb(40547),
      Lb = hb(39670),
      Yb = hb(39480),
      Sb = hb(39520),
      ab = hb(39488),
      Hb = hb(36762);
    const wb = Object.freeze(new Bb.f(0, 0, 0, 0)),
      Zb = Object.freeze(Bb.q.Zero()),
      Xb = Object.freeze(Bb.m.Zero()),
      pb = Object.freeze(Yb.d.Zero()),
      ob = Object.freeze(Ob.b.Black()),
      Ab = Object.freeze(new Ob.c(0, 0, 0, 0)),
      lb = {
        key: 0,
        repeatCount: 0,
        pb: 2
      };
    class Kb {
      static _PrepareAnimation(bb, ub, hb, Gb, Ub, Lb, Sb, ab) {
        let Hb;
        if (!isNaN(parseFloat(Ub)) && isFinite(Ub) ? Hb = Kb.ANIMATIONTYPE_FLOAT : Ub instanceof Bb.f ? Hb = Kb.ANIMATIONTYPE_QUATERNION : Ub instanceof Bb.q ? Hb = Kb.ANIMATIONTYPE_VECTOR3 : Ub instanceof Bb.m ? Hb = Kb.ANIMATIONTYPE_VECTOR2 : Ub instanceof Ob.b ? Hb = Kb.ANIMATIONTYPE_COLOR3 : Ub instanceof Ob.c ? Hb = Kb.ANIMATIONTYPE_COLOR4 : Ub instanceof Yb.d && (Hb = Kb.ANIMATIONTYPE_SIZE), void 0 == Hb) return null;
        const wb = new Kb(bb, ub, hb, Hb, Sb),
          Zb = [{
            frame: 0,
            value: Ub
          }, {
            frame: Gb,
            value: Lb
          }];
        return wb.setKeys(Zb), void 0 !== ab && wb.setEasingFunction(ab), wb
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const bb of this._runtimeAnimations)
          if (!bb.isStopped()) return !0;
        return !1
      }
      constructor(bb, ub, hb, Bb, Ob, Gb) {
        this.name = bb, this.targetProperty = ub, this.framePerSecond = hb, this.dataType = Bb, this.pb = Ob, this.enableBlending = Gb, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = ub.split("."), this.dataType = Bb, this.pb = void 0 === Ob ? Kb.ANIMATIONLOOPMODE_CYCLE : Ob, this.uniqueId = Kb._UniqueIdGenerator++
      }
      toString(bb) {
        let ub = "Name: " + this.name + ", property: " + this.targetProperty;
        if (ub += ", datatype: " + ["Float", "YX", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], ub += ", nKeys: " + (this._keys ? this._keys.length : "none"), ub += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), bb) {
          ub += ", Ranges: {";
          let bb = !0;
          for (const hb in this._ranges) bb || (ub += ", "), bb = !1, ub += hb;
          ub += "}"
        }
        return ub
      }
      addEvent(bb) {
        this._events.push(bb), this._events.sort(((bb, ub) => bb.frame - ub.frame))
      }
      removeEvents(bb) {
        for (let ub = 0; ub < this._events.length; ub++) this._events[ub].frame === bb && (this._events.splice(ub, 1), ub--)
      }
      getEvents() {
        return this._events
      }
      createRange(bb, ub, hb) {
        this._ranges[bb] || (this._ranges[bb] = new Ub.d(bb, ub, hb))
      }
      deleteRange(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const hb = this._ranges[bb];
        if (hb) {
          if (ub) {
            const bb = hb.from,
              ub = hb.to;
            for (let hb = this._keys.length - 1; hb >= 0; hb--) this._keys[hb].frame >= bb && this._keys[hb].frame <= ub && this._keys.splice(hb, 1)
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
        for (let ub = 0, hb = this._keys.length; ub < hb; ub++) bb < this._keys[ub].frame && (bb = this._keys[ub].frame);
        return bb
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(bb) {
        this._easingFunction = bb
      }
      floatInterpolateFunction(bb, ub, hb) {
        return (0, Gb.Lerp)(bb, ub, hb)
      }
      floatInterpolateFunctionWithTangents(bb, ub, hb, Bb, Ob) {
        return (0, Gb.Hermite)(bb, ub, hb, Bb, Ob)
      }
      quaternionInterpolateFunction(bb, ub, hb) {
        return Bb.f.Slerp(bb, ub, hb)
      }
      quaternionInterpolateFunctionWithTangents(bb, ub, hb, Ob, Gb) {
        return Bb.f.Hermite(bb, ub, hb, Ob, Gb).normalize()
      }
      vector3InterpolateFunction(bb, ub, hb) {
        return Bb.q.Lerp(bb, ub, hb)
      }
      vector3InterpolateFunctionWithTangents(bb, ub, hb, Ob, Gb) {
        return Bb.q.Hermite(bb, ub, hb, Ob, Gb)
      }
      vector2InterpolateFunction(bb, ub, hb) {
        return Bb.m.Lerp(bb, ub, hb)
      }
      vector2InterpolateFunctionWithTangents(bb, ub, hb, Ob, Gb) {
        return Bb.m.Hermite(bb, ub, hb, Ob, Gb)
      }
      sizeInterpolateFunction(bb, ub, hb) {
        return Yb.d.Lerp(bb, ub, hb)
      }
      color3InterpolateFunction(bb, ub, hb) {
        return Ob.b.Lerp(bb, ub, hb)
      }
      color3InterpolateFunctionWithTangents(bb, ub, hb, Bb, Gb) {
        return Ob.b.Hermite(bb, ub, hb, Bb, Gb)
      }
      color4InterpolateFunction(bb, ub, hb) {
        return Ob.c.Lerp(bb, ub, hb)
      }
      color4InterpolateFunctionWithTangents(bb, ub, hb, Bb, Gb) {
        return Ob.c.Hermite(bb, ub, hb, Bb, Gb)
      }
      _getKeyValue(bb) {
        return "function" === typeof bb ? bb() : bb
      }
      evaluate(bb) {
        return lb.key = 0, this._interpolate(bb, lb)
      }
      _interpolate(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (ub.pb === Kb.ANIMATIONLOOPMODE_CONSTANT && ub.repeatCount > 0) return ub.highLimitValue.clone ? ub.highLimitValue.clone() : ub.highLimitValue;
        const Bb = this._keys;
        let Ob;
        if (this._coreAnimation) Ob = this._coreAnimation._key;
        else {
          const Gb = Bb.length;
          for (Ob = ub.key; Ob >= 0 && bb < Bb[Ob].frame;) --Ob;
          for (; Ob + 1 <= Gb - 1 && bb >= Bb[Ob + 1].frame;) ++Ob;
          if (ub.key = Ob, Ob < 0) return hb ? void 0 : this._getKeyValue(Bb[0].value);
          if (Ob + 1 > Gb - 1) return hb ? void 0 : this._getKeyValue(Bb[Gb - 1].value);
          this._key = Ob
        }
        const Gb = Bb[Ob],
          Ub = Bb[Ob + 1];
        if (hb && (bb === Gb.frame || bb === Ub.frame)) return;
        const Lb = this._getKeyValue(Gb.value),
          Yb = this._getKeyValue(Ub.value);
        if (1 === Gb.interpolation) return Ub.frame > bb ? Lb : Yb;
        const Sb = void 0 !== Gb.outTangent && void 0 !== Ub.inTangent,
          ab = Ub.frame - Gb.frame;
        let Hb = (bb - Gb.frame) / ab;
        const lb = Gb.easingFunction || this.getEasingFunction();
        switch (lb && (Hb = lb.ease(Hb)), this.dataType) {
          case Kb.ANIMATIONTYPE_FLOAT: {
            const bb = Sb ? this.floatInterpolateFunctionWithTangents(Lb, Gb.outTangent * ab, Yb, Ub.inTangent * ab, Hb) : this.floatInterpolateFunction(Lb, Yb, Hb);
            switch (ub.pb) {
              case Kb.ANIMATIONLOOPMODE_CYCLE:
              case Kb.ANIMATIONLOOPMODE_CONSTANT:
              case Kb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Kb.ANIMATIONLOOPMODE_RELATIVE:
              case Kb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (ub.offsetValue ?? 0) * ub.repeatCount + bb
            }
            break
          }
          case Kb.ANIMATIONTYPE_QUATERNION: {
            const bb = Sb ? this.quaternionInterpolateFunctionWithTangents(Lb, Gb.outTangent.scale(ab), Yb, Ub.inTangent.scale(ab), Hb) : this.quaternionInterpolateFunction(Lb, Yb, Hb);
            switch (ub.pb) {
              case Kb.ANIMATIONLOOPMODE_CYCLE:
              case Kb.ANIMATIONLOOPMODE_CONSTANT:
              case Kb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Kb.ANIMATIONLOOPMODE_RELATIVE:
              case Kb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.addInPlace((ub.offsetValue || wb).scale(ub.repeatCount))
            }
            return bb
          }
          case Kb.ANIMATIONTYPE_VECTOR3: {
            const bb = Sb ? this.vector3InterpolateFunctionWithTangents(Lb, Gb.outTangent.scale(ab), Yb, Ub.inTangent.scale(ab), Hb) : this.vector3InterpolateFunction(Lb, Yb, Hb);
            switch (ub.pb) {
              case Kb.ANIMATIONLOOPMODE_CYCLE:
              case Kb.ANIMATIONLOOPMODE_CONSTANT:
              case Kb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Kb.ANIMATIONLOOPMODE_RELATIVE:
              case Kb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((ub.offsetValue || Zb).scale(ub.repeatCount))
            }
            break
          }
          case Kb.ANIMATIONTYPE_VECTOR2: {
            const bb = Sb ? this.vector2InterpolateFunctionWithTangents(Lb, Gb.outTangent.scale(ab), Yb, Ub.inTangent.scale(ab), Hb) : this.vector2InterpolateFunction(Lb, Yb, Hb);
            switch (ub.pb) {
              case Kb.ANIMATIONLOOPMODE_CYCLE:
              case Kb.ANIMATIONLOOPMODE_CONSTANT:
              case Kb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Kb.ANIMATIONLOOPMODE_RELATIVE:
              case Kb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((ub.offsetValue || Xb).scale(ub.repeatCount))
            }
            break
          }
          case Kb.ANIMATIONTYPE_SIZE:
            switch (ub.pb) {
              case Kb.ANIMATIONLOOPMODE_CYCLE:
              case Kb.ANIMATIONLOOPMODE_CONSTANT:
              case Kb.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(Lb, Yb, Hb);
              case Kb.ANIMATIONLOOPMODE_RELATIVE:
              case Kb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(Lb, Yb, Hb).add((ub.offsetValue || pb).scale(ub.repeatCount))
            }
            break;
          case Kb.ANIMATIONTYPE_COLOR3: {
            const bb = Sb ? this.color3InterpolateFunctionWithTangents(Lb, Gb.outTangent.scale(ab), Yb, Ub.inTangent.scale(ab), Hb) : this.color3InterpolateFunction(Lb, Yb, Hb);
            switch (ub.pb) {
              case Kb.ANIMATIONLOOPMODE_CYCLE:
              case Kb.ANIMATIONLOOPMODE_CONSTANT:
              case Kb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Kb.ANIMATIONLOOPMODE_RELATIVE:
              case Kb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((ub.offsetValue || ob).scale(ub.repeatCount))
            }
            break
          }
          case Kb.ANIMATIONTYPE_COLOR4: {
            const bb = Sb ? this.color4InterpolateFunctionWithTangents(Lb, Gb.outTangent.scale(ab), Yb, Ub.inTangent.scale(ab), Hb) : this.color4InterpolateFunction(Lb, Yb, Hb);
            switch (ub.pb) {
              case Kb.ANIMATIONLOOPMODE_CYCLE:
              case Kb.ANIMATIONLOOPMODE_CONSTANT:
              case Kb.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Kb.ANIMATIONLOOPMODE_RELATIVE:
              case Kb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((ub.offsetValue || Ab).scale(ub.repeatCount))
            }
            break
          }
          case Kb.ANIMATIONTYPE_MATRIX:
            switch (ub.pb) {
              case Kb.ANIMATIONLOOPMODE_CYCLE:
              case Kb.ANIMATIONLOOPMODE_CONSTANT:
              case Kb.ANIMATIONLOOPMODE_YOYO:
                return Kb.AllowMatricesInterpolation ? this.matrixInterpolateFunction(Lb, Yb, Hb, ub.workValue) : Lb;
              case Kb.ANIMATIONLOOPMODE_RELATIVE:
              case Kb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return Lb
            }
        }
        return 0
      }
      matrixInterpolateFunction(bb, ub, hb, Ob) {
        return Kb.AllowMatrixDecomposeForInterpolation ? Ob ? (Bb.d.DecomposeLerpToRef(bb, ub, hb, Ob), Ob) : Bb.d.DecomposeLerp(bb, ub, hb) : Ob ? (Bb.d.LerpToRef(bb, ub, hb, Ob), Ob) : Bb.d.Lerp(bb, ub, hb)
      }
      clone() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ub = new Kb(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.pb);
        if (ub.enableBlending = this.enableBlending, ub.blendingSpeed = this.blendingSpeed, this._keys && ub.setKeys(this._keys, !1, bb), this._ranges) {
          ub._ranges = {};
          for (const bb in this._ranges) {
            const hb = this._ranges[bb];
            hb && (ub._ranges[bb] = hb.clone())
          }
        }
        return ub
      }
      setKeys(bb) {
        let ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = bb;
        else if (this._keys = bb.slice(0), ub)
          for (let hb = 0; hb < this._keys.length; hb++) {
            const bb = this._keys[hb];
            this._keys[hb] = {
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
        lb.key = 0;
        const ub = this._interpolate(bb, lb, !0);
        if (!ub) return this._keys[lb.key].frame === bb ? lb.key : lb.key + 1;
        const hb = {
          frame: bb,
          value: ub.clone ? ub.clone() : ub
        };
        return this._keys.splice(lb.key + 1, 0, hb), lb.key + 1
      }
      serialize() {
        const bb = {};
        bb.name = this.name, bb.property = this.targetProperty, bb.framePerSecond = this.framePerSecond, bb.dataType = this.dataType, bb.loopBehavior = this.pb, bb.enableBlending = this.enableBlending, bb.blendingSpeed = this.blendingSpeed;
        const ub = this.dataType;
        bb.keys = [];
        const hb = this.getKeys();
        for (let Bb = 0; Bb < hb.length; Bb++) {
          const Ob = hb[Bb],
            Gb = {};
          switch (Gb.frame = Ob.frame, ub) {
            case Kb.ANIMATIONTYPE_FLOAT:
              Gb.values = [Ob.value], void 0 !== Ob.inTangent && Gb.values.push(Ob.inTangent), void 0 !== Ob.outTangent && (void 0 === Ob.inTangent && Gb.values.push(void 0), Gb.values.push(Ob.outTangent)), void 0 !== Ob.interpolation && (void 0 === Ob.inTangent && Gb.values.push(void 0), void 0 === Ob.outTangent && Gb.values.push(void 0), Gb.values.push(Ob.interpolation));
              break;
            case Kb.ANIMATIONTYPE_QUATERNION:
            case Kb.ANIMATIONTYPE_MATRIX:
            case Kb.ANIMATIONTYPE_VECTOR3:
            case Kb.ANIMATIONTYPE_COLOR3:
            case Kb.ANIMATIONTYPE_COLOR4:
              Gb.values = Ob.value.ZBb(), void 0 != Ob.inTangent && Gb.values.push(Ob.inTangent.ZBb()), void 0 != Ob.outTangent && (void 0 === Ob.inTangent && Gb.values.push(void 0), Gb.values.push(Ob.outTangent.ZBb())), void 0 !== Ob.interpolation && (void 0 === Ob.inTangent && Gb.values.push(void 0), void 0 === Ob.outTangent && Gb.values.push(void 0), Gb.values.push(Ob.interpolation))
          }
          bb.keys.push(Gb)
        }
        bb.tp = [];
        for (const Bb in this._ranges) {
          const ub = this._ranges[Bb];
          if (!ub) continue;
          const hb = {};
          hb.name = Bb, hb.from = ub.from, hb.to = ub.to, bb.tp.push(hb)
        }
        return bb
      }
      static _UniversalLerp(bb, ub, hb) {
        const Bb = bb.constructor;
        return Bb.Lerp ? Bb.Lerp(bb, ub, hb) : Bb.Slerp ? Bb.Slerp(bb, ub, hb) : bb.toFixed ? bb * (1 - hb) + hb * ub : ub
      }
    }

    function Wb(bb, ub, hb) {
      let Ob;
      Ob = "object" === typeof ub ? ub : {
        referenceFrame: ub ?? 0,
        range: hb,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let Gb = bb;
      Ob.cloneOriginalAnimation && (Gb = bb.clone(), Gb.name = Ob.clonedAnimationName || Gb.name);
      const Ub = Gb.getKeys();
      if (!Ub.length) return Gb;
      const Lb = Ob.referenceFrame && Ob.referenceFrame >= 0 ? Ob.referenceFrame : 0;
      let Yb = 0;
      const Sb = Ub[0];
      let ab = Ub.length - 1;
      const Hb = Ub[ab],
        wb = {
          referenceValue: Sb.value,
          referencePosition: Bb.i.YX[0],
          referenceQuaternion: Bb.i.Quaternion[0],
          referenceScaling: Bb.i.YX[1],
          keyPosition: Bb.i.YX[2],
          keyQuaternion: Bb.i.Quaternion[1],
          keyScaling: Bb.i.YX[3]
        };
      let Zb = Sb.frame,
        Xb = Hb.frame;
      if (Ob.range) {
        const bb = Gb.getRange(Ob.range);
        bb && (Zb = bb.from, Xb = bb.to)
      } else Zb = Ob.fromFrame ?? Zb, Xb = Ob.toFrame ?? Xb;
      Zb !== Sb.frame && (Yb = Gb.createKeyForFrame(Zb)), Xb !== Hb.frame && (ab = Gb.createKeyForFrame(Xb));
      const pb = Gb.getKeys();
      if (1 === pb.length) {
        const bb = Gb._getKeyValue(pb[0].value);
        wb.referenceValue = bb.clone ? bb.clone() : bb
      } else if (Lb <= Sb.frame) {
        const bb = Gb._getKeyValue(Sb.value);
        wb.referenceValue = bb.clone ? bb.clone() : bb
      } else if (Lb >= Hb.frame) {
        const bb = Gb._getKeyValue(Hb.value);
        wb.referenceValue = bb.clone ? bb.clone() : bb
      } else {
        lb.key = 0;
        const bb = Gb._interpolate(Lb, lb);
        wb.referenceValue = bb.clone ? bb.clone() : bb
      }
      Gb.dataType === Kb.ANIMATIONTYPE_QUATERNION ? wb.referenceValue.normalize().conjugateInPlace() : Gb.dataType === Kb.ANIMATIONTYPE_MATRIX && (wb.referenceValue.decompose(wb.referenceScaling, wb.referenceQuaternion, wb.referencePosition), wb.referenceQuaternion.normalize().conjugateInPlace());
      let ob = Number.MAX_VALUE;
      const Ab = Ob.clipKeys ? [] : null;
      for (let lb = Yb; lb <= ab; lb++) {
        let bb = pb[lb];
        if ((Ab || Ob.cloneOriginalAnimation) && (bb = {
            frame: bb.frame,
            value: bb.value.clone ? bb.value.clone() : bb.value,
            inTangent: bb.inTangent,
            outTangent: bb.outTangent,
            interpolation: bb.interpolation,
            lockedTangent: bb.lockedTangent,
            easingFunction: bb.easingFunction
          }, Ab && (ob === Number.MAX_VALUE && (ob = bb.frame), bb.frame -= ob, Ab.push(bb))), !lb || Gb.dataType === Kb.ANIMATIONTYPE_FLOAT || bb.value !== Sb.value) switch (Gb.dataType) {
          case Kb.ANIMATIONTYPE_MATRIX:
            bb.value.decompose(wb.keyScaling, wb.keyQuaternion, wb.keyPosition), wb.keyPosition.tBb(wb.referencePosition), wb.keyScaling.divideInPlace(wb.referenceScaling), wb.referenceQuaternion.multiplyToRef(wb.keyQuaternion, wb.keyQuaternion), Bb.d.ComposeToRef(wb.keyScaling, wb.keyQuaternion, wb.keyPosition, bb.value);
            break;
          case Kb.ANIMATIONTYPE_QUATERNION:
            wb.referenceValue.multiplyToRef(bb.value, bb.value);
            break;
          case Kb.ANIMATIONTYPE_VECTOR2:
          case Kb.ANIMATIONTYPE_VECTOR3:
          case Kb.ANIMATIONTYPE_COLOR3:
          case Kb.ANIMATIONTYPE_COLOR4:
            bb.value.subtractToRef(wb.referenceValue, bb.value);
            break;
          case Kb.ANIMATIONTYPE_SIZE:
            bb.value.width -= wb.referenceValue.width, bb.value.height -= wb.referenceValue.height;
            break;
          default:
            bb.value -= wb.referenceValue
        }
      }
      return Ab && Gb.setKeys(Ab, !0), Gb
    }

    function Cb(bb, ub, hb, Bb) {
      const Ob = new Kb(bb + "Animation", bb, hb, ub, Kb.ANIMATIONLOOPMODE_CONSTANT);
      return Ob.setEasingFunction(Bb), Ob
    }

    function db(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab) {
      const Hb = Kb._PrepareAnimation(bb, hb, Bb, Ob, Gb, Ub, Lb, Yb);
      return Hb ? (ub.ZN && (ab = ub.ZN()), ab ? ab.beginDirectAnimation(ub, [Hb], 0, Ob, Hb.pb !== Kb.ANIMATIONLOOPMODE_CONSTANT, 1, Sb) : null) : null
    }

    function rb(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab) {
      const Hb = Kb._PrepareAnimation(bb, Bb, Ob, Gb, Ub, Lb, Yb, Sb);
      if (!Hb) return null;
      return ub.ZN().beginDirectHierarchyAnimation(ub, hb, [Hb], 0, Gb, 1 === Hb.pb, 1, ab)
    }

    function jb(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) {
      const ab = Kb._PrepareAnimation(bb, hb, Bb, Ob, Gb, Ub, Lb, Yb);
      return ab ? (ub.animations.push(ab), ub.ZN().beginAnimation(ub, 0, Ob, 1 === ab.pb, 1, Sb)) : null
    }

    function nb(bb, ub, hb, Bb, Ob, Gb, Ub) {
      let Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Yb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Sb = arguments.length > 9 ? arguments[9] : void 0;
      if (Ub <= 0) return hb[bb] = ub, Lb && Lb(), null;
      const ab = Ob * (Ub / 1e3);
      Gb.setKeys(Sb ?? [{
        frame: 0,
        value: hb[bb].clone ? hb[bb].clone() : hb[bb]
      }, {
        frame: ab,
        value: ub
      }]), hb.animations || (hb.animations = []), hb.animations.push(Gb);
      return Bb.beginAnimation(hb, 0, ab, !1, 1, Lb ?? void 0, void 0, Yb)
    }

    function Db(bb, ub) {
      ab.c.AppendSerializedAnimations(bb, ub)
    }

    function xb(bb) {
      const ub = new Kb(bb.name, bb.property, bb.framePerSecond, bb.dataType, bb.loopBehavior),
        hb = bb.dataType,
        Gb = [];
      let Ub, Lb;
      for (bb.enableBlending && (ub.enableBlending = bb.enableBlending), bb.blendingSpeed && (ub.blendingSpeed = bb.blendingSpeed), Lb = 0; Lb < bb.keys.length; Lb++) {
        const ub = bb.keys[Lb];
        let Yb, Sb, ab;
        switch (hb) {
          case Kb.ANIMATIONTYPE_FLOAT:
            Ub = ub.values[0], ub.values.length >= 2 && (Yb = ub.values[1]), ub.values.length >= 3 && (Sb = ub.values[2]), ub.values.length >= 4 && (ab = ub.values[3]);
            break;
          case Kb.ANIMATIONTYPE_QUATERNION:
            if (Ub = Bb.f.FromArray(ub.values), ub.values.length >= 8) {
              const bb = Bb.f.FromArray(ub.values.slice(4, 8));
              bb.equals(Bb.f.Zero()) || (Yb = bb)
            }
            if (ub.values.length >= 12) {
              const bb = Bb.f.FromArray(ub.values.slice(8, 12));
              bb.equals(Bb.f.Zero()) || (Sb = bb)
            }
            ub.values.length >= 13 && (ab = ub.values[12]);
            break;
          case Kb.ANIMATIONTYPE_MATRIX:
            Ub = Bb.d.FromArray(ub.values), ub.values.length >= 17 && (ab = ub.values[16]);
            break;
          case Kb.ANIMATIONTYPE_COLOR3:
            Ub = Ob.b.FromArray(ub.values), ub.values[3] && (Yb = Ob.b.FromArray(ub.values[3])), ub.values[4] && (Sb = Ob.b.FromArray(ub.values[4])), ub.values[5] && (ab = ub.values[5]);
            break;
          case Kb.ANIMATIONTYPE_COLOR4:
            Ub = Ob.c.FromArray(ub.values), ub.values[4] && (Yb = Ob.c.FromArray(ub.values[4])), ub.values[5] && (Sb = Ob.c.FromArray(ub.values[5])), ub.values[6] && (ab = ub.values[6]);
            break;
          case Kb.ANIMATIONTYPE_VECTOR3:
          default:
            Ub = Bb.q.FromArray(ub.values), ub.values[3] && (Yb = Bb.q.FromArray(ub.values[3])), ub.values[4] && (Sb = Bb.q.FromArray(ub.values[4])), ub.values[5] && (ab = ub.values[5])
        }
        const Hb = {};
        Hb.frame = ub.frame, Hb.value = Ub, void 0 != Yb && (Hb.inTangent = Yb), void 0 != Sb && (Hb.outTangent = Sb), void 0 != ab && (Hb.interpolation = ab), Gb.push(Hb)
      }
      if (ub.setKeys(Gb), bb.tp)
        for (Lb = 0; Lb < bb.tp.length; Lb++) Ub = bb.tp[Lb], ub.createRange(Ub.name, Ub.from, Ub.to);
      return ub
    }
    async function zb(bb, ub) {
      return await new Promise(((hb, Bb) => {
        const Ob = new Sb.b;
        Ob.addEventListener("readystatechange", (() => {
          if (4 == Ob.readyState)
            if (200 == Ob.status) {
              let ub = JSON.parse(Ob.responseText);
              if (ub.animations && (ub = ub.animations), ub.length) {
                const bb = [];
                for (const hb of ub) bb.push(xb(hb));
                hb(bb)
              } else {
                const Bb = xb(ub);
                bb && (Bb.name = bb), hb(Bb)
              }
            } else Bb("Unable to load the animation")
        })), Ob.open("GET", ub), Ob.send()
      }))
    }
    async function gb(bb) {
      const ub = this?.SnippetUrl ?? Kb.SnippetUrl;
      return await new Promise(((hb, Bb) => {
        const Ob = new Sb.b;
        Ob.addEventListener("readystatechange", (() => {
          if (4 == Ob.readyState)
            if (200 == Ob.status) {
              const ub = JSON.parse(JSON.parse(Ob.responseText).jsonPayload);
              if (ub.animations) {
                const Bb = JSON.parse(ub.animations),
                  Ob = [];
                for (const ub of Bb.animations) {
                  const hb = xb(ub);
                  hb.snippetId = bb, Ob.push(hb)
                }
                hb(Ob)
              } else {
                const Bb = xb(JSON.parse(ub.animation));
                Bb.snippetId = bb, hb(Bb)
              }
            } else Bb("Unable to load the snippet " + bb)
        })), Ob.open("GET", ub + "/" + bb.replace(/#/g, "/")), Ob.send()
      }))
    }
    Kb._UniqueIdGenerator = 0, Kb.AllowMatricesInterpolation = !1, Kb.AllowMatrixDecomposeForInterpolation = !0, Kb.InheritOriginalValueFromActiveAnimations = !1, Kb.SnippetUrl = "https://snippet.babylonjs.com", Kb.ANIMATIONTYPE_FLOAT = 0, Kb.ANIMATIONTYPE_VECTOR3 = 1, Kb.ANIMATIONTYPE_QUATERNION = 2, Kb.ANIMATIONTYPE_MATRIX = 3, Kb.ANIMATIONTYPE_COLOR3 = 4, Kb.ANIMATIONTYPE_COLOR4 = 7, Kb.ANIMATIONTYPE_VECTOR2 = 5, Kb.ANIMATIONTYPE_SIZE = 6, Kb.ANIMATIONLOOPMODE_RELATIVE = 0, Kb.ANIMATIONLOOPMODE_CYCLE = 1, Kb.ANIMATIONLOOPMODE_CONSTANT = 2, Kb.ANIMATIONLOOPMODE_YOYO = 4, Kb.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const ib = gb;
    let vb = !1;

    function tb() {
      vb || (vb = !0, Kb.Parse = xb, Kb.ParseFromFileAsync = zb, Kb.ParseFromSnippetAsync = gb, Kb.CreateFromSnippetAsync = ib, Kb.CreateAnimation = Cb, Kb.CreateAndStartAnimation = db, Kb.CreateAndStartHierarchyAnimation = rb, Kb.CreateMergeAndStartAnimation = jb, Kb.MakeAnimationAdditive = Wb, Kb.TransitionTo = nb, Kb.AppendSerializedAnimations = Db, (0, Hb.f)("BABYLON.Animation", Kb), Lb.b._AnimationRangeFactory = (bb, ub, hb) => new Ub.d(bb, ub, hb))
    }
  },
  40547: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    class Bb {
      constructor(bb, ub, hb) {
        this.name = bb, this.from = ub, this.to = hb
      }
      clone() {
        return new Bb(this.name, this.from, this.to)
      }
    }
  },
  40598: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb.b,
      e: () => Bb.i
    });
    var Bb = hb(39609);
    (0, Bb.f)()
  },
  40586: (bb, ub, hb) => {
    hb.d(ub, {
      c: () => Bb.f
    });
    var Bb = hb(39932);
    (0, Bb.e)()
  },
  40558: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb.b
    });
    var Bb = hb(39921);
    (0, Bb.f)()
  },
  40604: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb.c
    });
    var Bb = hb(39854);
    (0, Bb.f)()
  },
  40551: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb.g
    });
    var Bb = hb(39892);
    (0, Bb.c)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);