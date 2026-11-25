export const id = 302;
export const ids = [302];
export const modules = {
  42200: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => EM,
      f: () => sM,
      j: () => dM,
      k: () => yM,
      l: () => mM,
      n: () => JM,
      r: () => hM,
      v: () => HM
    });
    var OM = iM(38040),
      SM = iM(38173),
      jM = iM(38074),
      aM = iM(42208),
      PM = iM(41328),
      nM = iM(41115),
      QM = iM(41148),
      zM = iM(41121),
      LM = iM(38085);
    const mM = Object.freeze(new OM.h(0, 0, 0, 0)),
      HM = Object.freeze(OM.q.Zero()),
      hM = Object.freeze(OM.o.Zero()),
      JM = Object.freeze(nM.d.Zero()),
      dM = Object.freeze(SM.d.Black()),
      yM = Object.freeze(new SM.h(0, 0, 0, 0)),
      lM = {
        key: 0,
        repeatCount: 0,
        lS: 2
      };
    class EM {
      static _PrepareAnimation(MM, rM, iM, jM, aM, PM, QM, zM) {
        let LM;
        if (!isNaN(parseFloat(aM)) && isFinite(aM) ? LM = EM.ANIMATIONTYPE_FLOAT : aM instanceof OM.h ? LM = EM.ANIMATIONTYPE_QUATERNION : aM instanceof OM.q ? LM = EM.ANIMATIONTYPE_VECTOR3 : aM instanceof OM.o ? LM = EM.ANIMATIONTYPE_VECTOR2 : aM instanceof SM.d ? LM = EM.ANIMATIONTYPE_COLOR3 : aM instanceof SM.h ? LM = EM.ANIMATIONTYPE_COLOR4 : aM instanceof nM.d && (LM = EM.ANIMATIONTYPE_SIZE), void 0 == LM) return null;
        const mM = new EM(MM, rM, iM, LM, QM),
          HM = [{
            frame: 0,
            value: aM
          }, {
            frame: jM,
            value: PM
          }];
        return mM.setKeys(HM), void 0 !== zM && mM.setEasingFunction(zM), mM
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const MM of this._runtimeAnimations)
          if (!MM.isStopped()) return !0;
        return !1
      }
      constructor(MM, rM, iM, OM, SM, jM) {
        this.name = MM, this.targetProperty = rM, this.framePerSecond = iM, this.dataType = OM, this.lS = SM, this.enableBlending = jM, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = rM.split("."), this.dataType = OM, this.lS = void 0 === SM ? EM.ANIMATIONLOOPMODE_CYCLE : SM, this.uniqueId = EM._UniqueIdGenerator++
      }
      toString(MM) {
        let rM = "Name: " + this.name + ", property: " + this.targetProperty;
        if (rM += ", datatype: " + ["Float", "sh", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], rM += ", nKeys: " + (this._keys ? this._keys.length : "none"), rM += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), MM) {
          rM += ", Ranges: {";
          let MM = !0;
          for (const iM in this._ranges) MM || (rM += ", "), MM = !1, rM += iM;
          rM += "}"
        }
        return rM
      }
      addEvent(MM) {
        this._events.push(MM), this._events.sort(((MM, rM) => MM.frame - rM.frame))
      }
      removeEvents(MM) {
        for (let rM = 0; rM < this._events.length; rM++) this._events[rM].frame === MM && (this._events.splice(rM, 1), rM--)
      }
      getEvents() {
        return this._events
      }
      createRange(MM, rM, iM) {
        this._ranges[MM] || (this._ranges[MM] = new aM.d(MM, rM, iM))
      }
      deleteRange(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const iM = this._ranges[MM];
        if (iM) {
          if (rM) {
            const MM = iM.from,
              rM = iM.to;
            for (let iM = this._keys.length - 1; iM >= 0; iM--) this._keys[iM].frame >= MM && this._keys[iM].frame <= rM && this._keys.splice(iM, 1)
          }
          this._ranges[MM] = null
        }
      }
      getRange(MM) {
        return this._ranges[MM]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let MM = 0;
        for (let rM = 0, iM = this._keys.length; rM < iM; rM++) MM < this._keys[rM].frame && (MM = this._keys[rM].frame);
        return MM
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(MM) {
        this._easingFunction = MM
      }
      floatInterpolateFunction(MM, rM, iM) {
        return (0, jM.Lerp)(MM, rM, iM)
      }
      floatInterpolateFunctionWithTangents(MM, rM, iM, OM, SM) {
        return (0, jM.Hermite)(MM, rM, iM, OM, SM)
      }
      quaternionInterpolateFunction(MM, rM, iM) {
        return OM.h.Slerp(MM, rM, iM)
      }
      quaternionInterpolateFunctionWithTangents(MM, rM, iM, SM, jM) {
        return OM.h.Hermite(MM, rM, iM, SM, jM).normalize()
      }
      vector3InterpolateFunction(MM, rM, iM) {
        return OM.q.Lerp(MM, rM, iM)
      }
      vector3InterpolateFunctionWithTangents(MM, rM, iM, SM, jM) {
        return OM.q.Hermite(MM, rM, iM, SM, jM)
      }
      vector2InterpolateFunction(MM, rM, iM) {
        return OM.o.Lerp(MM, rM, iM)
      }
      vector2InterpolateFunctionWithTangents(MM, rM, iM, SM, jM) {
        return OM.o.Hermite(MM, rM, iM, SM, jM)
      }
      sizeInterpolateFunction(MM, rM, iM) {
        return nM.d.Lerp(MM, rM, iM)
      }
      color3InterpolateFunction(MM, rM, iM) {
        return SM.d.Lerp(MM, rM, iM)
      }
      color3InterpolateFunctionWithTangents(MM, rM, iM, OM, jM) {
        return SM.d.Hermite(MM, rM, iM, OM, jM)
      }
      color4InterpolateFunction(MM, rM, iM) {
        return SM.h.Lerp(MM, rM, iM)
      }
      color4InterpolateFunctionWithTangents(MM, rM, iM, OM, jM) {
        return SM.h.Hermite(MM, rM, iM, OM, jM)
      }
      _getKeyValue(MM) {
        return "function" === typeof MM ? MM() : MM
      }
      evaluate(MM) {
        return lM.key = 0, this._interpolate(MM, lM)
      }
      _interpolate(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (rM.lS === EM.ANIMATIONLOOPMODE_CONSTANT && rM.repeatCount > 0) return rM.highLimitValue.clone ? rM.highLimitValue.clone() : rM.highLimitValue;
        const OM = this._keys;
        let SM;
        if (this._coreAnimation) SM = this._coreAnimation._key;
        else {
          const jM = OM.length;
          for (SM = rM.key; SM >= 0 && MM < OM[SM].frame;) --SM;
          for (; SM + 1 <= jM - 1 && MM >= OM[SM + 1].frame;) ++SM;
          if (rM.key = SM, SM < 0) return iM ? void 0 : this._getKeyValue(OM[0].value);
          if (SM + 1 > jM - 1) return iM ? void 0 : this._getKeyValue(OM[jM - 1].value);
          this._key = SM
        }
        const jM = OM[SM],
          aM = OM[SM + 1];
        if (iM && (MM === jM.frame || MM === aM.frame)) return;
        const PM = this._getKeyValue(jM.value),
          nM = this._getKeyValue(aM.value);
        if (1 === jM.interpolation) return aM.frame > MM ? PM : nM;
        const QM = void 0 !== jM.outTangent && void 0 !== aM.inTangent,
          zM = aM.frame - jM.frame;
        let LM = (MM - jM.frame) / zM;
        const lM = jM.easingFunction || this.getEasingFunction();
        switch (lM && (LM = lM.ease(LM)), this.dataType) {
          case EM.ANIMATIONTYPE_FLOAT: {
            const MM = QM ? this.floatInterpolateFunctionWithTangents(PM, jM.outTangent * zM, nM, aM.inTangent * zM, LM) : this.floatInterpolateFunction(PM, nM, LM);
            switch (rM.lS) {
              case EM.ANIMATIONLOOPMODE_CYCLE:
              case EM.ANIMATIONLOOPMODE_CONSTANT:
              case EM.ANIMATIONLOOPMODE_YOYO:
                return MM;
              case EM.ANIMATIONLOOPMODE_RELATIVE:
              case EM.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (rM.offsetValue ?? 0) * rM.repeatCount + MM
            }
            break
          }
          case EM.ANIMATIONTYPE_QUATERNION: {
            const MM = QM ? this.quaternionInterpolateFunctionWithTangents(PM, jM.outTangent.scale(zM), nM, aM.inTangent.scale(zM), LM) : this.quaternionInterpolateFunction(PM, nM, LM);
            switch (rM.lS) {
              case EM.ANIMATIONLOOPMODE_CYCLE:
              case EM.ANIMATIONLOOPMODE_CONSTANT:
              case EM.ANIMATIONLOOPMODE_YOYO:
                return MM;
              case EM.ANIMATIONLOOPMODE_RELATIVE:
              case EM.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return MM.addInPlace((rM.offsetValue || mM).scale(rM.repeatCount))
            }
            return MM
          }
          case EM.ANIMATIONTYPE_VECTOR3: {
            const MM = QM ? this.vector3InterpolateFunctionWithTangents(PM, jM.outTangent.scale(zM), nM, aM.inTangent.scale(zM), LM) : this.vector3InterpolateFunction(PM, nM, LM);
            switch (rM.lS) {
              case EM.ANIMATIONLOOPMODE_CYCLE:
              case EM.ANIMATIONLOOPMODE_CONSTANT:
              case EM.ANIMATIONLOOPMODE_YOYO:
                return MM;
              case EM.ANIMATIONLOOPMODE_RELATIVE:
              case EM.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return MM.add((rM.offsetValue || HM).scale(rM.repeatCount))
            }
            break
          }
          case EM.ANIMATIONTYPE_VECTOR2: {
            const MM = QM ? this.vector2InterpolateFunctionWithTangents(PM, jM.outTangent.scale(zM), nM, aM.inTangent.scale(zM), LM) : this.vector2InterpolateFunction(PM, nM, LM);
            switch (rM.lS) {
              case EM.ANIMATIONLOOPMODE_CYCLE:
              case EM.ANIMATIONLOOPMODE_CONSTANT:
              case EM.ANIMATIONLOOPMODE_YOYO:
                return MM;
              case EM.ANIMATIONLOOPMODE_RELATIVE:
              case EM.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return MM.add((rM.offsetValue || hM).scale(rM.repeatCount))
            }
            break
          }
          case EM.ANIMATIONTYPE_SIZE:
            switch (rM.lS) {
              case EM.ANIMATIONLOOPMODE_CYCLE:
              case EM.ANIMATIONLOOPMODE_CONSTANT:
              case EM.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(PM, nM, LM);
              case EM.ANIMATIONLOOPMODE_RELATIVE:
              case EM.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(PM, nM, LM).add((rM.offsetValue || JM).scale(rM.repeatCount))
            }
            break;
          case EM.ANIMATIONTYPE_COLOR3: {
            const MM = QM ? this.color3InterpolateFunctionWithTangents(PM, jM.outTangent.scale(zM), nM, aM.inTangent.scale(zM), LM) : this.color3InterpolateFunction(PM, nM, LM);
            switch (rM.lS) {
              case EM.ANIMATIONLOOPMODE_CYCLE:
              case EM.ANIMATIONLOOPMODE_CONSTANT:
              case EM.ANIMATIONLOOPMODE_YOYO:
                return MM;
              case EM.ANIMATIONLOOPMODE_RELATIVE:
              case EM.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return MM.add((rM.offsetValue || dM).scale(rM.repeatCount))
            }
            break
          }
          case EM.ANIMATIONTYPE_COLOR4: {
            const MM = QM ? this.color4InterpolateFunctionWithTangents(PM, jM.outTangent.scale(zM), nM, aM.inTangent.scale(zM), LM) : this.color4InterpolateFunction(PM, nM, LM);
            switch (rM.lS) {
              case EM.ANIMATIONLOOPMODE_CYCLE:
              case EM.ANIMATIONLOOPMODE_CONSTANT:
              case EM.ANIMATIONLOOPMODE_YOYO:
                return MM;
              case EM.ANIMATIONLOOPMODE_RELATIVE:
              case EM.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return MM.add((rM.offsetValue || yM).scale(rM.repeatCount))
            }
            break
          }
          case EM.ANIMATIONTYPE_MATRIX:
            switch (rM.lS) {
              case EM.ANIMATIONLOOPMODE_CYCLE:
              case EM.ANIMATIONLOOPMODE_CONSTANT:
              case EM.ANIMATIONLOOPMODE_YOYO:
                return EM.AllowMatricesInterpolation ? this.matrixInterpolateFunction(PM, nM, LM, rM.workValue) : PM;
              case EM.ANIMATIONLOOPMODE_RELATIVE:
              case EM.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return PM
            }
        }
        return 0
      }
      matrixInterpolateFunction(MM, rM, iM, SM) {
        return EM.AllowMatrixDecomposeForInterpolation ? SM ? (OM.d.DecomposeLerpToRef(MM, rM, iM, SM), SM) : OM.d.DecomposeLerp(MM, rM, iM) : SM ? (OM.d.LerpToRef(MM, rM, iM, SM), SM) : OM.d.Lerp(MM, rM, iM)
      }
      clone() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rM = new EM(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.lS);
        if (rM.enableBlending = this.enableBlending, rM.blendingSpeed = this.blendingSpeed, this._keys && rM.setKeys(this._keys, !1, MM), this._ranges) {
          rM._ranges = {};
          for (const MM in this._ranges) {
            const iM = this._ranges[MM];
            iM && (rM._ranges[MM] = iM.clone())
          }
        }
        return rM
      }
      setKeys(MM) {
        let rM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = MM;
        else if (this._keys = MM.slice(0), rM)
          for (let iM = 0; iM < this._keys.length; iM++) {
            const MM = this._keys[iM];
            this._keys[iM] = {
              frame: MM.frame,
              value: MM.value.clone ? MM.value.clone() : MM.value,
              inTangent: MM.inTangent && MM.inTangent.clone ? MM.inTangent.clone() : MM.inTangent,
              outTangent: MM.outTangent && MM.outTangent.clone ? MM.outTangent.clone() : MM.outTangent,
              interpolation: MM.interpolation,
              lockedTangent: MM.lockedTangent,
              easingFunction: MM.easingFunction
            }
          }
      }
      createKeyForFrame(MM) {
        lM.key = 0;
        const rM = this._interpolate(MM, lM, !0);
        if (!rM) return this._keys[lM.key].frame === MM ? lM.key : lM.key + 1;
        const iM = {
          frame: MM,
          value: rM.clone ? rM.clone() : rM
        };
        return this._keys.splice(lM.key + 1, 0, iM), lM.key + 1
      }
      serialize() {
        const MM = {};
        MM.name = this.name, MM.property = this.targetProperty, MM.framePerSecond = this.framePerSecond, MM.dataType = this.dataType, MM.loopBehavior = this.lS, MM.enableBlending = this.enableBlending, MM.blendingSpeed = this.blendingSpeed;
        const rM = this.dataType;
        MM.keys = [];
        const iM = this.getKeys();
        for (let OM = 0; OM < iM.length; OM++) {
          const SM = iM[OM],
            jM = {};
          switch (jM.frame = SM.frame, rM) {
            case EM.ANIMATIONTYPE_FLOAT:
              jM.values = [SM.value], void 0 !== SM.inTangent && jM.values.push(SM.inTangent), void 0 !== SM.outTangent && (void 0 === SM.inTangent && jM.values.push(void 0), jM.values.push(SM.outTangent)), void 0 !== SM.interpolation && (void 0 === SM.inTangent && jM.values.push(void 0), void 0 === SM.outTangent && jM.values.push(void 0), jM.values.push(SM.interpolation));
              break;
            case EM.ANIMATIONTYPE_QUATERNION:
            case EM.ANIMATIONTYPE_MATRIX:
            case EM.ANIMATIONTYPE_VECTOR3:
            case EM.ANIMATIONTYPE_COLOR3:
            case EM.ANIMATIONTYPE_COLOR4:
              jM.values = SM.value.HOM(), void 0 != SM.inTangent && jM.values.push(SM.inTangent.HOM()), void 0 != SM.outTangent && (void 0 === SM.inTangent && jM.values.push(void 0), jM.values.push(SM.outTangent.HOM())), void 0 !== SM.interpolation && (void 0 === SM.inTangent && jM.values.push(void 0), void 0 === SM.outTangent && jM.values.push(void 0), jM.values.push(SM.interpolation))
          }
          MM.keys.push(jM)
        }
        MM.Ld = [];
        for (const OM in this._ranges) {
          const rM = this._ranges[OM];
          if (!rM) continue;
          const iM = {};
          iM.name = OM, iM.from = rM.from, iM.to = rM.to, MM.Ld.push(iM)
        }
        return MM
      }
      static _UniversalLerp(MM, rM, iM) {
        const OM = MM.constructor;
        return OM.Lerp ? OM.Lerp(MM, rM, iM) : OM.Slerp ? OM.Slerp(MM, rM, iM) : MM.toFixed ? MM * (1 - iM) + iM * rM : rM
      }
    }

    function UM(MM, rM, iM) {
      let SM;
      SM = "object" === typeof rM ? rM : {
        referenceFrame: rM ?? 0,
        range: iM,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let jM = MM;
      SM.cloneOriginalAnimation && (jM = MM.clone(), jM.name = SM.clonedAnimationName || jM.name);
      const aM = jM.getKeys();
      if (!aM.length) return jM;
      const PM = SM.referenceFrame && SM.referenceFrame >= 0 ? SM.referenceFrame : 0;
      let nM = 0;
      const QM = aM[0];
      let zM = aM.length - 1;
      const LM = aM[zM],
        mM = {
          referenceValue: QM.value,
          referencePosition: OM.l.sh[0],
          referenceQuaternion: OM.l.Quaternion[0],
          referenceScaling: OM.l.sh[1],
          keyPosition: OM.l.sh[2],
          keyQuaternion: OM.l.Quaternion[1],
          keyScaling: OM.l.sh[3]
        };
      let HM = QM.frame,
        hM = LM.frame;
      if (SM.range) {
        const MM = jM.getRange(SM.range);
        MM && (HM = MM.from, hM = MM.to)
      } else HM = SM.fromFrame ?? HM, hM = SM.toFrame ?? hM;
      HM !== QM.frame && (nM = jM.createKeyForFrame(HM)), hM !== LM.frame && (zM = jM.createKeyForFrame(hM));
      const JM = jM.getKeys();
      if (1 === JM.length) {
        const MM = jM._getKeyValue(JM[0].value);
        mM.referenceValue = MM.clone ? MM.clone() : MM
      } else if (PM <= QM.frame) {
        const MM = jM._getKeyValue(QM.value);
        mM.referenceValue = MM.clone ? MM.clone() : MM
      } else if (PM >= LM.frame) {
        const MM = jM._getKeyValue(LM.value);
        mM.referenceValue = MM.clone ? MM.clone() : MM
      } else {
        lM.key = 0;
        const MM = jM._interpolate(PM, lM);
        mM.referenceValue = MM.clone ? MM.clone() : MM
      }
      jM.dataType === EM.ANIMATIONTYPE_QUATERNION ? mM.referenceValue.normalize().conjugateInPlace() : jM.dataType === EM.ANIMATIONTYPE_MATRIX && (mM.referenceValue.decompose(mM.referenceScaling, mM.referenceQuaternion, mM.referencePosition), mM.referenceQuaternion.normalize().conjugateInPlace());
      let dM = Number.MAX_VALUE;
      const yM = SM.clipKeys ? [] : null;
      for (let lM = nM; lM <= zM; lM++) {
        let MM = JM[lM];
        if ((yM || SM.cloneOriginalAnimation) && (MM = {
            frame: MM.frame,
            value: MM.value.clone ? MM.value.clone() : MM.value,
            inTangent: MM.inTangent,
            outTangent: MM.outTangent,
            interpolation: MM.interpolation,
            lockedTangent: MM.lockedTangent,
            easingFunction: MM.easingFunction
          }, yM && (dM === Number.MAX_VALUE && (dM = MM.frame), MM.frame -= dM, yM.push(MM))), !lM || jM.dataType === EM.ANIMATIONTYPE_FLOAT || MM.value !== QM.value) switch (jM.dataType) {
          case EM.ANIMATIONTYPE_MATRIX:
            MM.value.decompose(mM.keyScaling, mM.keyQuaternion, mM.keyPosition), mM.keyPosition.kOM(mM.referencePosition), mM.keyScaling.divideInPlace(mM.referenceScaling), mM.referenceQuaternion.multiplyToRef(mM.keyQuaternion, mM.keyQuaternion), OM.d.ComposeToRef(mM.keyScaling, mM.keyQuaternion, mM.keyPosition, MM.value);
            break;
          case EM.ANIMATIONTYPE_QUATERNION:
            mM.referenceValue.multiplyToRef(MM.value, MM.value);
            break;
          case EM.ANIMATIONTYPE_VECTOR2:
          case EM.ANIMATIONTYPE_VECTOR3:
          case EM.ANIMATIONTYPE_COLOR3:
          case EM.ANIMATIONTYPE_COLOR4:
            MM.value.subtractToRef(mM.referenceValue, MM.value);
            break;
          case EM.ANIMATIONTYPE_SIZE:
            MM.value.width -= mM.referenceValue.width, MM.value.height -= mM.referenceValue.height;
            break;
          default:
            MM.value -= mM.referenceValue
        }
      }
      return yM && jM.setKeys(yM, !0), jM
    }

    function GM(MM, rM, iM, OM) {
      const SM = new EM(MM + "Animation", MM, iM, rM, EM.ANIMATIONLOOPMODE_CONSTANT);
      return SM.setEasingFunction(OM), SM
    }

    function CM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
      const LM = EM._PrepareAnimation(MM, iM, OM, SM, jM, aM, PM, nM);
      return LM ? (rM.Hk && (zM = rM.Hk()), zM ? zM.beginDirectAnimation(rM, [LM], 0, SM, LM.lS !== EM.ANIMATIONLOOPMODE_CONSTANT, 1, QM) : null) : null
    }

    function eM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
      const LM = EM._PrepareAnimation(MM, OM, SM, jM, aM, PM, nM, QM);
      if (!LM) return null;
      return rM.Hk().beginDirectHierarchyAnimation(rM, iM, [LM], 0, jM, 1 === LM.lS, 1, zM)
    }

    function bM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
      const zM = EM._PrepareAnimation(MM, iM, OM, SM, jM, aM, PM, nM);
      return zM ? (rM.animations.push(zM), rM.Hk().beginAnimation(rM, 0, SM, 1 === zM.lS, 1, QM)) : null
    }

    function wM(MM, rM, iM, OM, SM, jM, aM) {
      let PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        nM = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        QM = arguments.length > 9 ? arguments[9] : void 0;
      if (aM <= 0) return iM[MM] = rM, PM && PM(), null;
      const zM = SM * (aM / 1e3);
      jM.setKeys(QM ?? [{
        frame: 0,
        value: iM[MM].clone ? iM[MM].clone() : iM[MM]
      }, {
        frame: zM,
        value: rM
      }]), iM.animations || (iM.animations = []), iM.animations.push(jM);
      return OM.beginAnimation(iM, 0, zM, !1, 1, PM ?? void 0, void 0, nM)
    }

    function tM(MM, rM) {
      zM.b.AppendSerializedAnimations(MM, rM)
    }

    function gM(MM) {
      const rM = new EM(MM.name, MM.property, MM.framePerSecond, MM.dataType, MM.loopBehavior),
        iM = MM.dataType,
        jM = [];
      let aM, PM;
      for (MM.enableBlending && (rM.enableBlending = MM.enableBlending), MM.blendingSpeed && (rM.blendingSpeed = MM.blendingSpeed), PM = 0; PM < MM.keys.length; PM++) {
        const rM = MM.keys[PM];
        let nM, QM, zM;
        switch (iM) {
          case EM.ANIMATIONTYPE_FLOAT:
            aM = rM.values[0], rM.values.length >= 2 && (nM = rM.values[1]), rM.values.length >= 3 && (QM = rM.values[2]), rM.values.length >= 4 && (zM = rM.values[3]);
            break;
          case EM.ANIMATIONTYPE_QUATERNION:
            if (aM = OM.h.FromArray(rM.values), rM.values.length >= 8) {
              const MM = OM.h.FromArray(rM.values.slice(4, 8));
              MM.equals(OM.h.Zero()) || (nM = MM)
            }
            if (rM.values.length >= 12) {
              const MM = OM.h.FromArray(rM.values.slice(8, 12));
              MM.equals(OM.h.Zero()) || (QM = MM)
            }
            rM.values.length >= 13 && (zM = rM.values[12]);
            break;
          case EM.ANIMATIONTYPE_MATRIX:
            aM = OM.d.FromArray(rM.values), rM.values.length >= 17 && (zM = rM.values[16]);
            break;
          case EM.ANIMATIONTYPE_COLOR3:
            aM = SM.d.FromArray(rM.values), rM.values[3] && (nM = SM.d.FromArray(rM.values[3])), rM.values[4] && (QM = SM.d.FromArray(rM.values[4])), rM.values[5] && (zM = rM.values[5]);
            break;
          case EM.ANIMATIONTYPE_COLOR4:
            aM = SM.h.FromArray(rM.values), rM.values[4] && (nM = SM.h.FromArray(rM.values[4])), rM.values[5] && (QM = SM.h.FromArray(rM.values[5])), rM.values[6] && (zM = rM.values[6]);
            break;
          case EM.ANIMATIONTYPE_VECTOR3:
          default:
            aM = OM.q.FromArray(rM.values), rM.values[3] && (nM = OM.q.FromArray(rM.values[3])), rM.values[4] && (QM = OM.q.FromArray(rM.values[4])), rM.values[5] && (zM = rM.values[5])
        }
        const LM = {};
        LM.frame = rM.frame, LM.value = aM, void 0 != nM && (LM.inTangent = nM), void 0 != QM && (LM.outTangent = QM), void 0 != zM && (LM.interpolation = zM), jM.push(LM)
      }
      if (rM.setKeys(jM), MM.Ld)
        for (PM = 0; PM < MM.Ld.length; PM++) aM = MM.Ld[PM], rM.createRange(aM.name, aM.from, aM.to);
      return rM
    }
    async function uM(MM, rM) {
      return await new Promise(((iM, OM) => {
        const SM = new QM.e;
        SM.addEventListener("readystatechange", (() => {
          if (4 == SM.readyState)
            if (200 == SM.status) {
              let rM = JSON.parse(SM.responseText);
              if (rM.animations && (rM = rM.animations), rM.length) {
                const MM = [];
                for (const iM of rM) MM.push(gM(iM));
                iM(MM)
              } else {
                const OM = gM(rM);
                MM && (OM.name = MM), iM(OM)
              }
            } else OM("Unable to load the animation")
        })), SM.open("GET", rM), SM.send()
      }))
    }
    async function RM(MM) {
      const rM = this?.SnippetUrl ?? EM.SnippetUrl;
      return await new Promise(((iM, OM) => {
        const SM = new QM.e;
        SM.addEventListener("readystatechange", (() => {
          if (4 == SM.readyState)
            if (200 == SM.status) {
              const rM = JSON.parse(JSON.parse(SM.responseText).jsonPayload);
              if (rM.animations) {
                const OM = JSON.parse(rM.animations),
                  SM = [];
                for (const rM of OM.animations) {
                  const iM = gM(rM);
                  iM.snippetId = MM, SM.push(iM)
                }
                iM(SM)
              } else {
                const OM = gM(JSON.parse(rM.animation));
                OM.snippetId = MM, iM(OM)
              }
            } else OM("Unable to load the snippet " + MM)
        })), SM.open("GET", rM + "/" + MM.replace(/#/g, "/")), SM.send()
      }))
    }
    EM._UniqueIdGenerator = 0, EM.AllowMatricesInterpolation = !1, EM.AllowMatrixDecomposeForInterpolation = !0, EM.InheritOriginalValueFromActiveAnimations = !1, EM.SnippetUrl = "https://snippet.babylonjs.com", EM.ANIMATIONTYPE_FLOAT = 0, EM.ANIMATIONTYPE_VECTOR3 = 1, EM.ANIMATIONTYPE_QUATERNION = 2, EM.ANIMATIONTYPE_MATRIX = 3, EM.ANIMATIONTYPE_COLOR3 = 4, EM.ANIMATIONTYPE_COLOR4 = 7, EM.ANIMATIONTYPE_VECTOR2 = 5, EM.ANIMATIONTYPE_SIZE = 6, EM.ANIMATIONLOOPMODE_RELATIVE = 0, EM.ANIMATIONLOOPMODE_CYCLE = 1, EM.ANIMATIONLOOPMODE_CONSTANT = 2, EM.ANIMATIONLOOPMODE_YOYO = 4, EM.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const pM = RM;
    let WM = !1;

    function sM() {
      WM || (WM = !0, EM.Parse = gM, EM.ParseFromFileAsync = uM, EM.ParseFromSnippetAsync = RM, EM.CreateFromSnippetAsync = pM, EM.CreateAnimation = GM, EM.CreateAndStartAnimation = CM, EM.CreateAndStartHierarchyAnimation = eM, EM.CreateMergeAndStartAnimation = bM, EM.MakeAnimationAdditive = UM, EM.TransitionTo = wM, EM.AppendSerializedAnimations = tM, (0, LM.e)("BABYLON.Animation", EM), PM.d._AnimationRangeFactory = (MM, rM, iM) => new aM.d(MM, rM, iM))
    }
  },
  42208: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM
    });
    class OM {
      constructor(MM, rM, iM) {
        this.name = MM, this.from = rM, this.to = iM
      }
      clone() {
        return new OM(this.name, this.from, this.to)
      }
    }
  },
  42269: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM.d,
      e: () => OM.j
    });
    var OM = iM(41250);
    (0, OM.f)()
  },
  42248: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => OM.h
    });
    var OM = iM(41560);
    (0, OM.d)()
  },
  42220: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM.e
    });
    var OM = iM(41553);
    (0, OM.g)()
  },
  42278: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => OM.d
    });
    var OM = iM(41502);
    (0, OM.e)()
  },
  42212: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM.e
    });
    var OM = iM(41536);
    (0, OM.c)()
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);