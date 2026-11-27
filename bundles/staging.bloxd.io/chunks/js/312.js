export const id = 312;
export const ids = [312];
export const modules = {
  42955: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => nr,
      h: () => qr,
      i: () => hr,
      l: () => zr,
      n: () => mr,
      p: () => tr,
      q: () => Ur,
      s: () => Nr
    });
    var Zr = Qr(38560),
      Wr = Qr(38684),
      ar = Qr(38599),
      jr = Qr(42961),
      Ir = Qr(42060),
      fr = Qr(41882),
      Er = Qr(41906),
      pr = Qr(41889),
      xr = Qr(38609);
    const mr = Object.freeze(new Zr.h(0, 0, 0, 0)),
      Nr = Object.freeze(Zr.u.Zero()),
      Ur = Object.freeze(Zr.q.Zero()),
      tr = Object.freeze(fr.b.Zero()),
      hr = Object.freeze(Wr.e.Black()),
      zr = Object.freeze(new Wr.f(0, 0, 0, 0)),
      Yr = {
        key: 0,
        repeatCount: 0,
        TQ: 2
      };
    class nr {
      static _PrepareAnimation(rr, Sr, Qr, ar, jr, Ir, Er, pr) {
        let xr;
        if (!isNaN(parseFloat(jr)) && isFinite(jr) ? xr = nr.ANIMATIONTYPE_FLOAT : jr instanceof Zr.h ? xr = nr.ANIMATIONTYPE_QUATERNION : jr instanceof Zr.u ? xr = nr.ANIMATIONTYPE_VECTOR3 : jr instanceof Zr.q ? xr = nr.ANIMATIONTYPE_VECTOR2 : jr instanceof Wr.e ? xr = nr.ANIMATIONTYPE_COLOR3 : jr instanceof Wr.f ? xr = nr.ANIMATIONTYPE_COLOR4 : jr instanceof fr.b && (xr = nr.ANIMATIONTYPE_SIZE), void 0 == xr) return null;
        const mr = new nr(rr, Sr, Qr, xr, Er),
          Nr = [{
            frame: 0,
            value: jr
          }, {
            frame: ar,
            value: Ir
          }];
        return mr.setKeys(Nr), void 0 !== pr && mr.setEasingFunction(pr), mr
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const rr of this._runtimeAnimations)
          if (!rr.isStopped()) return !0;
        return !1
      }
      constructor(rr, Sr, Qr, Zr, Wr, ar) {
        this.name = rr, this.targetProperty = Sr, this.framePerSecond = Qr, this.dataType = Zr, this.TQ = Wr, this.enableBlending = ar, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = Sr.split("."), this.dataType = Zr, this.TQ = void 0 === Wr ? nr.ANIMATIONLOOPMODE_CYCLE : Wr, this.uniqueId = nr._UniqueIdGenerator++
      }
      toString(rr) {
        let Sr = "Name: " + this.name + ", property: " + this.targetProperty;
        if (Sr += ", datatype: " + ["Float", "kU", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], Sr += ", nKeys: " + (this._keys ? this._keys.length : "none"), Sr += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), rr) {
          Sr += ", Ranges: {";
          let rr = !0;
          for (const Qr in this._ranges) rr || (Sr += ", "), rr = !1, Sr += Qr;
          Sr += "}"
        }
        return Sr
      }
      addEvent(rr) {
        this._events.push(rr), this._events.sort(((rr, Sr) => rr.frame - Sr.frame))
      }
      removeEvents(rr) {
        for (let Sr = 0; Sr < this._events.length; Sr++) this._events[Sr].frame === rr && (this._events.splice(Sr, 1), Sr--)
      }
      getEvents() {
        return this._events
      }
      createRange(rr, Sr, Qr) {
        this._ranges[rr] || (this._ranges[rr] = new jr.b(rr, Sr, Qr))
      }
      deleteRange(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Qr = this._ranges[rr];
        if (Qr) {
          if (Sr) {
            const rr = Qr.from,
              Sr = Qr.to;
            for (let Qr = this._keys.length - 1; Qr >= 0; Qr--) this._keys[Qr].frame >= rr && this._keys[Qr].frame <= Sr && this._keys.splice(Qr, 1)
          }
          this._ranges[rr] = null
        }
      }
      getRange(rr) {
        return this._ranges[rr]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let rr = 0;
        for (let Sr = 0, Qr = this._keys.length; Sr < Qr; Sr++) rr < this._keys[Sr].frame && (rr = this._keys[Sr].frame);
        return rr
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(rr) {
        this._easingFunction = rr
      }
      floatInterpolateFunction(rr, Sr, Qr) {
        return (0, ar.Lerp)(rr, Sr, Qr)
      }
      floatInterpolateFunctionWithTangents(rr, Sr, Qr, Zr, Wr) {
        return (0, ar.Hermite)(rr, Sr, Qr, Zr, Wr)
      }
      quaternionInterpolateFunction(rr, Sr, Qr) {
        return Zr.h.Slerp(rr, Sr, Qr)
      }
      quaternionInterpolateFunctionWithTangents(rr, Sr, Qr, Wr, ar) {
        return Zr.h.Hermite(rr, Sr, Qr, Wr, ar).normalize()
      }
      vector3InterpolateFunction(rr, Sr, Qr) {
        return Zr.u.Lerp(rr, Sr, Qr)
      }
      vector3InterpolateFunctionWithTangents(rr, Sr, Qr, Wr, ar) {
        return Zr.u.Hermite(rr, Sr, Qr, Wr, ar)
      }
      vector2InterpolateFunction(rr, Sr, Qr) {
        return Zr.q.Lerp(rr, Sr, Qr)
      }
      vector2InterpolateFunctionWithTangents(rr, Sr, Qr, Wr, ar) {
        return Zr.q.Hermite(rr, Sr, Qr, Wr, ar)
      }
      sizeInterpolateFunction(rr, Sr, Qr) {
        return fr.b.Lerp(rr, Sr, Qr)
      }
      color3InterpolateFunction(rr, Sr, Qr) {
        return Wr.e.Lerp(rr, Sr, Qr)
      }
      color3InterpolateFunctionWithTangents(rr, Sr, Qr, Zr, ar) {
        return Wr.e.Hermite(rr, Sr, Qr, Zr, ar)
      }
      color4InterpolateFunction(rr, Sr, Qr) {
        return Wr.f.Lerp(rr, Sr, Qr)
      }
      color4InterpolateFunctionWithTangents(rr, Sr, Qr, Zr, ar) {
        return Wr.f.Hermite(rr, Sr, Qr, Zr, ar)
      }
      _getKeyValue(rr) {
        return "function" === typeof rr ? rr() : rr
      }
      evaluate(rr) {
        return Yr.key = 0, this._interpolate(rr, Yr)
      }
      _interpolate(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (Sr.TQ === nr.ANIMATIONLOOPMODE_CONSTANT && Sr.repeatCount > 0) return Sr.highLimitValue.clone ? Sr.highLimitValue.clone() : Sr.highLimitValue;
        const Zr = this._keys;
        let Wr;
        if (this._coreAnimation) Wr = this._coreAnimation._key;
        else {
          const ar = Zr.length;
          for (Wr = Sr.key; Wr >= 0 && rr < Zr[Wr].frame;) --Wr;
          for (; Wr + 1 <= ar - 1 && rr >= Zr[Wr + 1].frame;) ++Wr;
          if (Sr.key = Wr, Wr < 0) return Qr ? void 0 : this._getKeyValue(Zr[0].value);
          if (Wr + 1 > ar - 1) return Qr ? void 0 : this._getKeyValue(Zr[ar - 1].value);
          this._key = Wr
        }
        const ar = Zr[Wr],
          jr = Zr[Wr + 1];
        if (Qr && (rr === ar.frame || rr === jr.frame)) return;
        const Ir = this._getKeyValue(ar.value),
          fr = this._getKeyValue(jr.value);
        if (1 === ar.interpolation) return jr.frame > rr ? Ir : fr;
        const Er = void 0 !== ar.outTangent && void 0 !== jr.inTangent,
          pr = jr.frame - ar.frame;
        let xr = (rr - ar.frame) / pr;
        const Yr = ar.easingFunction || this.getEasingFunction();
        switch (Yr && (xr = Yr.ease(xr)), this.dataType) {
          case nr.ANIMATIONTYPE_FLOAT: {
            const rr = Er ? this.floatInterpolateFunctionWithTangents(Ir, ar.outTangent * pr, fr, jr.inTangent * pr, xr) : this.floatInterpolateFunction(Ir, fr, xr);
            switch (Sr.TQ) {
              case nr.ANIMATIONLOOPMODE_CYCLE:
              case nr.ANIMATIONLOOPMODE_CONSTANT:
              case nr.ANIMATIONLOOPMODE_YOYO:
                return rr;
              case nr.ANIMATIONLOOPMODE_RELATIVE:
              case nr.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (Sr.offsetValue ?? 0) * Sr.repeatCount + rr
            }
            break
          }
          case nr.ANIMATIONTYPE_QUATERNION: {
            const rr = Er ? this.quaternionInterpolateFunctionWithTangents(Ir, ar.outTangent.scale(pr), fr, jr.inTangent.scale(pr), xr) : this.quaternionInterpolateFunction(Ir, fr, xr);
            switch (Sr.TQ) {
              case nr.ANIMATIONLOOPMODE_CYCLE:
              case nr.ANIMATIONLOOPMODE_CONSTANT:
              case nr.ANIMATIONLOOPMODE_YOYO:
                return rr;
              case nr.ANIMATIONLOOPMODE_RELATIVE:
              case nr.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return rr.addInPlace((Sr.offsetValue || mr).scale(Sr.repeatCount))
            }
            return rr
          }
          case nr.ANIMATIONTYPE_VECTOR3: {
            const rr = Er ? this.vector3InterpolateFunctionWithTangents(Ir, ar.outTangent.scale(pr), fr, jr.inTangent.scale(pr), xr) : this.vector3InterpolateFunction(Ir, fr, xr);
            switch (Sr.TQ) {
              case nr.ANIMATIONLOOPMODE_CYCLE:
              case nr.ANIMATIONLOOPMODE_CONSTANT:
              case nr.ANIMATIONLOOPMODE_YOYO:
                return rr;
              case nr.ANIMATIONLOOPMODE_RELATIVE:
              case nr.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return rr.add((Sr.offsetValue || Nr).scale(Sr.repeatCount))
            }
            break
          }
          case nr.ANIMATIONTYPE_VECTOR2: {
            const rr = Er ? this.vector2InterpolateFunctionWithTangents(Ir, ar.outTangent.scale(pr), fr, jr.inTangent.scale(pr), xr) : this.vector2InterpolateFunction(Ir, fr, xr);
            switch (Sr.TQ) {
              case nr.ANIMATIONLOOPMODE_CYCLE:
              case nr.ANIMATIONLOOPMODE_CONSTANT:
              case nr.ANIMATIONLOOPMODE_YOYO:
                return rr;
              case nr.ANIMATIONLOOPMODE_RELATIVE:
              case nr.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return rr.add((Sr.offsetValue || Ur).scale(Sr.repeatCount))
            }
            break
          }
          case nr.ANIMATIONTYPE_SIZE:
            switch (Sr.TQ) {
              case nr.ANIMATIONLOOPMODE_CYCLE:
              case nr.ANIMATIONLOOPMODE_CONSTANT:
              case nr.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(Ir, fr, xr);
              case nr.ANIMATIONLOOPMODE_RELATIVE:
              case nr.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(Ir, fr, xr).add((Sr.offsetValue || tr).scale(Sr.repeatCount))
            }
            break;
          case nr.ANIMATIONTYPE_COLOR3: {
            const rr = Er ? this.color3InterpolateFunctionWithTangents(Ir, ar.outTangent.scale(pr), fr, jr.inTangent.scale(pr), xr) : this.color3InterpolateFunction(Ir, fr, xr);
            switch (Sr.TQ) {
              case nr.ANIMATIONLOOPMODE_CYCLE:
              case nr.ANIMATIONLOOPMODE_CONSTANT:
              case nr.ANIMATIONLOOPMODE_YOYO:
                return rr;
              case nr.ANIMATIONLOOPMODE_RELATIVE:
              case nr.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return rr.add((Sr.offsetValue || hr).scale(Sr.repeatCount))
            }
            break
          }
          case nr.ANIMATIONTYPE_COLOR4: {
            const rr = Er ? this.color4InterpolateFunctionWithTangents(Ir, ar.outTangent.scale(pr), fr, jr.inTangent.scale(pr), xr) : this.color4InterpolateFunction(Ir, fr, xr);
            switch (Sr.TQ) {
              case nr.ANIMATIONLOOPMODE_CYCLE:
              case nr.ANIMATIONLOOPMODE_CONSTANT:
              case nr.ANIMATIONLOOPMODE_YOYO:
                return rr;
              case nr.ANIMATIONLOOPMODE_RELATIVE:
              case nr.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return rr.add((Sr.offsetValue || zr).scale(Sr.repeatCount))
            }
            break
          }
          case nr.ANIMATIONTYPE_MATRIX:
            switch (Sr.TQ) {
              case nr.ANIMATIONLOOPMODE_CYCLE:
              case nr.ANIMATIONLOOPMODE_CONSTANT:
              case nr.ANIMATIONLOOPMODE_YOYO:
                return nr.AllowMatricesInterpolation ? this.matrixInterpolateFunction(Ir, fr, xr, Sr.workValue) : Ir;
              case nr.ANIMATIONLOOPMODE_RELATIVE:
              case nr.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return Ir
            }
        }
        return 0
      }
      matrixInterpolateFunction(rr, Sr, Qr, Wr) {
        return nr.AllowMatrixDecomposeForInterpolation ? Wr ? (Zr.d.DecomposeLerpToRef(rr, Sr, Qr, Wr), Wr) : Zr.d.DecomposeLerp(rr, Sr, Qr) : Wr ? (Zr.d.LerpToRef(rr, Sr, Qr, Wr), Wr) : Zr.d.Lerp(rr, Sr, Qr)
      }
      clone() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Sr = new nr(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.TQ);
        if (Sr.enableBlending = this.enableBlending, Sr.blendingSpeed = this.blendingSpeed, this._keys && Sr.setKeys(this._keys, !1, rr), this._ranges) {
          Sr._ranges = {};
          for (const rr in this._ranges) {
            const Qr = this._ranges[rr];
            Qr && (Sr._ranges[rr] = Qr.clone())
          }
        }
        return Sr
      }
      setKeys(rr) {
        let Sr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = rr;
        else if (this._keys = rr.slice(0), Sr)
          for (let Qr = 0; Qr < this._keys.length; Qr++) {
            const rr = this._keys[Qr];
            this._keys[Qr] = {
              frame: rr.frame,
              value: rr.value.clone ? rr.value.clone() : rr.value,
              inTangent: rr.inTangent && rr.inTangent.clone ? rr.inTangent.clone() : rr.inTangent,
              outTangent: rr.outTangent && rr.outTangent.clone ? rr.outTangent.clone() : rr.outTangent,
              interpolation: rr.interpolation,
              lockedTangent: rr.lockedTangent,
              easingFunction: rr.easingFunction
            }
          }
      }
      createKeyForFrame(rr) {
        Yr.key = 0;
        const Sr = this._interpolate(rr, Yr, !0);
        if (!Sr) return this._keys[Yr.key].frame === rr ? Yr.key : Yr.key + 1;
        const Qr = {
          frame: rr,
          value: Sr.clone ? Sr.clone() : Sr
        };
        return this._keys.splice(Yr.key + 1, 0, Qr), Yr.key + 1
      }
      serialize() {
        const rr = {};
        rr.name = this.name, rr.property = this.targetProperty, rr.framePerSecond = this.framePerSecond, rr.dataType = this.dataType, rr.loopBehavior = this.TQ, rr.enableBlending = this.enableBlending, rr.blendingSpeed = this.blendingSpeed;
        const Sr = this.dataType;
        rr.keys = [];
        const Qr = this.getKeys();
        for (let Zr = 0; Zr < Qr.length; Zr++) {
          const Wr = Qr[Zr],
            ar = {};
          switch (ar.frame = Wr.frame, Sr) {
            case nr.ANIMATIONTYPE_FLOAT:
              ar.values = [Wr.value], void 0 !== Wr.inTangent && ar.values.push(Wr.inTangent), void 0 !== Wr.outTangent && (void 0 === Wr.inTangent && ar.values.push(void 0), ar.values.push(Wr.outTangent)), void 0 !== Wr.interpolation && (void 0 === Wr.inTangent && ar.values.push(void 0), void 0 === Wr.outTangent && ar.values.push(void 0), ar.values.push(Wr.interpolation));
              break;
            case nr.ANIMATIONTYPE_QUATERNION:
            case nr.ANIMATIONTYPE_MATRIX:
            case nr.ANIMATIONTYPE_VECTOR3:
            case nr.ANIMATIONTYPE_COLOR3:
            case nr.ANIMATIONTYPE_COLOR4:
              ar.values = Wr.value.OWr(), void 0 != Wr.inTangent && ar.values.push(Wr.inTangent.OWr()), void 0 != Wr.outTangent && (void 0 === Wr.inTangent && ar.values.push(void 0), ar.values.push(Wr.outTangent.OWr())), void 0 !== Wr.interpolation && (void 0 === Wr.inTangent && ar.values.push(void 0), void 0 === Wr.outTangent && ar.values.push(void 0), ar.values.push(Wr.interpolation))
          }
          rr.keys.push(ar)
        }
        rr.yh = [];
        for (const Zr in this._ranges) {
          const Sr = this._ranges[Zr];
          if (!Sr) continue;
          const Qr = {};
          Qr.name = Zr, Qr.from = Sr.from, Qr.to = Sr.to, rr.yh.push(Qr)
        }
        return rr
      }
      static _UniversalLerp(rr, Sr, Qr) {
        const Zr = rr.constructor;
        return Zr.Lerp ? Zr.Lerp(rr, Sr, Qr) : Zr.Slerp ? Zr.Slerp(rr, Sr, Qr) : rr.toFixed ? rr * (1 - Qr) + Qr * Sr : Sr
      }
    }

    function er(rr, Sr, Qr) {
      let Wr;
      Wr = "object" === typeof Sr ? Sr : {
        referenceFrame: Sr ?? 0,
        range: Qr,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let ar = rr;
      Wr.cloneOriginalAnimation && (ar = rr.clone(), ar.name = Wr.clonedAnimationName || ar.name);
      const jr = ar.getKeys();
      if (!jr.length) return ar;
      const Ir = Wr.referenceFrame && Wr.referenceFrame >= 0 ? Wr.referenceFrame : 0;
      let fr = 0;
      const Er = jr[0];
      let pr = jr.length - 1;
      const xr = jr[pr],
        mr = {
          referenceValue: Er.value,
          referencePosition: Zr.n.kU[0],
          referenceQuaternion: Zr.n.Quaternion[0],
          referenceScaling: Zr.n.kU[1],
          keyPosition: Zr.n.kU[2],
          keyQuaternion: Zr.n.Quaternion[1],
          keyScaling: Zr.n.kU[3]
        };
      let Nr = Er.frame,
        Ur = xr.frame;
      if (Wr.range) {
        const rr = ar.getRange(Wr.range);
        rr && (Nr = rr.from, Ur = rr.to)
      } else Nr = Wr.fromFrame ?? Nr, Ur = Wr.toFrame ?? Ur;
      Nr !== Er.frame && (fr = ar.createKeyForFrame(Nr)), Ur !== xr.frame && (pr = ar.createKeyForFrame(Ur));
      const tr = ar.getKeys();
      if (1 === tr.length) {
        const rr = ar._getKeyValue(tr[0].value);
        mr.referenceValue = rr.clone ? rr.clone() : rr
      } else if (Ir <= Er.frame) {
        const rr = ar._getKeyValue(Er.value);
        mr.referenceValue = rr.clone ? rr.clone() : rr
      } else if (Ir >= xr.frame) {
        const rr = ar._getKeyValue(xr.value);
        mr.referenceValue = rr.clone ? rr.clone() : rr
      } else {
        Yr.key = 0;
        const rr = ar._interpolate(Ir, Yr);
        mr.referenceValue = rr.clone ? rr.clone() : rr
      }
      ar.dataType === nr.ANIMATIONTYPE_QUATERNION ? mr.referenceValue.normalize().conjugateInPlace() : ar.dataType === nr.ANIMATIONTYPE_MATRIX && (mr.referenceValue.decompose(mr.referenceScaling, mr.referenceQuaternion, mr.referencePosition), mr.referenceQuaternion.normalize().conjugateInPlace());
      let hr = Number.MAX_VALUE;
      const zr = Wr.clipKeys ? [] : null;
      for (let Yr = fr; Yr <= pr; Yr++) {
        let rr = tr[Yr];
        if ((zr || Wr.cloneOriginalAnimation) && (rr = {
            frame: rr.frame,
            value: rr.value.clone ? rr.value.clone() : rr.value,
            inTangent: rr.inTangent,
            outTangent: rr.outTangent,
            interpolation: rr.interpolation,
            lockedTangent: rr.lockedTangent,
            easingFunction: rr.easingFunction
          }, zr && (hr === Number.MAX_VALUE && (hr = rr.frame), rr.frame -= hr, zr.push(rr))), !Yr || ar.dataType === nr.ANIMATIONTYPE_FLOAT || rr.value !== Er.value) switch (ar.dataType) {
          case nr.ANIMATIONTYPE_MATRIX:
            rr.value.decompose(mr.keyScaling, mr.keyQuaternion, mr.keyPosition), mr.keyPosition.iWr(mr.referencePosition), mr.keyScaling.divideInPlace(mr.referenceScaling), mr.referenceQuaternion.multiplyToRef(mr.keyQuaternion, mr.keyQuaternion), Zr.d.ComposeToRef(mr.keyScaling, mr.keyQuaternion, mr.keyPosition, rr.value);
            break;
          case nr.ANIMATIONTYPE_QUATERNION:
            mr.referenceValue.multiplyToRef(rr.value, rr.value);
            break;
          case nr.ANIMATIONTYPE_VECTOR2:
          case nr.ANIMATIONTYPE_VECTOR3:
          case nr.ANIMATIONTYPE_COLOR3:
          case nr.ANIMATIONTYPE_COLOR4:
            rr.value.subtractToRef(mr.referenceValue, rr.value);
            break;
          case nr.ANIMATIONTYPE_SIZE:
            rr.value.width -= mr.referenceValue.width, rr.value.height -= mr.referenceValue.height;
            break;
          default:
            rr.value -= mr.referenceValue
        }
      }
      return zr && ar.setKeys(zr, !0), ar
    }

    function Kr(rr, Sr, Qr, Zr) {
      const Wr = new nr(rr + "Animation", rr, Qr, Sr, nr.ANIMATIONLOOPMODE_CONSTANT);
      return Wr.setEasingFunction(Zr), Wr
    }

    function yr(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr) {
      const xr = nr._PrepareAnimation(rr, Qr, Zr, Wr, ar, jr, Ir, fr);
      return xr ? (Sr.eC && (pr = Sr.eC()), pr ? pr.beginDirectAnimation(Sr, [xr], 0, Wr, xr.TQ !== nr.ANIMATIONLOOPMODE_CONSTANT, 1, Er) : null) : null
    }

    function Br(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr) {
      const xr = nr._PrepareAnimation(rr, Zr, Wr, ar, jr, Ir, fr, Er);
      if (!xr) return null;
      return Sr.eC().beginDirectHierarchyAnimation(Sr, Qr, [xr], 0, ar, 1 === xr.TQ, 1, pr)
    }

    function Tr(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
      const pr = nr._PrepareAnimation(rr, Qr, Zr, Wr, ar, jr, Ir, fr);
      return pr ? (Sr.animations.push(pr), Sr.eC().beginAnimation(Sr, 0, Wr, 1 === pr.TQ, 1, Er)) : null
    }

    function vr(rr, Sr, Qr, Zr, Wr, ar, jr) {
      let Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        fr = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Er = arguments.length > 9 ? arguments[9] : void 0;
      if (jr <= 0) return Qr[rr] = Sr, Ir && Ir(), null;
      const pr = Wr * (jr / 1e3);
      ar.setKeys(Er ?? [{
        frame: 0,
        value: Qr[rr].clone ? Qr[rr].clone() : Qr[rr]
      }, {
        frame: pr,
        value: Sr
      }]), Qr.animations || (Qr.animations = []), Qr.animations.push(ar);
      return Zr.beginAnimation(Qr, 0, pr, !1, 1, Ir ?? void 0, void 0, fr)
    }

    function Or(rr, Sr) {
      pr.e.AppendSerializedAnimations(rr, Sr)
    }

    function Lr(rr) {
      const Sr = new nr(rr.name, rr.property, rr.framePerSecond, rr.dataType, rr.loopBehavior),
        Qr = rr.dataType,
        ar = [];
      let jr, Ir;
      for (rr.enableBlending && (Sr.enableBlending = rr.enableBlending), rr.blendingSpeed && (Sr.blendingSpeed = rr.blendingSpeed), Ir = 0; Ir < rr.keys.length; Ir++) {
        const Sr = rr.keys[Ir];
        let fr, Er, pr;
        switch (Qr) {
          case nr.ANIMATIONTYPE_FLOAT:
            jr = Sr.values[0], Sr.values.length >= 2 && (fr = Sr.values[1]), Sr.values.length >= 3 && (Er = Sr.values[2]), Sr.values.length >= 4 && (pr = Sr.values[3]);
            break;
          case nr.ANIMATIONTYPE_QUATERNION:
            if (jr = Zr.h.FromArray(Sr.values), Sr.values.length >= 8) {
              const rr = Zr.h.FromArray(Sr.values.slice(4, 8));
              rr.equals(Zr.h.Zero()) || (fr = rr)
            }
            if (Sr.values.length >= 12) {
              const rr = Zr.h.FromArray(Sr.values.slice(8, 12));
              rr.equals(Zr.h.Zero()) || (Er = rr)
            }
            Sr.values.length >= 13 && (pr = Sr.values[12]);
            break;
          case nr.ANIMATIONTYPE_MATRIX:
            jr = Zr.d.FromArray(Sr.values), Sr.values.length >= 17 && (pr = Sr.values[16]);
            break;
          case nr.ANIMATIONTYPE_COLOR3:
            jr = Wr.e.FromArray(Sr.values), Sr.values[3] && (fr = Wr.e.FromArray(Sr.values[3])), Sr.values[4] && (Er = Wr.e.FromArray(Sr.values[4])), Sr.values[5] && (pr = Sr.values[5]);
            break;
          case nr.ANIMATIONTYPE_COLOR4:
            jr = Wr.f.FromArray(Sr.values), Sr.values[4] && (fr = Wr.f.FromArray(Sr.values[4])), Sr.values[5] && (Er = Wr.f.FromArray(Sr.values[5])), Sr.values[6] && (pr = Sr.values[6]);
            break;
          case nr.ANIMATIONTYPE_VECTOR3:
          default:
            jr = Zr.u.FromArray(Sr.values), Sr.values[3] && (fr = Zr.u.FromArray(Sr.values[3])), Sr.values[4] && (Er = Zr.u.FromArray(Sr.values[4])), Sr.values[5] && (pr = Sr.values[5])
        }
        const xr = {};
        xr.frame = Sr.frame, xr.value = jr, void 0 != fr && (xr.inTangent = fr), void 0 != Er && (xr.outTangent = Er), void 0 != pr && (xr.interpolation = pr), ar.push(xr)
      }
      if (Sr.setKeys(ar), rr.yh)
        for (Ir = 0; Ir < rr.yh.length; Ir++) jr = rr.yh[Ir], Sr.createRange(jr.name, jr.from, jr.to);
      return Sr
    }
    async function lr(rr, Sr) {
      return await new Promise(((Qr, Zr) => {
        const Wr = new Er.b;
        Wr.addEventListener("readystatechange", (() => {
          if (4 == Wr.readyState)
            if (200 == Wr.status) {
              let Sr = JSON.parse(Wr.responseText);
              if (Sr.animations && (Sr = Sr.animations), Sr.length) {
                const rr = [];
                for (const Qr of Sr) rr.push(Lr(Qr));
                Qr(rr)
              } else {
                const Zr = Lr(Sr);
                rr && (Zr.name = rr), Qr(Zr)
              }
            } else Zr("Unable to load the animation")
        })), Wr.open("GET", Sr), Wr.send()
      }))
    }
    async function Xr(rr) {
      const Sr = this?.SnippetUrl ?? nr.SnippetUrl;
      return await new Promise(((Qr, Zr) => {
        const Wr = new Er.b;
        Wr.addEventListener("readystatechange", (() => {
          if (4 == Wr.readyState)
            if (200 == Wr.status) {
              const Sr = JSON.parse(JSON.parse(Wr.responseText).jsonPayload);
              if (Sr.animations) {
                const Zr = JSON.parse(Sr.animations),
                  Wr = [];
                for (const Sr of Zr.animations) {
                  const Qr = Lr(Sr);
                  Qr.snippetId = rr, Wr.push(Qr)
                }
                Qr(Wr)
              } else {
                const Zr = Lr(JSON.parse(Sr.animation));
                Zr.snippetId = rr, Qr(Zr)
              }
            } else Zr("Unable to load the snippet " + rr)
        })), Wr.open("GET", Sr + "/" + rr.replace(/#/g, "/")), Wr.send()
      }))
    }
    nr._UniqueIdGenerator = 0, nr.AllowMatricesInterpolation = !1, nr.AllowMatrixDecomposeForInterpolation = !0, nr.InheritOriginalValueFromActiveAnimations = !1, nr.SnippetUrl = "https://snippet.babylonjs.com", nr.ANIMATIONTYPE_FLOAT = 0, nr.ANIMATIONTYPE_VECTOR3 = 1, nr.ANIMATIONTYPE_QUATERNION = 2, nr.ANIMATIONTYPE_MATRIX = 3, nr.ANIMATIONTYPE_COLOR3 = 4, nr.ANIMATIONTYPE_COLOR4 = 7, nr.ANIMATIONTYPE_VECTOR2 = 5, nr.ANIMATIONTYPE_SIZE = 6, nr.ANIMATIONLOOPMODE_RELATIVE = 0, nr.ANIMATIONLOOPMODE_CYCLE = 1, nr.ANIMATIONLOOPMODE_CONSTANT = 2, nr.ANIMATIONLOOPMODE_YOYO = 4, nr.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const Pr = Xr;
    let Hr = !1;

    function qr() {
      Hr || (Hr = !0, nr.Parse = Lr, nr.ParseFromFileAsync = lr, nr.ParseFromSnippetAsync = Xr, nr.CreateFromSnippetAsync = Pr, nr.CreateAnimation = Kr, nr.CreateAndStartAnimation = yr, nr.CreateAndStartHierarchyAnimation = Br, nr.CreateMergeAndStartAnimation = Tr, nr.MakeAnimationAdditive = er, nr.TransitionTo = vr, nr.AppendSerializedAnimations = Or, (0, xr.e)("BABYLON.Animation", nr), Ir.c._AnimationRangeFactory = (rr, Sr, Qr) => new jr.b(rr, Sr, Qr))
    }
  },
  42961: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr
    });
    class Zr {
      constructor(rr, Sr, Qr) {
        this.name = rr, this.from = Sr, this.to = Qr
      }
      clone() {
        return new Zr(this.name, this.from, this.to)
      }
    }
  },
  43031: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr.c,
      g: () => Zr.j
    });
    var Zr = Qr(41995);
    (0, Zr.g)()
  },
  43008: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr.f
    });
    var Zr = Qr(42310);
    (0, Zr.d)()
  },
  42980: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Zr.e
    });
    var Zr = Qr(42299);
    (0, Zr.f)()
  },
  43037: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr.c
    });
    var Zr = Qr(42243);
    (0, Zr.f)()
  },
  42966: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Zr.e
    });
    var Zr = Qr(42287);
    (0, Zr.d)()
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);