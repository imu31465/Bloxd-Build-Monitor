export const id = 266;
export const ids = [266];
export const modules = {
  39187: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => zB,
      h: () => vB,
      k: () => tB,
      n: () => Sc,
      p: () => Tc,
      q: () => ec,
      t: () => mB,
      v: () => fc
    });
    var Vc = nc(35756),
      Ic = nc(35815),
      rB = nc(35785),
      uc = nc(39190),
      sc = nc(38255),
      Mc = nc(38060),
      Pc = nc(38099),
      qB = nc(38068),
      Oc = nc(35799);
    const Tc = Object.freeze(new Vc.f(0, 0, 0, 0)),
      fc = Object.freeze(Vc.p.Zero()),
      mB = Object.freeze(Vc.m.Zero()),
      ec = Object.freeze(Mc.c.Zero()),
      tB = Object.freeze(Ic.e.Black()),
      Sc = Object.freeze(new Ic.g(0, 0, 0, 0)),
      yB = {
        key: 0,
        repeatCount: 0,
        B_: 2
      };
    class zB {
      static _PrepareAnimation(cB, Bc, nc, rB, uc, sc, Pc, qB) {
        let Oc;
        if (!isNaN(parseFloat(uc)) && isFinite(uc) ? Oc = zB.ANIMATIONTYPE_FLOAT : uc instanceof Vc.f ? Oc = zB.ANIMATIONTYPE_QUATERNION : uc instanceof Vc.p ? Oc = zB.ANIMATIONTYPE_VECTOR3 : uc instanceof Vc.m ? Oc = zB.ANIMATIONTYPE_VECTOR2 : uc instanceof Ic.e ? Oc = zB.ANIMATIONTYPE_COLOR3 : uc instanceof Ic.g ? Oc = zB.ANIMATIONTYPE_COLOR4 : uc instanceof Mc.c && (Oc = zB.ANIMATIONTYPE_SIZE), void 0 == Oc) return null;
        const Tc = new zB(cB, Bc, nc, Oc, Pc),
          fc = [{
            frame: 0,
            value: uc
          }, {
            frame: rB,
            value: sc
          }];
        return Tc.setKeys(fc), void 0 !== qB && Tc.setEasingFunction(qB), Tc
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const cB of this._runtimeAnimations)
          if (!cB.isStopped()) return !0;
        return !1
      }
      constructor(cB, Bc, nc, Vc, Ic, rB) {
        this.name = cB, this.targetProperty = Bc, this.framePerSecond = nc, this.dataType = Vc, this.B_ = Ic, this.enableBlending = rB, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = Bc.split("."), this.dataType = Vc, this.B_ = void 0 === Ic ? zB.ANIMATIONLOOPMODE_CYCLE : Ic, this.uniqueId = zB._UniqueIdGenerator++
      }
      toString(cB) {
        let Bc = "Name: " + this.name + ", property: " + this.targetProperty;
        if (Bc += ", datatype: " + ["Float", "KV", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], Bc += ", nKeys: " + (this._keys ? this._keys.length : "none"), Bc += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), cB) {
          Bc += ", Ranges: {";
          let cB = !0;
          for (const nc in this._ranges) cB || (Bc += ", "), cB = !1, Bc += nc;
          Bc += "}"
        }
        return Bc
      }
      addEvent(cB) {
        this._events.push(cB), this._events.sort(((cB, Bc) => cB.frame - Bc.frame))
      }
      removeEvents(cB) {
        for (let Bc = 0; Bc < this._events.length; Bc++) this._events[Bc].frame === cB && (this._events.splice(Bc, 1), Bc--)
      }
      getEvents() {
        return this._events
      }
      createRange(cB, Bc, nc) {
        this._ranges[cB] || (this._ranges[cB] = new uc.b(cB, Bc, nc))
      }
      deleteRange(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const nc = this._ranges[cB];
        if (nc) {
          if (Bc) {
            const cB = nc.from,
              Bc = nc.to;
            for (let nc = this._keys.length - 1; nc >= 0; nc--) this._keys[nc].frame >= cB && this._keys[nc].frame <= Bc && this._keys.splice(nc, 1)
          }
          this._ranges[cB] = null
        }
      }
      getRange(cB) {
        return this._ranges[cB]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let cB = 0;
        for (let Bc = 0, nc = this._keys.length; Bc < nc; Bc++) cB < this._keys[Bc].frame && (cB = this._keys[Bc].frame);
        return cB
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(cB) {
        this._easingFunction = cB
      }
      floatInterpolateFunction(cB, Bc, nc) {
        return (0, rB.Lerp)(cB, Bc, nc)
      }
      floatInterpolateFunctionWithTangents(cB, Bc, nc, Vc, Ic) {
        return (0, rB.Hermite)(cB, Bc, nc, Vc, Ic)
      }
      quaternionInterpolateFunction(cB, Bc, nc) {
        return Vc.f.Slerp(cB, Bc, nc)
      }
      quaternionInterpolateFunctionWithTangents(cB, Bc, nc, Ic, rB) {
        return Vc.f.Hermite(cB, Bc, nc, Ic, rB).normalize()
      }
      vector3InterpolateFunction(cB, Bc, nc) {
        return Vc.p.Lerp(cB, Bc, nc)
      }
      vector3InterpolateFunctionWithTangents(cB, Bc, nc, Ic, rB) {
        return Vc.p.Hermite(cB, Bc, nc, Ic, rB)
      }
      vector2InterpolateFunction(cB, Bc, nc) {
        return Vc.m.Lerp(cB, Bc, nc)
      }
      vector2InterpolateFunctionWithTangents(cB, Bc, nc, Ic, rB) {
        return Vc.m.Hermite(cB, Bc, nc, Ic, rB)
      }
      sizeInterpolateFunction(cB, Bc, nc) {
        return Mc.c.Lerp(cB, Bc, nc)
      }
      color3InterpolateFunction(cB, Bc, nc) {
        return Ic.e.Lerp(cB, Bc, nc)
      }
      color3InterpolateFunctionWithTangents(cB, Bc, nc, Vc, rB) {
        return Ic.e.Hermite(cB, Bc, nc, Vc, rB)
      }
      color4InterpolateFunction(cB, Bc, nc) {
        return Ic.g.Lerp(cB, Bc, nc)
      }
      color4InterpolateFunctionWithTangents(cB, Bc, nc, Vc, rB) {
        return Ic.g.Hermite(cB, Bc, nc, Vc, rB)
      }
      _getKeyValue(cB) {
        return "function" === typeof cB ? cB() : cB
      }
      evaluate(cB) {
        return yB.key = 0, this._interpolate(cB, yB)
      }
      _interpolate(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (Bc.B_ === zB.ANIMATIONLOOPMODE_CONSTANT && Bc.repeatCount > 0) return Bc.highLimitValue.clone ? Bc.highLimitValue.clone() : Bc.highLimitValue;
        const Vc = this._keys;
        let Ic;
        if (this._coreAnimation) Ic = this._coreAnimation._key;
        else {
          const rB = Vc.length;
          for (Ic = Bc.key; Ic >= 0 && cB < Vc[Ic].frame;) --Ic;
          for (; Ic + 1 <= rB - 1 && cB >= Vc[Ic + 1].frame;) ++Ic;
          if (Bc.key = Ic, Ic < 0) return nc ? void 0 : this._getKeyValue(Vc[0].value);
          if (Ic + 1 > rB - 1) return nc ? void 0 : this._getKeyValue(Vc[rB - 1].value);
          this._key = Ic
        }
        const rB = Vc[Ic],
          uc = Vc[Ic + 1];
        if (nc && (cB === rB.frame || cB === uc.frame)) return;
        const sc = this._getKeyValue(rB.value),
          Mc = this._getKeyValue(uc.value);
        if (1 === rB.interpolation) return uc.frame > cB ? sc : Mc;
        const Pc = void 0 !== rB.outTangent && void 0 !== uc.inTangent,
          qB = uc.frame - rB.frame;
        let Oc = (cB - rB.frame) / qB;
        const yB = rB.easingFunction || this.getEasingFunction();
        switch (yB && (Oc = yB.ease(Oc)), this.dataType) {
          case zB.ANIMATIONTYPE_FLOAT: {
            const cB = Pc ? this.floatInterpolateFunctionWithTangents(sc, rB.outTangent * qB, Mc, uc.inTangent * qB, Oc) : this.floatInterpolateFunction(sc, Mc, Oc);
            switch (Bc.B_) {
              case zB.ANIMATIONLOOPMODE_CYCLE:
              case zB.ANIMATIONLOOPMODE_CONSTANT:
              case zB.ANIMATIONLOOPMODE_YOYO:
                return cB;
              case zB.ANIMATIONLOOPMODE_RELATIVE:
              case zB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (Bc.offsetValue ?? 0) * Bc.repeatCount + cB
            }
            break
          }
          case zB.ANIMATIONTYPE_QUATERNION: {
            const cB = Pc ? this.quaternionInterpolateFunctionWithTangents(sc, rB.outTangent.scale(qB), Mc, uc.inTangent.scale(qB), Oc) : this.quaternionInterpolateFunction(sc, Mc, Oc);
            switch (Bc.B_) {
              case zB.ANIMATIONLOOPMODE_CYCLE:
              case zB.ANIMATIONLOOPMODE_CONSTANT:
              case zB.ANIMATIONLOOPMODE_YOYO:
                return cB;
              case zB.ANIMATIONLOOPMODE_RELATIVE:
              case zB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return cB.addInPlace((Bc.offsetValue || Tc).scale(Bc.repeatCount))
            }
            return cB
          }
          case zB.ANIMATIONTYPE_VECTOR3: {
            const cB = Pc ? this.vector3InterpolateFunctionWithTangents(sc, rB.outTangent.scale(qB), Mc, uc.inTangent.scale(qB), Oc) : this.vector3InterpolateFunction(sc, Mc, Oc);
            switch (Bc.B_) {
              case zB.ANIMATIONLOOPMODE_CYCLE:
              case zB.ANIMATIONLOOPMODE_CONSTANT:
              case zB.ANIMATIONLOOPMODE_YOYO:
                return cB;
              case zB.ANIMATIONLOOPMODE_RELATIVE:
              case zB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return cB.add((Bc.offsetValue || fc).scale(Bc.repeatCount))
            }
            break
          }
          case zB.ANIMATIONTYPE_VECTOR2: {
            const cB = Pc ? this.vector2InterpolateFunctionWithTangents(sc, rB.outTangent.scale(qB), Mc, uc.inTangent.scale(qB), Oc) : this.vector2InterpolateFunction(sc, Mc, Oc);
            switch (Bc.B_) {
              case zB.ANIMATIONLOOPMODE_CYCLE:
              case zB.ANIMATIONLOOPMODE_CONSTANT:
              case zB.ANIMATIONLOOPMODE_YOYO:
                return cB;
              case zB.ANIMATIONLOOPMODE_RELATIVE:
              case zB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return cB.add((Bc.offsetValue || mB).scale(Bc.repeatCount))
            }
            break
          }
          case zB.ANIMATIONTYPE_SIZE:
            switch (Bc.B_) {
              case zB.ANIMATIONLOOPMODE_CYCLE:
              case zB.ANIMATIONLOOPMODE_CONSTANT:
              case zB.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(sc, Mc, Oc);
              case zB.ANIMATIONLOOPMODE_RELATIVE:
              case zB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(sc, Mc, Oc).add((Bc.offsetValue || ec).scale(Bc.repeatCount))
            }
            break;
          case zB.ANIMATIONTYPE_COLOR3: {
            const cB = Pc ? this.color3InterpolateFunctionWithTangents(sc, rB.outTangent.scale(qB), Mc, uc.inTangent.scale(qB), Oc) : this.color3InterpolateFunction(sc, Mc, Oc);
            switch (Bc.B_) {
              case zB.ANIMATIONLOOPMODE_CYCLE:
              case zB.ANIMATIONLOOPMODE_CONSTANT:
              case zB.ANIMATIONLOOPMODE_YOYO:
                return cB;
              case zB.ANIMATIONLOOPMODE_RELATIVE:
              case zB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return cB.add((Bc.offsetValue || tB).scale(Bc.repeatCount))
            }
            break
          }
          case zB.ANIMATIONTYPE_COLOR4: {
            const cB = Pc ? this.color4InterpolateFunctionWithTangents(sc, rB.outTangent.scale(qB), Mc, uc.inTangent.scale(qB), Oc) : this.color4InterpolateFunction(sc, Mc, Oc);
            switch (Bc.B_) {
              case zB.ANIMATIONLOOPMODE_CYCLE:
              case zB.ANIMATIONLOOPMODE_CONSTANT:
              case zB.ANIMATIONLOOPMODE_YOYO:
                return cB;
              case zB.ANIMATIONLOOPMODE_RELATIVE:
              case zB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return cB.add((Bc.offsetValue || Sc).scale(Bc.repeatCount))
            }
            break
          }
          case zB.ANIMATIONTYPE_MATRIX:
            switch (Bc.B_) {
              case zB.ANIMATIONLOOPMODE_CYCLE:
              case zB.ANIMATIONLOOPMODE_CONSTANT:
              case zB.ANIMATIONLOOPMODE_YOYO:
                return zB.AllowMatricesInterpolation ? this.matrixInterpolateFunction(sc, Mc, Oc, Bc.workValue) : sc;
              case zB.ANIMATIONLOOPMODE_RELATIVE:
              case zB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return sc
            }
        }
        return 0
      }
      matrixInterpolateFunction(cB, Bc, nc, Ic) {
        return zB.AllowMatrixDecomposeForInterpolation ? Ic ? (Vc.d.DecomposeLerpToRef(cB, Bc, nc, Ic), Ic) : Vc.d.DecomposeLerp(cB, Bc, nc) : Ic ? (Vc.d.LerpToRef(cB, Bc, nc, Ic), Ic) : Vc.d.Lerp(cB, Bc, nc)
      }
      clone() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Bc = new zB(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.B_);
        if (Bc.enableBlending = this.enableBlending, Bc.blendingSpeed = this.blendingSpeed, this._keys && Bc.setKeys(this._keys, !1, cB), this._ranges) {
          Bc._ranges = {};
          for (const cB in this._ranges) {
            const nc = this._ranges[cB];
            nc && (Bc._ranges[cB] = nc.clone())
          }
        }
        return Bc
      }
      setKeys(cB) {
        let Bc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = cB;
        else if (this._keys = cB.slice(0), Bc)
          for (let nc = 0; nc < this._keys.length; nc++) {
            const cB = this._keys[nc];
            this._keys[nc] = {
              frame: cB.frame,
              value: cB.value.clone ? cB.value.clone() : cB.value,
              inTangent: cB.inTangent && cB.inTangent.clone ? cB.inTangent.clone() : cB.inTangent,
              outTangent: cB.outTangent && cB.outTangent.clone ? cB.outTangent.clone() : cB.outTangent,
              interpolation: cB.interpolation,
              lockedTangent: cB.lockedTangent,
              easingFunction: cB.easingFunction
            }
          }
      }
      createKeyForFrame(cB) {
        yB.key = 0;
        const Bc = this._interpolate(cB, yB, !0);
        if (!Bc) return this._keys[yB.key].frame === cB ? yB.key : yB.key + 1;
        const nc = {
          frame: cB,
          value: Bc.clone ? Bc.clone() : Bc
        };
        return this._keys.splice(yB.key + 1, 0, nc), yB.key + 1
      }
      serialize() {
        const cB = {};
        cB.name = this.name, cB.property = this.targetProperty, cB.framePerSecond = this.framePerSecond, cB.dataType = this.dataType, cB.loopBehavior = this.B_, cB.enableBlending = this.enableBlending, cB.blendingSpeed = this.blendingSpeed;
        const Bc = this.dataType;
        cB.keys = [];
        const nc = this.getKeys();
        for (let Vc = 0; Vc < nc.length; Vc++) {
          const Ic = nc[Vc],
            rB = {};
          switch (rB.frame = Ic.frame, Bc) {
            case zB.ANIMATIONTYPE_FLOAT:
              rB.values = [Ic.value], void 0 !== Ic.inTangent && rB.values.push(Ic.inTangent), void 0 !== Ic.outTangent && (void 0 === Ic.inTangent && rB.values.push(void 0), rB.values.push(Ic.outTangent)), void 0 !== Ic.interpolation && (void 0 === Ic.inTangent && rB.values.push(void 0), void 0 === Ic.outTangent && rB.values.push(void 0), rB.values.push(Ic.interpolation));
              break;
            case zB.ANIMATIONTYPE_QUATERNION:
            case zB.ANIMATIONTYPE_MATRIX:
            case zB.ANIMATIONTYPE_VECTOR3:
            case zB.ANIMATIONTYPE_COLOR3:
            case zB.ANIMATIONTYPE_COLOR4:
              rB.values = Ic.value.KPc(), void 0 != Ic.inTangent && rB.values.push(Ic.inTangent.KPc()), void 0 != Ic.outTangent && (void 0 === Ic.inTangent && rB.values.push(void 0), rB.values.push(Ic.outTangent.KPc())), void 0 !== Ic.interpolation && (void 0 === Ic.inTangent && rB.values.push(void 0), void 0 === Ic.outTangent && rB.values.push(void 0), rB.values.push(Ic.interpolation))
          }
          cB.keys.push(rB)
        }
        cB.Iu = [];
        for (const Vc in this._ranges) {
          const Bc = this._ranges[Vc];
          if (!Bc) continue;
          const nc = {};
          nc.name = Vc, nc.from = Bc.from, nc.to = Bc.to, cB.Iu.push(nc)
        }
        return cB
      }
      static _UniversalLerp(cB, Bc, nc) {
        const Vc = cB.constructor;
        return Vc.Lerp ? Vc.Lerp(cB, Bc, nc) : Vc.Slerp ? Vc.Slerp(cB, Bc, nc) : cB.toFixed ? cB * (1 - nc) + nc * Bc : Bc
      }
    }

    function pc(cB, Bc, nc) {
      let Ic;
      Ic = "object" === typeof Bc ? Bc : {
        referenceFrame: Bc ?? 0,
        range: nc,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let rB = cB;
      Ic.cloneOriginalAnimation && (rB = cB.clone(), rB.name = Ic.clonedAnimationName || rB.name);
      const uc = rB.getKeys();
      if (!uc.length) return rB;
      const sc = Ic.referenceFrame && Ic.referenceFrame >= 0 ? Ic.referenceFrame : 0;
      let Mc = 0;
      const Pc = uc[0];
      let qB = uc.length - 1;
      const Oc = uc[qB],
        Tc = {
          referenceValue: Pc.value,
          referencePosition: Vc.i.KV[0],
          referenceQuaternion: Vc.i.Quaternion[0],
          referenceScaling: Vc.i.KV[1],
          keyPosition: Vc.i.KV[2],
          keyQuaternion: Vc.i.Quaternion[1],
          keyScaling: Vc.i.KV[3]
        };
      let fc = Pc.frame,
        mB = Oc.frame;
      if (Ic.range) {
        const cB = rB.getRange(Ic.range);
        cB && (fc = cB.from, mB = cB.to)
      } else fc = Ic.fromFrame ?? fc, mB = Ic.toFrame ?? mB;
      fc !== Pc.frame && (Mc = rB.createKeyForFrame(fc)), mB !== Oc.frame && (qB = rB.createKeyForFrame(mB));
      const ec = rB.getKeys();
      if (1 === ec.length) {
        const cB = rB._getKeyValue(ec[0].value);
        Tc.referenceValue = cB.clone ? cB.clone() : cB
      } else if (sc <= Pc.frame) {
        const cB = rB._getKeyValue(Pc.value);
        Tc.referenceValue = cB.clone ? cB.clone() : cB
      } else if (sc >= Oc.frame) {
        const cB = rB._getKeyValue(Oc.value);
        Tc.referenceValue = cB.clone ? cB.clone() : cB
      } else {
        yB.key = 0;
        const cB = rB._interpolate(sc, yB);
        Tc.referenceValue = cB.clone ? cB.clone() : cB
      }
      rB.dataType === zB.ANIMATIONTYPE_QUATERNION ? Tc.referenceValue.normalize().conjugateInPlace() : rB.dataType === zB.ANIMATIONTYPE_MATRIX && (Tc.referenceValue.decompose(Tc.referenceScaling, Tc.referenceQuaternion, Tc.referencePosition), Tc.referenceQuaternion.normalize().conjugateInPlace());
      let tB = Number.MAX_VALUE;
      const Sc = Ic.clipKeys ? [] : null;
      for (let yB = Mc; yB <= qB; yB++) {
        let cB = ec[yB];
        if ((Sc || Ic.cloneOriginalAnimation) && (cB = {
            frame: cB.frame,
            value: cB.value.clone ? cB.value.clone() : cB.value,
            inTangent: cB.inTangent,
            outTangent: cB.outTangent,
            interpolation: cB.interpolation,
            lockedTangent: cB.lockedTangent,
            easingFunction: cB.easingFunction
          }, Sc && (tB === Number.MAX_VALUE && (tB = cB.frame), cB.frame -= tB, Sc.push(cB))), !yB || rB.dataType === zB.ANIMATIONTYPE_FLOAT || cB.value !== Pc.value) switch (rB.dataType) {
          case zB.ANIMATIONTYPE_MATRIX:
            cB.value.decompose(Tc.keyScaling, Tc.keyQuaternion, Tc.keyPosition), Tc.keyPosition.Tqc(Tc.referencePosition), Tc.keyScaling.divideInPlace(Tc.referenceScaling), Tc.referenceQuaternion.multiplyToRef(Tc.keyQuaternion, Tc.keyQuaternion), Vc.d.ComposeToRef(Tc.keyScaling, Tc.keyQuaternion, Tc.keyPosition, cB.value);
            break;
          case zB.ANIMATIONTYPE_QUATERNION:
            Tc.referenceValue.multiplyToRef(cB.value, cB.value);
            break;
          case zB.ANIMATIONTYPE_VECTOR2:
          case zB.ANIMATIONTYPE_VECTOR3:
          case zB.ANIMATIONTYPE_COLOR3:
          case zB.ANIMATIONTYPE_COLOR4:
            cB.value.subtractToRef(Tc.referenceValue, cB.value);
            break;
          case zB.ANIMATIONTYPE_SIZE:
            cB.value.width -= Tc.referenceValue.width, cB.value.height -= Tc.referenceValue.height;
            break;
          default:
            cB.value -= Tc.referenceValue
        }
      }
      return Sc && rB.setKeys(Sc, !0), rB
    }

    function hc(cB, Bc, nc, Vc) {
      const Ic = new zB(cB + "Animation", cB, nc, Bc, zB.ANIMATIONLOOPMODE_CONSTANT);
      return Ic.setEasingFunction(Vc), Ic
    }

    function aB(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB) {
      const Oc = zB._PrepareAnimation(cB, nc, Vc, Ic, rB, uc, sc, Mc);
      return Oc ? (Bc.knc && (qB = Bc.knc()), qB ? qB.beginDirectAnimation(Bc, [Oc], 0, Ic, Oc.B_ !== zB.ANIMATIONLOOPMODE_CONSTANT, 1, Pc) : null) : null
    }

    function lc(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB) {
      const Oc = zB._PrepareAnimation(cB, Vc, Ic, rB, uc, sc, Mc, Pc);
      if (!Oc) return null;
      return Bc.knc().beginDirectHierarchyAnimation(Bc, nc, [Oc], 0, rB, 1 === Oc.B_, 1, qB)
    }

    function Yc(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc) {
      const qB = zB._PrepareAnimation(cB, nc, Vc, Ic, rB, uc, sc, Mc);
      return qB ? (Bc.animations.push(qB), Bc.knc().beginAnimation(Bc, 0, Ic, 1 === qB.B_, 1, Pc)) : null
    }

    function Lc(cB, Bc, nc, Vc, Ic, rB, uc) {
      let sc = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Mc = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Pc = arguments.length > 9 ? arguments[9] : void 0;
      if (uc <= 0) return nc[cB] = Bc, sc && sc(), null;
      const qB = Ic * (uc / 1e3);
      rB.setKeys(Pc ?? [{
        frame: 0,
        value: nc[cB].clone ? nc[cB].clone() : nc[cB]
      }, {
        frame: qB,
        value: Bc
      }]), nc.animations || (nc.animations = []), nc.animations.push(rB);
      return Vc.beginAnimation(nc, 0, qB, !1, 1, sc ?? void 0, void 0, Mc)
    }

    function gB(cB, Bc) {
      qB.e.AppendSerializedAnimations(cB, Bc)
    }

    function Uc(cB) {
      const Bc = new zB(cB.name, cB.property, cB.framePerSecond, cB.dataType, cB.loopBehavior),
        nc = cB.dataType,
        rB = [];
      let uc, sc;
      for (cB.enableBlending && (Bc.enableBlending = cB.enableBlending), cB.blendingSpeed && (Bc.blendingSpeed = cB.blendingSpeed), sc = 0; sc < cB.keys.length; sc++) {
        const Bc = cB.keys[sc];
        let Mc, Pc, qB;
        switch (nc) {
          case zB.ANIMATIONTYPE_FLOAT:
            uc = Bc.values[0], Bc.values.length >= 2 && (Mc = Bc.values[1]), Bc.values.length >= 3 && (Pc = Bc.values[2]), Bc.values.length >= 4 && (qB = Bc.values[3]);
            break;
          case zB.ANIMATIONTYPE_QUATERNION:
            if (uc = Vc.f.FromArray(Bc.values), Bc.values.length >= 8) {
              const cB = Vc.f.FromArray(Bc.values.slice(4, 8));
              cB.equals(Vc.f.Zero()) || (Mc = cB)
            }
            if (Bc.values.length >= 12) {
              const cB = Vc.f.FromArray(Bc.values.slice(8, 12));
              cB.equals(Vc.f.Zero()) || (Pc = cB)
            }
            Bc.values.length >= 13 && (qB = Bc.values[12]);
            break;
          case zB.ANIMATIONTYPE_MATRIX:
            uc = Vc.d.FromArray(Bc.values), Bc.values.length >= 17 && (qB = Bc.values[16]);
            break;
          case zB.ANIMATIONTYPE_COLOR3:
            uc = Ic.e.FromArray(Bc.values), Bc.values[3] && (Mc = Ic.e.FromArray(Bc.values[3])), Bc.values[4] && (Pc = Ic.e.FromArray(Bc.values[4])), Bc.values[5] && (qB = Bc.values[5]);
            break;
          case zB.ANIMATIONTYPE_COLOR4:
            uc = Ic.g.FromArray(Bc.values), Bc.values[4] && (Mc = Ic.g.FromArray(Bc.values[4])), Bc.values[5] && (Pc = Ic.g.FromArray(Bc.values[5])), Bc.values[6] && (qB = Bc.values[6]);
            break;
          case zB.ANIMATIONTYPE_VECTOR3:
          default:
            uc = Vc.p.FromArray(Bc.values), Bc.values[3] && (Mc = Vc.p.FromArray(Bc.values[3])), Bc.values[4] && (Pc = Vc.p.FromArray(Bc.values[4])), Bc.values[5] && (qB = Bc.values[5])
        }
        const Oc = {};
        Oc.frame = Bc.frame, Oc.value = uc, void 0 != Mc && (Oc.inTangent = Mc), void 0 != Pc && (Oc.outTangent = Pc), void 0 != qB && (Oc.interpolation = qB), rB.push(Oc)
      }
      if (Bc.setKeys(rB), cB.Iu)
        for (sc = 0; sc < cB.Iu.length; sc++) uc = cB.Iu[sc], Bc.createRange(uc.name, uc.from, uc.to);
      return Bc
    }
    async function bB(cB, Bc) {
      return await new Promise(((nc, Vc) => {
        const Ic = new Pc.c;
        Ic.addEventListener("readystatechange", (() => {
          if (4 == Ic.readyState)
            if (200 == Ic.status) {
              let Bc = JSON.parse(Ic.responseText);
              if (Bc.animations && (Bc = Bc.animations), Bc.length) {
                const cB = [];
                for (const nc of Bc) cB.push(Uc(nc));
                nc(cB)
              } else {
                const Vc = Uc(Bc);
                cB && (Vc.name = cB), nc(Vc)
              }
            } else Vc("Unable to load the animation")
        })), Ic.open("GET", Bc), Ic.send()
      }))
    }
    async function Zc(cB) {
      const Bc = this?.SnippetUrl ?? zB.SnippetUrl;
      return await new Promise(((nc, Vc) => {
        const Ic = new Pc.c;
        Ic.addEventListener("readystatechange", (() => {
          if (4 == Ic.readyState)
            if (200 == Ic.status) {
              const Bc = JSON.parse(JSON.parse(Ic.responseText).jsonPayload);
              if (Bc.animations) {
                const Vc = JSON.parse(Bc.animations),
                  Ic = [];
                for (const Bc of Vc.animations) {
                  const nc = Uc(Bc);
                  nc.snippetId = cB, Ic.push(nc)
                }
                nc(Ic)
              } else {
                const Vc = Uc(JSON.parse(Bc.animation));
                Vc.snippetId = cB, nc(Vc)
              }
            } else Vc("Unable to load the snippet " + cB)
        })), Ic.open("GET", Bc + "/" + cB.replace(/#/g, "/")), Ic.send()
      }))
    }
    zB._UniqueIdGenerator = 0, zB.AllowMatricesInterpolation = !1, zB.AllowMatrixDecomposeForInterpolation = !0, zB.InheritOriginalValueFromActiveAnimations = !1, zB.SnippetUrl = "https://snippet.babylonjs.com", zB.ANIMATIONTYPE_FLOAT = 0, zB.ANIMATIONTYPE_VECTOR3 = 1, zB.ANIMATIONTYPE_QUATERNION = 2, zB.ANIMATIONTYPE_MATRIX = 3, zB.ANIMATIONTYPE_COLOR3 = 4, zB.ANIMATIONTYPE_COLOR4 = 7, zB.ANIMATIONTYPE_VECTOR2 = 5, zB.ANIMATIONTYPE_SIZE = 6, zB.ANIMATIONLOOPMODE_RELATIVE = 0, zB.ANIMATIONLOOPMODE_CYCLE = 1, zB.ANIMATIONLOOPMODE_CONSTANT = 2, zB.ANIMATIONLOOPMODE_YOYO = 4, zB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const Qc = Zc;
    let Cc = !1;

    function vB() {
      Cc || (Cc = !0, zB.Parse = Uc, zB.ParseFromFileAsync = bB, zB.ParseFromSnippetAsync = Zc, zB.CreateFromSnippetAsync = Qc, zB.CreateAnimation = hc, zB.CreateAndStartAnimation = aB, zB.CreateAndStartHierarchyAnimation = lc, zB.CreateMergeAndStartAnimation = Yc, zB.MakeAnimationAdditive = pc, zB.TransitionTo = Lc, zB.AppendSerializedAnimations = gB, (0, Oc.d)("BABYLON.Animation", zB), sc.c._AnimationRangeFactory = (cB, Bc, nc) => new uc.b(cB, Bc, nc))
    }
  },
  39190: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc
    });
    class Vc {
      constructor(cB, Bc, nc) {
        this.name = cB, this.from = Bc, this.to = nc
      }
      clone() {
        return new Vc(this.name, this.from, this.to)
      }
    }
  },
  39232: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc.b,
      g: () => Vc.i
    });
    var Vc = nc(38194);
    (0, Vc.d)()
  },
  39218: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Vc.e
    });
    var Vc = nc(38493);
    (0, Vc.d)()
  },
  39201: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc.c
    });
    var Vc = nc(38479);
    (0, Vc.e)()
  },
  39241: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc.b
    });
    var Vc = nc(38425);
    (0, Vc.d)()
  },
  39192: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Vc.f
    });
    var Vc = nc(38459);
    (0, Vc.c)()
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);