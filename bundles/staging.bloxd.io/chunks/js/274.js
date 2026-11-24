export const id = 274;
export const ids = [274];
export const modules = {
  41155: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => Im,
      c: () => Gm,
      g: () => qm,
      h: () => jm,
      k: () => Em,
      m: () => Ym,
      q: () => Om,
      t: () => om
    });
    var hm = fm(37185),
      Am = fm(37336),
      am = fm(37208),
      xm = fm(41164),
      wm = fm(40326),
      Dm = fm(40127),
      im = fm(40160),
      Rm = fm(40129),
      pm = fm(37224);
    const Em = Object.freeze(new hm.h(0, 0, 0, 0)),
      om = Object.freeze(hm.p.Zero()),
      Om = Object.freeze(hm.l.Zero()),
      Ym = Object.freeze(Dm.e.Zero()),
      qm = Object.freeze(Am.b.Black()),
      jm = Object.freeze(new Am.c(0, 0, 0, 0)),
      Vm = {
        key: 0,
        repeatCount: 0,
        Ea: 2
      };
    class Im {
      static _PrepareAnimation(mm, Tm, fm, am, xm, wm, im, Rm) {
        let pm;
        if (!isNaN(parseFloat(xm)) && isFinite(xm) ? pm = Im.ANIMATIONTYPE_FLOAT : xm instanceof hm.h ? pm = Im.ANIMATIONTYPE_QUATERNION : xm instanceof hm.p ? pm = Im.ANIMATIONTYPE_VECTOR3 : xm instanceof hm.l ? pm = Im.ANIMATIONTYPE_VECTOR2 : xm instanceof Am.b ? pm = Im.ANIMATIONTYPE_COLOR3 : xm instanceof Am.c ? pm = Im.ANIMATIONTYPE_COLOR4 : xm instanceof Dm.e && (pm = Im.ANIMATIONTYPE_SIZE), void 0 == pm) return null;
        const Em = new Im(mm, Tm, fm, pm, im),
          om = [{
            frame: 0,
            value: xm
          }, {
            frame: am,
            value: wm
          }];
        return Em.setKeys(om), void 0 !== Rm && Em.setEasingFunction(Rm), Em
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const mm of this._runtimeAnimations)
          if (!mm.isStopped()) return !0;
        return !1
      }
      constructor(mm, Tm, fm, hm, Am, am) {
        this.name = mm, this.targetProperty = Tm, this.framePerSecond = fm, this.dataType = hm, this.Ea = Am, this.enableBlending = am, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = Tm.split("."), this.dataType = hm, this.Ea = void 0 === Am ? Im.ANIMATIONLOOPMODE_CYCLE : Am, this.uniqueId = Im._UniqueIdGenerator++
      }
      toString(mm) {
        let Tm = "Name: " + this.name + ", property: " + this.targetProperty;
        if (Tm += ", datatype: " + ["Float", "WO", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], Tm += ", nKeys: " + (this._keys ? this._keys.length : "none"), Tm += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), mm) {
          Tm += ", Ranges: {";
          let mm = !0;
          for (const fm in this._ranges) mm || (Tm += ", "), mm = !1, Tm += fm;
          Tm += "}"
        }
        return Tm
      }
      addEvent(mm) {
        this._events.push(mm), this._events.sort(((mm, Tm) => mm.frame - Tm.frame))
      }
      removeEvents(mm) {
        for (let Tm = 0; Tm < this._events.length; Tm++) this._events[Tm].frame === mm && (this._events.splice(Tm, 1), Tm--)
      }
      getEvents() {
        return this._events
      }
      createRange(mm, Tm, fm) {
        this._ranges[mm] || (this._ranges[mm] = new xm.d(mm, Tm, fm))
      }
      deleteRange(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const fm = this._ranges[mm];
        if (fm) {
          if (Tm) {
            const mm = fm.from,
              Tm = fm.to;
            for (let fm = this._keys.length - 1; fm >= 0; fm--) this._keys[fm].frame >= mm && this._keys[fm].frame <= Tm && this._keys.splice(fm, 1)
          }
          this._ranges[mm] = null
        }
      }
      getRange(mm) {
        return this._ranges[mm]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let mm = 0;
        for (let Tm = 0, fm = this._keys.length; Tm < fm; Tm++) mm < this._keys[Tm].frame && (mm = this._keys[Tm].frame);
        return mm
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(mm) {
        this._easingFunction = mm
      }
      floatInterpolateFunction(mm, Tm, fm) {
        return (0, am.Lerp)(mm, Tm, fm)
      }
      floatInterpolateFunctionWithTangents(mm, Tm, fm, hm, Am) {
        return (0, am.Hermite)(mm, Tm, fm, hm, Am)
      }
      quaternionInterpolateFunction(mm, Tm, fm) {
        return hm.h.Slerp(mm, Tm, fm)
      }
      quaternionInterpolateFunctionWithTangents(mm, Tm, fm, Am, am) {
        return hm.h.Hermite(mm, Tm, fm, Am, am).normalize()
      }
      vector3InterpolateFunction(mm, Tm, fm) {
        return hm.p.Lerp(mm, Tm, fm)
      }
      vector3InterpolateFunctionWithTangents(mm, Tm, fm, Am, am) {
        return hm.p.Hermite(mm, Tm, fm, Am, am)
      }
      vector2InterpolateFunction(mm, Tm, fm) {
        return hm.l.Lerp(mm, Tm, fm)
      }
      vector2InterpolateFunctionWithTangents(mm, Tm, fm, Am, am) {
        return hm.l.Hermite(mm, Tm, fm, Am, am)
      }
      sizeInterpolateFunction(mm, Tm, fm) {
        return Dm.e.Lerp(mm, Tm, fm)
      }
      color3InterpolateFunction(mm, Tm, fm) {
        return Am.b.Lerp(mm, Tm, fm)
      }
      color3InterpolateFunctionWithTangents(mm, Tm, fm, hm, am) {
        return Am.b.Hermite(mm, Tm, fm, hm, am)
      }
      color4InterpolateFunction(mm, Tm, fm) {
        return Am.c.Lerp(mm, Tm, fm)
      }
      color4InterpolateFunctionWithTangents(mm, Tm, fm, hm, am) {
        return Am.c.Hermite(mm, Tm, fm, hm, am)
      }
      _getKeyValue(mm) {
        return "function" === typeof mm ? mm() : mm
      }
      evaluate(mm) {
        return Vm.key = 0, this._interpolate(mm, Vm)
      }
      _interpolate(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (Tm.Ea === Im.ANIMATIONLOOPMODE_CONSTANT && Tm.repeatCount > 0) return Tm.highLimitValue.clone ? Tm.highLimitValue.clone() : Tm.highLimitValue;
        const hm = this._keys;
        let Am;
        if (this._coreAnimation) Am = this._coreAnimation._key;
        else {
          const am = hm.length;
          for (Am = Tm.key; Am >= 0 && mm < hm[Am].frame;) --Am;
          for (; Am + 1 <= am - 1 && mm >= hm[Am + 1].frame;) ++Am;
          if (Tm.key = Am, Am < 0) return fm ? void 0 : this._getKeyValue(hm[0].value);
          if (Am + 1 > am - 1) return fm ? void 0 : this._getKeyValue(hm[am - 1].value);
          this._key = Am
        }
        const am = hm[Am],
          xm = hm[Am + 1];
        if (fm && (mm === am.frame || mm === xm.frame)) return;
        const wm = this._getKeyValue(am.value),
          Dm = this._getKeyValue(xm.value);
        if (1 === am.interpolation) return xm.frame > mm ? wm : Dm;
        const im = void 0 !== am.outTangent && void 0 !== xm.inTangent,
          Rm = xm.frame - am.frame;
        let pm = (mm - am.frame) / Rm;
        const Vm = am.easingFunction || this.getEasingFunction();
        switch (Vm && (pm = Vm.ease(pm)), this.dataType) {
          case Im.ANIMATIONTYPE_FLOAT: {
            const mm = im ? this.floatInterpolateFunctionWithTangents(wm, am.outTangent * Rm, Dm, xm.inTangent * Rm, pm) : this.floatInterpolateFunction(wm, Dm, pm);
            switch (Tm.Ea) {
              case Im.ANIMATIONLOOPMODE_CYCLE:
              case Im.ANIMATIONLOOPMODE_CONSTANT:
              case Im.ANIMATIONLOOPMODE_YOYO:
                return mm;
              case Im.ANIMATIONLOOPMODE_RELATIVE:
              case Im.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (Tm.offsetValue ?? 0) * Tm.repeatCount + mm
            }
            break
          }
          case Im.ANIMATIONTYPE_QUATERNION: {
            const mm = im ? this.quaternionInterpolateFunctionWithTangents(wm, am.outTangent.scale(Rm), Dm, xm.inTangent.scale(Rm), pm) : this.quaternionInterpolateFunction(wm, Dm, pm);
            switch (Tm.Ea) {
              case Im.ANIMATIONLOOPMODE_CYCLE:
              case Im.ANIMATIONLOOPMODE_CONSTANT:
              case Im.ANIMATIONLOOPMODE_YOYO:
                return mm;
              case Im.ANIMATIONLOOPMODE_RELATIVE:
              case Im.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return mm.addInPlace((Tm.offsetValue || Em).scale(Tm.repeatCount))
            }
            return mm
          }
          case Im.ANIMATIONTYPE_VECTOR3: {
            const mm = im ? this.vector3InterpolateFunctionWithTangents(wm, am.outTangent.scale(Rm), Dm, xm.inTangent.scale(Rm), pm) : this.vector3InterpolateFunction(wm, Dm, pm);
            switch (Tm.Ea) {
              case Im.ANIMATIONLOOPMODE_CYCLE:
              case Im.ANIMATIONLOOPMODE_CONSTANT:
              case Im.ANIMATIONLOOPMODE_YOYO:
                return mm;
              case Im.ANIMATIONLOOPMODE_RELATIVE:
              case Im.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return mm.add((Tm.offsetValue || om).scale(Tm.repeatCount))
            }
            break
          }
          case Im.ANIMATIONTYPE_VECTOR2: {
            const mm = im ? this.vector2InterpolateFunctionWithTangents(wm, am.outTangent.scale(Rm), Dm, xm.inTangent.scale(Rm), pm) : this.vector2InterpolateFunction(wm, Dm, pm);
            switch (Tm.Ea) {
              case Im.ANIMATIONLOOPMODE_CYCLE:
              case Im.ANIMATIONLOOPMODE_CONSTANT:
              case Im.ANIMATIONLOOPMODE_YOYO:
                return mm;
              case Im.ANIMATIONLOOPMODE_RELATIVE:
              case Im.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return mm.add((Tm.offsetValue || Om).scale(Tm.repeatCount))
            }
            break
          }
          case Im.ANIMATIONTYPE_SIZE:
            switch (Tm.Ea) {
              case Im.ANIMATIONLOOPMODE_CYCLE:
              case Im.ANIMATIONLOOPMODE_CONSTANT:
              case Im.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(wm, Dm, pm);
              case Im.ANIMATIONLOOPMODE_RELATIVE:
              case Im.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(wm, Dm, pm).add((Tm.offsetValue || Ym).scale(Tm.repeatCount))
            }
            break;
          case Im.ANIMATIONTYPE_COLOR3: {
            const mm = im ? this.color3InterpolateFunctionWithTangents(wm, am.outTangent.scale(Rm), Dm, xm.inTangent.scale(Rm), pm) : this.color3InterpolateFunction(wm, Dm, pm);
            switch (Tm.Ea) {
              case Im.ANIMATIONLOOPMODE_CYCLE:
              case Im.ANIMATIONLOOPMODE_CONSTANT:
              case Im.ANIMATIONLOOPMODE_YOYO:
                return mm;
              case Im.ANIMATIONLOOPMODE_RELATIVE:
              case Im.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return mm.add((Tm.offsetValue || qm).scale(Tm.repeatCount))
            }
            break
          }
          case Im.ANIMATIONTYPE_COLOR4: {
            const mm = im ? this.color4InterpolateFunctionWithTangents(wm, am.outTangent.scale(Rm), Dm, xm.inTangent.scale(Rm), pm) : this.color4InterpolateFunction(wm, Dm, pm);
            switch (Tm.Ea) {
              case Im.ANIMATIONLOOPMODE_CYCLE:
              case Im.ANIMATIONLOOPMODE_CONSTANT:
              case Im.ANIMATIONLOOPMODE_YOYO:
                return mm;
              case Im.ANIMATIONLOOPMODE_RELATIVE:
              case Im.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return mm.add((Tm.offsetValue || jm).scale(Tm.repeatCount))
            }
            break
          }
          case Im.ANIMATIONTYPE_MATRIX:
            switch (Tm.Ea) {
              case Im.ANIMATIONLOOPMODE_CYCLE:
              case Im.ANIMATIONLOOPMODE_CONSTANT:
              case Im.ANIMATIONLOOPMODE_YOYO:
                return Im.AllowMatricesInterpolation ? this.matrixInterpolateFunction(wm, Dm, pm, Tm.workValue) : wm;
              case Im.ANIMATIONLOOPMODE_RELATIVE:
              case Im.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return wm
            }
        }
        return 0
      }
      matrixInterpolateFunction(mm, Tm, fm, Am) {
        return Im.AllowMatrixDecomposeForInterpolation ? Am ? (hm.e.DecomposeLerpToRef(mm, Tm, fm, Am), Am) : hm.e.DecomposeLerp(mm, Tm, fm) : Am ? (hm.e.LerpToRef(mm, Tm, fm, Am), Am) : hm.e.Lerp(mm, Tm, fm)
      }
      clone() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Tm = new Im(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.Ea);
        if (Tm.enableBlending = this.enableBlending, Tm.blendingSpeed = this.blendingSpeed, this._keys && Tm.setKeys(this._keys, !1, mm), this._ranges) {
          Tm._ranges = {};
          for (const mm in this._ranges) {
            const fm = this._ranges[mm];
            fm && (Tm._ranges[mm] = fm.clone())
          }
        }
        return Tm
      }
      setKeys(mm) {
        let Tm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = mm;
        else if (this._keys = mm.slice(0), Tm)
          for (let fm = 0; fm < this._keys.length; fm++) {
            const mm = this._keys[fm];
            this._keys[fm] = {
              frame: mm.frame,
              value: mm.value.clone ? mm.value.clone() : mm.value,
              inTangent: mm.inTangent && mm.inTangent.clone ? mm.inTangent.clone() : mm.inTangent,
              outTangent: mm.outTangent && mm.outTangent.clone ? mm.outTangent.clone() : mm.outTangent,
              interpolation: mm.interpolation,
              lockedTangent: mm.lockedTangent,
              easingFunction: mm.easingFunction
            }
          }
      }
      createKeyForFrame(mm) {
        Vm.key = 0;
        const Tm = this._interpolate(mm, Vm, !0);
        if (!Tm) return this._keys[Vm.key].frame === mm ? Vm.key : Vm.key + 1;
        const fm = {
          frame: mm,
          value: Tm.clone ? Tm.clone() : Tm
        };
        return this._keys.splice(Vm.key + 1, 0, fm), Vm.key + 1
      }
      serialize() {
        const mm = {};
        mm.name = this.name, mm.property = this.targetProperty, mm.framePerSecond = this.framePerSecond, mm.dataType = this.dataType, mm.loopBehavior = this.Ea, mm.enableBlending = this.enableBlending, mm.blendingSpeed = this.blendingSpeed;
        const Tm = this.dataType;
        mm.keys = [];
        const fm = this.getKeys();
        for (let hm = 0; hm < fm.length; hm++) {
          const Am = fm[hm],
            am = {};
          switch (am.frame = Am.frame, Tm) {
            case Im.ANIMATIONTYPE_FLOAT:
              am.values = [Am.value], void 0 !== Am.inTangent && am.values.push(Am.inTangent), void 0 !== Am.outTangent && (void 0 === Am.inTangent && am.values.push(void 0), am.values.push(Am.outTangent)), void 0 !== Am.interpolation && (void 0 === Am.inTangent && am.values.push(void 0), void 0 === Am.outTangent && am.values.push(void 0), am.values.push(Am.interpolation));
              break;
            case Im.ANIMATIONTYPE_QUATERNION:
            case Im.ANIMATIONTYPE_MATRIX:
            case Im.ANIMATIONTYPE_VECTOR3:
            case Im.ANIMATIONTYPE_COLOR3:
            case Im.ANIMATIONTYPE_COLOR4:
              am.values = Am.value.ahm(), void 0 != Am.inTangent && am.values.push(Am.inTangent.ahm()), void 0 != Am.outTangent && (void 0 === Am.inTangent && am.values.push(void 0), am.values.push(Am.outTangent.ahm())), void 0 !== Am.interpolation && (void 0 === Am.inTangent && am.values.push(void 0), void 0 === Am.outTangent && am.values.push(void 0), am.values.push(Am.interpolation))
          }
          mm.keys.push(am)
        }
        mm.mo = [];
        for (const hm in this._ranges) {
          const Tm = this._ranges[hm];
          if (!Tm) continue;
          const fm = {};
          fm.name = hm, fm.from = Tm.from, fm.to = Tm.to, mm.mo.push(fm)
        }
        return mm
      }
      static _UniversalLerp(mm, Tm, fm) {
        const hm = mm.constructor;
        return hm.Lerp ? hm.Lerp(mm, Tm, fm) : hm.Slerp ? hm.Slerp(mm, Tm, fm) : mm.toFixed ? mm * (1 - fm) + fm * Tm : Tm
      }
    }

    function Km(mm, Tm, fm) {
      let Am;
      Am = "object" === typeof Tm ? Tm : {
        referenceFrame: Tm ?? 0,
        range: fm,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let am = mm;
      Am.cloneOriginalAnimation && (am = mm.clone(), am.name = Am.clonedAnimationName || am.name);
      const xm = am.getKeys();
      if (!xm.length) return am;
      const wm = Am.referenceFrame && Am.referenceFrame >= 0 ? Am.referenceFrame : 0;
      let Dm = 0;
      const im = xm[0];
      let Rm = xm.length - 1;
      const pm = xm[Rm],
        Em = {
          referenceValue: im.value,
          referencePosition: hm.j.WO[0],
          referenceQuaternion: hm.j.Quaternion[0],
          referenceScaling: hm.j.WO[1],
          keyPosition: hm.j.WO[2],
          keyQuaternion: hm.j.Quaternion[1],
          keyScaling: hm.j.WO[3]
        };
      let om = im.frame,
        Om = pm.frame;
      if (Am.range) {
        const mm = am.getRange(Am.range);
        mm && (om = mm.from, Om = mm.to)
      } else om = Am.fromFrame ?? om, Om = Am.toFrame ?? Om;
      om !== im.frame && (Dm = am.createKeyForFrame(om)), Om !== pm.frame && (Rm = am.createKeyForFrame(Om));
      const Ym = am.getKeys();
      if (1 === Ym.length) {
        const mm = am._getKeyValue(Ym[0].value);
        Em.referenceValue = mm.clone ? mm.clone() : mm
      } else if (wm <= im.frame) {
        const mm = am._getKeyValue(im.value);
        Em.referenceValue = mm.clone ? mm.clone() : mm
      } else if (wm >= pm.frame) {
        const mm = am._getKeyValue(pm.value);
        Em.referenceValue = mm.clone ? mm.clone() : mm
      } else {
        Vm.key = 0;
        const mm = am._interpolate(wm, Vm);
        Em.referenceValue = mm.clone ? mm.clone() : mm
      }
      am.dataType === Im.ANIMATIONTYPE_QUATERNION ? Em.referenceValue.normalize().conjugateInPlace() : am.dataType === Im.ANIMATIONTYPE_MATRIX && (Em.referenceValue.decompose(Em.referenceScaling, Em.referenceQuaternion, Em.referencePosition), Em.referenceQuaternion.normalize().conjugateInPlace());
      let qm = Number.MAX_VALUE;
      const jm = Am.clipKeys ? [] : null;
      for (let Vm = Dm; Vm <= Rm; Vm++) {
        let mm = Ym[Vm];
        if ((jm || Am.cloneOriginalAnimation) && (mm = {
            frame: mm.frame,
            value: mm.value.clone ? mm.value.clone() : mm.value,
            inTangent: mm.inTangent,
            outTangent: mm.outTangent,
            interpolation: mm.interpolation,
            lockedTangent: mm.lockedTangent,
            easingFunction: mm.easingFunction
          }, jm && (qm === Number.MAX_VALUE && (qm = mm.frame), mm.frame -= qm, jm.push(mm))), !Vm || am.dataType === Im.ANIMATIONTYPE_FLOAT || mm.value !== im.value) switch (am.dataType) {
          case Im.ANIMATIONTYPE_MATRIX:
            mm.value.decompose(Em.keyScaling, Em.keyQuaternion, Em.keyPosition), Em.keyPosition.zhm(Em.referencePosition), Em.keyScaling.divideInPlace(Em.referenceScaling), Em.referenceQuaternion.multiplyToRef(Em.keyQuaternion, Em.keyQuaternion), hm.e.ComposeToRef(Em.keyScaling, Em.keyQuaternion, Em.keyPosition, mm.value);
            break;
          case Im.ANIMATIONTYPE_QUATERNION:
            Em.referenceValue.multiplyToRef(mm.value, mm.value);
            break;
          case Im.ANIMATIONTYPE_VECTOR2:
          case Im.ANIMATIONTYPE_VECTOR3:
          case Im.ANIMATIONTYPE_COLOR3:
          case Im.ANIMATIONTYPE_COLOR4:
            mm.value.subtractToRef(Em.referenceValue, mm.value);
            break;
          case Im.ANIMATIONTYPE_SIZE:
            mm.value.width -= Em.referenceValue.width, mm.value.height -= Em.referenceValue.height;
            break;
          default:
            mm.value -= Em.referenceValue
        }
      }
      return jm && am.setKeys(jm, !0), am
    }

    function Qm(mm, Tm, fm, hm) {
      const Am = new Im(mm + "Animation", mm, fm, Tm, Im.ANIMATIONLOOPMODE_CONSTANT);
      return Am.setEasingFunction(hm), Am
    }

    function nm(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm) {
      const pm = Im._PrepareAnimation(mm, fm, hm, Am, am, xm, wm, Dm);
      return pm ? (Tm.wG && (Rm = Tm.wG()), Rm ? Rm.beginDirectAnimation(Tm, [pm], 0, Am, pm.Ea !== Im.ANIMATIONLOOPMODE_CONSTANT, 1, im) : null) : null
    }

    function Jm(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm) {
      const pm = Im._PrepareAnimation(mm, hm, Am, am, xm, wm, Dm, im);
      if (!pm) return null;
      return Tm.wG().beginDirectHierarchyAnimation(Tm, fm, [pm], 0, am, 1 === pm.Ea, 1, Rm)
    }

    function cm(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im) {
      const Rm = Im._PrepareAnimation(mm, fm, hm, Am, am, xm, wm, Dm);
      return Rm ? (Tm.animations.push(Rm), Tm.wG().beginAnimation(Tm, 0, Am, 1 === Rm.Ea, 1, im)) : null
    }

    function zm(mm, Tm, fm, hm, Am, am, xm) {
      let wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        Dm = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        im = arguments.length > 9 ? arguments[9] : void 0;
      if (xm <= 0) return fm[mm] = Tm, wm && wm(), null;
      const Rm = Am * (xm / 1e3);
      am.setKeys(im ?? [{
        frame: 0,
        value: fm[mm].clone ? fm[mm].clone() : fm[mm]
      }, {
        frame: Rm,
        value: Tm
      }]), fm.animations || (fm.animations = []), fm.animations.push(am);
      return hm.beginAnimation(fm, 0, Rm, !1, 1, wm ?? void 0, void 0, Dm)
    }

    function Zm(mm, Tm) {
      Rm.d.AppendSerializedAnimations(mm, Tm)
    }

    function km(mm) {
      const Tm = new Im(mm.name, mm.property, mm.framePerSecond, mm.dataType, mm.loopBehavior),
        fm = mm.dataType,
        am = [];
      let xm, wm;
      for (mm.enableBlending && (Tm.enableBlending = mm.enableBlending), mm.blendingSpeed && (Tm.blendingSpeed = mm.blendingSpeed), wm = 0; wm < mm.keys.length; wm++) {
        const Tm = mm.keys[wm];
        let Dm, im, Rm;
        switch (fm) {
          case Im.ANIMATIONTYPE_FLOAT:
            xm = Tm.values[0], Tm.values.length >= 2 && (Dm = Tm.values[1]), Tm.values.length >= 3 && (im = Tm.values[2]), Tm.values.length >= 4 && (Rm = Tm.values[3]);
            break;
          case Im.ANIMATIONTYPE_QUATERNION:
            if (xm = hm.h.FromArray(Tm.values), Tm.values.length >= 8) {
              const mm = hm.h.FromArray(Tm.values.slice(4, 8));
              mm.equals(hm.h.Zero()) || (Dm = mm)
            }
            if (Tm.values.length >= 12) {
              const mm = hm.h.FromArray(Tm.values.slice(8, 12));
              mm.equals(hm.h.Zero()) || (im = mm)
            }
            Tm.values.length >= 13 && (Rm = Tm.values[12]);
            break;
          case Im.ANIMATIONTYPE_MATRIX:
            xm = hm.e.FromArray(Tm.values), Tm.values.length >= 17 && (Rm = Tm.values[16]);
            break;
          case Im.ANIMATIONTYPE_COLOR3:
            xm = Am.b.FromArray(Tm.values), Tm.values[3] && (Dm = Am.b.FromArray(Tm.values[3])), Tm.values[4] && (im = Am.b.FromArray(Tm.values[4])), Tm.values[5] && (Rm = Tm.values[5]);
            break;
          case Im.ANIMATIONTYPE_COLOR4:
            xm = Am.c.FromArray(Tm.values), Tm.values[4] && (Dm = Am.c.FromArray(Tm.values[4])), Tm.values[5] && (im = Am.c.FromArray(Tm.values[5])), Tm.values[6] && (Rm = Tm.values[6]);
            break;
          case Im.ANIMATIONTYPE_VECTOR3:
          default:
            xm = hm.p.FromArray(Tm.values), Tm.values[3] && (Dm = hm.p.FromArray(Tm.values[3])), Tm.values[4] && (im = hm.p.FromArray(Tm.values[4])), Tm.values[5] && (Rm = Tm.values[5])
        }
        const pm = {};
        pm.frame = Tm.frame, pm.value = xm, void 0 != Dm && (pm.inTangent = Dm), void 0 != im && (pm.outTangent = im), void 0 != Rm && (pm.interpolation = Rm), am.push(pm)
      }
      if (Tm.setKeys(am), mm.mo)
        for (wm = 0; wm < mm.mo.length; wm++) xm = mm.mo[wm], Tm.createRange(xm.name, xm.from, xm.to);
      return Tm
    }
    async function bm(mm, Tm) {
      return await new Promise(((fm, hm) => {
        const Am = new im.c;
        Am.addEventListener("readystatechange", (() => {
          if (4 == Am.readyState)
            if (200 == Am.status) {
              let Tm = JSON.parse(Am.responseText);
              if (Tm.animations && (Tm = Tm.animations), Tm.length) {
                const mm = [];
                for (const fm of Tm) mm.push(km(fm));
                fm(mm)
              } else {
                const hm = km(Tm);
                mm && (hm.name = mm), fm(hm)
              }
            } else hm("Unable to load the animation")
        })), Am.open("GET", Tm), Am.send()
      }))
    }
    async function Sm(mm) {
      const Tm = this?.SnippetUrl ?? Im.SnippetUrl;
      return await new Promise(((fm, hm) => {
        const Am = new im.c;
        Am.addEventListener("readystatechange", (() => {
          if (4 == Am.readyState)
            if (200 == Am.status) {
              const Tm = JSON.parse(JSON.parse(Am.responseText).jsonPayload);
              if (Tm.animations) {
                const hm = JSON.parse(Tm.animations),
                  Am = [];
                for (const Tm of hm.animations) {
                  const fm = km(Tm);
                  fm.snippetId = mm, Am.push(fm)
                }
                fm(Am)
              } else {
                const hm = km(JSON.parse(Tm.animation));
                hm.snippetId = mm, fm(hm)
              }
            } else hm("Unable to load the snippet " + mm)
        })), Am.open("GET", Tm + "/" + mm.replace(/#/g, "/")), Am.send()
      }))
    }
    Im._UniqueIdGenerator = 0, Im.AllowMatricesInterpolation = !1, Im.AllowMatrixDecomposeForInterpolation = !0, Im.InheritOriginalValueFromActiveAnimations = !1, Im.SnippetUrl = "https://snippet.babylonjs.com", Im.ANIMATIONTYPE_FLOAT = 0, Im.ANIMATIONTYPE_VECTOR3 = 1, Im.ANIMATIONTYPE_QUATERNION = 2, Im.ANIMATIONTYPE_MATRIX = 3, Im.ANIMATIONTYPE_COLOR3 = 4, Im.ANIMATIONTYPE_COLOR4 = 7, Im.ANIMATIONTYPE_VECTOR2 = 5, Im.ANIMATIONTYPE_SIZE = 6, Im.ANIMATIONLOOPMODE_RELATIVE = 0, Im.ANIMATIONLOOPMODE_CYCLE = 1, Im.ANIMATIONLOOPMODE_CONSTANT = 2, Im.ANIMATIONLOOPMODE_YOYO = 4, Im.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const em = Sm;
    let Nm = !1;

    function Gm() {
      Nm || (Nm = !0, Im.Parse = km, Im.ParseFromFileAsync = bm, Im.ParseFromSnippetAsync = Sm, Im.CreateFromSnippetAsync = em, Im.CreateAnimation = Qm, Im.CreateAndStartAnimation = nm, Im.CreateAndStartHierarchyAnimation = Jm, Im.CreateMergeAndStartAnimation = cm, Im.MakeAnimationAdditive = Km, Im.TransitionTo = zm, Im.AppendSerializedAnimations = Zm, (0, pm.d)("BABYLON.Animation", Im), wm.c._AnimationRangeFactory = (mm, Tm, fm) => new xm.d(mm, Tm, fm))
    }
  },
  41164: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm
    });
    class hm {
      constructor(mm, Tm, fm) {
        this.name = mm, this.from = Tm, this.to = fm
      }
      clone() {
        return new hm(this.name, this.from, this.to)
      }
    }
  },
  41203: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => hm.c,
      g: () => hm.m
    });
    var hm = fm(40251);
    (0, hm.g)()
  },
  41194: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm.f
    });
    var hm = fm(40585);
    (0, hm.d)()
  },
  41173: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm.b
    });
    var hm = fm(40574);
    (0, hm.d)()
  },
  41212: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm.d
    });
    var hm = fm(40513);
    (0, hm.g)()
  },
  41166: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => hm.e
    });
    var hm = fm(40546);
    (0, hm.b)()
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);