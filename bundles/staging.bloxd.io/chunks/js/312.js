export const id = 312;
export const ids = [312];
export const modules = {
  43051: (dd, Od, md) => {
    md.d(Od, {
      e: () => pd,
      h: () => Ad,
      l: () => yd,
      m: () => bd,
      n: () => od,
      q: () => Hd,
      s: () => qd,
      w: () => Nd
    });
    var Wd = md(38636),
      Fd = md(38741),
      Rd = md(38663),
      Xd = md(43059),
      Kd = md(42132),
      hd = md(41939),
      vd = md(41969),
      Qd = md(41948),
      td = md(38669);
    const od = Object.freeze(new Wd.e(0, 0, 0, 0)),
      Nd = Object.freeze(Wd.j.Zero()),
      qd = Object.freeze(Wd.i.Zero()),
      Hd = Object.freeze(hd.e.Zero()),
      yd = Object.freeze(Fd.d.Black()),
      bd = Object.freeze(new Fd.f(0, 0, 0, 0)),
      Td = {
        key: 0,
        repeatCount: 0,
        wm: 2
      };
    class pd {
      static _PrepareAnimation(dd, Od, md, Rd, Xd, Kd, vd, Qd) {
        let td;
        if (!isNaN(parseFloat(Xd)) && isFinite(Xd) ? td = pd.ANIMATIONTYPE_FLOAT : Xd instanceof Wd.e ? td = pd.ANIMATIONTYPE_QUATERNION : Xd instanceof Wd.j ? td = pd.ANIMATIONTYPE_VECTOR3 : Xd instanceof Wd.i ? td = pd.ANIMATIONTYPE_VECTOR2 : Xd instanceof Fd.d ? td = pd.ANIMATIONTYPE_COLOR3 : Xd instanceof Fd.f ? td = pd.ANIMATIONTYPE_COLOR4 : Xd instanceof hd.e && (td = pd.ANIMATIONTYPE_SIZE), void 0 == td) return null;
        const od = new pd(dd, Od, md, td, vd),
          Nd = [{
            frame: 0,
            value: Xd
          }, {
            frame: Rd,
            value: Kd
          }];
        return od.setKeys(Nd), void 0 !== Qd && od.setEasingFunction(Qd), od
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const dd of this._runtimeAnimations)
          if (!dd.isStopped()) return !0;
        return !1
      }
      constructor(dd, Od, md, Wd, Fd, Rd) {
        this.name = dd, this.targetProperty = Od, this.framePerSecond = md, this.dataType = Wd, this.wm = Fd, this.enableBlending = Rd, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = Od.split("."), this.dataType = Wd, this.wm = void 0 === Fd ? pd.ANIMATIONLOOPMODE_CYCLE : Fd, this.uniqueId = pd._UniqueIdGenerator++
      }
      toString(dd) {
        let Od = "Name: " + this.name + ", property: " + this.targetProperty;
        if (Od += ", datatype: " + ["Float", "Cq", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], Od += ", nKeys: " + (this._keys ? this._keys.length : "none"), Od += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), dd) {
          Od += ", Ranges: {";
          let dd = !0;
          for (const md in this._ranges) dd || (Od += ", "), dd = !1, Od += md;
          Od += "}"
        }
        return Od
      }
      addEvent(dd) {
        this._events.push(dd), this._events.sort(((dd, Od) => dd.frame - Od.frame))
      }
      removeEvents(dd) {
        for (let Od = 0; Od < this._events.length; Od++) this._events[Od].frame === dd && (this._events.splice(Od, 1), Od--)
      }
      getEvents() {
        return this._events
      }
      createRange(dd, Od, md) {
        this._ranges[dd] || (this._ranges[dd] = new Xd.e(dd, Od, md))
      }
      deleteRange(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const md = this._ranges[dd];
        if (md) {
          if (Od) {
            const dd = md.from,
              Od = md.to;
            for (let md = this._keys.length - 1; md >= 0; md--) this._keys[md].frame >= dd && this._keys[md].frame <= Od && this._keys.splice(md, 1)
          }
          this._ranges[dd] = null
        }
      }
      getRange(dd) {
        return this._ranges[dd]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let dd = 0;
        for (let Od = 0, md = this._keys.length; Od < md; Od++) dd < this._keys[Od].frame && (dd = this._keys[Od].frame);
        return dd
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(dd) {
        this._easingFunction = dd
      }
      floatInterpolateFunction(dd, Od, md) {
        return (0, Rd.Lerp)(dd, Od, md)
      }
      floatInterpolateFunctionWithTangents(dd, Od, md, Wd, Fd) {
        return (0, Rd.Hermite)(dd, Od, md, Wd, Fd)
      }
      quaternionInterpolateFunction(dd, Od, md) {
        return Wd.e.Slerp(dd, Od, md)
      }
      quaternionInterpolateFunctionWithTangents(dd, Od, md, Fd, Rd) {
        return Wd.e.Hermite(dd, Od, md, Fd, Rd).normalize()
      }
      vector3InterpolateFunction(dd, Od, md) {
        return Wd.j.Lerp(dd, Od, md)
      }
      vector3InterpolateFunctionWithTangents(dd, Od, md, Fd, Rd) {
        return Wd.j.Hermite(dd, Od, md, Fd, Rd)
      }
      vector2InterpolateFunction(dd, Od, md) {
        return Wd.i.Lerp(dd, Od, md)
      }
      vector2InterpolateFunctionWithTangents(dd, Od, md, Fd, Rd) {
        return Wd.i.Hermite(dd, Od, md, Fd, Rd)
      }
      sizeInterpolateFunction(dd, Od, md) {
        return hd.e.Lerp(dd, Od, md)
      }
      color3InterpolateFunction(dd, Od, md) {
        return Fd.d.Lerp(dd, Od, md)
      }
      color3InterpolateFunctionWithTangents(dd, Od, md, Wd, Rd) {
        return Fd.d.Hermite(dd, Od, md, Wd, Rd)
      }
      color4InterpolateFunction(dd, Od, md) {
        return Fd.f.Lerp(dd, Od, md)
      }
      color4InterpolateFunctionWithTangents(dd, Od, md, Wd, Rd) {
        return Fd.f.Hermite(dd, Od, md, Wd, Rd)
      }
      _getKeyValue(dd) {
        return "function" === typeof dd ? dd() : dd
      }
      evaluate(dd) {
        return Td.key = 0, this._interpolate(dd, Td)
      }
      _interpolate(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (Od.wm === pd.ANIMATIONLOOPMODE_CONSTANT && Od.repeatCount > 0) return Od.highLimitValue.clone ? Od.highLimitValue.clone() : Od.highLimitValue;
        const Wd = this._keys;
        let Fd;
        if (this._coreAnimation) Fd = this._coreAnimation._key;
        else {
          const Rd = Wd.length;
          for (Fd = Od.key; Fd >= 0 && dd < Wd[Fd].frame;) --Fd;
          for (; Fd + 1 <= Rd - 1 && dd >= Wd[Fd + 1].frame;) ++Fd;
          if (Od.key = Fd, Fd < 0) return md ? void 0 : this._getKeyValue(Wd[0].value);
          if (Fd + 1 > Rd - 1) return md ? void 0 : this._getKeyValue(Wd[Rd - 1].value);
          this._key = Fd
        }
        const Rd = Wd[Fd],
          Xd = Wd[Fd + 1];
        if (md && (dd === Rd.frame || dd === Xd.frame)) return;
        const Kd = this._getKeyValue(Rd.value),
          hd = this._getKeyValue(Xd.value);
        if (1 === Rd.interpolation) return Xd.frame > dd ? Kd : hd;
        const vd = void 0 !== Rd.outTangent && void 0 !== Xd.inTangent,
          Qd = Xd.frame - Rd.frame;
        let td = (dd - Rd.frame) / Qd;
        const Td = Rd.easingFunction || this.getEasingFunction();
        switch (Td && (td = Td.ease(td)), this.dataType) {
          case pd.ANIMATIONTYPE_FLOAT: {
            const dd = vd ? this.floatInterpolateFunctionWithTangents(Kd, Rd.outTangent * Qd, hd, Xd.inTangent * Qd, td) : this.floatInterpolateFunction(Kd, hd, td);
            switch (Od.wm) {
              case pd.ANIMATIONLOOPMODE_CYCLE:
              case pd.ANIMATIONLOOPMODE_CONSTANT:
              case pd.ANIMATIONLOOPMODE_YOYO:
                return dd;
              case pd.ANIMATIONLOOPMODE_RELATIVE:
              case pd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (Od.offsetValue ?? 0) * Od.repeatCount + dd
            }
            break
          }
          case pd.ANIMATIONTYPE_QUATERNION: {
            const dd = vd ? this.quaternionInterpolateFunctionWithTangents(Kd, Rd.outTangent.scale(Qd), hd, Xd.inTangent.scale(Qd), td) : this.quaternionInterpolateFunction(Kd, hd, td);
            switch (Od.wm) {
              case pd.ANIMATIONLOOPMODE_CYCLE:
              case pd.ANIMATIONLOOPMODE_CONSTANT:
              case pd.ANIMATIONLOOPMODE_YOYO:
                return dd;
              case pd.ANIMATIONLOOPMODE_RELATIVE:
              case pd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return dd.addInPlace((Od.offsetValue || od).scale(Od.repeatCount))
            }
            return dd
          }
          case pd.ANIMATIONTYPE_VECTOR3: {
            const dd = vd ? this.vector3InterpolateFunctionWithTangents(Kd, Rd.outTangent.scale(Qd), hd, Xd.inTangent.scale(Qd), td) : this.vector3InterpolateFunction(Kd, hd, td);
            switch (Od.wm) {
              case pd.ANIMATIONLOOPMODE_CYCLE:
              case pd.ANIMATIONLOOPMODE_CONSTANT:
              case pd.ANIMATIONLOOPMODE_YOYO:
                return dd;
              case pd.ANIMATIONLOOPMODE_RELATIVE:
              case pd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return dd.add((Od.offsetValue || Nd).scale(Od.repeatCount))
            }
            break
          }
          case pd.ANIMATIONTYPE_VECTOR2: {
            const dd = vd ? this.vector2InterpolateFunctionWithTangents(Kd, Rd.outTangent.scale(Qd), hd, Xd.inTangent.scale(Qd), td) : this.vector2InterpolateFunction(Kd, hd, td);
            switch (Od.wm) {
              case pd.ANIMATIONLOOPMODE_CYCLE:
              case pd.ANIMATIONLOOPMODE_CONSTANT:
              case pd.ANIMATIONLOOPMODE_YOYO:
                return dd;
              case pd.ANIMATIONLOOPMODE_RELATIVE:
              case pd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return dd.add((Od.offsetValue || qd).scale(Od.repeatCount))
            }
            break
          }
          case pd.ANIMATIONTYPE_SIZE:
            switch (Od.wm) {
              case pd.ANIMATIONLOOPMODE_CYCLE:
              case pd.ANIMATIONLOOPMODE_CONSTANT:
              case pd.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(Kd, hd, td);
              case pd.ANIMATIONLOOPMODE_RELATIVE:
              case pd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(Kd, hd, td).add((Od.offsetValue || Hd).scale(Od.repeatCount))
            }
            break;
          case pd.ANIMATIONTYPE_COLOR3: {
            const dd = vd ? this.color3InterpolateFunctionWithTangents(Kd, Rd.outTangent.scale(Qd), hd, Xd.inTangent.scale(Qd), td) : this.color3InterpolateFunction(Kd, hd, td);
            switch (Od.wm) {
              case pd.ANIMATIONLOOPMODE_CYCLE:
              case pd.ANIMATIONLOOPMODE_CONSTANT:
              case pd.ANIMATIONLOOPMODE_YOYO:
                return dd;
              case pd.ANIMATIONLOOPMODE_RELATIVE:
              case pd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return dd.add((Od.offsetValue || yd).scale(Od.repeatCount))
            }
            break
          }
          case pd.ANIMATIONTYPE_COLOR4: {
            const dd = vd ? this.color4InterpolateFunctionWithTangents(Kd, Rd.outTangent.scale(Qd), hd, Xd.inTangent.scale(Qd), td) : this.color4InterpolateFunction(Kd, hd, td);
            switch (Od.wm) {
              case pd.ANIMATIONLOOPMODE_CYCLE:
              case pd.ANIMATIONLOOPMODE_CONSTANT:
              case pd.ANIMATIONLOOPMODE_YOYO:
                return dd;
              case pd.ANIMATIONLOOPMODE_RELATIVE:
              case pd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return dd.add((Od.offsetValue || bd).scale(Od.repeatCount))
            }
            break
          }
          case pd.ANIMATIONTYPE_MATRIX:
            switch (Od.wm) {
              case pd.ANIMATIONLOOPMODE_CYCLE:
              case pd.ANIMATIONLOOPMODE_CONSTANT:
              case pd.ANIMATIONLOOPMODE_YOYO:
                return pd.AllowMatricesInterpolation ? this.matrixInterpolateFunction(Kd, hd, td, Od.workValue) : Kd;
              case pd.ANIMATIONLOOPMODE_RELATIVE:
              case pd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return Kd
            }
        }
        return 0
      }
      matrixInterpolateFunction(dd, Od, md, Fd) {
        return pd.AllowMatrixDecomposeForInterpolation ? Fd ? (Wd.d.DecomposeLerpToRef(dd, Od, md, Fd), Fd) : Wd.d.DecomposeLerp(dd, Od, md) : Fd ? (Wd.d.LerpToRef(dd, Od, md, Fd), Fd) : Wd.d.Lerp(dd, Od, md)
      }
      clone() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Od = new pd(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.wm);
        if (Od.enableBlending = this.enableBlending, Od.blendingSpeed = this.blendingSpeed, this._keys && Od.setKeys(this._keys, !1, dd), this._ranges) {
          Od._ranges = {};
          for (const dd in this._ranges) {
            const md = this._ranges[dd];
            md && (Od._ranges[dd] = md.clone())
          }
        }
        return Od
      }
      setKeys(dd) {
        let Od = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = dd;
        else if (this._keys = dd.slice(0), Od)
          for (let md = 0; md < this._keys.length; md++) {
            const dd = this._keys[md];
            this._keys[md] = {
              frame: dd.frame,
              value: dd.value.clone ? dd.value.clone() : dd.value,
              inTangent: dd.inTangent && dd.inTangent.clone ? dd.inTangent.clone() : dd.inTangent,
              outTangent: dd.outTangent && dd.outTangent.clone ? dd.outTangent.clone() : dd.outTangent,
              interpolation: dd.interpolation,
              lockedTangent: dd.lockedTangent,
              easingFunction: dd.easingFunction
            }
          }
      }
      createKeyForFrame(dd) {
        Td.key = 0;
        const Od = this._interpolate(dd, Td, !0);
        if (!Od) return this._keys[Td.key].frame === dd ? Td.key : Td.key + 1;
        const md = {
          frame: dd,
          value: Od.clone ? Od.clone() : Od
        };
        return this._keys.splice(Td.key + 1, 0, md), Td.key + 1
      }
      serialize() {
        const dd = {};
        dd.name = this.name, dd.property = this.targetProperty, dd.framePerSecond = this.framePerSecond, dd.dataType = this.dataType, dd.loopBehavior = this.wm, dd.enableBlending = this.enableBlending, dd.blendingSpeed = this.blendingSpeed;
        const Od = this.dataType;
        dd.keys = [];
        const md = this.getKeys();
        for (let Wd = 0; Wd < md.length; Wd++) {
          const Fd = md[Wd],
            Rd = {};
          switch (Rd.frame = Fd.frame, Od) {
            case pd.ANIMATIONTYPE_FLOAT:
              Rd.values = [Fd.value], void 0 !== Fd.inTangent && Rd.values.push(Fd.inTangent), void 0 !== Fd.outTangent && (void 0 === Fd.inTangent && Rd.values.push(void 0), Rd.values.push(Fd.outTangent)), void 0 !== Fd.interpolation && (void 0 === Fd.inTangent && Rd.values.push(void 0), void 0 === Fd.outTangent && Rd.values.push(void 0), Rd.values.push(Fd.interpolation));
              break;
            case pd.ANIMATIONTYPE_QUATERNION:
            case pd.ANIMATIONTYPE_MATRIX:
            case pd.ANIMATIONTYPE_VECTOR3:
            case pd.ANIMATIONTYPE_COLOR3:
            case pd.ANIMATIONTYPE_COLOR4:
              Rd.values = Fd.value.RRd(), void 0 != Fd.inTangent && Rd.values.push(Fd.inTangent.RRd()), void 0 != Fd.outTangent && (void 0 === Fd.inTangent && Rd.values.push(void 0), Rd.values.push(Fd.outTangent.RRd())), void 0 !== Fd.interpolation && (void 0 === Fd.inTangent && Rd.values.push(void 0), void 0 === Fd.outTangent && Rd.values.push(void 0), Rd.values.push(Fd.interpolation))
          }
          dd.keys.push(Rd)
        }
        dd.By = [];
        for (const Wd in this._ranges) {
          const Od = this._ranges[Wd];
          if (!Od) continue;
          const md = {};
          md.name = Wd, md.from = Od.from, md.to = Od.to, dd.By.push(md)
        }
        return dd
      }
      static _UniversalLerp(dd, Od, md) {
        const Wd = dd.constructor;
        return Wd.Lerp ? Wd.Lerp(dd, Od, md) : Wd.Slerp ? Wd.Slerp(dd, Od, md) : dd.toFixed ? dd * (1 - md) + md * Od : Od
      }
    }

    function Yd(dd, Od, md) {
      let Fd;
      Fd = "object" === typeof Od ? Od : {
        referenceFrame: Od ?? 0,
        range: md,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let Rd = dd;
      Fd.cloneOriginalAnimation && (Rd = dd.clone(), Rd.name = Fd.clonedAnimationName || Rd.name);
      const Xd = Rd.getKeys();
      if (!Xd.length) return Rd;
      const Kd = Fd.referenceFrame && Fd.referenceFrame >= 0 ? Fd.referenceFrame : 0;
      let hd = 0;
      const vd = Xd[0];
      let Qd = Xd.length - 1;
      const td = Xd[Qd],
        od = {
          referenceValue: vd.value,
          referencePosition: Wd.h.Cq[0],
          referenceQuaternion: Wd.h.Quaternion[0],
          referenceScaling: Wd.h.Cq[1],
          keyPosition: Wd.h.Cq[2],
          keyQuaternion: Wd.h.Quaternion[1],
          keyScaling: Wd.h.Cq[3]
        };
      let Nd = vd.frame,
        qd = td.frame;
      if (Fd.range) {
        const dd = Rd.getRange(Fd.range);
        dd && (Nd = dd.from, qd = dd.to)
      } else Nd = Fd.fromFrame ?? Nd, qd = Fd.toFrame ?? qd;
      Nd !== vd.frame && (hd = Rd.createKeyForFrame(Nd)), qd !== td.frame && (Qd = Rd.createKeyForFrame(qd));
      const Hd = Rd.getKeys();
      if (1 === Hd.length) {
        const dd = Rd._getKeyValue(Hd[0].value);
        od.referenceValue = dd.clone ? dd.clone() : dd
      } else if (Kd <= vd.frame) {
        const dd = Rd._getKeyValue(vd.value);
        od.referenceValue = dd.clone ? dd.clone() : dd
      } else if (Kd >= td.frame) {
        const dd = Rd._getKeyValue(td.value);
        od.referenceValue = dd.clone ? dd.clone() : dd
      } else {
        Td.key = 0;
        const dd = Rd._interpolate(Kd, Td);
        od.referenceValue = dd.clone ? dd.clone() : dd
      }
      Rd.dataType === pd.ANIMATIONTYPE_QUATERNION ? od.referenceValue.normalize().conjugateInPlace() : Rd.dataType === pd.ANIMATIONTYPE_MATRIX && (od.referenceValue.decompose(od.referenceScaling, od.referenceQuaternion, od.referencePosition), od.referenceQuaternion.normalize().conjugateInPlace());
      let yd = Number.MAX_VALUE;
      const bd = Fd.clipKeys ? [] : null;
      for (let Td = hd; Td <= Qd; Td++) {
        let dd = Hd[Td];
        if ((bd || Fd.cloneOriginalAnimation) && (dd = {
            frame: dd.frame,
            value: dd.value.clone ? dd.value.clone() : dd.value,
            inTangent: dd.inTangent,
            outTangent: dd.outTangent,
            interpolation: dd.interpolation,
            lockedTangent: dd.lockedTangent,
            easingFunction: dd.easingFunction
          }, bd && (yd === Number.MAX_VALUE && (yd = dd.frame), dd.frame -= yd, bd.push(dd))), !Td || Rd.dataType === pd.ANIMATIONTYPE_FLOAT || dd.value !== vd.value) switch (Rd.dataType) {
          case pd.ANIMATIONTYPE_MATRIX:
            dd.value.decompose(od.keyScaling, od.keyQuaternion, od.keyPosition), od.keyPosition.YRd(od.referencePosition), od.keyScaling.divideInPlace(od.referenceScaling), od.referenceQuaternion.multiplyToRef(od.keyQuaternion, od.keyQuaternion), Wd.d.ComposeToRef(od.keyScaling, od.keyQuaternion, od.keyPosition, dd.value);
            break;
          case pd.ANIMATIONTYPE_QUATERNION:
            od.referenceValue.multiplyToRef(dd.value, dd.value);
            break;
          case pd.ANIMATIONTYPE_VECTOR2:
          case pd.ANIMATIONTYPE_VECTOR3:
          case pd.ANIMATIONTYPE_COLOR3:
          case pd.ANIMATIONTYPE_COLOR4:
            dd.value.subtractToRef(od.referenceValue, dd.value);
            break;
          case pd.ANIMATIONTYPE_SIZE:
            dd.value.width -= od.referenceValue.width, dd.value.height -= od.referenceValue.height;
            break;
          default:
            dd.value -= od.referenceValue
        }
      }
      return bd && Rd.setKeys(bd, !0), Rd
    }

    function gd(dd, Od, md, Wd) {
      const Fd = new pd(dd + "Animation", dd, md, Od, pd.ANIMATIONLOOPMODE_CONSTANT);
      return Fd.setEasingFunction(Wd), Fd
    }

    function wd(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd) {
      const td = pd._PrepareAnimation(dd, md, Wd, Fd, Rd, Xd, Kd, hd);
      return td ? (Od.zV && (Qd = Od.zV()), Qd ? Qd.beginDirectAnimation(Od, [td], 0, Fd, td.wm !== pd.ANIMATIONLOOPMODE_CONSTANT, 1, vd) : null) : null
    }

    function Ed(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd) {
      const td = pd._PrepareAnimation(dd, Wd, Fd, Rd, Xd, Kd, hd, vd);
      if (!td) return null;
      return Od.zV().beginDirectHierarchyAnimation(Od, md, [td], 0, Rd, 1 === td.wm, 1, Qd)
    }

    function Jd(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd) {
      const Qd = pd._PrepareAnimation(dd, md, Wd, Fd, Rd, Xd, Kd, hd);
      return Qd ? (Od.animations.push(Qd), Od.zV().beginAnimation(Od, 0, Fd, 1 === Qd.wm, 1, vd)) : null
    }

    function Ud(dd, Od, md, Wd, Fd, Rd, Xd) {
      let Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        hd = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        vd = arguments.length > 9 ? arguments[9] : void 0;
      if (Xd <= 0) return md[dd] = Od, Kd && Kd(), null;
      const Qd = Fd * (Xd / 1e3);
      Rd.setKeys(vd ?? [{
        frame: 0,
        value: md[dd].clone ? md[dd].clone() : md[dd]
      }, {
        frame: Qd,
        value: Od
      }]), md.animations || (md.animations = []), md.animations.push(Rd);
      return Wd.beginAnimation(md, 0, Qd, !1, 1, Kd ?? void 0, void 0, hd)
    }

    function xd(dd, Od) {
      Qd.b.AppendSerializedAnimations(dd, Od)
    }

    function Bd(dd) {
      const Od = new pd(dd.name, dd.property, dd.framePerSecond, dd.dataType, dd.loopBehavior),
        md = dd.dataType,
        Rd = [];
      let Xd, Kd;
      for (dd.enableBlending && (Od.enableBlending = dd.enableBlending), dd.blendingSpeed && (Od.blendingSpeed = dd.blendingSpeed), Kd = 0; Kd < dd.keys.length; Kd++) {
        const Od = dd.keys[Kd];
        let hd, vd, Qd;
        switch (md) {
          case pd.ANIMATIONTYPE_FLOAT:
            Xd = Od.values[0], Od.values.length >= 2 && (hd = Od.values[1]), Od.values.length >= 3 && (vd = Od.values[2]), Od.values.length >= 4 && (Qd = Od.values[3]);
            break;
          case pd.ANIMATIONTYPE_QUATERNION:
            if (Xd = Wd.e.FromArray(Od.values), Od.values.length >= 8) {
              const dd = Wd.e.FromArray(Od.values.slice(4, 8));
              dd.equals(Wd.e.Zero()) || (hd = dd)
            }
            if (Od.values.length >= 12) {
              const dd = Wd.e.FromArray(Od.values.slice(8, 12));
              dd.equals(Wd.e.Zero()) || (vd = dd)
            }
            Od.values.length >= 13 && (Qd = Od.values[12]);
            break;
          case pd.ANIMATIONTYPE_MATRIX:
            Xd = Wd.d.FromArray(Od.values), Od.values.length >= 17 && (Qd = Od.values[16]);
            break;
          case pd.ANIMATIONTYPE_COLOR3:
            Xd = Fd.d.FromArray(Od.values), Od.values[3] && (hd = Fd.d.FromArray(Od.values[3])), Od.values[4] && (vd = Fd.d.FromArray(Od.values[4])), Od.values[5] && (Qd = Od.values[5]);
            break;
          case pd.ANIMATIONTYPE_COLOR4:
            Xd = Fd.f.FromArray(Od.values), Od.values[4] && (hd = Fd.f.FromArray(Od.values[4])), Od.values[5] && (vd = Fd.f.FromArray(Od.values[5])), Od.values[6] && (Qd = Od.values[6]);
            break;
          case pd.ANIMATIONTYPE_VECTOR3:
          default:
            Xd = Wd.j.FromArray(Od.values), Od.values[3] && (hd = Wd.j.FromArray(Od.values[3])), Od.values[4] && (vd = Wd.j.FromArray(Od.values[4])), Od.values[5] && (Qd = Od.values[5])
        }
        const td = {};
        td.frame = Od.frame, td.value = Xd, void 0 != hd && (td.inTangent = hd), void 0 != vd && (td.outTangent = vd), void 0 != Qd && (td.interpolation = Qd), Rd.push(td)
      }
      if (Od.setKeys(Rd), dd.By)
        for (Kd = 0; Kd < dd.By.length; Kd++) Xd = dd.By[Kd], Od.createRange(Xd.name, Xd.from, Xd.to);
      return Od
    }
    async function Sd(dd, Od) {
      return await new Promise(((md, Wd) => {
        const Fd = new vd.e;
        Fd.addEventListener("readystatechange", (() => {
          if (4 == Fd.readyState)
            if (200 == Fd.status) {
              let Od = JSON.parse(Fd.responseText);
              if (Od.animations && (Od = Od.animations), Od.length) {
                const dd = [];
                for (const md of Od) dd.push(Bd(md));
                md(dd)
              } else {
                const Wd = Bd(Od);
                dd && (Wd.name = dd), md(Wd)
              }
            } else Wd("Unable to load the animation")
        })), Fd.open("GET", Od), Fd.send()
      }))
    }
    async function sd(dd) {
      const Od = this?.SnippetUrl ?? pd.SnippetUrl;
      return await new Promise(((md, Wd) => {
        const Fd = new vd.e;
        Fd.addEventListener("readystatechange", (() => {
          if (4 == Fd.readyState)
            if (200 == Fd.status) {
              const Od = JSON.parse(JSON.parse(Fd.responseText).jsonPayload);
              if (Od.animations) {
                const Wd = JSON.parse(Od.animations),
                  Fd = [];
                for (const Od of Wd.animations) {
                  const md = Bd(Od);
                  md.snippetId = dd, Fd.push(md)
                }
                md(Fd)
              } else {
                const Wd = Bd(JSON.parse(Od.animation));
                Wd.snippetId = dd, md(Wd)
              }
            } else Wd("Unable to load the snippet " + dd)
        })), Fd.open("GET", Od + "/" + dd.replace(/#/g, "/")), Fd.send()
      }))
    }
    pd._UniqueIdGenerator = 0, pd.AllowMatricesInterpolation = !1, pd.AllowMatrixDecomposeForInterpolation = !0, pd.InheritOriginalValueFromActiveAnimations = !1, pd.SnippetUrl = "https://snippet.babylonjs.com", pd.ANIMATIONTYPE_FLOAT = 0, pd.ANIMATIONTYPE_VECTOR3 = 1, pd.ANIMATIONTYPE_QUATERNION = 2, pd.ANIMATIONTYPE_MATRIX = 3, pd.ANIMATIONTYPE_COLOR3 = 4, pd.ANIMATIONTYPE_COLOR4 = 7, pd.ANIMATIONTYPE_VECTOR2 = 5, pd.ANIMATIONTYPE_SIZE = 6, pd.ANIMATIONLOOPMODE_RELATIVE = 0, pd.ANIMATIONLOOPMODE_CYCLE = 1, pd.ANIMATIONLOOPMODE_CONSTANT = 2, pd.ANIMATIONLOOPMODE_YOYO = 4, pd.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const ud = sd;
    let Vd = !1;

    function Ad() {
      Vd || (Vd = !0, pd.Parse = Bd, pd.ParseFromFileAsync = Sd, pd.ParseFromSnippetAsync = sd, pd.CreateFromSnippetAsync = ud, pd.CreateAnimation = gd, pd.CreateAndStartAnimation = wd, pd.CreateAndStartHierarchyAnimation = Ed, pd.CreateMergeAndStartAnimation = Jd, pd.MakeAnimationAdditive = Yd, pd.TransitionTo = Ud, pd.AppendSerializedAnimations = xd, (0, td.e)("BABYLON.Animation", pd), Kd.b._AnimationRangeFactory = (dd, Od, md) => new Xd.e(dd, Od, md))
    }
  },
  43059: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd
    });
    class Wd {
      constructor(dd, Od, md) {
        this.name = dd, this.from = Od, this.to = md
      }
      clone() {
        return new Wd(this.name, this.from, this.to)
      }
    }
  },
  43122: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd.b,
      g: () => Wd.j
    });
    var Wd = md(42075);
    (0, Wd.d)()
  },
  43101: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd.f
    });
    var Wd = md(42412);
    (0, Wd.e)()
  },
  43076: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd.c
    });
    var Wd = md(42402);
    (0, Wd.e)()
  },
  43129: (dd, Od, md) => {
    md.d(Od, {
      d: () => Wd.d
    });
    var Wd = md(42330);
    (0, Wd.e)()
  },
  43061: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd.f
    });
    var Wd = md(42374);
    (0, Wd.c)()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);