export const id = 264;
export const ids = [264];
export const modules = {
  40196: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Db,
      i: () => hb,
      m: () => kb,
      p: () => yb,
      r: () => Pb,
      u: () => Rb,
      v: () => jb,
      x: () => Xb
    });
    var Ab = Ub(36401),
      Mb = Ub(36593),
      Tb = Ub(36436),
      Eb = Ub(40202),
      Yb = Ub(39314),
      Bb = Ub(39120),
      eb = Ub(39153),
      vb = Ub(39124),
      Lb = Ub(36447);
    const Pb = Object.freeze(new Ab.e(0, 0, 0, 0)),
      Xb = Object.freeze(Ab.m.Zero()),
      jb = Object.freeze(Ab.l.Zero()),
      Rb = Object.freeze(Bb.c.Zero()),
      kb = Object.freeze(Mb.c.Black()),
      yb = Object.freeze(new Mb.g(0, 0, 0, 0)),
      Zb = {
        key: 0,
        repeatCount: 0,
        RT: 2
      };
    class Db {
      static _PrepareAnimation(bb, ab, Ub, Tb, Eb, Yb, eb, vb) {
        let Lb;
        if (!isNaN(parseFloat(Eb)) && isFinite(Eb) ? Lb = Db.ANIMATIONTYPE_FLOAT : Eb instanceof Ab.e ? Lb = Db.ANIMATIONTYPE_QUATERNION : Eb instanceof Ab.m ? Lb = Db.ANIMATIONTYPE_VECTOR3 : Eb instanceof Ab.l ? Lb = Db.ANIMATIONTYPE_VECTOR2 : Eb instanceof Mb.c ? Lb = Db.ANIMATIONTYPE_COLOR3 : Eb instanceof Mb.g ? Lb = Db.ANIMATIONTYPE_COLOR4 : Eb instanceof Bb.c && (Lb = Db.ANIMATIONTYPE_SIZE), void 0 == Lb) return null;
        const Pb = new Db(bb, ab, Ub, Lb, eb),
          Xb = [{
            frame: 0,
            value: Eb
          }, {
            frame: Tb,
            value: Yb
          }];
        return Pb.setKeys(Xb), void 0 !== vb && Pb.setEasingFunction(vb), Pb
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const bb of this._runtimeAnimations)
          if (!bb.isStopped()) return !0;
        return !1
      }
      constructor(bb, ab, Ub, Ab, Mb, Tb) {
        this.name = bb, this.targetProperty = ab, this.framePerSecond = Ub, this.dataType = Ab, this.RT = Mb, this.enableBlending = Tb, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = ab.split("."), this.dataType = Ab, this.RT = void 0 === Mb ? Db.ANIMATIONLOOPMODE_CYCLE : Mb, this.uniqueId = Db._UniqueIdGenerator++
      }
      toString(bb) {
        let ab = "Name: " + this.name + ", property: " + this.targetProperty;
        if (ab += ", datatype: " + ["Float", "Pj", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], ab += ", nKeys: " + (this._keys ? this._keys.length : "none"), ab += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), bb) {
          ab += ", Ranges: {";
          let bb = !0;
          for (const Ub in this._ranges) bb || (ab += ", "), bb = !1, ab += Ub;
          ab += "}"
        }
        return ab
      }
      addEvent(bb) {
        this._events.push(bb), this._events.sort(((bb, ab) => bb.frame - ab.frame))
      }
      removeEvents(bb) {
        for (let ab = 0; ab < this._events.length; ab++) this._events[ab].frame === bb && (this._events.splice(ab, 1), ab--)
      }
      getEvents() {
        return this._events
      }
      createRange(bb, ab, Ub) {
        this._ranges[bb] || (this._ranges[bb] = new Eb.d(bb, ab, Ub))
      }
      deleteRange(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Ub = this._ranges[bb];
        if (Ub) {
          if (ab) {
            const bb = Ub.from,
              ab = Ub.to;
            for (let Ub = this._keys.length - 1; Ub >= 0; Ub--) this._keys[Ub].frame >= bb && this._keys[Ub].frame <= ab && this._keys.splice(Ub, 1)
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
        for (let ab = 0, Ub = this._keys.length; ab < Ub; ab++) bb < this._keys[ab].frame && (bb = this._keys[ab].frame);
        return bb
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(bb) {
        this._easingFunction = bb
      }
      floatInterpolateFunction(bb, ab, Ub) {
        return (0, Tb.Lerp)(bb, ab, Ub)
      }
      floatInterpolateFunctionWithTangents(bb, ab, Ub, Ab, Mb) {
        return (0, Tb.Hermite)(bb, ab, Ub, Ab, Mb)
      }
      quaternionInterpolateFunction(bb, ab, Ub) {
        return Ab.e.Slerp(bb, ab, Ub)
      }
      quaternionInterpolateFunctionWithTangents(bb, ab, Ub, Mb, Tb) {
        return Ab.e.Hermite(bb, ab, Ub, Mb, Tb).normalize()
      }
      vector3InterpolateFunction(bb, ab, Ub) {
        return Ab.m.Lerp(bb, ab, Ub)
      }
      vector3InterpolateFunctionWithTangents(bb, ab, Ub, Mb, Tb) {
        return Ab.m.Hermite(bb, ab, Ub, Mb, Tb)
      }
      vector2InterpolateFunction(bb, ab, Ub) {
        return Ab.l.Lerp(bb, ab, Ub)
      }
      vector2InterpolateFunctionWithTangents(bb, ab, Ub, Mb, Tb) {
        return Ab.l.Hermite(bb, ab, Ub, Mb, Tb)
      }
      sizeInterpolateFunction(bb, ab, Ub) {
        return Bb.c.Lerp(bb, ab, Ub)
      }
      color3InterpolateFunction(bb, ab, Ub) {
        return Mb.c.Lerp(bb, ab, Ub)
      }
      color3InterpolateFunctionWithTangents(bb, ab, Ub, Ab, Tb) {
        return Mb.c.Hermite(bb, ab, Ub, Ab, Tb)
      }
      color4InterpolateFunction(bb, ab, Ub) {
        return Mb.g.Lerp(bb, ab, Ub)
      }
      color4InterpolateFunctionWithTangents(bb, ab, Ub, Ab, Tb) {
        return Mb.g.Hermite(bb, ab, Ub, Ab, Tb)
      }
      _getKeyValue(bb) {
        return "function" === typeof bb ? bb() : bb
      }
      evaluate(bb) {
        return Zb.key = 0, this._interpolate(bb, Zb)
      }
      _interpolate(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (ab.RT === Db.ANIMATIONLOOPMODE_CONSTANT && ab.repeatCount > 0) return ab.highLimitValue.clone ? ab.highLimitValue.clone() : ab.highLimitValue;
        const Ab = this._keys;
        let Mb;
        if (this._coreAnimation) Mb = this._coreAnimation._key;
        else {
          const Tb = Ab.length;
          for (Mb = ab.key; Mb >= 0 && bb < Ab[Mb].frame;) --Mb;
          for (; Mb + 1 <= Tb - 1 && bb >= Ab[Mb + 1].frame;) ++Mb;
          if (ab.key = Mb, Mb < 0) return Ub ? void 0 : this._getKeyValue(Ab[0].value);
          if (Mb + 1 > Tb - 1) return Ub ? void 0 : this._getKeyValue(Ab[Tb - 1].value);
          this._key = Mb
        }
        const Tb = Ab[Mb],
          Eb = Ab[Mb + 1];
        if (Ub && (bb === Tb.frame || bb === Eb.frame)) return;
        const Yb = this._getKeyValue(Tb.value),
          Bb = this._getKeyValue(Eb.value);
        if (1 === Tb.interpolation) return Eb.frame > bb ? Yb : Bb;
        const eb = void 0 !== Tb.outTangent && void 0 !== Eb.inTangent,
          vb = Eb.frame - Tb.frame;
        let Lb = (bb - Tb.frame) / vb;
        const Zb = Tb.easingFunction || this.getEasingFunction();
        switch (Zb && (Lb = Zb.ease(Lb)), this.dataType) {
          case Db.ANIMATIONTYPE_FLOAT: {
            const bb = eb ? this.floatInterpolateFunctionWithTangents(Yb, Tb.outTangent * vb, Bb, Eb.inTangent * vb, Lb) : this.floatInterpolateFunction(Yb, Bb, Lb);
            switch (ab.RT) {
              case Db.ANIMATIONLOOPMODE_CYCLE:
              case Db.ANIMATIONLOOPMODE_CONSTANT:
              case Db.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Db.ANIMATIONLOOPMODE_RELATIVE:
              case Db.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (ab.offsetValue ?? 0) * ab.repeatCount + bb
            }
            break
          }
          case Db.ANIMATIONTYPE_QUATERNION: {
            const bb = eb ? this.quaternionInterpolateFunctionWithTangents(Yb, Tb.outTangent.scale(vb), Bb, Eb.inTangent.scale(vb), Lb) : this.quaternionInterpolateFunction(Yb, Bb, Lb);
            switch (ab.RT) {
              case Db.ANIMATIONLOOPMODE_CYCLE:
              case Db.ANIMATIONLOOPMODE_CONSTANT:
              case Db.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Db.ANIMATIONLOOPMODE_RELATIVE:
              case Db.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.addInPlace((ab.offsetValue || Pb).scale(ab.repeatCount))
            }
            return bb
          }
          case Db.ANIMATIONTYPE_VECTOR3: {
            const bb = eb ? this.vector3InterpolateFunctionWithTangents(Yb, Tb.outTangent.scale(vb), Bb, Eb.inTangent.scale(vb), Lb) : this.vector3InterpolateFunction(Yb, Bb, Lb);
            switch (ab.RT) {
              case Db.ANIMATIONLOOPMODE_CYCLE:
              case Db.ANIMATIONLOOPMODE_CONSTANT:
              case Db.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Db.ANIMATIONLOOPMODE_RELATIVE:
              case Db.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((ab.offsetValue || Xb).scale(ab.repeatCount))
            }
            break
          }
          case Db.ANIMATIONTYPE_VECTOR2: {
            const bb = eb ? this.vector2InterpolateFunctionWithTangents(Yb, Tb.outTangent.scale(vb), Bb, Eb.inTangent.scale(vb), Lb) : this.vector2InterpolateFunction(Yb, Bb, Lb);
            switch (ab.RT) {
              case Db.ANIMATIONLOOPMODE_CYCLE:
              case Db.ANIMATIONLOOPMODE_CONSTANT:
              case Db.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Db.ANIMATIONLOOPMODE_RELATIVE:
              case Db.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((ab.offsetValue || jb).scale(ab.repeatCount))
            }
            break
          }
          case Db.ANIMATIONTYPE_SIZE:
            switch (ab.RT) {
              case Db.ANIMATIONLOOPMODE_CYCLE:
              case Db.ANIMATIONLOOPMODE_CONSTANT:
              case Db.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(Yb, Bb, Lb);
              case Db.ANIMATIONLOOPMODE_RELATIVE:
              case Db.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(Yb, Bb, Lb).add((ab.offsetValue || Rb).scale(ab.repeatCount))
            }
            break;
          case Db.ANIMATIONTYPE_COLOR3: {
            const bb = eb ? this.color3InterpolateFunctionWithTangents(Yb, Tb.outTangent.scale(vb), Bb, Eb.inTangent.scale(vb), Lb) : this.color3InterpolateFunction(Yb, Bb, Lb);
            switch (ab.RT) {
              case Db.ANIMATIONLOOPMODE_CYCLE:
              case Db.ANIMATIONLOOPMODE_CONSTANT:
              case Db.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Db.ANIMATIONLOOPMODE_RELATIVE:
              case Db.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((ab.offsetValue || kb).scale(ab.repeatCount))
            }
            break
          }
          case Db.ANIMATIONTYPE_COLOR4: {
            const bb = eb ? this.color4InterpolateFunctionWithTangents(Yb, Tb.outTangent.scale(vb), Bb, Eb.inTangent.scale(vb), Lb) : this.color4InterpolateFunction(Yb, Bb, Lb);
            switch (ab.RT) {
              case Db.ANIMATIONLOOPMODE_CYCLE:
              case Db.ANIMATIONLOOPMODE_CONSTANT:
              case Db.ANIMATIONLOOPMODE_YOYO:
                return bb;
              case Db.ANIMATIONLOOPMODE_RELATIVE:
              case Db.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return bb.add((ab.offsetValue || yb).scale(ab.repeatCount))
            }
            break
          }
          case Db.ANIMATIONTYPE_MATRIX:
            switch (ab.RT) {
              case Db.ANIMATIONLOOPMODE_CYCLE:
              case Db.ANIMATIONLOOPMODE_CONSTANT:
              case Db.ANIMATIONLOOPMODE_YOYO:
                return Db.AllowMatricesInterpolation ? this.matrixInterpolateFunction(Yb, Bb, Lb, ab.workValue) : Yb;
              case Db.ANIMATIONLOOPMODE_RELATIVE:
              case Db.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return Yb
            }
        }
        return 0
      }
      matrixInterpolateFunction(bb, ab, Ub, Mb) {
        return Db.AllowMatrixDecomposeForInterpolation ? Mb ? (Ab.b.DecomposeLerpToRef(bb, ab, Ub, Mb), Mb) : Ab.b.DecomposeLerp(bb, ab, Ub) : Mb ? (Ab.b.LerpToRef(bb, ab, Ub, Mb), Mb) : Ab.b.Lerp(bb, ab, Ub)
      }
      clone() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ab = new Db(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.RT);
        if (ab.enableBlending = this.enableBlending, ab.blendingSpeed = this.blendingSpeed, this._keys && ab.setKeys(this._keys, !1, bb), this._ranges) {
          ab._ranges = {};
          for (const bb in this._ranges) {
            const Ub = this._ranges[bb];
            Ub && (ab._ranges[bb] = Ub.clone())
          }
        }
        return ab
      }
      setKeys(bb) {
        let ab = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = bb;
        else if (this._keys = bb.slice(0), ab)
          for (let Ub = 0; Ub < this._keys.length; Ub++) {
            const bb = this._keys[Ub];
            this._keys[Ub] = {
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
        Zb.key = 0;
        const ab = this._interpolate(bb, Zb, !0);
        if (!ab) return this._keys[Zb.key].frame === bb ? Zb.key : Zb.key + 1;
        const Ub = {
          frame: bb,
          value: ab.clone ? ab.clone() : ab
        };
        return this._keys.splice(Zb.key + 1, 0, Ub), Zb.key + 1
      }
      serialize() {
        const bb = {};
        bb.name = this.name, bb.property = this.targetProperty, bb.framePerSecond = this.framePerSecond, bb.dataType = this.dataType, bb.loopBehavior = this.RT, bb.enableBlending = this.enableBlending, bb.blendingSpeed = this.blendingSpeed;
        const ab = this.dataType;
        bb.keys = [];
        const Ub = this.getKeys();
        for (let Ab = 0; Ab < Ub.length; Ab++) {
          const Mb = Ub[Ab],
            Tb = {};
          switch (Tb.frame = Mb.frame, ab) {
            case Db.ANIMATIONTYPE_FLOAT:
              Tb.values = [Mb.value], void 0 !== Mb.inTangent && Tb.values.push(Mb.inTangent), void 0 !== Mb.outTangent && (void 0 === Mb.inTangent && Tb.values.push(void 0), Tb.values.push(Mb.outTangent)), void 0 !== Mb.interpolation && (void 0 === Mb.inTangent && Tb.values.push(void 0), void 0 === Mb.outTangent && Tb.values.push(void 0), Tb.values.push(Mb.interpolation));
              break;
            case Db.ANIMATIONTYPE_QUATERNION:
            case Db.ANIMATIONTYPE_MATRIX:
            case Db.ANIMATIONTYPE_VECTOR3:
            case Db.ANIMATIONTYPE_COLOR3:
            case Db.ANIMATIONTYPE_COLOR4:
              Tb.values = Mb.value.qUb(), void 0 != Mb.inTangent && Tb.values.push(Mb.inTangent.qUb()), void 0 != Mb.outTangent && (void 0 === Mb.inTangent && Tb.values.push(void 0), Tb.values.push(Mb.outTangent.qUb())), void 0 !== Mb.interpolation && (void 0 === Mb.inTangent && Tb.values.push(void 0), void 0 === Mb.outTangent && Tb.values.push(void 0), Tb.values.push(Mb.interpolation))
          }
          bb.keys.push(Tb)
        }
        bb.cj = [];
        for (const Ab in this._ranges) {
          const ab = this._ranges[Ab];
          if (!ab) continue;
          const Ub = {};
          Ub.name = Ab, Ub.from = ab.from, Ub.to = ab.to, bb.cj.push(Ub)
        }
        return bb
      }
      static _UniversalLerp(bb, ab, Ub) {
        const Ab = bb.constructor;
        return Ab.Lerp ? Ab.Lerp(bb, ab, Ub) : Ab.Slerp ? Ab.Slerp(bb, ab, Ub) : bb.toFixed ? bb * (1 - Ub) + Ub * ab : ab
      }
    }

    function zb(bb, ab, Ub) {
      let Mb;
      Mb = "object" === typeof ab ? ab : {
        referenceFrame: ab ?? 0,
        range: Ub,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let Tb = bb;
      Mb.cloneOriginalAnimation && (Tb = bb.clone(), Tb.name = Mb.clonedAnimationName || Tb.name);
      const Eb = Tb.getKeys();
      if (!Eb.length) return Tb;
      const Yb = Mb.referenceFrame && Mb.referenceFrame >= 0 ? Mb.referenceFrame : 0;
      let Bb = 0;
      const eb = Eb[0];
      let vb = Eb.length - 1;
      const Lb = Eb[vb],
        Pb = {
          referenceValue: eb.value,
          referencePosition: Ab.j.Pj[0],
          referenceQuaternion: Ab.j.Quaternion[0],
          referenceScaling: Ab.j.Pj[1],
          keyPosition: Ab.j.Pj[2],
          keyQuaternion: Ab.j.Quaternion[1],
          keyScaling: Ab.j.Pj[3]
        };
      let Xb = eb.frame,
        jb = Lb.frame;
      if (Mb.range) {
        const bb = Tb.getRange(Mb.range);
        bb && (Xb = bb.from, jb = bb.to)
      } else Xb = Mb.fromFrame ?? Xb, jb = Mb.toFrame ?? jb;
      Xb !== eb.frame && (Bb = Tb.createKeyForFrame(Xb)), jb !== Lb.frame && (vb = Tb.createKeyForFrame(jb));
      const Rb = Tb.getKeys();
      if (1 === Rb.length) {
        const bb = Tb._getKeyValue(Rb[0].value);
        Pb.referenceValue = bb.clone ? bb.clone() : bb
      } else if (Yb <= eb.frame) {
        const bb = Tb._getKeyValue(eb.value);
        Pb.referenceValue = bb.clone ? bb.clone() : bb
      } else if (Yb >= Lb.frame) {
        const bb = Tb._getKeyValue(Lb.value);
        Pb.referenceValue = bb.clone ? bb.clone() : bb
      } else {
        Zb.key = 0;
        const bb = Tb._interpolate(Yb, Zb);
        Pb.referenceValue = bb.clone ? bb.clone() : bb
      }
      Tb.dataType === Db.ANIMATIONTYPE_QUATERNION ? Pb.referenceValue.normalize().conjugateInPlace() : Tb.dataType === Db.ANIMATIONTYPE_MATRIX && (Pb.referenceValue.decompose(Pb.referenceScaling, Pb.referenceQuaternion, Pb.referencePosition), Pb.referenceQuaternion.normalize().conjugateInPlace());
      let kb = Number.MAX_VALUE;
      const yb = Mb.clipKeys ? [] : null;
      for (let Zb = Bb; Zb <= vb; Zb++) {
        let bb = Rb[Zb];
        if ((yb || Mb.cloneOriginalAnimation) && (bb = {
            frame: bb.frame,
            value: bb.value.clone ? bb.value.clone() : bb.value,
            inTangent: bb.inTangent,
            outTangent: bb.outTangent,
            interpolation: bb.interpolation,
            lockedTangent: bb.lockedTangent,
            easingFunction: bb.easingFunction
          }, yb && (kb === Number.MAX_VALUE && (kb = bb.frame), bb.frame -= kb, yb.push(bb))), !Zb || Tb.dataType === Db.ANIMATIONTYPE_FLOAT || bb.value !== eb.value) switch (Tb.dataType) {
          case Db.ANIMATIONTYPE_MATRIX:
            bb.value.decompose(Pb.keyScaling, Pb.keyQuaternion, Pb.keyPosition), Pb.keyPosition.MAb(Pb.referencePosition), Pb.keyScaling.divideInPlace(Pb.referenceScaling), Pb.referenceQuaternion.multiplyToRef(Pb.keyQuaternion, Pb.keyQuaternion), Ab.b.ComposeToRef(Pb.keyScaling, Pb.keyQuaternion, Pb.keyPosition, bb.value);
            break;
          case Db.ANIMATIONTYPE_QUATERNION:
            Pb.referenceValue.multiplyToRef(bb.value, bb.value);
            break;
          case Db.ANIMATIONTYPE_VECTOR2:
          case Db.ANIMATIONTYPE_VECTOR3:
          case Db.ANIMATIONTYPE_COLOR3:
          case Db.ANIMATIONTYPE_COLOR4:
            bb.value.subtractToRef(Pb.referenceValue, bb.value);
            break;
          case Db.ANIMATIONTYPE_SIZE:
            bb.value.width -= Pb.referenceValue.width, bb.value.height -= Pb.referenceValue.height;
            break;
          default:
            bb.value -= Pb.referenceValue
        }
      }
      return yb && Tb.setKeys(yb, !0), Tb
    }

    function xb(bb, ab, Ub, Ab) {
      const Mb = new Db(bb + "Animation", bb, Ub, ab, Db.ANIMATIONLOOPMODE_CONSTANT);
      return Mb.setEasingFunction(Ab), Mb
    }

    function ib(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb) {
      const Lb = Db._PrepareAnimation(bb, Ub, Ab, Mb, Tb, Eb, Yb, Bb);
      return Lb ? (ab.oN && (vb = ab.oN()), vb ? vb.beginDirectAnimation(ab, [Lb], 0, Mb, Lb.RT !== Db.ANIMATIONLOOPMODE_CONSTANT, 1, eb) : null) : null
    }

    function fb(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb) {
      const Lb = Db._PrepareAnimation(bb, Ab, Mb, Tb, Eb, Yb, Bb, eb);
      if (!Lb) return null;
      return ab.oN().beginDirectHierarchyAnimation(ab, Ub, [Lb], 0, Tb, 1 === Lb.RT, 1, vb)
    }

    function mb(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb) {
      const vb = Db._PrepareAnimation(bb, Ub, Ab, Mb, Tb, Eb, Yb, Bb);
      return vb ? (ab.animations.push(vb), ab.oN().beginAnimation(ab, 0, Mb, 1 === vb.RT, 1, eb)) : null
    }

    function pb(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      let Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Bb = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        eb = arguments.length > 9 ? arguments[9] : void 0;
      if (Eb <= 0) return Ub[bb] = ab, Yb && Yb(), null;
      const vb = Mb * (Eb / 1e3);
      Tb.setKeys(eb ?? [{
        frame: 0,
        value: Ub[bb].clone ? Ub[bb].clone() : Ub[bb]
      }, {
        frame: vb,
        value: ab
      }]), Ub.animations || (Ub.animations = []), Ub.animations.push(Tb);
      return Ab.beginAnimation(Ub, 0, vb, !1, 1, Yb ?? void 0, void 0, Bb)
    }

    function Nb(bb, ab) {
      vb.b.AppendSerializedAnimations(bb, ab)
    }

    function Wb(bb) {
      const ab = new Db(bb.name, bb.property, bb.framePerSecond, bb.dataType, bb.loopBehavior),
        Ub = bb.dataType,
        Tb = [];
      let Eb, Yb;
      for (bb.enableBlending && (ab.enableBlending = bb.enableBlending), bb.blendingSpeed && (ab.blendingSpeed = bb.blendingSpeed), Yb = 0; Yb < bb.keys.length; Yb++) {
        const ab = bb.keys[Yb];
        let Bb, eb, vb;
        switch (Ub) {
          case Db.ANIMATIONTYPE_FLOAT:
            Eb = ab.values[0], ab.values.length >= 2 && (Bb = ab.values[1]), ab.values.length >= 3 && (eb = ab.values[2]), ab.values.length >= 4 && (vb = ab.values[3]);
            break;
          case Db.ANIMATIONTYPE_QUATERNION:
            if (Eb = Ab.e.FromArray(ab.values), ab.values.length >= 8) {
              const bb = Ab.e.FromArray(ab.values.slice(4, 8));
              bb.equals(Ab.e.Zero()) || (Bb = bb)
            }
            if (ab.values.length >= 12) {
              const bb = Ab.e.FromArray(ab.values.slice(8, 12));
              bb.equals(Ab.e.Zero()) || (eb = bb)
            }
            ab.values.length >= 13 && (vb = ab.values[12]);
            break;
          case Db.ANIMATIONTYPE_MATRIX:
            Eb = Ab.b.FromArray(ab.values), ab.values.length >= 17 && (vb = ab.values[16]);
            break;
          case Db.ANIMATIONTYPE_COLOR3:
            Eb = Mb.c.FromArray(ab.values), ab.values[3] && (Bb = Mb.c.FromArray(ab.values[3])), ab.values[4] && (eb = Mb.c.FromArray(ab.values[4])), ab.values[5] && (vb = ab.values[5]);
            break;
          case Db.ANIMATIONTYPE_COLOR4:
            Eb = Mb.g.FromArray(ab.values), ab.values[4] && (Bb = Mb.g.FromArray(ab.values[4])), ab.values[5] && (eb = Mb.g.FromArray(ab.values[5])), ab.values[6] && (vb = ab.values[6]);
            break;
          case Db.ANIMATIONTYPE_VECTOR3:
          default:
            Eb = Ab.m.FromArray(ab.values), ab.values[3] && (Bb = Ab.m.FromArray(ab.values[3])), ab.values[4] && (eb = Ab.m.FromArray(ab.values[4])), ab.values[5] && (vb = ab.values[5])
        }
        const Lb = {};
        Lb.frame = ab.frame, Lb.value = Eb, void 0 != Bb && (Lb.inTangent = Bb), void 0 != eb && (Lb.outTangent = eb), void 0 != vb && (Lb.interpolation = vb), Tb.push(Lb)
      }
      if (ab.setKeys(Tb), bb.cj)
        for (Yb = 0; Yb < bb.cj.length; Yb++) Eb = bb.cj[Yb], ab.createRange(Eb.name, Eb.from, Eb.to);
      return ab
    }
    async function Hb(bb, ab) {
      return await new Promise(((Ub, Ab) => {
        const Mb = new eb.d;
        Mb.addEventListener("readystatechange", (() => {
          if (4 == Mb.readyState)
            if (200 == Mb.status) {
              let ab = JSON.parse(Mb.responseText);
              if (ab.animations && (ab = ab.animations), ab.length) {
                const bb = [];
                for (const Ub of ab) bb.push(Wb(Ub));
                Ub(bb)
              } else {
                const Ab = Wb(ab);
                bb && (Ab.name = bb), Ub(Ab)
              }
            } else Ab("Unable to load the animation")
        })), Mb.open("GET", ab), Mb.send()
      }))
    }
    async function Ib(bb) {
      const ab = this?.SnippetUrl ?? Db.SnippetUrl;
      return await new Promise(((Ub, Ab) => {
        const Mb = new eb.d;
        Mb.addEventListener("readystatechange", (() => {
          if (4 == Mb.readyState)
            if (200 == Mb.status) {
              const ab = JSON.parse(JSON.parse(Mb.responseText).jsonPayload);
              if (ab.animations) {
                const Ab = JSON.parse(ab.animations),
                  Mb = [];
                for (const ab of Ab.animations) {
                  const Ub = Wb(ab);
                  Ub.snippetId = bb, Mb.push(Ub)
                }
                Ub(Mb)
              } else {
                const Ab = Wb(JSON.parse(ab.animation));
                Ab.snippetId = bb, Ub(Ab)
              }
            } else Ab("Unable to load the snippet " + bb)
        })), Mb.open("GET", ab + "/" + bb.replace(/#/g, "/")), Mb.send()
      }))
    }
    Db._UniqueIdGenerator = 0, Db.AllowMatricesInterpolation = !1, Db.AllowMatrixDecomposeForInterpolation = !0, Db.InheritOriginalValueFromActiveAnimations = !1, Db.SnippetUrl = "https://snippet.babylonjs.com", Db.ANIMATIONTYPE_FLOAT = 0, Db.ANIMATIONTYPE_VECTOR3 = 1, Db.ANIMATIONTYPE_QUATERNION = 2, Db.ANIMATIONTYPE_MATRIX = 3, Db.ANIMATIONTYPE_COLOR3 = 4, Db.ANIMATIONTYPE_COLOR4 = 7, Db.ANIMATIONTYPE_VECTOR2 = 5, Db.ANIMATIONTYPE_SIZE = 6, Db.ANIMATIONLOOPMODE_RELATIVE = 0, Db.ANIMATIONLOOPMODE_CYCLE = 1, Db.ANIMATIONLOOPMODE_CONSTANT = 2, Db.ANIMATIONLOOPMODE_YOYO = 4, Db.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const db = Ib;
    let Fb = !1;

    function hb() {
      Fb || (Fb = !0, Db.Parse = Wb, Db.ParseFromFileAsync = Hb, Db.ParseFromSnippetAsync = Ib, Db.CreateFromSnippetAsync = db, Db.CreateAnimation = xb, Db.CreateAndStartAnimation = ib, Db.CreateAndStartHierarchyAnimation = fb, Db.CreateMergeAndStartAnimation = mb, Db.MakeAnimationAdditive = zb, Db.TransitionTo = pb, Db.AppendSerializedAnimations = Nb, (0, Lb.f)("BABYLON.Animation", Db), Yb.c._AnimationRangeFactory = (bb, ab, Ub) => new Eb.d(bb, ab, Ub))
    }
  },
  40202: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab
    });
    class Ab {
      constructor(bb, ab, Ub) {
        this.name = bb, this.from = ab, this.to = Ub
      }
      clone() {
        return new Ab(this.name, this.from, this.to)
      }
    }
  },
  40248: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab.c,
      g: () => Ab.m
    });
    var Ab = Ub(39244);
    (0, Ab.f)()
  },
  40230: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab.e
    });
    var Ab = Ub(39605);
    (0, Ab.d)()
  },
  40207: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab.d
    });
    var Ab = Ub(39589);
    (0, Ab.g)()
  },
  40251: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab.d
    });
    var Ab = Ub(39522);
    (0, Ab.g)()
  },
  40205: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab.f
    });
    var Ab = Ub(39561);
    (0, Ab.b)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);