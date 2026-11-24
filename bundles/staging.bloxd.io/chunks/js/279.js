export const id = 279;
export const ids = [279];
export const modules = {
  41191: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => LB,
      h: () => YB,
      i: () => yB,
      k: () => kB,
      m: () => rB,
      o: () => mB,
      q: () => JB,
      t: () => sB
    });
    var QB = zB(37171),
      nB = zB(37379),
      dB = zB(37208),
      IB = zB(41197),
      NB = zB(40306),
      uB = zB(40081),
      UB = zB(40110),
      aB = zB(40086),
      pB = zB(37222);
    const rB = Object.freeze(new QB.d(0, 0, 0, 0)),
      sB = Object.freeze(QB.m.Zero()),
      JB = Object.freeze(QB.i.Zero()),
      mB = Object.freeze(uB.d.Zero()),
      yB = Object.freeze(nB.d.Black()),
      kB = Object.freeze(new nB.g(0, 0, 0, 0)),
      GB = {
        key: 0,
        repeatCount: 0,
        cQ: 2
      };
    class LB {
      static _PrepareAnimation(BB, jB, zB, dB, IB, NB, UB, aB) {
        let pB;
        if (!isNaN(parseFloat(IB)) && isFinite(IB) ? pB = LB.ANIMATIONTYPE_FLOAT : IB instanceof QB.d ? pB = LB.ANIMATIONTYPE_QUATERNION : IB instanceof QB.m ? pB = LB.ANIMATIONTYPE_VECTOR3 : IB instanceof QB.i ? pB = LB.ANIMATIONTYPE_VECTOR2 : IB instanceof nB.d ? pB = LB.ANIMATIONTYPE_COLOR3 : IB instanceof nB.g ? pB = LB.ANIMATIONTYPE_COLOR4 : IB instanceof uB.d && (pB = LB.ANIMATIONTYPE_SIZE), void 0 == pB) return null;
        const rB = new LB(BB, jB, zB, pB, UB),
          sB = [{
            frame: 0,
            value: IB
          }, {
            frame: dB,
            value: NB
          }];
        return rB.setKeys(sB), void 0 !== aB && rB.setEasingFunction(aB), rB
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const BB of this._runtimeAnimations)
          if (!BB.isStopped()) return !0;
        return !1
      }
      constructor(BB, jB, zB, QB, nB, dB) {
        this.name = BB, this.targetProperty = jB, this.framePerSecond = zB, this.dataType = QB, this.cQ = nB, this.enableBlending = dB, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = jB.split("."), this.dataType = QB, this.cQ = void 0 === nB ? LB.ANIMATIONLOOPMODE_CYCLE : nB, this.uniqueId = LB._UniqueIdGenerator++
      }
      toString(BB) {
        let jB = "Name: " + this.name + ", property: " + this.targetProperty;
        if (jB += ", datatype: " + ["Float", "KJ", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], jB += ", nKeys: " + (this._keys ? this._keys.length : "none"), jB += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), BB) {
          jB += ", Ranges: {";
          let BB = !0;
          for (const zB in this._ranges) BB || (jB += ", "), BB = !1, jB += zB;
          jB += "}"
        }
        return jB
      }
      addEvent(BB) {
        this._events.push(BB), this._events.sort(((BB, jB) => BB.frame - jB.frame))
      }
      removeEvents(BB) {
        for (let jB = 0; jB < this._events.length; jB++) this._events[jB].frame === BB && (this._events.splice(jB, 1), jB--)
      }
      getEvents() {
        return this._events
      }
      createRange(BB, jB, zB) {
        this._ranges[BB] || (this._ranges[BB] = new IB.b(BB, jB, zB))
      }
      deleteRange(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const zB = this._ranges[BB];
        if (zB) {
          if (jB) {
            const BB = zB.from,
              jB = zB.to;
            for (let zB = this._keys.length - 1; zB >= 0; zB--) this._keys[zB].frame >= BB && this._keys[zB].frame <= jB && this._keys.splice(zB, 1)
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
        for (let jB = 0, zB = this._keys.length; jB < zB; jB++) BB < this._keys[jB].frame && (BB = this._keys[jB].frame);
        return BB
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(BB) {
        this._easingFunction = BB
      }
      floatInterpolateFunction(BB, jB, zB) {
        return (0, dB.Lerp)(BB, jB, zB)
      }
      floatInterpolateFunctionWithTangents(BB, jB, zB, QB, nB) {
        return (0, dB.Hermite)(BB, jB, zB, QB, nB)
      }
      quaternionInterpolateFunction(BB, jB, zB) {
        return QB.d.Slerp(BB, jB, zB)
      }
      quaternionInterpolateFunctionWithTangents(BB, jB, zB, nB, dB) {
        return QB.d.Hermite(BB, jB, zB, nB, dB).normalize()
      }
      vector3InterpolateFunction(BB, jB, zB) {
        return QB.m.Lerp(BB, jB, zB)
      }
      vector3InterpolateFunctionWithTangents(BB, jB, zB, nB, dB) {
        return QB.m.Hermite(BB, jB, zB, nB, dB)
      }
      vector2InterpolateFunction(BB, jB, zB) {
        return QB.i.Lerp(BB, jB, zB)
      }
      vector2InterpolateFunctionWithTangents(BB, jB, zB, nB, dB) {
        return QB.i.Hermite(BB, jB, zB, nB, dB)
      }
      sizeInterpolateFunction(BB, jB, zB) {
        return uB.d.Lerp(BB, jB, zB)
      }
      color3InterpolateFunction(BB, jB, zB) {
        return nB.d.Lerp(BB, jB, zB)
      }
      color3InterpolateFunctionWithTangents(BB, jB, zB, QB, dB) {
        return nB.d.Hermite(BB, jB, zB, QB, dB)
      }
      color4InterpolateFunction(BB, jB, zB) {
        return nB.g.Lerp(BB, jB, zB)
      }
      color4InterpolateFunctionWithTangents(BB, jB, zB, QB, dB) {
        return nB.g.Hermite(BB, jB, zB, QB, dB)
      }
      _getKeyValue(BB) {
        return "function" === typeof BB ? BB() : BB
      }
      evaluate(BB) {
        return GB.key = 0, this._interpolate(BB, GB)
      }
      _interpolate(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (jB.cQ === LB.ANIMATIONLOOPMODE_CONSTANT && jB.repeatCount > 0) return jB.highLimitValue.clone ? jB.highLimitValue.clone() : jB.highLimitValue;
        const QB = this._keys;
        let nB;
        if (this._coreAnimation) nB = this._coreAnimation._key;
        else {
          const dB = QB.length;
          for (nB = jB.key; nB >= 0 && BB < QB[nB].frame;) --nB;
          for (; nB + 1 <= dB - 1 && BB >= QB[nB + 1].frame;) ++nB;
          if (jB.key = nB, nB < 0) return zB ? void 0 : this._getKeyValue(QB[0].value);
          if (nB + 1 > dB - 1) return zB ? void 0 : this._getKeyValue(QB[dB - 1].value);
          this._key = nB
        }
        const dB = QB[nB],
          IB = QB[nB + 1];
        if (zB && (BB === dB.frame || BB === IB.frame)) return;
        const NB = this._getKeyValue(dB.value),
          uB = this._getKeyValue(IB.value);
        if (1 === dB.interpolation) return IB.frame > BB ? NB : uB;
        const UB = void 0 !== dB.outTangent && void 0 !== IB.inTangent,
          aB = IB.frame - dB.frame;
        let pB = (BB - dB.frame) / aB;
        const GB = dB.easingFunction || this.getEasingFunction();
        switch (GB && (pB = GB.ease(pB)), this.dataType) {
          case LB.ANIMATIONTYPE_FLOAT: {
            const BB = UB ? this.floatInterpolateFunctionWithTangents(NB, dB.outTangent * aB, uB, IB.inTangent * aB, pB) : this.floatInterpolateFunction(NB, uB, pB);
            switch (jB.cQ) {
              case LB.ANIMATIONLOOPMODE_CYCLE:
              case LB.ANIMATIONLOOPMODE_CONSTANT:
              case LB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case LB.ANIMATIONLOOPMODE_RELATIVE:
              case LB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (jB.offsetValue ?? 0) * jB.repeatCount + BB
            }
            break
          }
          case LB.ANIMATIONTYPE_QUATERNION: {
            const BB = UB ? this.quaternionInterpolateFunctionWithTangents(NB, dB.outTangent.scale(aB), uB, IB.inTangent.scale(aB), pB) : this.quaternionInterpolateFunction(NB, uB, pB);
            switch (jB.cQ) {
              case LB.ANIMATIONLOOPMODE_CYCLE:
              case LB.ANIMATIONLOOPMODE_CONSTANT:
              case LB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case LB.ANIMATIONLOOPMODE_RELATIVE:
              case LB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.addInPlace((jB.offsetValue || rB).scale(jB.repeatCount))
            }
            return BB
          }
          case LB.ANIMATIONTYPE_VECTOR3: {
            const BB = UB ? this.vector3InterpolateFunctionWithTangents(NB, dB.outTangent.scale(aB), uB, IB.inTangent.scale(aB), pB) : this.vector3InterpolateFunction(NB, uB, pB);
            switch (jB.cQ) {
              case LB.ANIMATIONLOOPMODE_CYCLE:
              case LB.ANIMATIONLOOPMODE_CONSTANT:
              case LB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case LB.ANIMATIONLOOPMODE_RELATIVE:
              case LB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((jB.offsetValue || sB).scale(jB.repeatCount))
            }
            break
          }
          case LB.ANIMATIONTYPE_VECTOR2: {
            const BB = UB ? this.vector2InterpolateFunctionWithTangents(NB, dB.outTangent.scale(aB), uB, IB.inTangent.scale(aB), pB) : this.vector2InterpolateFunction(NB, uB, pB);
            switch (jB.cQ) {
              case LB.ANIMATIONLOOPMODE_CYCLE:
              case LB.ANIMATIONLOOPMODE_CONSTANT:
              case LB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case LB.ANIMATIONLOOPMODE_RELATIVE:
              case LB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((jB.offsetValue || JB).scale(jB.repeatCount))
            }
            break
          }
          case LB.ANIMATIONTYPE_SIZE:
            switch (jB.cQ) {
              case LB.ANIMATIONLOOPMODE_CYCLE:
              case LB.ANIMATIONLOOPMODE_CONSTANT:
              case LB.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(NB, uB, pB);
              case LB.ANIMATIONLOOPMODE_RELATIVE:
              case LB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(NB, uB, pB).add((jB.offsetValue || mB).scale(jB.repeatCount))
            }
            break;
          case LB.ANIMATIONTYPE_COLOR3: {
            const BB = UB ? this.color3InterpolateFunctionWithTangents(NB, dB.outTangent.scale(aB), uB, IB.inTangent.scale(aB), pB) : this.color3InterpolateFunction(NB, uB, pB);
            switch (jB.cQ) {
              case LB.ANIMATIONLOOPMODE_CYCLE:
              case LB.ANIMATIONLOOPMODE_CONSTANT:
              case LB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case LB.ANIMATIONLOOPMODE_RELATIVE:
              case LB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((jB.offsetValue || yB).scale(jB.repeatCount))
            }
            break
          }
          case LB.ANIMATIONTYPE_COLOR4: {
            const BB = UB ? this.color4InterpolateFunctionWithTangents(NB, dB.outTangent.scale(aB), uB, IB.inTangent.scale(aB), pB) : this.color4InterpolateFunction(NB, uB, pB);
            switch (jB.cQ) {
              case LB.ANIMATIONLOOPMODE_CYCLE:
              case LB.ANIMATIONLOOPMODE_CONSTANT:
              case LB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case LB.ANIMATIONLOOPMODE_RELATIVE:
              case LB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((jB.offsetValue || kB).scale(jB.repeatCount))
            }
            break
          }
          case LB.ANIMATIONTYPE_MATRIX:
            switch (jB.cQ) {
              case LB.ANIMATIONLOOPMODE_CYCLE:
              case LB.ANIMATIONLOOPMODE_CONSTANT:
              case LB.ANIMATIONLOOPMODE_YOYO:
                return LB.AllowMatricesInterpolation ? this.matrixInterpolateFunction(NB, uB, pB, jB.workValue) : NB;
              case LB.ANIMATIONLOOPMODE_RELATIVE:
              case LB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return NB
            }
        }
        return 0
      }
      matrixInterpolateFunction(BB, jB, zB, nB) {
        return LB.AllowMatrixDecomposeForInterpolation ? nB ? (QB.c.DecomposeLerpToRef(BB, jB, zB, nB), nB) : QB.c.DecomposeLerp(BB, jB, zB) : nB ? (QB.c.LerpToRef(BB, jB, zB, nB), nB) : QB.c.Lerp(BB, jB, zB)
      }
      clone() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const jB = new LB(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.cQ);
        if (jB.enableBlending = this.enableBlending, jB.blendingSpeed = this.blendingSpeed, this._keys && jB.setKeys(this._keys, !1, BB), this._ranges) {
          jB._ranges = {};
          for (const BB in this._ranges) {
            const zB = this._ranges[BB];
            zB && (jB._ranges[BB] = zB.clone())
          }
        }
        return jB
      }
      setKeys(BB) {
        let jB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = BB;
        else if (this._keys = BB.slice(0), jB)
          for (let zB = 0; zB < this._keys.length; zB++) {
            const BB = this._keys[zB];
            this._keys[zB] = {
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
        GB.key = 0;
        const jB = this._interpolate(BB, GB, !0);
        if (!jB) return this._keys[GB.key].frame === BB ? GB.key : GB.key + 1;
        const zB = {
          frame: BB,
          value: jB.clone ? jB.clone() : jB
        };
        return this._keys.splice(GB.key + 1, 0, zB), GB.key + 1
      }
      serialize() {
        const BB = {};
        BB.name = this.name, BB.property = this.targetProperty, BB.framePerSecond = this.framePerSecond, BB.dataType = this.dataType, BB.loopBehavior = this.cQ, BB.enableBlending = this.enableBlending, BB.blendingSpeed = this.blendingSpeed;
        const jB = this.dataType;
        BB.keys = [];
        const zB = this.getKeys();
        for (let QB = 0; QB < zB.length; QB++) {
          const nB = zB[QB],
            dB = {};
          switch (dB.frame = nB.frame, jB) {
            case LB.ANIMATIONTYPE_FLOAT:
              dB.values = [nB.value], void 0 !== nB.inTangent && dB.values.push(nB.inTangent), void 0 !== nB.outTangent && (void 0 === nB.inTangent && dB.values.push(void 0), dB.values.push(nB.outTangent)), void 0 !== nB.interpolation && (void 0 === nB.inTangent && dB.values.push(void 0), void 0 === nB.outTangent && dB.values.push(void 0), dB.values.push(nB.interpolation));
              break;
            case LB.ANIMATIONTYPE_QUATERNION:
            case LB.ANIMATIONTYPE_MATRIX:
            case LB.ANIMATIONTYPE_VECTOR3:
            case LB.ANIMATIONTYPE_COLOR3:
            case LB.ANIMATIONTYPE_COLOR4:
              dB.values = nB.value.nQB(), void 0 != nB.inTangent && dB.values.push(nB.inTangent.nQB()), void 0 != nB.outTangent && (void 0 === nB.inTangent && dB.values.push(void 0), dB.values.push(nB.outTangent.nQB())), void 0 !== nB.interpolation && (void 0 === nB.inTangent && dB.values.push(void 0), void 0 === nB.outTangent && dB.values.push(void 0), dB.values.push(nB.interpolation))
          }
          BB.keys.push(dB)
        }
        BB.gy = [];
        for (const QB in this._ranges) {
          const jB = this._ranges[QB];
          if (!jB) continue;
          const zB = {};
          zB.name = QB, zB.from = jB.from, zB.to = jB.to, BB.gy.push(zB)
        }
        return BB
      }
      static _UniversalLerp(BB, jB, zB) {
        const QB = BB.constructor;
        return QB.Lerp ? QB.Lerp(BB, jB, zB) : QB.Slerp ? QB.Slerp(BB, jB, zB) : BB.toFixed ? BB * (1 - zB) + zB * jB : jB
      }
    }

    function gB(BB, jB, zB) {
      let nB;
      nB = "object" === typeof jB ? jB : {
        referenceFrame: jB ?? 0,
        range: zB,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let dB = BB;
      nB.cloneOriginalAnimation && (dB = BB.clone(), dB.name = nB.clonedAnimationName || dB.name);
      const IB = dB.getKeys();
      if (!IB.length) return dB;
      const NB = nB.referenceFrame && nB.referenceFrame >= 0 ? nB.referenceFrame : 0;
      let uB = 0;
      const UB = IB[0];
      let aB = IB.length - 1;
      const pB = IB[aB],
        rB = {
          referenceValue: UB.value,
          referencePosition: QB.h.KJ[0],
          referenceQuaternion: QB.h.Quaternion[0],
          referenceScaling: QB.h.KJ[1],
          keyPosition: QB.h.KJ[2],
          keyQuaternion: QB.h.Quaternion[1],
          keyScaling: QB.h.KJ[3]
        };
      let sB = UB.frame,
        JB = pB.frame;
      if (nB.range) {
        const BB = dB.getRange(nB.range);
        BB && (sB = BB.from, JB = BB.to)
      } else sB = nB.fromFrame ?? sB, JB = nB.toFrame ?? JB;
      sB !== UB.frame && (uB = dB.createKeyForFrame(sB)), JB !== pB.frame && (aB = dB.createKeyForFrame(JB));
      const mB = dB.getKeys();
      if (1 === mB.length) {
        const BB = dB._getKeyValue(mB[0].value);
        rB.referenceValue = BB.clone ? BB.clone() : BB
      } else if (NB <= UB.frame) {
        const BB = dB._getKeyValue(UB.value);
        rB.referenceValue = BB.clone ? BB.clone() : BB
      } else if (NB >= pB.frame) {
        const BB = dB._getKeyValue(pB.value);
        rB.referenceValue = BB.clone ? BB.clone() : BB
      } else {
        GB.key = 0;
        const BB = dB._interpolate(NB, GB);
        rB.referenceValue = BB.clone ? BB.clone() : BB
      }
      dB.dataType === LB.ANIMATIONTYPE_QUATERNION ? rB.referenceValue.normalize().conjugateInPlace() : dB.dataType === LB.ANIMATIONTYPE_MATRIX && (rB.referenceValue.decompose(rB.referenceScaling, rB.referenceQuaternion, rB.referencePosition), rB.referenceQuaternion.normalize().conjugateInPlace());
      let yB = Number.MAX_VALUE;
      const kB = nB.clipKeys ? [] : null;
      for (let GB = uB; GB <= aB; GB++) {
        let BB = mB[GB];
        if ((kB || nB.cloneOriginalAnimation) && (BB = {
            frame: BB.frame,
            value: BB.value.clone ? BB.value.clone() : BB.value,
            inTangent: BB.inTangent,
            outTangent: BB.outTangent,
            interpolation: BB.interpolation,
            lockedTangent: BB.lockedTangent,
            easingFunction: BB.easingFunction
          }, kB && (yB === Number.MAX_VALUE && (yB = BB.frame), BB.frame -= yB, kB.push(BB))), !GB || dB.dataType === LB.ANIMATIONTYPE_FLOAT || BB.value !== UB.value) switch (dB.dataType) {
          case LB.ANIMATIONTYPE_MATRIX:
            BB.value.decompose(rB.keyScaling, rB.keyQuaternion, rB.keyPosition), rB.keyPosition.MQB(rB.referencePosition), rB.keyScaling.divideInPlace(rB.referenceScaling), rB.referenceQuaternion.multiplyToRef(rB.keyQuaternion, rB.keyQuaternion), QB.c.ComposeToRef(rB.keyScaling, rB.keyQuaternion, rB.keyPosition, BB.value);
            break;
          case LB.ANIMATIONTYPE_QUATERNION:
            rB.referenceValue.multiplyToRef(BB.value, BB.value);
            break;
          case LB.ANIMATIONTYPE_VECTOR2:
          case LB.ANIMATIONTYPE_VECTOR3:
          case LB.ANIMATIONTYPE_COLOR3:
          case LB.ANIMATIONTYPE_COLOR4:
            BB.value.subtractToRef(rB.referenceValue, BB.value);
            break;
          case LB.ANIMATIONTYPE_SIZE:
            BB.value.width -= rB.referenceValue.width, BB.value.height -= rB.referenceValue.height;
            break;
          default:
            BB.value -= rB.referenceValue
        }
      }
      return kB && dB.setKeys(kB, !0), dB
    }

    function tB(BB, jB, zB, QB) {
      const nB = new LB(BB + "Animation", BB, zB, jB, LB.ANIMATIONLOOPMODE_CONSTANT);
      return nB.setEasingFunction(QB), nB
    }

    function SB(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB) {
      const pB = LB._PrepareAnimation(BB, zB, QB, nB, dB, IB, NB, uB);
      return pB ? (jB.aY && (aB = jB.aY()), aB ? aB.beginDirectAnimation(jB, [pB], 0, nB, pB.cQ !== LB.ANIMATIONLOOPMODE_CONSTANT, 1, UB) : null) : null
    }

    function MB(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB) {
      const pB = LB._PrepareAnimation(BB, QB, nB, dB, IB, NB, uB, UB);
      if (!pB) return null;
      return jB.aY().beginDirectHierarchyAnimation(jB, zB, [pB], 0, dB, 1 === pB.cQ, 1, aB)
    }

    function EB(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB) {
      const aB = LB._PrepareAnimation(BB, zB, QB, nB, dB, IB, NB, uB);
      return aB ? (jB.animations.push(aB), jB.aY().beginAnimation(jB, 0, nB, 1 === aB.cQ, 1, UB)) : null
    }

    function iB(BB, jB, zB, QB, nB, dB, IB) {
      let NB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        uB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        UB = arguments.length > 9 ? arguments[9] : void 0;
      if (IB <= 0) return zB[BB] = jB, NB && NB(), null;
      const aB = nB * (IB / 1e3);
      dB.setKeys(UB ?? [{
        frame: 0,
        value: zB[BB].clone ? zB[BB].clone() : zB[BB]
      }, {
        frame: aB,
        value: jB
      }]), zB.animations || (zB.animations = []), zB.animations.push(dB);
      return QB.beginAnimation(zB, 0, aB, !1, 1, NB ?? void 0, void 0, uB)
    }

    function qB(BB, jB) {
      aB.b.AppendSerializedAnimations(BB, jB)
    }

    function fB(BB) {
      const jB = new LB(BB.name, BB.property, BB.framePerSecond, BB.dataType, BB.loopBehavior),
        zB = BB.dataType,
        dB = [];
      let IB, NB;
      for (BB.enableBlending && (jB.enableBlending = BB.enableBlending), BB.blendingSpeed && (jB.blendingSpeed = BB.blendingSpeed), NB = 0; NB < BB.keys.length; NB++) {
        const jB = BB.keys[NB];
        let uB, UB, aB;
        switch (zB) {
          case LB.ANIMATIONTYPE_FLOAT:
            IB = jB.values[0], jB.values.length >= 2 && (uB = jB.values[1]), jB.values.length >= 3 && (UB = jB.values[2]), jB.values.length >= 4 && (aB = jB.values[3]);
            break;
          case LB.ANIMATIONTYPE_QUATERNION:
            if (IB = QB.d.FromArray(jB.values), jB.values.length >= 8) {
              const BB = QB.d.FromArray(jB.values.slice(4, 8));
              BB.equals(QB.d.Zero()) || (uB = BB)
            }
            if (jB.values.length >= 12) {
              const BB = QB.d.FromArray(jB.values.slice(8, 12));
              BB.equals(QB.d.Zero()) || (UB = BB)
            }
            jB.values.length >= 13 && (aB = jB.values[12]);
            break;
          case LB.ANIMATIONTYPE_MATRIX:
            IB = QB.c.FromArray(jB.values), jB.values.length >= 17 && (aB = jB.values[16]);
            break;
          case LB.ANIMATIONTYPE_COLOR3:
            IB = nB.d.FromArray(jB.values), jB.values[3] && (uB = nB.d.FromArray(jB.values[3])), jB.values[4] && (UB = nB.d.FromArray(jB.values[4])), jB.values[5] && (aB = jB.values[5]);
            break;
          case LB.ANIMATIONTYPE_COLOR4:
            IB = nB.g.FromArray(jB.values), jB.values[4] && (uB = nB.g.FromArray(jB.values[4])), jB.values[5] && (UB = nB.g.FromArray(jB.values[5])), jB.values[6] && (aB = jB.values[6]);
            break;
          case LB.ANIMATIONTYPE_VECTOR3:
          default:
            IB = QB.m.FromArray(jB.values), jB.values[3] && (uB = QB.m.FromArray(jB.values[3])), jB.values[4] && (UB = QB.m.FromArray(jB.values[4])), jB.values[5] && (aB = jB.values[5])
        }
        const pB = {};
        pB.frame = jB.frame, pB.value = IB, void 0 != uB && (pB.inTangent = uB), void 0 != UB && (pB.outTangent = UB), void 0 != aB && (pB.interpolation = aB), dB.push(pB)
      }
      if (jB.setKeys(dB), BB.gy)
        for (NB = 0; NB < BB.gy.length; NB++) IB = BB.gy[NB], jB.createRange(IB.name, IB.from, IB.to);
      return jB
    }
    async function oB(BB, jB) {
      return await new Promise(((zB, QB) => {
        const nB = new UB.b;
        nB.addEventListener("readystatechange", (() => {
          if (4 == nB.readyState)
            if (200 == nB.status) {
              let jB = JSON.parse(nB.responseText);
              if (jB.animations && (jB = jB.animations), jB.length) {
                const BB = [];
                for (const zB of jB) BB.push(fB(zB));
                zB(BB)
              } else {
                const QB = fB(jB);
                BB && (QB.name = BB), zB(QB)
              }
            } else QB("Unable to load the animation")
        })), nB.open("GET", jB), nB.send()
      }))
    }
    async function HB(BB) {
      const jB = this?.SnippetUrl ?? LB.SnippetUrl;
      return await new Promise(((zB, QB) => {
        const nB = new UB.b;
        nB.addEventListener("readystatechange", (() => {
          if (4 == nB.readyState)
            if (200 == nB.status) {
              const jB = JSON.parse(JSON.parse(nB.responseText).jsonPayload);
              if (jB.animations) {
                const QB = JSON.parse(jB.animations),
                  nB = [];
                for (const jB of QB.animations) {
                  const zB = fB(jB);
                  zB.snippetId = BB, nB.push(zB)
                }
                zB(nB)
              } else {
                const QB = fB(JSON.parse(jB.animation));
                QB.snippetId = BB, zB(QB)
              }
            } else QB("Unable to load the snippet " + BB)
        })), nB.open("GET", jB + "/" + BB.replace(/#/g, "/")), nB.send()
      }))
    }
    LB._UniqueIdGenerator = 0, LB.AllowMatricesInterpolation = !1, LB.AllowMatrixDecomposeForInterpolation = !0, LB.InheritOriginalValueFromActiveAnimations = !1, LB.SnippetUrl = "https://snippet.babylonjs.com", LB.ANIMATIONTYPE_FLOAT = 0, LB.ANIMATIONTYPE_VECTOR3 = 1, LB.ANIMATIONTYPE_QUATERNION = 2, LB.ANIMATIONTYPE_MATRIX = 3, LB.ANIMATIONTYPE_COLOR3 = 4, LB.ANIMATIONTYPE_COLOR4 = 7, LB.ANIMATIONTYPE_VECTOR2 = 5, LB.ANIMATIONTYPE_SIZE = 6, LB.ANIMATIONLOOPMODE_RELATIVE = 0, LB.ANIMATIONLOOPMODE_CYCLE = 1, LB.ANIMATIONLOOPMODE_CONSTANT = 2, LB.ANIMATIONLOOPMODE_YOYO = 4, LB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const DB = HB;
    let FB = !1;

    function YB() {
      FB || (FB = !0, LB.Parse = fB, LB.ParseFromFileAsync = oB, LB.ParseFromSnippetAsync = HB, LB.CreateFromSnippetAsync = DB, LB.CreateAnimation = tB, LB.CreateAndStartAnimation = SB, LB.CreateAndStartHierarchyAnimation = MB, LB.CreateMergeAndStartAnimation = EB, LB.MakeAnimationAdditive = gB, LB.TransitionTo = iB, LB.AppendSerializedAnimations = qB, (0, pB.d)("BABYLON.Animation", LB), NB.c._AnimationRangeFactory = (BB, jB, zB) => new IB.b(BB, jB, zB))
    }
  },
  41197: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB
    });
    class QB {
      constructor(BB, jB, zB) {
        this.name = BB, this.from = jB, this.to = zB
      }
      clone() {
        return new QB(this.name, this.from, this.to)
      }
    }
  },
  41251: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB.e,
      d: () => QB.l
    });
    var QB = zB(40211);
    (0, QB.g)()
  },
  41227: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => QB.i
    });
    var QB = zB(40580);
    (0, QB.e)()
  },
  41208: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB.d
    });
    var QB = zB(40570);
    (0, QB.h)()
  },
  41254: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB.b
    });
    var QB = zB(40504);
    (0, QB.f)()
  },
  41200: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => QB.f
    });
    var QB = zB(40546);
    (0, QB.d)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);