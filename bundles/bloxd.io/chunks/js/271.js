export const id = 271;
export const ids = [271];
export const modules = {
  39945: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => mB,
      g: () => IB,
      j: () => HB,
      l: () => EB,
      n: () => LB,
      o: () => uB,
      r: () => DB,
      t: () => OB
    });
    var VB = dB(36126),
      yB = dB(36183),
      pB = dB(36157),
      lB = dB(39947),
      JB = dB(38980),
      YB = dB(38768),
      gB = dB(38799),
      oB = dB(38772),
      kB = dB(36166);
    const LB = Object.freeze(new VB.f(0, 0, 0, 0)),
      OB = Object.freeze(VB.p.Zero()),
      DB = Object.freeze(VB.l.Zero()),
      uB = Object.freeze(YB.c.Zero()),
      HB = Object.freeze(yB.c.Black()),
      EB = Object.freeze(new yB.d(0, 0, 0, 0)),
      vB = {
        key: 0,
        repeatCount: 0,
        Py: 2
      };
    class mB {
      static _PrepareAnimation(BB, TB, dB, pB, lB, JB, gB, oB) {
        let kB;
        if (!isNaN(parseFloat(lB)) && isFinite(lB) ? kB = mB.ANIMATIONTYPE_FLOAT : lB instanceof VB.f ? kB = mB.ANIMATIONTYPE_QUATERNION : lB instanceof VB.p ? kB = mB.ANIMATIONTYPE_VECTOR3 : lB instanceof VB.l ? kB = mB.ANIMATIONTYPE_VECTOR2 : lB instanceof yB.c ? kB = mB.ANIMATIONTYPE_COLOR3 : lB instanceof yB.d ? kB = mB.ANIMATIONTYPE_COLOR4 : lB instanceof YB.c && (kB = mB.ANIMATIONTYPE_SIZE), void 0 == kB) return null;
        const LB = new mB(BB, TB, dB, kB, gB),
          OB = [{
            frame: 0,
            value: lB
          }, {
            frame: pB,
            value: JB
          }];
        return LB.setKeys(OB), void 0 !== oB && LB.setEasingFunction(oB), LB
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const BB of this._runtimeAnimations)
          if (!BB.isStopped()) return !0;
        return !1
      }
      constructor(BB, TB, dB, VB, yB, pB) {
        this.name = BB, this.targetProperty = TB, this.framePerSecond = dB, this.dataType = VB, this.Py = yB, this.enableBlending = pB, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = TB.split("."), this.dataType = VB, this.Py = void 0 === yB ? mB.ANIMATIONLOOPMODE_CYCLE : yB, this.uniqueId = mB._UniqueIdGenerator++
      }
      toString(BB) {
        let TB = "Name: " + this.name + ", property: " + this.targetProperty;
        if (TB += ", datatype: " + ["Float", "RD", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], TB += ", nKeys: " + (this._keys ? this._keys.length : "none"), TB += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), BB) {
          TB += ", Ranges: {";
          let BB = !0;
          for (const dB in this._ranges) BB || (TB += ", "), BB = !1, TB += dB;
          TB += "}"
        }
        return TB
      }
      addEvent(BB) {
        this._events.push(BB), this._events.sort(((BB, TB) => BB.frame - TB.frame))
      }
      removeEvents(BB) {
        for (let TB = 0; TB < this._events.length; TB++) this._events[TB].frame === BB && (this._events.splice(TB, 1), TB--)
      }
      getEvents() {
        return this._events
      }
      createRange(BB, TB, dB) {
        this._ranges[BB] || (this._ranges[BB] = new lB.e(BB, TB, dB))
      }
      deleteRange(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const dB = this._ranges[BB];
        if (dB) {
          if (TB) {
            const BB = dB.from,
              TB = dB.to;
            for (let dB = this._keys.length - 1; dB >= 0; dB--) this._keys[dB].frame >= BB && this._keys[dB].frame <= TB && this._keys.splice(dB, 1)
          }
          this._ranges[BB] = null
        }
      }
      getRange(BB) {
        return this._ranges[BB]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let BB = 0;
        for (let TB = 0, dB = this._keys.length; TB < dB; TB++) BB < this._keys[TB].frame && (BB = this._keys[TB].frame);
        return BB
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(BB) {
        this._easingFunction = BB
      }
      floatInterpolateFunction(BB, TB, dB) {
        return (0, pB.Lerp)(BB, TB, dB)
      }
      floatInterpolateFunctionWithTangents(BB, TB, dB, VB, yB) {
        return (0, pB.Hermite)(BB, TB, dB, VB, yB)
      }
      quaternionInterpolateFunction(BB, TB, dB) {
        return VB.f.Slerp(BB, TB, dB)
      }
      quaternionInterpolateFunctionWithTangents(BB, TB, dB, yB, pB) {
        return VB.f.Hermite(BB, TB, dB, yB, pB).normalize()
      }
      vector3InterpolateFunction(BB, TB, dB) {
        return VB.p.Lerp(BB, TB, dB)
      }
      vector3InterpolateFunctionWithTangents(BB, TB, dB, yB, pB) {
        return VB.p.Hermite(BB, TB, dB, yB, pB)
      }
      vector2InterpolateFunction(BB, TB, dB) {
        return VB.l.Lerp(BB, TB, dB)
      }
      vector2InterpolateFunctionWithTangents(BB, TB, dB, yB, pB) {
        return VB.l.Hermite(BB, TB, dB, yB, pB)
      }
      sizeInterpolateFunction(BB, TB, dB) {
        return YB.c.Lerp(BB, TB, dB)
      }
      color3InterpolateFunction(BB, TB, dB) {
        return yB.c.Lerp(BB, TB, dB)
      }
      color3InterpolateFunctionWithTangents(BB, TB, dB, VB, pB) {
        return yB.c.Hermite(BB, TB, dB, VB, pB)
      }
      color4InterpolateFunction(BB, TB, dB) {
        return yB.d.Lerp(BB, TB, dB)
      }
      color4InterpolateFunctionWithTangents(BB, TB, dB, VB, pB) {
        return yB.d.Hermite(BB, TB, dB, VB, pB)
      }
      _getKeyValue(BB) {
        return "function" === typeof BB ? BB() : BB
      }
      evaluate(BB) {
        return vB.key = 0, this._interpolate(BB, vB)
      }
      _interpolate(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (TB.Py === mB.ANIMATIONLOOPMODE_CONSTANT && TB.repeatCount > 0) return TB.highLimitValue.clone ? TB.highLimitValue.clone() : TB.highLimitValue;
        const VB = this._keys;
        let yB;
        if (this._coreAnimation) yB = this._coreAnimation._key;
        else {
          const pB = VB.length;
          for (yB = TB.key; yB >= 0 && BB < VB[yB].frame;) --yB;
          for (; yB + 1 <= pB - 1 && BB >= VB[yB + 1].frame;) ++yB;
          if (TB.key = yB, yB < 0) return dB ? void 0 : this._getKeyValue(VB[0].value);
          if (yB + 1 > pB - 1) return dB ? void 0 : this._getKeyValue(VB[pB - 1].value);
          this._key = yB
        }
        const pB = VB[yB],
          lB = VB[yB + 1];
        if (dB && (BB === pB.frame || BB === lB.frame)) return;
        const JB = this._getKeyValue(pB.value),
          YB = this._getKeyValue(lB.value);
        if (1 === pB.interpolation) return lB.frame > BB ? JB : YB;
        const gB = void 0 !== pB.outTangent && void 0 !== lB.inTangent,
          oB = lB.frame - pB.frame;
        let kB = (BB - pB.frame) / oB;
        const vB = pB.easingFunction || this.getEasingFunction();
        switch (vB && (kB = vB.ease(kB)), this.dataType) {
          case mB.ANIMATIONTYPE_FLOAT: {
            const BB = gB ? this.floatInterpolateFunctionWithTangents(JB, pB.outTangent * oB, YB, lB.inTangent * oB, kB) : this.floatInterpolateFunction(JB, YB, kB);
            switch (TB.Py) {
              case mB.ANIMATIONLOOPMODE_CYCLE:
              case mB.ANIMATIONLOOPMODE_CONSTANT:
              case mB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case mB.ANIMATIONLOOPMODE_RELATIVE:
              case mB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (TB.offsetValue ?? 0) * TB.repeatCount + BB
            }
            break
          }
          case mB.ANIMATIONTYPE_QUATERNION: {
            const BB = gB ? this.quaternionInterpolateFunctionWithTangents(JB, pB.outTangent.scale(oB), YB, lB.inTangent.scale(oB), kB) : this.quaternionInterpolateFunction(JB, YB, kB);
            switch (TB.Py) {
              case mB.ANIMATIONLOOPMODE_CYCLE:
              case mB.ANIMATIONLOOPMODE_CONSTANT:
              case mB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case mB.ANIMATIONLOOPMODE_RELATIVE:
              case mB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.addInPlace((TB.offsetValue || LB).scale(TB.repeatCount))
            }
            return BB
          }
          case mB.ANIMATIONTYPE_VECTOR3: {
            const BB = gB ? this.vector3InterpolateFunctionWithTangents(JB, pB.outTangent.scale(oB), YB, lB.inTangent.scale(oB), kB) : this.vector3InterpolateFunction(JB, YB, kB);
            switch (TB.Py) {
              case mB.ANIMATIONLOOPMODE_CYCLE:
              case mB.ANIMATIONLOOPMODE_CONSTANT:
              case mB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case mB.ANIMATIONLOOPMODE_RELATIVE:
              case mB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((TB.offsetValue || OB).scale(TB.repeatCount))
            }
            break
          }
          case mB.ANIMATIONTYPE_VECTOR2: {
            const BB = gB ? this.vector2InterpolateFunctionWithTangents(JB, pB.outTangent.scale(oB), YB, lB.inTangent.scale(oB), kB) : this.vector2InterpolateFunction(JB, YB, kB);
            switch (TB.Py) {
              case mB.ANIMATIONLOOPMODE_CYCLE:
              case mB.ANIMATIONLOOPMODE_CONSTANT:
              case mB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case mB.ANIMATIONLOOPMODE_RELATIVE:
              case mB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((TB.offsetValue || DB).scale(TB.repeatCount))
            }
            break
          }
          case mB.ANIMATIONTYPE_SIZE:
            switch (TB.Py) {
              case mB.ANIMATIONLOOPMODE_CYCLE:
              case mB.ANIMATIONLOOPMODE_CONSTANT:
              case mB.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(JB, YB, kB);
              case mB.ANIMATIONLOOPMODE_RELATIVE:
              case mB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(JB, YB, kB).add((TB.offsetValue || uB).scale(TB.repeatCount))
            }
            break;
          case mB.ANIMATIONTYPE_COLOR3: {
            const BB = gB ? this.color3InterpolateFunctionWithTangents(JB, pB.outTangent.scale(oB), YB, lB.inTangent.scale(oB), kB) : this.color3InterpolateFunction(JB, YB, kB);
            switch (TB.Py) {
              case mB.ANIMATIONLOOPMODE_CYCLE:
              case mB.ANIMATIONLOOPMODE_CONSTANT:
              case mB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case mB.ANIMATIONLOOPMODE_RELATIVE:
              case mB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((TB.offsetValue || HB).scale(TB.repeatCount))
            }
            break
          }
          case mB.ANIMATIONTYPE_COLOR4: {
            const BB = gB ? this.color4InterpolateFunctionWithTangents(JB, pB.outTangent.scale(oB), YB, lB.inTangent.scale(oB), kB) : this.color4InterpolateFunction(JB, YB, kB);
            switch (TB.Py) {
              case mB.ANIMATIONLOOPMODE_CYCLE:
              case mB.ANIMATIONLOOPMODE_CONSTANT:
              case mB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case mB.ANIMATIONLOOPMODE_RELATIVE:
              case mB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((TB.offsetValue || EB).scale(TB.repeatCount))
            }
            break
          }
          case mB.ANIMATIONTYPE_MATRIX:
            switch (TB.Py) {
              case mB.ANIMATIONLOOPMODE_CYCLE:
              case mB.ANIMATIONLOOPMODE_CONSTANT:
              case mB.ANIMATIONLOOPMODE_YOYO:
                return mB.AllowMatricesInterpolation ? this.matrixInterpolateFunction(JB, YB, kB, TB.workValue) : JB;
              case mB.ANIMATIONLOOPMODE_RELATIVE:
              case mB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return JB
            }
        }
        return 0
      }
      matrixInterpolateFunction(BB, TB, dB, yB) {
        return mB.AllowMatrixDecomposeForInterpolation ? yB ? (VB.b.DecomposeLerpToRef(BB, TB, dB, yB), yB) : VB.b.DecomposeLerp(BB, TB, dB) : yB ? (VB.b.LerpToRef(BB, TB, dB, yB), yB) : VB.b.Lerp(BB, TB, dB)
      }
      clone() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const TB = new mB(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.Py);
        if (TB.enableBlending = this.enableBlending, TB.blendingSpeed = this.blendingSpeed, this._keys && TB.setKeys(this._keys, !1, BB), this._ranges) {
          TB._ranges = {};
          for (const BB in this._ranges) {
            const dB = this._ranges[BB];
            dB && (TB._ranges[BB] = dB.clone())
          }
        }
        return TB
      }
      setKeys(BB) {
        let TB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = BB;
        else if (this._keys = BB.slice(0), TB)
          for (let dB = 0; dB < this._keys.length; dB++) {
            const BB = this._keys[dB];
            this._keys[dB] = {
              frame: BB.frame,
              value: BB.value.clone ? BB.value.clone() : BB.value,
              inTangent: BB.inTangent && BB.inTangent.clone ? BB.inTangent.clone() : BB.inTangent,
              outTangent: BB.outTangent && BB.outTangent.clone ? BB.outTangent.clone() : BB.outTangent,
              interpolation: BB.interpolation,
              lockedTangent: BB.lockedTangent,
              easingFunction: BB.easingFunction
            }
          }
      }
      createKeyForFrame(BB) {
        vB.key = 0;
        const TB = this._interpolate(BB, vB, !0);
        if (!TB) return this._keys[vB.key].frame === BB ? vB.key : vB.key + 1;
        const dB = {
          frame: BB,
          value: TB.clone ? TB.clone() : TB
        };
        return this._keys.splice(vB.key + 1, 0, dB), vB.key + 1
      }
      serialize() {
        const BB = {};
        BB.name = this.name, BB.property = this.targetProperty, BB.framePerSecond = this.framePerSecond, BB.dataType = this.dataType, BB.loopBehavior = this.Py, BB.enableBlending = this.enableBlending, BB.blendingSpeed = this.blendingSpeed;
        const TB = this.dataType;
        BB.keys = [];
        const dB = this.getKeys();
        for (let VB = 0; VB < dB.length; VB++) {
          const yB = dB[VB],
            pB = {};
          switch (pB.frame = yB.frame, TB) {
            case mB.ANIMATIONTYPE_FLOAT:
              pB.values = [yB.value], void 0 !== yB.inTangent && pB.values.push(yB.inTangent), void 0 !== yB.outTangent && (void 0 === yB.inTangent && pB.values.push(void 0), pB.values.push(yB.outTangent)), void 0 !== yB.interpolation && (void 0 === yB.inTangent && pB.values.push(void 0), void 0 === yB.outTangent && pB.values.push(void 0), pB.values.push(yB.interpolation));
              break;
            case mB.ANIMATIONTYPE_QUATERNION:
            case mB.ANIMATIONTYPE_MATRIX:
            case mB.ANIMATIONTYPE_VECTOR3:
            case mB.ANIMATIONTYPE_COLOR3:
            case mB.ANIMATIONTYPE_COLOR4:
              pB.values = yB.value.FVB(), void 0 != yB.inTangent && pB.values.push(yB.inTangent.FVB()), void 0 != yB.outTangent && (void 0 === yB.inTangent && pB.values.push(void 0), pB.values.push(yB.outTangent.FVB())), void 0 !== yB.interpolation && (void 0 === yB.inTangent && pB.values.push(void 0), void 0 === yB.outTangent && pB.values.push(void 0), pB.values.push(yB.interpolation))
          }
          BB.keys.push(pB)
        }
        BB.ek = [];
        for (const VB in this._ranges) {
          const TB = this._ranges[VB];
          if (!TB) continue;
          const dB = {};
          dB.name = VB, dB.from = TB.from, dB.to = TB.to, BB.ek.push(dB)
        }
        return BB
      }
      static _UniversalLerp(BB, TB, dB) {
        const VB = BB.constructor;
        return VB.Lerp ? VB.Lerp(BB, TB, dB) : VB.Slerp ? VB.Slerp(BB, TB, dB) : BB.toFixed ? BB * (1 - dB) + dB * TB : TB
      }
    }

    function iB(BB, TB, dB) {
      let yB;
      yB = "object" === typeof TB ? TB : {
        referenceFrame: TB ?? 0,
        range: dB,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let pB = BB;
      yB.cloneOriginalAnimation && (pB = BB.clone(), pB.name = yB.clonedAnimationName || pB.name);
      const lB = pB.getKeys();
      if (!lB.length) return pB;
      const JB = yB.referenceFrame && yB.referenceFrame >= 0 ? yB.referenceFrame : 0;
      let YB = 0;
      const gB = lB[0];
      let oB = lB.length - 1;
      const kB = lB[oB],
        LB = {
          referenceValue: gB.value,
          referencePosition: VB.j.RD[0],
          referenceQuaternion: VB.j.Quaternion[0],
          referenceScaling: VB.j.RD[1],
          keyPosition: VB.j.RD[2],
          keyQuaternion: VB.j.Quaternion[1],
          keyScaling: VB.j.RD[3]
        };
      let OB = gB.frame,
        DB = kB.frame;
      if (yB.range) {
        const BB = pB.getRange(yB.range);
        BB && (OB = BB.from, DB = BB.to)
      } else OB = yB.fromFrame ?? OB, DB = yB.toFrame ?? DB;
      OB !== gB.frame && (YB = pB.createKeyForFrame(OB)), DB !== kB.frame && (oB = pB.createKeyForFrame(DB));
      const uB = pB.getKeys();
      if (1 === uB.length) {
        const BB = pB._getKeyValue(uB[0].value);
        LB.referenceValue = BB.clone ? BB.clone() : BB
      } else if (JB <= gB.frame) {
        const BB = pB._getKeyValue(gB.value);
        LB.referenceValue = BB.clone ? BB.clone() : BB
      } else if (JB >= kB.frame) {
        const BB = pB._getKeyValue(kB.value);
        LB.referenceValue = BB.clone ? BB.clone() : BB
      } else {
        vB.key = 0;
        const BB = pB._interpolate(JB, vB);
        LB.referenceValue = BB.clone ? BB.clone() : BB
      }
      pB.dataType === mB.ANIMATIONTYPE_QUATERNION ? LB.referenceValue.normalize().conjugateInPlace() : pB.dataType === mB.ANIMATIONTYPE_MATRIX && (LB.referenceValue.decompose(LB.referenceScaling, LB.referenceQuaternion, LB.referencePosition), LB.referenceQuaternion.normalize().conjugateInPlace());
      let HB = Number.MAX_VALUE;
      const EB = yB.clipKeys ? [] : null;
      for (let vB = YB; vB <= oB; vB++) {
        let BB = uB[vB];
        if ((EB || yB.cloneOriginalAnimation) && (BB = {
            frame: BB.frame,
            value: BB.value.clone ? BB.value.clone() : BB.value,
            inTangent: BB.inTangent,
            outTangent: BB.outTangent,
            interpolation: BB.interpolation,
            lockedTangent: BB.lockedTangent,
            easingFunction: BB.easingFunction
          }, EB && (HB === Number.MAX_VALUE && (HB = BB.frame), BB.frame -= HB, EB.push(BB))), !vB || pB.dataType === mB.ANIMATIONTYPE_FLOAT || BB.value !== gB.value) switch (pB.dataType) {
          case mB.ANIMATIONTYPE_MATRIX:
            BB.value.decompose(LB.keyScaling, LB.keyQuaternion, LB.keyPosition), LB.keyPosition.qVB(LB.referencePosition), LB.keyScaling.divideInPlace(LB.referenceScaling), LB.referenceQuaternion.multiplyToRef(LB.keyQuaternion, LB.keyQuaternion), VB.b.ComposeToRef(LB.keyScaling, LB.keyQuaternion, LB.keyPosition, BB.value);
            break;
          case mB.ANIMATIONTYPE_QUATERNION:
            LB.referenceValue.multiplyToRef(BB.value, BB.value);
            break;
          case mB.ANIMATIONTYPE_VECTOR2:
          case mB.ANIMATIONTYPE_VECTOR3:
          case mB.ANIMATIONTYPE_COLOR3:
          case mB.ANIMATIONTYPE_COLOR4:
            BB.value.subtractToRef(LB.referenceValue, BB.value);
            break;
          case mB.ANIMATIONTYPE_SIZE:
            BB.value.width -= LB.referenceValue.width, BB.value.height -= LB.referenceValue.height;
            break;
          default:
            BB.value -= LB.referenceValue
        }
      }
      return EB && pB.setKeys(EB, !0), pB
    }

    function NB(BB, TB, dB, VB) {
      const yB = new mB(BB + "Animation", BB, dB, TB, mB.ANIMATIONLOOPMODE_CONSTANT);
      return yB.setEasingFunction(VB), yB
    }

    function tB(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB) {
      const kB = mB._PrepareAnimation(BB, dB, VB, yB, pB, lB, JB, YB);
      return kB ? (TB.jU && (oB = TB.jU()), oB ? oB.beginDirectAnimation(TB, [kB], 0, yB, kB.Py !== mB.ANIMATIONLOOPMODE_CONSTANT, 1, gB) : null) : null
    }

    function fB(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB) {
      const kB = mB._PrepareAnimation(BB, VB, yB, pB, lB, JB, YB, gB);
      if (!kB) return null;
      return TB.jU().beginDirectHierarchyAnimation(TB, dB, [kB], 0, pB, 1 === kB.Py, 1, oB)
    }

    function sB(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB) {
      const oB = mB._PrepareAnimation(BB, dB, VB, yB, pB, lB, JB, YB);
      return oB ? (TB.animations.push(oB), TB.jU().beginAnimation(TB, 0, yB, 1 === oB.Py, 1, gB)) : null
    }

    function MB(BB, TB, dB, VB, yB, pB, lB) {
      let JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        YB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        gB = arguments.length > 9 ? arguments[9] : void 0;
      if (lB <= 0) return dB[BB] = TB, JB && JB(), null;
      const oB = yB * (lB / 1e3);
      pB.setKeys(gB ?? [{
        frame: 0,
        value: dB[BB].clone ? dB[BB].clone() : dB[BB]
      }, {
        frame: oB,
        value: TB
      }]), dB.animations || (dB.animations = []), dB.animations.push(pB);
      return VB.beginAnimation(dB, 0, oB, !1, 1, JB ?? void 0, void 0, YB)
    }

    function zB(BB, TB) {
      oB.c.AppendSerializedAnimations(BB, TB)
    }

    function wB(BB) {
      const TB = new mB(BB.name, BB.property, BB.framePerSecond, BB.dataType, BB.loopBehavior),
        dB = BB.dataType,
        pB = [];
      let lB, JB;
      for (BB.enableBlending && (TB.enableBlending = BB.enableBlending), BB.blendingSpeed && (TB.blendingSpeed = BB.blendingSpeed), JB = 0; JB < BB.keys.length; JB++) {
        const TB = BB.keys[JB];
        let YB, gB, oB;
        switch (dB) {
          case mB.ANIMATIONTYPE_FLOAT:
            lB = TB.values[0], TB.values.length >= 2 && (YB = TB.values[1]), TB.values.length >= 3 && (gB = TB.values[2]), TB.values.length >= 4 && (oB = TB.values[3]);
            break;
          case mB.ANIMATIONTYPE_QUATERNION:
            if (lB = VB.f.FromArray(TB.values), TB.values.length >= 8) {
              const BB = VB.f.FromArray(TB.values.slice(4, 8));
              BB.equals(VB.f.Zero()) || (YB = BB)
            }
            if (TB.values.length >= 12) {
              const BB = VB.f.FromArray(TB.values.slice(8, 12));
              BB.equals(VB.f.Zero()) || (gB = BB)
            }
            TB.values.length >= 13 && (oB = TB.values[12]);
            break;
          case mB.ANIMATIONTYPE_MATRIX:
            lB = VB.b.FromArray(TB.values), TB.values.length >= 17 && (oB = TB.values[16]);
            break;
          case mB.ANIMATIONTYPE_COLOR3:
            lB = yB.c.FromArray(TB.values), TB.values[3] && (YB = yB.c.FromArray(TB.values[3])), TB.values[4] && (gB = yB.c.FromArray(TB.values[4])), TB.values[5] && (oB = TB.values[5]);
            break;
          case mB.ANIMATIONTYPE_COLOR4:
            lB = yB.d.FromArray(TB.values), TB.values[4] && (YB = yB.d.FromArray(TB.values[4])), TB.values[5] && (gB = yB.d.FromArray(TB.values[5])), TB.values[6] && (oB = TB.values[6]);
            break;
          case mB.ANIMATIONTYPE_VECTOR3:
          default:
            lB = VB.p.FromArray(TB.values), TB.values[3] && (YB = VB.p.FromArray(TB.values[3])), TB.values[4] && (gB = VB.p.FromArray(TB.values[4])), TB.values[5] && (oB = TB.values[5])
        }
        const kB = {};
        kB.frame = TB.frame, kB.value = lB, void 0 != YB && (kB.inTangent = YB), void 0 != gB && (kB.outTangent = gB), void 0 != oB && (kB.interpolation = oB), pB.push(kB)
      }
      if (TB.setKeys(pB), BB.ek)
        for (JB = 0; JB < BB.ek.length; JB++) lB = BB.ek[JB], TB.createRange(lB.name, lB.from, lB.to);
      return TB
    }
    async function UB(BB, TB) {
      return await new Promise(((dB, VB) => {
        const yB = new gB.c;
        yB.addEventListener("readystatechange", (() => {
          if (4 == yB.readyState)
            if (200 == yB.status) {
              let TB = JSON.parse(yB.responseText);
              if (TB.animations && (TB = TB.animations), TB.length) {
                const BB = [];
                for (const dB of TB) BB.push(wB(dB));
                dB(BB)
              } else {
                const VB = wB(TB);
                BB && (VB.name = BB), dB(VB)
              }
            } else VB("Unable to load the animation")
        })), yB.open("GET", TB), yB.send()
      }))
    }
    async function FB(BB) {
      const TB = this?.SnippetUrl ?? mB.SnippetUrl;
      return await new Promise(((dB, VB) => {
        const yB = new gB.c;
        yB.addEventListener("readystatechange", (() => {
          if (4 == yB.readyState)
            if (200 == yB.status) {
              const TB = JSON.parse(JSON.parse(yB.responseText).jsonPayload);
              if (TB.animations) {
                const VB = JSON.parse(TB.animations),
                  yB = [];
                for (const TB of VB.animations) {
                  const dB = wB(TB);
                  dB.snippetId = BB, yB.push(dB)
                }
                dB(yB)
              } else {
                const VB = wB(JSON.parse(TB.animation));
                VB.snippetId = BB, dB(VB)
              }
            } else VB("Unable to load the snippet " + BB)
        })), yB.open("GET", TB + "/" + BB.replace(/#/g, "/")), yB.send()
      }))
    }
    mB._UniqueIdGenerator = 0, mB.AllowMatricesInterpolation = !1, mB.AllowMatrixDecomposeForInterpolation = !0, mB.InheritOriginalValueFromActiveAnimations = !1, mB.SnippetUrl = "https://snippet.babylonjs.com", mB.ANIMATIONTYPE_FLOAT = 0, mB.ANIMATIONTYPE_VECTOR3 = 1, mB.ANIMATIONTYPE_QUATERNION = 2, mB.ANIMATIONTYPE_MATRIX = 3, mB.ANIMATIONTYPE_COLOR3 = 4, mB.ANIMATIONTYPE_COLOR4 = 7, mB.ANIMATIONTYPE_VECTOR2 = 5, mB.ANIMATIONTYPE_SIZE = 6, mB.ANIMATIONLOOPMODE_RELATIVE = 0, mB.ANIMATIONLOOPMODE_CYCLE = 1, mB.ANIMATIONLOOPMODE_CONSTANT = 2, mB.ANIMATIONLOOPMODE_YOYO = 4, mB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const KB = FB;
    let rB = !1;

    function IB() {
      rB || (rB = !0, mB.Parse = wB, mB.ParseFromFileAsync = UB, mB.ParseFromSnippetAsync = FB, mB.CreateFromSnippetAsync = KB, mB.CreateAnimation = NB, mB.CreateAndStartAnimation = tB, mB.CreateAndStartHierarchyAnimation = fB, mB.CreateMergeAndStartAnimation = sB, mB.MakeAnimationAdditive = iB, mB.TransitionTo = MB, mB.AppendSerializedAnimations = zB, (0, kB.g)("BABYLON.Animation", mB), JB.e._AnimationRangeFactory = (BB, TB, dB) => new lB.e(BB, TB, dB))
    }
  },
  39947: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB
    });
    class VB {
      constructor(BB, TB, dB) {
        this.name = BB, this.from = TB, this.to = dB
      }
      clone() {
        return new VB(this.name, this.from, this.to)
      }
    }
  },
  39994: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB.d,
      f: () => VB.m
    });
    var VB = dB(38897);
    (0, VB.h)()
  },
  39976: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB.f
    });
    var VB = dB(39218);
    (0, VB.d)()
  },
  39955: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => VB.d
    });
    var VB = dB(39214);
    (0, VB.f)()
  },
  40003: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB.e
    });
    var VB = dB(39143);
    (0, VB.f)()
  },
  39949: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB.f
    });
    var VB = dB(39187);
    (0, VB.d)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);