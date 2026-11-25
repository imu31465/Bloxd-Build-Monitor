export const id = 279;
export const ids = [279];
export const modules = {
  41298: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => bt,
      h: () => Zt,
      i: () => yt,
      k: () => Nt,
      l: () => lt,
      o: () => wt,
      q: () => ft,
      s: () => Et
    });
    var Ot = Vt(37336),
      qt = Vt(37513),
      Dt = Vt(37372),
      mt = Vt(41306),
      dt = Vt(40415),
      jt = Vt(40222),
      Ht = Vt(40255),
      Xt = Vt(40230),
      Qt = Vt(37390);
    const lt = Object.freeze(new Ot.e(0, 0, 0, 0)),
      Et = Object.freeze(Ot.n.Zero()),
      ft = Object.freeze(Ot.m.Zero()),
      wt = Object.freeze(jt.e.Zero()),
      yt = Object.freeze(qt.b.Black()),
      Nt = Object.freeze(new qt.c(0, 0, 0, 0)),
      Mt = {
        key: 0,
        repeatCount: 0,
        Vq: 2
      };
    class bt {
      static _PrepareAnimation(tt, et, Vt, Dt, mt, dt, Ht, Xt) {
        let Qt;
        if (!isNaN(parseFloat(mt)) && isFinite(mt) ? Qt = bt.ANIMATIONTYPE_FLOAT : mt instanceof Ot.e ? Qt = bt.ANIMATIONTYPE_QUATERNION : mt instanceof Ot.n ? Qt = bt.ANIMATIONTYPE_VECTOR3 : mt instanceof Ot.m ? Qt = bt.ANIMATIONTYPE_VECTOR2 : mt instanceof qt.b ? Qt = bt.ANIMATIONTYPE_COLOR3 : mt instanceof qt.c ? Qt = bt.ANIMATIONTYPE_COLOR4 : mt instanceof jt.e && (Qt = bt.ANIMATIONTYPE_SIZE), void 0 == Qt) return null;
        const lt = new bt(tt, et, Vt, Qt, Ht),
          Et = [{
            frame: 0,
            value: mt
          }, {
            frame: Dt,
            value: dt
          }];
        return lt.setKeys(Et), void 0 !== Xt && lt.setEasingFunction(Xt), lt
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const tt of this._runtimeAnimations)
          if (!tt.isStopped()) return !0;
        return !1
      }
      constructor(tt, et, Vt, Ot, qt, Dt) {
        this.name = tt, this.targetProperty = et, this.framePerSecond = Vt, this.dataType = Ot, this.Vq = qt, this.enableBlending = Dt, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = et.split("."), this.dataType = Ot, this.Vq = void 0 === qt ? bt.ANIMATIONLOOPMODE_CYCLE : qt, this.uniqueId = bt._UniqueIdGenerator++
      }
      toString(tt) {
        let et = "Name: " + this.name + ", property: " + this.targetProperty;
        if (et += ", datatype: " + ["Float", "uf", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], et += ", nKeys: " + (this._keys ? this._keys.length : "none"), et += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), tt) {
          et += ", Ranges: {";
          let tt = !0;
          for (const Vt in this._ranges) tt || (et += ", "), tt = !1, et += Vt;
          et += "}"
        }
        return et
      }
      addEvent(tt) {
        this._events.push(tt), this._events.sort(((tt, et) => tt.frame - et.frame))
      }
      removeEvents(tt) {
        for (let et = 0; et < this._events.length; et++) this._events[et].frame === tt && (this._events.splice(et, 1), et--)
      }
      getEvents() {
        return this._events
      }
      createRange(tt, et, Vt) {
        this._ranges[tt] || (this._ranges[tt] = new mt.e(tt, et, Vt))
      }
      deleteRange(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Vt = this._ranges[tt];
        if (Vt) {
          if (et) {
            const tt = Vt.from,
              et = Vt.to;
            for (let Vt = this._keys.length - 1; Vt >= 0; Vt--) this._keys[Vt].frame >= tt && this._keys[Vt].frame <= et && this._keys.splice(Vt, 1)
          }
          this._ranges[tt] = null
        }
      }
      getRange(tt) {
        return this._ranges[tt]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let tt = 0;
        for (let et = 0, Vt = this._keys.length; et < Vt; et++) tt < this._keys[et].frame && (tt = this._keys[et].frame);
        return tt
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(tt) {
        this._easingFunction = tt
      }
      floatInterpolateFunction(tt, et, Vt) {
        return (0, Dt.Lerp)(tt, et, Vt)
      }
      floatInterpolateFunctionWithTangents(tt, et, Vt, Ot, qt) {
        return (0, Dt.Hermite)(tt, et, Vt, Ot, qt)
      }
      quaternionInterpolateFunction(tt, et, Vt) {
        return Ot.e.Slerp(tt, et, Vt)
      }
      quaternionInterpolateFunctionWithTangents(tt, et, Vt, qt, Dt) {
        return Ot.e.Hermite(tt, et, Vt, qt, Dt).normalize()
      }
      vector3InterpolateFunction(tt, et, Vt) {
        return Ot.n.Lerp(tt, et, Vt)
      }
      vector3InterpolateFunctionWithTangents(tt, et, Vt, qt, Dt) {
        return Ot.n.Hermite(tt, et, Vt, qt, Dt)
      }
      vector2InterpolateFunction(tt, et, Vt) {
        return Ot.m.Lerp(tt, et, Vt)
      }
      vector2InterpolateFunctionWithTangents(tt, et, Vt, qt, Dt) {
        return Ot.m.Hermite(tt, et, Vt, qt, Dt)
      }
      sizeInterpolateFunction(tt, et, Vt) {
        return jt.e.Lerp(tt, et, Vt)
      }
      color3InterpolateFunction(tt, et, Vt) {
        return qt.b.Lerp(tt, et, Vt)
      }
      color3InterpolateFunctionWithTangents(tt, et, Vt, Ot, Dt) {
        return qt.b.Hermite(tt, et, Vt, Ot, Dt)
      }
      color4InterpolateFunction(tt, et, Vt) {
        return qt.c.Lerp(tt, et, Vt)
      }
      color4InterpolateFunctionWithTangents(tt, et, Vt, Ot, Dt) {
        return qt.c.Hermite(tt, et, Vt, Ot, Dt)
      }
      _getKeyValue(tt) {
        return "function" === typeof tt ? tt() : tt
      }
      evaluate(tt) {
        return Mt.key = 0, this._interpolate(tt, Mt)
      }
      _interpolate(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (et.Vq === bt.ANIMATIONLOOPMODE_CONSTANT && et.repeatCount > 0) return et.highLimitValue.clone ? et.highLimitValue.clone() : et.highLimitValue;
        const Ot = this._keys;
        let qt;
        if (this._coreAnimation) qt = this._coreAnimation._key;
        else {
          const Dt = Ot.length;
          for (qt = et.key; qt >= 0 && tt < Ot[qt].frame;) --qt;
          for (; qt + 1 <= Dt - 1 && tt >= Ot[qt + 1].frame;) ++qt;
          if (et.key = qt, qt < 0) return Vt ? void 0 : this._getKeyValue(Ot[0].value);
          if (qt + 1 > Dt - 1) return Vt ? void 0 : this._getKeyValue(Ot[Dt - 1].value);
          this._key = qt
        }
        const Dt = Ot[qt],
          mt = Ot[qt + 1];
        if (Vt && (tt === Dt.frame || tt === mt.frame)) return;
        const dt = this._getKeyValue(Dt.value),
          jt = this._getKeyValue(mt.value);
        if (1 === Dt.interpolation) return mt.frame > tt ? dt : jt;
        const Ht = void 0 !== Dt.outTangent && void 0 !== mt.inTangent,
          Xt = mt.frame - Dt.frame;
        let Qt = (tt - Dt.frame) / Xt;
        const Mt = Dt.easingFunction || this.getEasingFunction();
        switch (Mt && (Qt = Mt.ease(Qt)), this.dataType) {
          case bt.ANIMATIONTYPE_FLOAT: {
            const tt = Ht ? this.floatInterpolateFunctionWithTangents(dt, Dt.outTangent * Xt, jt, mt.inTangent * Xt, Qt) : this.floatInterpolateFunction(dt, jt, Qt);
            switch (et.Vq) {
              case bt.ANIMATIONLOOPMODE_CYCLE:
              case bt.ANIMATIONLOOPMODE_CONSTANT:
              case bt.ANIMATIONLOOPMODE_YOYO:
                return tt;
              case bt.ANIMATIONLOOPMODE_RELATIVE:
              case bt.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (et.offsetValue ?? 0) * et.repeatCount + tt
            }
            break
          }
          case bt.ANIMATIONTYPE_QUATERNION: {
            const tt = Ht ? this.quaternionInterpolateFunctionWithTangents(dt, Dt.outTangent.scale(Xt), jt, mt.inTangent.scale(Xt), Qt) : this.quaternionInterpolateFunction(dt, jt, Qt);
            switch (et.Vq) {
              case bt.ANIMATIONLOOPMODE_CYCLE:
              case bt.ANIMATIONLOOPMODE_CONSTANT:
              case bt.ANIMATIONLOOPMODE_YOYO:
                return tt;
              case bt.ANIMATIONLOOPMODE_RELATIVE:
              case bt.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return tt.addInPlace((et.offsetValue || lt).scale(et.repeatCount))
            }
            return tt
          }
          case bt.ANIMATIONTYPE_VECTOR3: {
            const tt = Ht ? this.vector3InterpolateFunctionWithTangents(dt, Dt.outTangent.scale(Xt), jt, mt.inTangent.scale(Xt), Qt) : this.vector3InterpolateFunction(dt, jt, Qt);
            switch (et.Vq) {
              case bt.ANIMATIONLOOPMODE_CYCLE:
              case bt.ANIMATIONLOOPMODE_CONSTANT:
              case bt.ANIMATIONLOOPMODE_YOYO:
                return tt;
              case bt.ANIMATIONLOOPMODE_RELATIVE:
              case bt.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return tt.add((et.offsetValue || Et).scale(et.repeatCount))
            }
            break
          }
          case bt.ANIMATIONTYPE_VECTOR2: {
            const tt = Ht ? this.vector2InterpolateFunctionWithTangents(dt, Dt.outTangent.scale(Xt), jt, mt.inTangent.scale(Xt), Qt) : this.vector2InterpolateFunction(dt, jt, Qt);
            switch (et.Vq) {
              case bt.ANIMATIONLOOPMODE_CYCLE:
              case bt.ANIMATIONLOOPMODE_CONSTANT:
              case bt.ANIMATIONLOOPMODE_YOYO:
                return tt;
              case bt.ANIMATIONLOOPMODE_RELATIVE:
              case bt.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return tt.add((et.offsetValue || ft).scale(et.repeatCount))
            }
            break
          }
          case bt.ANIMATIONTYPE_SIZE:
            switch (et.Vq) {
              case bt.ANIMATIONLOOPMODE_CYCLE:
              case bt.ANIMATIONLOOPMODE_CONSTANT:
              case bt.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(dt, jt, Qt);
              case bt.ANIMATIONLOOPMODE_RELATIVE:
              case bt.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(dt, jt, Qt).add((et.offsetValue || wt).scale(et.repeatCount))
            }
            break;
          case bt.ANIMATIONTYPE_COLOR3: {
            const tt = Ht ? this.color3InterpolateFunctionWithTangents(dt, Dt.outTangent.scale(Xt), jt, mt.inTangent.scale(Xt), Qt) : this.color3InterpolateFunction(dt, jt, Qt);
            switch (et.Vq) {
              case bt.ANIMATIONLOOPMODE_CYCLE:
              case bt.ANIMATIONLOOPMODE_CONSTANT:
              case bt.ANIMATIONLOOPMODE_YOYO:
                return tt;
              case bt.ANIMATIONLOOPMODE_RELATIVE:
              case bt.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return tt.add((et.offsetValue || yt).scale(et.repeatCount))
            }
            break
          }
          case bt.ANIMATIONTYPE_COLOR4: {
            const tt = Ht ? this.color4InterpolateFunctionWithTangents(dt, Dt.outTangent.scale(Xt), jt, mt.inTangent.scale(Xt), Qt) : this.color4InterpolateFunction(dt, jt, Qt);
            switch (et.Vq) {
              case bt.ANIMATIONLOOPMODE_CYCLE:
              case bt.ANIMATIONLOOPMODE_CONSTANT:
              case bt.ANIMATIONLOOPMODE_YOYO:
                return tt;
              case bt.ANIMATIONLOOPMODE_RELATIVE:
              case bt.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return tt.add((et.offsetValue || Nt).scale(et.repeatCount))
            }
            break
          }
          case bt.ANIMATIONTYPE_MATRIX:
            switch (et.Vq) {
              case bt.ANIMATIONLOOPMODE_CYCLE:
              case bt.ANIMATIONLOOPMODE_CONSTANT:
              case bt.ANIMATIONLOOPMODE_YOYO:
                return bt.AllowMatricesInterpolation ? this.matrixInterpolateFunction(dt, jt, Qt, et.workValue) : dt;
              case bt.ANIMATIONLOOPMODE_RELATIVE:
              case bt.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return dt
            }
        }
        return 0
      }
      matrixInterpolateFunction(tt, et, Vt, qt) {
        return bt.AllowMatrixDecomposeForInterpolation ? qt ? (Ot.c.DecomposeLerpToRef(tt, et, Vt, qt), qt) : Ot.c.DecomposeLerp(tt, et, Vt) : qt ? (Ot.c.LerpToRef(tt, et, Vt, qt), qt) : Ot.c.Lerp(tt, et, Vt)
      }
      clone() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const et = new bt(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.Vq);
        if (et.enableBlending = this.enableBlending, et.blendingSpeed = this.blendingSpeed, this._keys && et.setKeys(this._keys, !1, tt), this._ranges) {
          et._ranges = {};
          for (const tt in this._ranges) {
            const Vt = this._ranges[tt];
            Vt && (et._ranges[tt] = Vt.clone())
          }
        }
        return et
      }
      setKeys(tt) {
        let et = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = tt;
        else if (this._keys = tt.slice(0), et)
          for (let Vt = 0; Vt < this._keys.length; Vt++) {
            const tt = this._keys[Vt];
            this._keys[Vt] = {
              frame: tt.frame,
              value: tt.value.clone ? tt.value.clone() : tt.value,
              inTangent: tt.inTangent && tt.inTangent.clone ? tt.inTangent.clone() : tt.inTangent,
              outTangent: tt.outTangent && tt.outTangent.clone ? tt.outTangent.clone() : tt.outTangent,
              interpolation: tt.interpolation,
              lockedTangent: tt.lockedTangent,
              easingFunction: tt.easingFunction
            }
          }
      }
      createKeyForFrame(tt) {
        Mt.key = 0;
        const et = this._interpolate(tt, Mt, !0);
        if (!et) return this._keys[Mt.key].frame === tt ? Mt.key : Mt.key + 1;
        const Vt = {
          frame: tt,
          value: et.clone ? et.clone() : et
        };
        return this._keys.splice(Mt.key + 1, 0, Vt), Mt.key + 1
      }
      serialize() {
        const tt = {};
        tt.name = this.name, tt.property = this.targetProperty, tt.framePerSecond = this.framePerSecond, tt.dataType = this.dataType, tt.loopBehavior = this.Vq, tt.enableBlending = this.enableBlending, tt.blendingSpeed = this.blendingSpeed;
        const et = this.dataType;
        tt.keys = [];
        const Vt = this.getKeys();
        for (let Ot = 0; Ot < Vt.length; Ot++) {
          const qt = Vt[Ot],
            Dt = {};
          switch (Dt.frame = qt.frame, et) {
            case bt.ANIMATIONTYPE_FLOAT:
              Dt.values = [qt.value], void 0 !== qt.inTangent && Dt.values.push(qt.inTangent), void 0 !== qt.outTangent && (void 0 === qt.inTangent && Dt.values.push(void 0), Dt.values.push(qt.outTangent)), void 0 !== qt.interpolation && (void 0 === qt.inTangent && Dt.values.push(void 0), void 0 === qt.outTangent && Dt.values.push(void 0), Dt.values.push(qt.interpolation));
              break;
            case bt.ANIMATIONTYPE_QUATERNION:
            case bt.ANIMATIONTYPE_MATRIX:
            case bt.ANIMATIONTYPE_VECTOR3:
            case bt.ANIMATIONTYPE_COLOR3:
            case bt.ANIMATIONTYPE_COLOR4:
              Dt.values = qt.value.GOt(), void 0 != qt.inTangent && Dt.values.push(qt.inTangent.GOt()), void 0 != qt.outTangent && (void 0 === qt.inTangent && Dt.values.push(void 0), Dt.values.push(qt.outTangent.GOt())), void 0 !== qt.interpolation && (void 0 === qt.inTangent && Dt.values.push(void 0), void 0 === qt.outTangent && Dt.values.push(void 0), Dt.values.push(qt.interpolation))
          }
          tt.keys.push(Dt)
        }
        tt.nw = [];
        for (const Ot in this._ranges) {
          const et = this._ranges[Ot];
          if (!et) continue;
          const Vt = {};
          Vt.name = Ot, Vt.from = et.from, Vt.to = et.to, tt.nw.push(Vt)
        }
        return tt
      }
      static _UniversalLerp(tt, et, Vt) {
        const Ot = tt.constructor;
        return Ot.Lerp ? Ot.Lerp(tt, et, Vt) : Ot.Slerp ? Ot.Slerp(tt, et, Vt) : tt.toFixed ? tt * (1 - Vt) + Vt * et : et
      }
    }

    function Jt(tt, et, Vt) {
      let qt;
      qt = "object" === typeof et ? et : {
        referenceFrame: et ?? 0,
        range: Vt,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let Dt = tt;
      qt.cloneOriginalAnimation && (Dt = tt.clone(), Dt.name = qt.clonedAnimationName || Dt.name);
      const mt = Dt.getKeys();
      if (!mt.length) return Dt;
      const dt = qt.referenceFrame && qt.referenceFrame >= 0 ? qt.referenceFrame : 0;
      let jt = 0;
      const Ht = mt[0];
      let Xt = mt.length - 1;
      const Qt = mt[Xt],
        lt = {
          referenceValue: Ht.value,
          referencePosition: Ot.k.uf[0],
          referenceQuaternion: Ot.k.Quaternion[0],
          referenceScaling: Ot.k.uf[1],
          keyPosition: Ot.k.uf[2],
          keyQuaternion: Ot.k.Quaternion[1],
          keyScaling: Ot.k.uf[3]
        };
      let Et = Ht.frame,
        ft = Qt.frame;
      if (qt.range) {
        const tt = Dt.getRange(qt.range);
        tt && (Et = tt.from, ft = tt.to)
      } else Et = qt.fromFrame ?? Et, ft = qt.toFrame ?? ft;
      Et !== Ht.frame && (jt = Dt.createKeyForFrame(Et)), ft !== Qt.frame && (Xt = Dt.createKeyForFrame(ft));
      const wt = Dt.getKeys();
      if (1 === wt.length) {
        const tt = Dt._getKeyValue(wt[0].value);
        lt.referenceValue = tt.clone ? tt.clone() : tt
      } else if (dt <= Ht.frame) {
        const tt = Dt._getKeyValue(Ht.value);
        lt.referenceValue = tt.clone ? tt.clone() : tt
      } else if (dt >= Qt.frame) {
        const tt = Dt._getKeyValue(Qt.value);
        lt.referenceValue = tt.clone ? tt.clone() : tt
      } else {
        Mt.key = 0;
        const tt = Dt._interpolate(dt, Mt);
        lt.referenceValue = tt.clone ? tt.clone() : tt
      }
      Dt.dataType === bt.ANIMATIONTYPE_QUATERNION ? lt.referenceValue.normalize().conjugateInPlace() : Dt.dataType === bt.ANIMATIONTYPE_MATRIX && (lt.referenceValue.decompose(lt.referenceScaling, lt.referenceQuaternion, lt.referencePosition), lt.referenceQuaternion.normalize().conjugateInPlace());
      let yt = Number.MAX_VALUE;
      const Nt = qt.clipKeys ? [] : null;
      for (let Mt = jt; Mt <= Xt; Mt++) {
        let tt = wt[Mt];
        if ((Nt || qt.cloneOriginalAnimation) && (tt = {
            frame: tt.frame,
            value: tt.value.clone ? tt.value.clone() : tt.value,
            inTangent: tt.inTangent,
            outTangent: tt.outTangent,
            interpolation: tt.interpolation,
            lockedTangent: tt.lockedTangent,
            easingFunction: tt.easingFunction
          }, Nt && (yt === Number.MAX_VALUE && (yt = tt.frame), tt.frame -= yt, Nt.push(tt))), !Mt || Dt.dataType === bt.ANIMATIONTYPE_FLOAT || tt.value !== Ht.value) switch (Dt.dataType) {
          case bt.ANIMATIONTYPE_MATRIX:
            tt.value.decompose(lt.keyScaling, lt.keyQuaternion, lt.keyPosition), lt.keyPosition.qqt(lt.referencePosition), lt.keyScaling.divideInPlace(lt.referenceScaling), lt.referenceQuaternion.multiplyToRef(lt.keyQuaternion, lt.keyQuaternion), Ot.c.ComposeToRef(lt.keyScaling, lt.keyQuaternion, lt.keyPosition, tt.value);
            break;
          case bt.ANIMATIONTYPE_QUATERNION:
            lt.referenceValue.multiplyToRef(tt.value, tt.value);
            break;
          case bt.ANIMATIONTYPE_VECTOR2:
          case bt.ANIMATIONTYPE_VECTOR3:
          case bt.ANIMATIONTYPE_COLOR3:
          case bt.ANIMATIONTYPE_COLOR4:
            tt.value.subtractToRef(lt.referenceValue, tt.value);
            break;
          case bt.ANIMATIONTYPE_SIZE:
            tt.value.width -= lt.referenceValue.width, tt.value.height -= lt.referenceValue.height;
            break;
          default:
            tt.value -= lt.referenceValue
        }
      }
      return Nt && Dt.setKeys(Nt, !0), Dt
    }

    function Ct(tt, et, Vt, Ot) {
      const qt = new bt(tt + "Animation", tt, Vt, et, bt.ANIMATIONLOOPMODE_CONSTANT);
      return qt.setEasingFunction(Ot), qt
    }

    function ut(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt) {
      const Qt = bt._PrepareAnimation(tt, Vt, Ot, qt, Dt, mt, dt, jt);
      return Qt ? (et.vI && (Xt = et.vI()), Xt ? Xt.beginDirectAnimation(et, [Qt], 0, qt, Qt.Vq !== bt.ANIMATIONLOOPMODE_CONSTANT, 1, Ht) : null) : null
    }

    function Kt(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt) {
      const Qt = bt._PrepareAnimation(tt, Ot, qt, Dt, mt, dt, jt, Ht);
      if (!Qt) return null;
      return et.vI().beginDirectHierarchyAnimation(et, Vt, [Qt], 0, Dt, 1 === Qt.Vq, 1, Xt)
    }

    function ht(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht) {
      const Xt = bt._PrepareAnimation(tt, Vt, Ot, qt, Dt, mt, dt, jt);
      return Xt ? (et.animations.push(Xt), et.vI().beginAnimation(et, 0, qt, 1 === Xt.Vq, 1, Ht)) : null
    }

    function vt(tt, et, Vt, Ot, qt, Dt, mt) {
      let dt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        jt = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Ht = arguments.length > 9 ? arguments[9] : void 0;
      if (mt <= 0) return Vt[tt] = et, dt && dt(), null;
      const Xt = qt * (mt / 1e3);
      Dt.setKeys(Ht ?? [{
        frame: 0,
        value: Vt[tt].clone ? Vt[tt].clone() : Vt[tt]
      }, {
        frame: Xt,
        value: et
      }]), Vt.animations || (Vt.animations = []), Vt.animations.push(Dt);
      return Ot.beginAnimation(Vt, 0, Xt, !1, 1, dt ?? void 0, void 0, jt)
    }

    function Wt(tt, et) {
      Xt.d.AppendSerializedAnimations(tt, et)
    }

    function St(tt) {
      const et = new bt(tt.name, tt.property, tt.framePerSecond, tt.dataType, tt.loopBehavior),
        Vt = tt.dataType,
        Dt = [];
      let mt, dt;
      for (tt.enableBlending && (et.enableBlending = tt.enableBlending), tt.blendingSpeed && (et.blendingSpeed = tt.blendingSpeed), dt = 0; dt < tt.keys.length; dt++) {
        const et = tt.keys[dt];
        let jt, Ht, Xt;
        switch (Vt) {
          case bt.ANIMATIONTYPE_FLOAT:
            mt = et.values[0], et.values.length >= 2 && (jt = et.values[1]), et.values.length >= 3 && (Ht = et.values[2]), et.values.length >= 4 && (Xt = et.values[3]);
            break;
          case bt.ANIMATIONTYPE_QUATERNION:
            if (mt = Ot.e.FromArray(et.values), et.values.length >= 8) {
              const tt = Ot.e.FromArray(et.values.slice(4, 8));
              tt.equals(Ot.e.Zero()) || (jt = tt)
            }
            if (et.values.length >= 12) {
              const tt = Ot.e.FromArray(et.values.slice(8, 12));
              tt.equals(Ot.e.Zero()) || (Ht = tt)
            }
            et.values.length >= 13 && (Xt = et.values[12]);
            break;
          case bt.ANIMATIONTYPE_MATRIX:
            mt = Ot.c.FromArray(et.values), et.values.length >= 17 && (Xt = et.values[16]);
            break;
          case bt.ANIMATIONTYPE_COLOR3:
            mt = qt.b.FromArray(et.values), et.values[3] && (jt = qt.b.FromArray(et.values[3])), et.values[4] && (Ht = qt.b.FromArray(et.values[4])), et.values[5] && (Xt = et.values[5]);
            break;
          case bt.ANIMATIONTYPE_COLOR4:
            mt = qt.c.FromArray(et.values), et.values[4] && (jt = qt.c.FromArray(et.values[4])), et.values[5] && (Ht = qt.c.FromArray(et.values[5])), et.values[6] && (Xt = et.values[6]);
            break;
          case bt.ANIMATIONTYPE_VECTOR3:
          default:
            mt = Ot.n.FromArray(et.values), et.values[3] && (jt = Ot.n.FromArray(et.values[3])), et.values[4] && (Ht = Ot.n.FromArray(et.values[4])), et.values[5] && (Xt = et.values[5])
        }
        const Qt = {};
        Qt.frame = et.frame, Qt.value = mt, void 0 != jt && (Qt.inTangent = jt), void 0 != Ht && (Qt.outTangent = Ht), void 0 != Xt && (Qt.interpolation = Xt), Dt.push(Qt)
      }
      if (et.setKeys(Dt), tt.nw)
        for (dt = 0; dt < tt.nw.length; dt++) mt = tt.nw[dt], et.createRange(mt.name, mt.from, mt.to);
      return et
    }
    async function ct(tt, et) {
      return await new Promise(((Vt, Ot) => {
        const qt = new Ht.e;
        qt.addEventListener("readystatechange", (() => {
          if (4 == qt.readyState)
            if (200 == qt.status) {
              let et = JSON.parse(qt.responseText);
              if (et.animations && (et = et.animations), et.length) {
                const tt = [];
                for (const Vt of et) tt.push(St(Vt));
                Vt(tt)
              } else {
                const Ot = St(et);
                tt && (Ot.name = tt), Vt(Ot)
              }
            } else Ot("Unable to load the animation")
        })), qt.open("GET", et), qt.send()
      }))
    }
    async function Rt(tt) {
      const et = this?.SnippetUrl ?? bt.SnippetUrl;
      return await new Promise(((Vt, Ot) => {
        const qt = new Ht.e;
        qt.addEventListener("readystatechange", (() => {
          if (4 == qt.readyState)
            if (200 == qt.status) {
              const et = JSON.parse(JSON.parse(qt.responseText).jsonPayload);
              if (et.animations) {
                const Ot = JSON.parse(et.animations),
                  qt = [];
                for (const et of Ot.animations) {
                  const Vt = St(et);
                  Vt.snippetId = tt, qt.push(Vt)
                }
                Vt(qt)
              } else {
                const Ot = St(JSON.parse(et.animation));
                Ot.snippetId = tt, Vt(Ot)
              }
            } else Ot("Unable to load the snippet " + tt)
        })), qt.open("GET", et + "/" + tt.replace(/#/g, "/")), qt.send()
      }))
    }
    bt._UniqueIdGenerator = 0, bt.AllowMatricesInterpolation = !1, bt.AllowMatrixDecomposeForInterpolation = !0, bt.InheritOriginalValueFromActiveAnimations = !1, bt.SnippetUrl = "https://snippet.babylonjs.com", bt.ANIMATIONTYPE_FLOAT = 0, bt.ANIMATIONTYPE_VECTOR3 = 1, bt.ANIMATIONTYPE_QUATERNION = 2, bt.ANIMATIONTYPE_MATRIX = 3, bt.ANIMATIONTYPE_COLOR3 = 4, bt.ANIMATIONTYPE_COLOR4 = 7, bt.ANIMATIONTYPE_VECTOR2 = 5, bt.ANIMATIONTYPE_SIZE = 6, bt.ANIMATIONLOOPMODE_RELATIVE = 0, bt.ANIMATIONLOOPMODE_CYCLE = 1, bt.ANIMATIONLOOPMODE_CONSTANT = 2, bt.ANIMATIONLOOPMODE_YOYO = 4, bt.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const It = Rt;
    let Pt = !1;

    function Zt() {
      Pt || (Pt = !0, bt.Parse = St, bt.ParseFromFileAsync = ct, bt.ParseFromSnippetAsync = Rt, bt.CreateFromSnippetAsync = It, bt.CreateAnimation = Ct, bt.CreateAndStartAnimation = ut, bt.CreateAndStartHierarchyAnimation = Kt, bt.CreateMergeAndStartAnimation = ht, bt.MakeAnimationAdditive = Jt, bt.TransitionTo = vt, bt.AppendSerializedAnimations = Wt, (0, Qt.i)("BABYLON.Animation", bt), dt.d._AnimationRangeFactory = (tt, et, Vt) => new mt.e(tt, et, Vt))
    }
  },
  41306: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot
    });
    class Ot {
      constructor(tt, et, Vt) {
        this.name = tt, this.from = et, this.to = Vt
      }
      clone() {
        return new Ot(this.name, this.from, this.to)
      }
    }
  },
  41374: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot.b,
      e: () => Ot.m
    });
    var Ot = Vt(40343);
    (0, Ot.f)()
  },
  41348: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot.f
    });
    var Ot = Vt(40661);
    (0, Ot.d)()
  },
  41316: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot.b
    });
    var Ot = Vt(40656);
    (0, Ot.d)()
  },
  41379: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot.d
    });
    var Ot = Vt(40601);
    (0, Ot.g)()
  },
  41312: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot.d
    });
    var Ot = Vt(40638);
    (0, Ot.c)()
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);