export const id = 265;
export const ids = [265];
export const modules = {
  40396: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Gv,
      e: () => xv,
      h: () => Cv,
      i: () => iv,
      l: () => Wv,
      p: () => sv,
      q: () => av,
      r: () => wv
    });
    var hv = Pv(36594),
      Sv = Pv(36751),
      ev = Pv(36620),
      gv = Pv(40402),
      pv = Pv(39518),
      dv = Pv(39309),
      Nv = Pv(39346),
      lv = Pv(39312),
      Tv = Pv(36631);
    const Wv = Object.freeze(new hv.d(0, 0, 0, 0)),
      wv = Object.freeze(hv.l.Zero()),
      av = Object.freeze(hv.j.Zero()),
      sv = Object.freeze(dv.d.Zero()),
      Cv = Object.freeze(Sv.b.Black()),
      iv = Object.freeze(new Sv.e(0, 0, 0, 0)),
      cv = {
        key: 0,
        repeatCount: 0,
        GS: 2
      };
    class Gv {
      static _PrepareAnimation(vv, zv, Pv, ev, gv, pv, Nv, lv) {
        let Tv;
        if (!isNaN(parseFloat(gv)) && isFinite(gv) ? Tv = Gv.ANIMATIONTYPE_FLOAT : gv instanceof hv.d ? Tv = Gv.ANIMATIONTYPE_QUATERNION : gv instanceof hv.l ? Tv = Gv.ANIMATIONTYPE_VECTOR3 : gv instanceof hv.j ? Tv = Gv.ANIMATIONTYPE_VECTOR2 : gv instanceof Sv.b ? Tv = Gv.ANIMATIONTYPE_COLOR3 : gv instanceof Sv.e ? Tv = Gv.ANIMATIONTYPE_COLOR4 : gv instanceof dv.d && (Tv = Gv.ANIMATIONTYPE_SIZE), void 0 == Tv) return null;
        const Wv = new Gv(vv, zv, Pv, Tv, Nv),
          wv = [{
            frame: 0,
            value: gv
          }, {
            frame: ev,
            value: pv
          }];
        return Wv.setKeys(wv), void 0 !== lv && Wv.setEasingFunction(lv), Wv
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const vv of this._runtimeAnimations)
          if (!vv.isStopped()) return !0;
        return !1
      }
      constructor(vv, zv, Pv, hv, Sv, ev) {
        this.name = vv, this.targetProperty = zv, this.framePerSecond = Pv, this.dataType = hv, this.GS = Sv, this.enableBlending = ev, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = zv.split("."), this.dataType = hv, this.GS = void 0 === Sv ? Gv.ANIMATIONLOOPMODE_CYCLE : Sv, this.uniqueId = Gv._UniqueIdGenerator++
      }
      toString(vv) {
        let zv = "Name: " + this.name + ", property: " + this.targetProperty;
        if (zv += ", datatype: " + ["Float", "fa", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], zv += ", nKeys: " + (this._keys ? this._keys.length : "none"), zv += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), vv) {
          zv += ", Ranges: {";
          let vv = !0;
          for (const Pv in this._ranges) vv || (zv += ", "), vv = !1, zv += Pv;
          zv += "}"
        }
        return zv
      }
      addEvent(vv) {
        this._events.push(vv), this._events.sort(((vv, zv) => vv.frame - zv.frame))
      }
      removeEvents(vv) {
        for (let zv = 0; zv < this._events.length; zv++) this._events[zv].frame === vv && (this._events.splice(zv, 1), zv--)
      }
      getEvents() {
        return this._events
      }
      createRange(vv, zv, Pv) {
        this._ranges[vv] || (this._ranges[vv] = new gv.e(vv, zv, Pv))
      }
      deleteRange(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const Pv = this._ranges[vv];
        if (Pv) {
          if (zv) {
            const vv = Pv.from,
              zv = Pv.to;
            for (let Pv = this._keys.length - 1; Pv >= 0; Pv--) this._keys[Pv].frame >= vv && this._keys[Pv].frame <= zv && this._keys.splice(Pv, 1)
          }
          this._ranges[vv] = null
        }
      }
      getRange(vv) {
        return this._ranges[vv]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let vv = 0;
        for (let zv = 0, Pv = this._keys.length; zv < Pv; zv++) vv < this._keys[zv].frame && (vv = this._keys[zv].frame);
        return vv
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(vv) {
        this._easingFunction = vv
      }
      floatInterpolateFunction(vv, zv, Pv) {
        return (0, ev.Lerp)(vv, zv, Pv)
      }
      floatInterpolateFunctionWithTangents(vv, zv, Pv, hv, Sv) {
        return (0, ev.Hermite)(vv, zv, Pv, hv, Sv)
      }
      quaternionInterpolateFunction(vv, zv, Pv) {
        return hv.d.Slerp(vv, zv, Pv)
      }
      quaternionInterpolateFunctionWithTangents(vv, zv, Pv, Sv, ev) {
        return hv.d.Hermite(vv, zv, Pv, Sv, ev).normalize()
      }
      vector3InterpolateFunction(vv, zv, Pv) {
        return hv.l.Lerp(vv, zv, Pv)
      }
      vector3InterpolateFunctionWithTangents(vv, zv, Pv, Sv, ev) {
        return hv.l.Hermite(vv, zv, Pv, Sv, ev)
      }
      vector2InterpolateFunction(vv, zv, Pv) {
        return hv.j.Lerp(vv, zv, Pv)
      }
      vector2InterpolateFunctionWithTangents(vv, zv, Pv, Sv, ev) {
        return hv.j.Hermite(vv, zv, Pv, Sv, ev)
      }
      sizeInterpolateFunction(vv, zv, Pv) {
        return dv.d.Lerp(vv, zv, Pv)
      }
      color3InterpolateFunction(vv, zv, Pv) {
        return Sv.b.Lerp(vv, zv, Pv)
      }
      color3InterpolateFunctionWithTangents(vv, zv, Pv, hv, ev) {
        return Sv.b.Hermite(vv, zv, Pv, hv, ev)
      }
      color4InterpolateFunction(vv, zv, Pv) {
        return Sv.e.Lerp(vv, zv, Pv)
      }
      color4InterpolateFunctionWithTangents(vv, zv, Pv, hv, ev) {
        return Sv.e.Hermite(vv, zv, Pv, hv, ev)
      }
      _getKeyValue(vv) {
        return "function" === typeof vv ? vv() : vv
      }
      evaluate(vv) {
        return cv.key = 0, this._interpolate(vv, cv)
      }
      _interpolate(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (zv.GS === Gv.ANIMATIONLOOPMODE_CONSTANT && zv.repeatCount > 0) return zv.highLimitValue.clone ? zv.highLimitValue.clone() : zv.highLimitValue;
        const hv = this._keys;
        let Sv;
        if (this._coreAnimation) Sv = this._coreAnimation._key;
        else {
          const ev = hv.length;
          for (Sv = zv.key; Sv >= 0 && vv < hv[Sv].frame;) --Sv;
          for (; Sv + 1 <= ev - 1 && vv >= hv[Sv + 1].frame;) ++Sv;
          if (zv.key = Sv, Sv < 0) return Pv ? void 0 : this._getKeyValue(hv[0].value);
          if (Sv + 1 > ev - 1) return Pv ? void 0 : this._getKeyValue(hv[ev - 1].value);
          this._key = Sv
        }
        const ev = hv[Sv],
          gv = hv[Sv + 1];
        if (Pv && (vv === ev.frame || vv === gv.frame)) return;
        const pv = this._getKeyValue(ev.value),
          dv = this._getKeyValue(gv.value);
        if (1 === ev.interpolation) return gv.frame > vv ? pv : dv;
        const Nv = void 0 !== ev.outTangent && void 0 !== gv.inTangent,
          lv = gv.frame - ev.frame;
        let Tv = (vv - ev.frame) / lv;
        const cv = ev.easingFunction || this.getEasingFunction();
        switch (cv && (Tv = cv.ease(Tv)), this.dataType) {
          case Gv.ANIMATIONTYPE_FLOAT: {
            const vv = Nv ? this.floatInterpolateFunctionWithTangents(pv, ev.outTangent * lv, dv, gv.inTangent * lv, Tv) : this.floatInterpolateFunction(pv, dv, Tv);
            switch (zv.GS) {
              case Gv.ANIMATIONLOOPMODE_CYCLE:
              case Gv.ANIMATIONLOOPMODE_CONSTANT:
              case Gv.ANIMATIONLOOPMODE_YOYO:
                return vv;
              case Gv.ANIMATIONLOOPMODE_RELATIVE:
              case Gv.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (zv.offsetValue ?? 0) * zv.repeatCount + vv
            }
            break
          }
          case Gv.ANIMATIONTYPE_QUATERNION: {
            const vv = Nv ? this.quaternionInterpolateFunctionWithTangents(pv, ev.outTangent.scale(lv), dv, gv.inTangent.scale(lv), Tv) : this.quaternionInterpolateFunction(pv, dv, Tv);
            switch (zv.GS) {
              case Gv.ANIMATIONLOOPMODE_CYCLE:
              case Gv.ANIMATIONLOOPMODE_CONSTANT:
              case Gv.ANIMATIONLOOPMODE_YOYO:
                return vv;
              case Gv.ANIMATIONLOOPMODE_RELATIVE:
              case Gv.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return vv.addInPlace((zv.offsetValue || Wv).scale(zv.repeatCount))
            }
            return vv
          }
          case Gv.ANIMATIONTYPE_VECTOR3: {
            const vv = Nv ? this.vector3InterpolateFunctionWithTangents(pv, ev.outTangent.scale(lv), dv, gv.inTangent.scale(lv), Tv) : this.vector3InterpolateFunction(pv, dv, Tv);
            switch (zv.GS) {
              case Gv.ANIMATIONLOOPMODE_CYCLE:
              case Gv.ANIMATIONLOOPMODE_CONSTANT:
              case Gv.ANIMATIONLOOPMODE_YOYO:
                return vv;
              case Gv.ANIMATIONLOOPMODE_RELATIVE:
              case Gv.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return vv.add((zv.offsetValue || wv).scale(zv.repeatCount))
            }
            break
          }
          case Gv.ANIMATIONTYPE_VECTOR2: {
            const vv = Nv ? this.vector2InterpolateFunctionWithTangents(pv, ev.outTangent.scale(lv), dv, gv.inTangent.scale(lv), Tv) : this.vector2InterpolateFunction(pv, dv, Tv);
            switch (zv.GS) {
              case Gv.ANIMATIONLOOPMODE_CYCLE:
              case Gv.ANIMATIONLOOPMODE_CONSTANT:
              case Gv.ANIMATIONLOOPMODE_YOYO:
                return vv;
              case Gv.ANIMATIONLOOPMODE_RELATIVE:
              case Gv.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return vv.add((zv.offsetValue || av).scale(zv.repeatCount))
            }
            break
          }
          case Gv.ANIMATIONTYPE_SIZE:
            switch (zv.GS) {
              case Gv.ANIMATIONLOOPMODE_CYCLE:
              case Gv.ANIMATIONLOOPMODE_CONSTANT:
              case Gv.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(pv, dv, Tv);
              case Gv.ANIMATIONLOOPMODE_RELATIVE:
              case Gv.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(pv, dv, Tv).add((zv.offsetValue || sv).scale(zv.repeatCount))
            }
            break;
          case Gv.ANIMATIONTYPE_COLOR3: {
            const vv = Nv ? this.color3InterpolateFunctionWithTangents(pv, ev.outTangent.scale(lv), dv, gv.inTangent.scale(lv), Tv) : this.color3InterpolateFunction(pv, dv, Tv);
            switch (zv.GS) {
              case Gv.ANIMATIONLOOPMODE_CYCLE:
              case Gv.ANIMATIONLOOPMODE_CONSTANT:
              case Gv.ANIMATIONLOOPMODE_YOYO:
                return vv;
              case Gv.ANIMATIONLOOPMODE_RELATIVE:
              case Gv.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return vv.add((zv.offsetValue || Cv).scale(zv.repeatCount))
            }
            break
          }
          case Gv.ANIMATIONTYPE_COLOR4: {
            const vv = Nv ? this.color4InterpolateFunctionWithTangents(pv, ev.outTangent.scale(lv), dv, gv.inTangent.scale(lv), Tv) : this.color4InterpolateFunction(pv, dv, Tv);
            switch (zv.GS) {
              case Gv.ANIMATIONLOOPMODE_CYCLE:
              case Gv.ANIMATIONLOOPMODE_CONSTANT:
              case Gv.ANIMATIONLOOPMODE_YOYO:
                return vv;
              case Gv.ANIMATIONLOOPMODE_RELATIVE:
              case Gv.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return vv.add((zv.offsetValue || iv).scale(zv.repeatCount))
            }
            break
          }
          case Gv.ANIMATIONTYPE_MATRIX:
            switch (zv.GS) {
              case Gv.ANIMATIONLOOPMODE_CYCLE:
              case Gv.ANIMATIONLOOPMODE_CONSTANT:
              case Gv.ANIMATIONLOOPMODE_YOYO:
                return Gv.AllowMatricesInterpolation ? this.matrixInterpolateFunction(pv, dv, Tv, zv.workValue) : pv;
              case Gv.ANIMATIONLOOPMODE_RELATIVE:
              case Gv.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return pv
            }
        }
        return 0
      }
      matrixInterpolateFunction(vv, zv, Pv, Sv) {
        return Gv.AllowMatrixDecomposeForInterpolation ? Sv ? (hv.c.DecomposeLerpToRef(vv, zv, Pv, Sv), Sv) : hv.c.DecomposeLerp(vv, zv, Pv) : Sv ? (hv.c.LerpToRef(vv, zv, Pv, Sv), Sv) : hv.c.Lerp(vv, zv, Pv)
      }
      clone() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zv = new Gv(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.GS);
        if (zv.enableBlending = this.enableBlending, zv.blendingSpeed = this.blendingSpeed, this._keys && zv.setKeys(this._keys, !1, vv), this._ranges) {
          zv._ranges = {};
          for (const vv in this._ranges) {
            const Pv = this._ranges[vv];
            Pv && (zv._ranges[vv] = Pv.clone())
          }
        }
        return zv
      }
      setKeys(vv) {
        let zv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = vv;
        else if (this._keys = vv.slice(0), zv)
          for (let Pv = 0; Pv < this._keys.length; Pv++) {
            const vv = this._keys[Pv];
            this._keys[Pv] = {
              frame: vv.frame,
              value: vv.value.clone ? vv.value.clone() : vv.value,
              inTangent: vv.inTangent && vv.inTangent.clone ? vv.inTangent.clone() : vv.inTangent,
              outTangent: vv.outTangent && vv.outTangent.clone ? vv.outTangent.clone() : vv.outTangent,
              interpolation: vv.interpolation,
              lockedTangent: vv.lockedTangent,
              easingFunction: vv.easingFunction
            }
          }
      }
      createKeyForFrame(vv) {
        cv.key = 0;
        const zv = this._interpolate(vv, cv, !0);
        if (!zv) return this._keys[cv.key].frame === vv ? cv.key : cv.key + 1;
        const Pv = {
          frame: vv,
          value: zv.clone ? zv.clone() : zv
        };
        return this._keys.splice(cv.key + 1, 0, Pv), cv.key + 1
      }
      serialize() {
        const vv = {};
        vv.name = this.name, vv.property = this.targetProperty, vv.framePerSecond = this.framePerSecond, vv.dataType = this.dataType, vv.loopBehavior = this.GS, vv.enableBlending = this.enableBlending, vv.blendingSpeed = this.blendingSpeed;
        const zv = this.dataType;
        vv.keys = [];
        const Pv = this.getKeys();
        for (let hv = 0; hv < Pv.length; hv++) {
          const Sv = Pv[hv],
            ev = {};
          switch (ev.frame = Sv.frame, zv) {
            case Gv.ANIMATIONTYPE_FLOAT:
              ev.values = [Sv.value], void 0 !== Sv.inTangent && ev.values.push(Sv.inTangent), void 0 !== Sv.outTangent && (void 0 === Sv.inTangent && ev.values.push(void 0), ev.values.push(Sv.outTangent)), void 0 !== Sv.interpolation && (void 0 === Sv.inTangent && ev.values.push(void 0), void 0 === Sv.outTangent && ev.values.push(void 0), ev.values.push(Sv.interpolation));
              break;
            case Gv.ANIMATIONTYPE_QUATERNION:
            case Gv.ANIMATIONTYPE_MATRIX:
            case Gv.ANIMATIONTYPE_VECTOR3:
            case Gv.ANIMATIONTYPE_COLOR3:
            case Gv.ANIMATIONTYPE_COLOR4:
              ev.values = Sv.value.pPv(), void 0 != Sv.inTangent && ev.values.push(Sv.inTangent.pPv()), void 0 != Sv.outTangent && (void 0 === Sv.inTangent && ev.values.push(void 0), ev.values.push(Sv.outTangent.pPv())), void 0 !== Sv.interpolation && (void 0 === Sv.inTangent && ev.values.push(void 0), void 0 === Sv.outTangent && ev.values.push(void 0), ev.values.push(Sv.interpolation))
          }
          vv.keys.push(ev)
        }
        vv.PC = [];
        for (const hv in this._ranges) {
          const zv = this._ranges[hv];
          if (!zv) continue;
          const Pv = {};
          Pv.name = hv, Pv.from = zv.from, Pv.to = zv.to, vv.PC.push(Pv)
        }
        return vv
      }
      static _UniversalLerp(vv, zv, Pv) {
        const hv = vv.constructor;
        return hv.Lerp ? hv.Lerp(vv, zv, Pv) : hv.Slerp ? hv.Slerp(vv, zv, Pv) : vv.toFixed ? vv * (1 - Pv) + Pv * zv : zv
      }
    }

    function mv(vv, zv, Pv) {
      let Sv;
      Sv = "object" === typeof zv ? zv : {
        referenceFrame: zv ?? 0,
        range: Pv,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let ev = vv;
      Sv.cloneOriginalAnimation && (ev = vv.clone(), ev.name = Sv.clonedAnimationName || ev.name);
      const gv = ev.getKeys();
      if (!gv.length) return ev;
      const pv = Sv.referenceFrame && Sv.referenceFrame >= 0 ? Sv.referenceFrame : 0;
      let dv = 0;
      const Nv = gv[0];
      let lv = gv.length - 1;
      const Tv = gv[lv],
        Wv = {
          referenceValue: Nv.value,
          referencePosition: hv.i.fa[0],
          referenceQuaternion: hv.i.Quaternion[0],
          referenceScaling: hv.i.fa[1],
          keyPosition: hv.i.fa[2],
          keyQuaternion: hv.i.Quaternion[1],
          keyScaling: hv.i.fa[3]
        };
      let wv = Nv.frame,
        av = Tv.frame;
      if (Sv.range) {
        const vv = ev.getRange(Sv.range);
        vv && (wv = vv.from, av = vv.to)
      } else wv = Sv.fromFrame ?? wv, av = Sv.toFrame ?? av;
      wv !== Nv.frame && (dv = ev.createKeyForFrame(wv)), av !== Tv.frame && (lv = ev.createKeyForFrame(av));
      const sv = ev.getKeys();
      if (1 === sv.length) {
        const vv = ev._getKeyValue(sv[0].value);
        Wv.referenceValue = vv.clone ? vv.clone() : vv
      } else if (pv <= Nv.frame) {
        const vv = ev._getKeyValue(Nv.value);
        Wv.referenceValue = vv.clone ? vv.clone() : vv
      } else if (pv >= Tv.frame) {
        const vv = ev._getKeyValue(Tv.value);
        Wv.referenceValue = vv.clone ? vv.clone() : vv
      } else {
        cv.key = 0;
        const vv = ev._interpolate(pv, cv);
        Wv.referenceValue = vv.clone ? vv.clone() : vv
      }
      ev.dataType === Gv.ANIMATIONTYPE_QUATERNION ? Wv.referenceValue.normalize().conjugateInPlace() : ev.dataType === Gv.ANIMATIONTYPE_MATRIX && (Wv.referenceValue.decompose(Wv.referenceScaling, Wv.referenceQuaternion, Wv.referencePosition), Wv.referenceQuaternion.normalize().conjugateInPlace());
      let Cv = Number.MAX_VALUE;
      const iv = Sv.clipKeys ? [] : null;
      for (let cv = dv; cv <= lv; cv++) {
        let vv = sv[cv];
        if ((iv || Sv.cloneOriginalAnimation) && (vv = {
            frame: vv.frame,
            value: vv.value.clone ? vv.value.clone() : vv.value,
            inTangent: vv.inTangent,
            outTangent: vv.outTangent,
            interpolation: vv.interpolation,
            lockedTangent: vv.lockedTangent,
            easingFunction: vv.easingFunction
          }, iv && (Cv === Number.MAX_VALUE && (Cv = vv.frame), vv.frame -= Cv, iv.push(vv))), !cv || ev.dataType === Gv.ANIMATIONTYPE_FLOAT || vv.value !== Nv.value) switch (ev.dataType) {
          case Gv.ANIMATIONTYPE_MATRIX:
            vv.value.decompose(Wv.keyScaling, Wv.keyQuaternion, Wv.keyPosition), Wv.keyPosition.VPv(Wv.referencePosition), Wv.keyScaling.divideInPlace(Wv.referenceScaling), Wv.referenceQuaternion.multiplyToRef(Wv.keyQuaternion, Wv.keyQuaternion), hv.c.ComposeToRef(Wv.keyScaling, Wv.keyQuaternion, Wv.keyPosition, vv.value);
            break;
          case Gv.ANIMATIONTYPE_QUATERNION:
            Wv.referenceValue.multiplyToRef(vv.value, vv.value);
            break;
          case Gv.ANIMATIONTYPE_VECTOR2:
          case Gv.ANIMATIONTYPE_VECTOR3:
          case Gv.ANIMATIONTYPE_COLOR3:
          case Gv.ANIMATIONTYPE_COLOR4:
            vv.value.subtractToRef(Wv.referenceValue, vv.value);
            break;
          case Gv.ANIMATIONTYPE_SIZE:
            vv.value.width -= Wv.referenceValue.width, vv.value.height -= Wv.referenceValue.height;
            break;
          default:
            vv.value -= Wv.referenceValue
        }
      }
      return iv && ev.setKeys(iv, !0), ev
    }

    function jv(vv, zv, Pv, hv) {
      const Sv = new Gv(vv + "Animation", vv, Pv, zv, Gv.ANIMATIONLOOPMODE_CONSTANT);
      return Sv.setEasingFunction(hv), Sv
    }

    function fv(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv) {
      const Tv = Gv._PrepareAnimation(vv, Pv, hv, Sv, ev, gv, pv, dv);
      return Tv ? (zv.rD && (lv = zv.rD()), lv ? lv.beginDirectAnimation(zv, [Tv], 0, Sv, Tv.GS !== Gv.ANIMATIONLOOPMODE_CONSTANT, 1, Nv) : null) : null
    }

    function Fv(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv) {
      const Tv = Gv._PrepareAnimation(vv, hv, Sv, ev, gv, pv, dv, Nv);
      if (!Tv) return null;
      return zv.rD().beginDirectHierarchyAnimation(zv, Pv, [Tv], 0, ev, 1 === Tv.GS, 1, lv)
    }

    function Yv(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
      const lv = Gv._PrepareAnimation(vv, Pv, hv, Sv, ev, gv, pv, dv);
      return lv ? (zv.animations.push(lv), zv.rD().beginAnimation(zv, 0, Sv, 1 === lv.GS, 1, Nv)) : null
    }

    function nv(vv, zv, Pv, hv, Sv, ev, gv) {
      let pv = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        dv = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        Nv = arguments.length > 9 ? arguments[9] : void 0;
      if (gv <= 0) return Pv[vv] = zv, pv && pv(), null;
      const lv = Sv * (gv / 1e3);
      ev.setKeys(Nv ?? [{
        frame: 0,
        value: Pv[vv].clone ? Pv[vv].clone() : Pv[vv]
      }, {
        frame: lv,
        value: zv
      }]), Pv.animations || (Pv.animations = []), Pv.animations.push(ev);
      return hv.beginAnimation(Pv, 0, lv, !1, 1, pv ?? void 0, void 0, dv)
    }

    function Ov(vv, zv) {
      lv.c.AppendSerializedAnimations(vv, zv)
    }

    function Dv(vv) {
      const zv = new Gv(vv.name, vv.property, vv.framePerSecond, vv.dataType, vv.loopBehavior),
        Pv = vv.dataType,
        ev = [];
      let gv, pv;
      for (vv.enableBlending && (zv.enableBlending = vv.enableBlending), vv.blendingSpeed && (zv.blendingSpeed = vv.blendingSpeed), pv = 0; pv < vv.keys.length; pv++) {
        const zv = vv.keys[pv];
        let dv, Nv, lv;
        switch (Pv) {
          case Gv.ANIMATIONTYPE_FLOAT:
            gv = zv.values[0], zv.values.length >= 2 && (dv = zv.values[1]), zv.values.length >= 3 && (Nv = zv.values[2]), zv.values.length >= 4 && (lv = zv.values[3]);
            break;
          case Gv.ANIMATIONTYPE_QUATERNION:
            if (gv = hv.d.FromArray(zv.values), zv.values.length >= 8) {
              const vv = hv.d.FromArray(zv.values.slice(4, 8));
              vv.equals(hv.d.Zero()) || (dv = vv)
            }
            if (zv.values.length >= 12) {
              const vv = hv.d.FromArray(zv.values.slice(8, 12));
              vv.equals(hv.d.Zero()) || (Nv = vv)
            }
            zv.values.length >= 13 && (lv = zv.values[12]);
            break;
          case Gv.ANIMATIONTYPE_MATRIX:
            gv = hv.c.FromArray(zv.values), zv.values.length >= 17 && (lv = zv.values[16]);
            break;
          case Gv.ANIMATIONTYPE_COLOR3:
            gv = Sv.b.FromArray(zv.values), zv.values[3] && (dv = Sv.b.FromArray(zv.values[3])), zv.values[4] && (Nv = Sv.b.FromArray(zv.values[4])), zv.values[5] && (lv = zv.values[5]);
            break;
          case Gv.ANIMATIONTYPE_COLOR4:
            gv = Sv.e.FromArray(zv.values), zv.values[4] && (dv = Sv.e.FromArray(zv.values[4])), zv.values[5] && (Nv = Sv.e.FromArray(zv.values[5])), zv.values[6] && (lv = zv.values[6]);
            break;
          case Gv.ANIMATIONTYPE_VECTOR3:
          default:
            gv = hv.l.FromArray(zv.values), zv.values[3] && (dv = hv.l.FromArray(zv.values[3])), zv.values[4] && (Nv = hv.l.FromArray(zv.values[4])), zv.values[5] && (lv = zv.values[5])
        }
        const Tv = {};
        Tv.frame = zv.frame, Tv.value = gv, void 0 != dv && (Tv.inTangent = dv), void 0 != Nv && (Tv.outTangent = Nv), void 0 != lv && (Tv.interpolation = lv), ev.push(Tv)
      }
      if (zv.setKeys(ev), vv.PC)
        for (pv = 0; pv < vv.PC.length; pv++) gv = vv.PC[pv], zv.createRange(gv.name, gv.from, gv.to);
      return zv
    }
    async function Kv(vv, zv) {
      return await new Promise(((Pv, hv) => {
        const Sv = new Nv.b;
        Sv.addEventListener("readystatechange", (() => {
          if (4 == Sv.readyState)
            if (200 == Sv.status) {
              let zv = JSON.parse(Sv.responseText);
              if (zv.animations && (zv = zv.animations), zv.length) {
                const vv = [];
                for (const Pv of zv) vv.push(Dv(Pv));
                Pv(vv)
              } else {
                const hv = Dv(zv);
                vv && (hv.name = vv), Pv(hv)
              }
            } else hv("Unable to load the animation")
        })), Sv.open("GET", zv), Sv.send()
      }))
    }
    async function Vv(vv) {
      const zv = this?.SnippetUrl ?? Gv.SnippetUrl;
      return await new Promise(((Pv, hv) => {
        const Sv = new Nv.b;
        Sv.addEventListener("readystatechange", (() => {
          if (4 == Sv.readyState)
            if (200 == Sv.status) {
              const zv = JSON.parse(JSON.parse(Sv.responseText).jsonPayload);
              if (zv.animations) {
                const hv = JSON.parse(zv.animations),
                  Sv = [];
                for (const zv of hv.animations) {
                  const Pv = Dv(zv);
                  Pv.snippetId = vv, Sv.push(Pv)
                }
                Pv(Sv)
              } else {
                const hv = Dv(JSON.parse(zv.animation));
                hv.snippetId = vv, Pv(hv)
              }
            } else hv("Unable to load the snippet " + vv)
        })), Sv.open("GET", zv + "/" + vv.replace(/#/g, "/")), Sv.send()
      }))
    }
    Gv._UniqueIdGenerator = 0, Gv.AllowMatricesInterpolation = !1, Gv.AllowMatrixDecomposeForInterpolation = !0, Gv.InheritOriginalValueFromActiveAnimations = !1, Gv.SnippetUrl = "https://snippet.babylonjs.com", Gv.ANIMATIONTYPE_FLOAT = 0, Gv.ANIMATIONTYPE_VECTOR3 = 1, Gv.ANIMATIONTYPE_QUATERNION = 2, Gv.ANIMATIONTYPE_MATRIX = 3, Gv.ANIMATIONTYPE_COLOR3 = 4, Gv.ANIMATIONTYPE_COLOR4 = 7, Gv.ANIMATIONTYPE_VECTOR2 = 5, Gv.ANIMATIONTYPE_SIZE = 6, Gv.ANIMATIONLOOPMODE_RELATIVE = 0, Gv.ANIMATIONLOOPMODE_CYCLE = 1, Gv.ANIMATIONLOOPMODE_CONSTANT = 2, Gv.ANIMATIONLOOPMODE_YOYO = 4, Gv.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const Uv = Vv;
    let Rv = !1;

    function xv() {
      Rv || (Rv = !0, Gv.Parse = Dv, Gv.ParseFromFileAsync = Kv, Gv.ParseFromSnippetAsync = Vv, Gv.CreateFromSnippetAsync = Uv, Gv.CreateAnimation = jv, Gv.CreateAndStartAnimation = fv, Gv.CreateAndStartHierarchyAnimation = Fv, Gv.CreateMergeAndStartAnimation = Yv, Gv.MakeAnimationAdditive = mv, Gv.TransitionTo = nv, Gv.AppendSerializedAnimations = Ov, (0, Tv.c)("BABYLON.Animation", Gv), pv.c._AnimationRangeFactory = (vv, zv, Pv) => new gv.e(vv, zv, Pv))
    }
  },
  40402: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv
    });
    class hv {
      constructor(vv, zv, Pv) {
        this.name = vv, this.from = zv, this.to = Pv
      }
      clone() {
        return new hv(this.name, this.from, this.to)
      }
    }
  },
  40454: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv.c,
      i: () => hv.k
    });
    var hv = Pv(39441);
    (0, hv.g)()
  },
  40435: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv.e
    });
    var hv = Pv(39798);
    (0, hv.b)()
  },
  40410: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv.b
    });
    var hv = Pv(39782);
    (0, hv.c)()
  },
  40460: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => hv.c
    });
    var hv = Pv(39712);
    (0, hv.f)()
  },
  40408: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => hv.h
    });
    var hv = Pv(39760);
    (0, hv.e)()
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);