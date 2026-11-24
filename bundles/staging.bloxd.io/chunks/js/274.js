export const id = 274;
export const ids = [274];
export const modules = {
  41016: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => MD,
      f: () => dD,
      h: () => GD,
      k: () => hD,
      m: () => UD,
      o: () => BD,
      s: () => ID,
      v: () => fD
    });
    var pD = wD(37079),
      sD = wD(37273),
      KD = wD(37125),
      rD = wD(41023),
      LD = wD(40155),
      cD = wD(39935),
      gD = wD(39969),
      RD = wD(39939),
      AD = wD(37134);
    const UD = Object.freeze(new pD.i(0, 0, 0, 0)),
      fD = Object.freeze(pD.s.Zero()),
      ID = Object.freeze(pD.r.Zero()),
      BD = Object.freeze(cD.b.Zero()),
      GD = Object.freeze(sD.d.Black()),
      hD = Object.freeze(new sD.h(0, 0, 0, 0)),
      nD = {
        key: 0,
        repeatCount: 0,
        MK: 2
      };
    class MD {
      static _PrepareAnimation(DD, zD, wD, KD, rD, LD, gD, RD) {
        let AD;
        if (!isNaN(parseFloat(rD)) && isFinite(rD) ? AD = MD.ANIMATIONTYPE_FLOAT : rD instanceof pD.i ? AD = MD.ANIMATIONTYPE_QUATERNION : rD instanceof pD.s ? AD = MD.ANIMATIONTYPE_VECTOR3 : rD instanceof pD.r ? AD = MD.ANIMATIONTYPE_VECTOR2 : rD instanceof sD.d ? AD = MD.ANIMATIONTYPE_COLOR3 : rD instanceof sD.h ? AD = MD.ANIMATIONTYPE_COLOR4 : rD instanceof cD.b && (AD = MD.ANIMATIONTYPE_SIZE), void 0 == AD) return null;
        const UD = new MD(DD, zD, wD, AD, gD),
          fD = [{
            frame: 0,
            value: rD
          }, {
            frame: KD,
            value: LD
          }];
        return UD.setKeys(fD), void 0 !== RD && UD.setEasingFunction(RD), UD
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const DD of this._runtimeAnimations)
          if (!DD.isStopped()) return !0;
        return !1
      }
      constructor(DD, zD, wD, pD, sD, KD) {
        this.name = DD, this.targetProperty = zD, this.framePerSecond = wD, this.dataType = pD, this.MK = sD, this.enableBlending = KD, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = zD.split("."), this.dataType = pD, this.MK = void 0 === sD ? MD.ANIMATIONLOOPMODE_CYCLE : sD, this.uniqueId = MD._UniqueIdGenerator++
      }
      toString(DD) {
        let zD = "Name: " + this.name + ", property: " + this.targetProperty;
        if (zD += ", datatype: " + ["Float", "WI", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], zD += ", nKeys: " + (this._keys ? this._keys.length : "none"), zD += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), DD) {
          zD += ", Ranges: {";
          let DD = !0;
          for (const wD in this._ranges) DD || (zD += ", "), DD = !1, zD += wD;
          zD += "}"
        }
        return zD
      }
      addEvent(DD) {
        this._events.push(DD), this._events.sort(((DD, zD) => DD.frame - zD.frame))
      }
      removeEvents(DD) {
        for (let zD = 0; zD < this._events.length; zD++) this._events[zD].frame === DD && (this._events.splice(zD, 1), zD--)
      }
      getEvents() {
        return this._events
      }
      createRange(DD, zD, wD) {
        this._ranges[DD] || (this._ranges[DD] = new rD.e(DD, zD, wD))
      }
      deleteRange(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const wD = this._ranges[DD];
        if (wD) {
          if (zD) {
            const DD = wD.from,
              zD = wD.to;
            for (let wD = this._keys.length - 1; wD >= 0; wD--) this._keys[wD].frame >= DD && this._keys[wD].frame <= zD && this._keys.splice(wD, 1)
          }
          this._ranges[DD] = null
        }
      }
      getRange(DD) {
        return this._ranges[DD]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let DD = 0;
        for (let zD = 0, wD = this._keys.length; zD < wD; zD++) DD < this._keys[zD].frame && (DD = this._keys[zD].frame);
        return DD
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(DD) {
        this._easingFunction = DD
      }
      floatInterpolateFunction(DD, zD, wD) {
        return (0, KD.Lerp)(DD, zD, wD)
      }
      floatInterpolateFunctionWithTangents(DD, zD, wD, pD, sD) {
        return (0, KD.Hermite)(DD, zD, wD, pD, sD)
      }
      quaternionInterpolateFunction(DD, zD, wD) {
        return pD.i.Slerp(DD, zD, wD)
      }
      quaternionInterpolateFunctionWithTangents(DD, zD, wD, sD, KD) {
        return pD.i.Hermite(DD, zD, wD, sD, KD).normalize()
      }
      vector3InterpolateFunction(DD, zD, wD) {
        return pD.s.Lerp(DD, zD, wD)
      }
      vector3InterpolateFunctionWithTangents(DD, zD, wD, sD, KD) {
        return pD.s.Hermite(DD, zD, wD, sD, KD)
      }
      vector2InterpolateFunction(DD, zD, wD) {
        return pD.r.Lerp(DD, zD, wD)
      }
      vector2InterpolateFunctionWithTangents(DD, zD, wD, sD, KD) {
        return pD.r.Hermite(DD, zD, wD, sD, KD)
      }
      sizeInterpolateFunction(DD, zD, wD) {
        return cD.b.Lerp(DD, zD, wD)
      }
      color3InterpolateFunction(DD, zD, wD) {
        return sD.d.Lerp(DD, zD, wD)
      }
      color3InterpolateFunctionWithTangents(DD, zD, wD, pD, KD) {
        return sD.d.Hermite(DD, zD, wD, pD, KD)
      }
      color4InterpolateFunction(DD, zD, wD) {
        return sD.h.Lerp(DD, zD, wD)
      }
      color4InterpolateFunctionWithTangents(DD, zD, wD, pD, KD) {
        return sD.h.Hermite(DD, zD, wD, pD, KD)
      }
      _getKeyValue(DD) {
        return "function" === typeof DD ? DD() : DD
      }
      evaluate(DD) {
        return nD.key = 0, this._interpolate(DD, nD)
      }
      _interpolate(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (zD.MK === MD.ANIMATIONLOOPMODE_CONSTANT && zD.repeatCount > 0) return zD.highLimitValue.clone ? zD.highLimitValue.clone() : zD.highLimitValue;
        const pD = this._keys;
        let sD;
        if (this._coreAnimation) sD = this._coreAnimation._key;
        else {
          const KD = pD.length;
          for (sD = zD.key; sD >= 0 && DD < pD[sD].frame;) --sD;
          for (; sD + 1 <= KD - 1 && DD >= pD[sD + 1].frame;) ++sD;
          if (zD.key = sD, sD < 0) return wD ? void 0 : this._getKeyValue(pD[0].value);
          if (sD + 1 > KD - 1) return wD ? void 0 : this._getKeyValue(pD[KD - 1].value);
          this._key = sD
        }
        const KD = pD[sD],
          rD = pD[sD + 1];
        if (wD && (DD === KD.frame || DD === rD.frame)) return;
        const LD = this._getKeyValue(KD.value),
          cD = this._getKeyValue(rD.value);
        if (1 === KD.interpolation) return rD.frame > DD ? LD : cD;
        const gD = void 0 !== KD.outTangent && void 0 !== rD.inTangent,
          RD = rD.frame - KD.frame;
        let AD = (DD - KD.frame) / RD;
        const nD = KD.easingFunction || this.getEasingFunction();
        switch (nD && (AD = nD.ease(AD)), this.dataType) {
          case MD.ANIMATIONTYPE_FLOAT: {
            const DD = gD ? this.floatInterpolateFunctionWithTangents(LD, KD.outTangent * RD, cD, rD.inTangent * RD, AD) : this.floatInterpolateFunction(LD, cD, AD);
            switch (zD.MK) {
              case MD.ANIMATIONLOOPMODE_CYCLE:
              case MD.ANIMATIONLOOPMODE_CONSTANT:
              case MD.ANIMATIONLOOPMODE_YOYO:
                return DD;
              case MD.ANIMATIONLOOPMODE_RELATIVE:
              case MD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (zD.offsetValue ?? 0) * zD.repeatCount + DD
            }
            break
          }
          case MD.ANIMATIONTYPE_QUATERNION: {
            const DD = gD ? this.quaternionInterpolateFunctionWithTangents(LD, KD.outTangent.scale(RD), cD, rD.inTangent.scale(RD), AD) : this.quaternionInterpolateFunction(LD, cD, AD);
            switch (zD.MK) {
              case MD.ANIMATIONLOOPMODE_CYCLE:
              case MD.ANIMATIONLOOPMODE_CONSTANT:
              case MD.ANIMATIONLOOPMODE_YOYO:
                return DD;
              case MD.ANIMATIONLOOPMODE_RELATIVE:
              case MD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return DD.addInPlace((zD.offsetValue || UD).scale(zD.repeatCount))
            }
            return DD
          }
          case MD.ANIMATIONTYPE_VECTOR3: {
            const DD = gD ? this.vector3InterpolateFunctionWithTangents(LD, KD.outTangent.scale(RD), cD, rD.inTangent.scale(RD), AD) : this.vector3InterpolateFunction(LD, cD, AD);
            switch (zD.MK) {
              case MD.ANIMATIONLOOPMODE_CYCLE:
              case MD.ANIMATIONLOOPMODE_CONSTANT:
              case MD.ANIMATIONLOOPMODE_YOYO:
                return DD;
              case MD.ANIMATIONLOOPMODE_RELATIVE:
              case MD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return DD.add((zD.offsetValue || fD).scale(zD.repeatCount))
            }
            break
          }
          case MD.ANIMATIONTYPE_VECTOR2: {
            const DD = gD ? this.vector2InterpolateFunctionWithTangents(LD, KD.outTangent.scale(RD), cD, rD.inTangent.scale(RD), AD) : this.vector2InterpolateFunction(LD, cD, AD);
            switch (zD.MK) {
              case MD.ANIMATIONLOOPMODE_CYCLE:
              case MD.ANIMATIONLOOPMODE_CONSTANT:
              case MD.ANIMATIONLOOPMODE_YOYO:
                return DD;
              case MD.ANIMATIONLOOPMODE_RELATIVE:
              case MD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return DD.add((zD.offsetValue || ID).scale(zD.repeatCount))
            }
            break
          }
          case MD.ANIMATIONTYPE_SIZE:
            switch (zD.MK) {
              case MD.ANIMATIONLOOPMODE_CYCLE:
              case MD.ANIMATIONLOOPMODE_CONSTANT:
              case MD.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(LD, cD, AD);
              case MD.ANIMATIONLOOPMODE_RELATIVE:
              case MD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(LD, cD, AD).add((zD.offsetValue || BD).scale(zD.repeatCount))
            }
            break;
          case MD.ANIMATIONTYPE_COLOR3: {
            const DD = gD ? this.color3InterpolateFunctionWithTangents(LD, KD.outTangent.scale(RD), cD, rD.inTangent.scale(RD), AD) : this.color3InterpolateFunction(LD, cD, AD);
            switch (zD.MK) {
              case MD.ANIMATIONLOOPMODE_CYCLE:
              case MD.ANIMATIONLOOPMODE_CONSTANT:
              case MD.ANIMATIONLOOPMODE_YOYO:
                return DD;
              case MD.ANIMATIONLOOPMODE_RELATIVE:
              case MD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return DD.add((zD.offsetValue || GD).scale(zD.repeatCount))
            }
            break
          }
          case MD.ANIMATIONTYPE_COLOR4: {
            const DD = gD ? this.color4InterpolateFunctionWithTangents(LD, KD.outTangent.scale(RD), cD, rD.inTangent.scale(RD), AD) : this.color4InterpolateFunction(LD, cD, AD);
            switch (zD.MK) {
              case MD.ANIMATIONLOOPMODE_CYCLE:
              case MD.ANIMATIONLOOPMODE_CONSTANT:
              case MD.ANIMATIONLOOPMODE_YOYO:
                return DD;
              case MD.ANIMATIONLOOPMODE_RELATIVE:
              case MD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return DD.add((zD.offsetValue || hD).scale(zD.repeatCount))
            }
            break
          }
          case MD.ANIMATIONTYPE_MATRIX:
            switch (zD.MK) {
              case MD.ANIMATIONLOOPMODE_CYCLE:
              case MD.ANIMATIONLOOPMODE_CONSTANT:
              case MD.ANIMATIONLOOPMODE_YOYO:
                return MD.AllowMatricesInterpolation ? this.matrixInterpolateFunction(LD, cD, AD, zD.workValue) : LD;
              case MD.ANIMATIONLOOPMODE_RELATIVE:
              case MD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return LD
            }
        }
        return 0
      }
      matrixInterpolateFunction(DD, zD, wD, sD) {
        return MD.AllowMatrixDecomposeForInterpolation ? sD ? (pD.e.DecomposeLerpToRef(DD, zD, wD, sD), sD) : pD.e.DecomposeLerp(DD, zD, wD) : sD ? (pD.e.LerpToRef(DD, zD, wD, sD), sD) : pD.e.Lerp(DD, zD, wD)
      }
      clone() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zD = new MD(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.MK);
        if (zD.enableBlending = this.enableBlending, zD.blendingSpeed = this.blendingSpeed, this._keys && zD.setKeys(this._keys, !1, DD), this._ranges) {
          zD._ranges = {};
          for (const DD in this._ranges) {
            const wD = this._ranges[DD];
            wD && (zD._ranges[DD] = wD.clone())
          }
        }
        return zD
      }
      setKeys(DD) {
        let zD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = DD;
        else if (this._keys = DD.slice(0), zD)
          for (let wD = 0; wD < this._keys.length; wD++) {
            const DD = this._keys[wD];
            this._keys[wD] = {
              frame: DD.frame,
              value: DD.value.clone ? DD.value.clone() : DD.value,
              inTangent: DD.inTangent && DD.inTangent.clone ? DD.inTangent.clone() : DD.inTangent,
              outTangent: DD.outTangent && DD.outTangent.clone ? DD.outTangent.clone() : DD.outTangent,
              interpolation: DD.interpolation,
              lockedTangent: DD.lockedTangent,
              easingFunction: DD.easingFunction
            }
          }
      }
      createKeyForFrame(DD) {
        nD.key = 0;
        const zD = this._interpolate(DD, nD, !0);
        if (!zD) return this._keys[nD.key].frame === DD ? nD.key : nD.key + 1;
        const wD = {
          frame: DD,
          value: zD.clone ? zD.clone() : zD
        };
        return this._keys.splice(nD.key + 1, 0, wD), nD.key + 1
      }
      serialize() {
        const DD = {};
        DD.name = this.name, DD.property = this.targetProperty, DD.framePerSecond = this.framePerSecond, DD.dataType = this.dataType, DD.loopBehavior = this.MK, DD.enableBlending = this.enableBlending, DD.blendingSpeed = this.blendingSpeed;
        const zD = this.dataType;
        DD.keys = [];
        const wD = this.getKeys();
        for (let pD = 0; pD < wD.length; pD++) {
          const sD = wD[pD],
            KD = {};
          switch (KD.frame = sD.frame, zD) {
            case MD.ANIMATIONTYPE_FLOAT:
              KD.values = [sD.value], void 0 !== sD.inTangent && KD.values.push(sD.inTangent), void 0 !== sD.outTangent && (void 0 === sD.inTangent && KD.values.push(void 0), KD.values.push(sD.outTangent)), void 0 !== sD.interpolation && (void 0 === sD.inTangent && KD.values.push(void 0), void 0 === sD.outTangent && KD.values.push(void 0), KD.values.push(sD.interpolation));
              break;
            case MD.ANIMATIONTYPE_QUATERNION:
            case MD.ANIMATIONTYPE_MATRIX:
            case MD.ANIMATIONTYPE_VECTOR3:
            case MD.ANIMATIONTYPE_COLOR3:
            case MD.ANIMATIONTYPE_COLOR4:
              KD.values = sD.value.QpD(), void 0 != sD.inTangent && KD.values.push(sD.inTangent.QpD()), void 0 != sD.outTangent && (void 0 === sD.inTangent && KD.values.push(void 0), KD.values.push(sD.outTangent.QpD())), void 0 !== sD.interpolation && (void 0 === sD.inTangent && KD.values.push(void 0), void 0 === sD.outTangent && KD.values.push(void 0), KD.values.push(sD.interpolation))
          }
          DD.keys.push(KD)
        }
        DD.rG = [];
        for (const pD in this._ranges) {
          const zD = this._ranges[pD];
          if (!zD) continue;
          const wD = {};
          wD.name = pD, wD.from = zD.from, wD.to = zD.to, DD.rG.push(wD)
        }
        return DD
      }
      static _UniversalLerp(DD, zD, wD) {
        const pD = DD.constructor;
        return pD.Lerp ? pD.Lerp(DD, zD, wD) : pD.Slerp ? pD.Slerp(DD, zD, wD) : DD.toFixed ? DD * (1 - wD) + wD * zD : zD
      }
    }

    function OD(DD, zD, wD) {
      let sD;
      sD = "object" === typeof zD ? zD : {
        referenceFrame: zD ?? 0,
        range: wD,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let KD = DD;
      sD.cloneOriginalAnimation && (KD = DD.clone(), KD.name = sD.clonedAnimationName || KD.name);
      const rD = KD.getKeys();
      if (!rD.length) return KD;
      const LD = sD.referenceFrame && sD.referenceFrame >= 0 ? sD.referenceFrame : 0;
      let cD = 0;
      const gD = rD[0];
      let RD = rD.length - 1;
      const AD = rD[RD],
        UD = {
          referenceValue: gD.value,
          referencePosition: pD.n.WI[0],
          referenceQuaternion: pD.n.Quaternion[0],
          referenceScaling: pD.n.WI[1],
          keyPosition: pD.n.WI[2],
          keyQuaternion: pD.n.Quaternion[1],
          keyScaling: pD.n.WI[3]
        };
      let fD = gD.frame,
        ID = AD.frame;
      if (sD.range) {
        const DD = KD.getRange(sD.range);
        DD && (fD = DD.from, ID = DD.to)
      } else fD = sD.fromFrame ?? fD, ID = sD.toFrame ?? ID;
      fD !== gD.frame && (cD = KD.createKeyForFrame(fD)), ID !== AD.frame && (RD = KD.createKeyForFrame(ID));
      const BD = KD.getKeys();
      if (1 === BD.length) {
        const DD = KD._getKeyValue(BD[0].value);
        UD.referenceValue = DD.clone ? DD.clone() : DD
      } else if (LD <= gD.frame) {
        const DD = KD._getKeyValue(gD.value);
        UD.referenceValue = DD.clone ? DD.clone() : DD
      } else if (LD >= AD.frame) {
        const DD = KD._getKeyValue(AD.value);
        UD.referenceValue = DD.clone ? DD.clone() : DD
      } else {
        nD.key = 0;
        const DD = KD._interpolate(LD, nD);
        UD.referenceValue = DD.clone ? DD.clone() : DD
      }
      KD.dataType === MD.ANIMATIONTYPE_QUATERNION ? UD.referenceValue.normalize().conjugateInPlace() : KD.dataType === MD.ANIMATIONTYPE_MATRIX && (UD.referenceValue.decompose(UD.referenceScaling, UD.referenceQuaternion, UD.referencePosition), UD.referenceQuaternion.normalize().conjugateInPlace());
      let GD = Number.MAX_VALUE;
      const hD = sD.clipKeys ? [] : null;
      for (let nD = cD; nD <= RD; nD++) {
        let DD = BD[nD];
        if ((hD || sD.cloneOriginalAnimation) && (DD = {
            frame: DD.frame,
            value: DD.value.clone ? DD.value.clone() : DD.value,
            inTangent: DD.inTangent,
            outTangent: DD.outTangent,
            interpolation: DD.interpolation,
            lockedTangent: DD.lockedTangent,
            easingFunction: DD.easingFunction
          }, hD && (GD === Number.MAX_VALUE && (GD = DD.frame), DD.frame -= GD, hD.push(DD))), !nD || KD.dataType === MD.ANIMATIONTYPE_FLOAT || DD.value !== gD.value) switch (KD.dataType) {
          case MD.ANIMATIONTYPE_MATRIX:
            DD.value.decompose(UD.keyScaling, UD.keyQuaternion, UD.keyPosition), UD.keyPosition.apD(UD.referencePosition), UD.keyScaling.divideInPlace(UD.referenceScaling), UD.referenceQuaternion.multiplyToRef(UD.keyQuaternion, UD.keyQuaternion), pD.e.ComposeToRef(UD.keyScaling, UD.keyQuaternion, UD.keyPosition, DD.value);
            break;
          case MD.ANIMATIONTYPE_QUATERNION:
            UD.referenceValue.multiplyToRef(DD.value, DD.value);
            break;
          case MD.ANIMATIONTYPE_VECTOR2:
          case MD.ANIMATIONTYPE_VECTOR3:
          case MD.ANIMATIONTYPE_COLOR3:
          case MD.ANIMATIONTYPE_COLOR4:
            DD.value.subtractToRef(UD.referenceValue, DD.value);
            break;
          case MD.ANIMATIONTYPE_SIZE:
            DD.value.width -= UD.referenceValue.width, DD.value.height -= UD.referenceValue.height;
            break;
          default:
            DD.value -= UD.referenceValue
        }
      }
      return hD && KD.setKeys(hD, !0), KD
    }

    function JD(DD, zD, wD, pD) {
      const sD = new MD(DD + "Animation", DD, wD, zD, MD.ANIMATIONLOOPMODE_CONSTANT);
      return sD.setEasingFunction(pD), sD
    }

    function ED(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD) {
      const AD = MD._PrepareAnimation(DD, wD, pD, sD, KD, rD, LD, cD);
      return AD ? (zD.Ul && (RD = zD.Ul()), RD ? RD.beginDirectAnimation(zD, [AD], 0, sD, AD.MK !== MD.ANIMATIONLOOPMODE_CONSTANT, 1, gD) : null) : null
    }

    function QD(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD) {
      const AD = MD._PrepareAnimation(DD, pD, sD, KD, rD, LD, cD, gD);
      if (!AD) return null;
      return zD.Ul().beginDirectHierarchyAnimation(zD, wD, [AD], 0, KD, 1 === AD.MK, 1, RD)
    }

    function XD(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD) {
      const RD = MD._PrepareAnimation(DD, wD, pD, sD, KD, rD, LD, cD);
      return RD ? (zD.animations.push(RD), zD.Ul().beginAnimation(zD, 0, sD, 1 === RD.MK, 1, gD)) : null
    }

    function VD(DD, zD, wD, pD, sD, KD, rD) {
      let LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        cD = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        gD = arguments.length > 9 ? arguments[9] : void 0;
      if (rD <= 0) return wD[DD] = zD, LD && LD(), null;
      const RD = sD * (rD / 1e3);
      KD.setKeys(gD ?? [{
        frame: 0,
        value: wD[DD].clone ? wD[DD].clone() : wD[DD]
      }, {
        frame: RD,
        value: zD
      }]), wD.animations || (wD.animations = []), wD.animations.push(KD);
      return pD.beginAnimation(wD, 0, RD, !1, 1, LD ?? void 0, void 0, cD)
    }

    function PD(DD, zD) {
      RD.d.AppendSerializedAnimations(DD, zD)
    }

    function CD(DD) {
      const zD = new MD(DD.name, DD.property, DD.framePerSecond, DD.dataType, DD.loopBehavior),
        wD = DD.dataType,
        KD = [];
      let rD, LD;
      for (DD.enableBlending && (zD.enableBlending = DD.enableBlending), DD.blendingSpeed && (zD.blendingSpeed = DD.blendingSpeed), LD = 0; LD < DD.keys.length; LD++) {
        const zD = DD.keys[LD];
        let cD, gD, RD;
        switch (wD) {
          case MD.ANIMATIONTYPE_FLOAT:
            rD = zD.values[0], zD.values.length >= 2 && (cD = zD.values[1]), zD.values.length >= 3 && (gD = zD.values[2]), zD.values.length >= 4 && (RD = zD.values[3]);
            break;
          case MD.ANIMATIONTYPE_QUATERNION:
            if (rD = pD.i.FromArray(zD.values), zD.values.length >= 8) {
              const DD = pD.i.FromArray(zD.values.slice(4, 8));
              DD.equals(pD.i.Zero()) || (cD = DD)
            }
            if (zD.values.length >= 12) {
              const DD = pD.i.FromArray(zD.values.slice(8, 12));
              DD.equals(pD.i.Zero()) || (gD = DD)
            }
            zD.values.length >= 13 && (RD = zD.values[12]);
            break;
          case MD.ANIMATIONTYPE_MATRIX:
            rD = pD.e.FromArray(zD.values), zD.values.length >= 17 && (RD = zD.values[16]);
            break;
          case MD.ANIMATIONTYPE_COLOR3:
            rD = sD.d.FromArray(zD.values), zD.values[3] && (cD = sD.d.FromArray(zD.values[3])), zD.values[4] && (gD = sD.d.FromArray(zD.values[4])), zD.values[5] && (RD = zD.values[5]);
            break;
          case MD.ANIMATIONTYPE_COLOR4:
            rD = sD.h.FromArray(zD.values), zD.values[4] && (cD = sD.h.FromArray(zD.values[4])), zD.values[5] && (gD = sD.h.FromArray(zD.values[5])), zD.values[6] && (RD = zD.values[6]);
            break;
          case MD.ANIMATIONTYPE_VECTOR3:
          default:
            rD = pD.s.FromArray(zD.values), zD.values[3] && (cD = pD.s.FromArray(zD.values[3])), zD.values[4] && (gD = pD.s.FromArray(zD.values[4])), zD.values[5] && (RD = zD.values[5])
        }
        const AD = {};
        AD.frame = zD.frame, AD.value = rD, void 0 != cD && (AD.inTangent = cD), void 0 != gD && (AD.outTangent = gD), void 0 != RD && (AD.interpolation = RD), KD.push(AD)
      }
      if (zD.setKeys(KD), DD.rG)
        for (LD = 0; LD < DD.rG.length; LD++) rD = DD.rG[LD], zD.createRange(rD.name, rD.from, rD.to);
      return zD
    }
    async function xD(DD, zD) {
      return await new Promise(((wD, pD) => {
        const sD = new gD.e;
        sD.addEventListener("readystatechange", (() => {
          if (4 == sD.readyState)
            if (200 == sD.status) {
              let zD = JSON.parse(sD.responseText);
              if (zD.animations && (zD = zD.animations), zD.length) {
                const DD = [];
                for (const wD of zD) DD.push(CD(wD));
                wD(DD)
              } else {
                const pD = CD(zD);
                DD && (pD.name = DD), wD(pD)
              }
            } else pD("Unable to load the animation")
        })), sD.open("GET", zD), sD.send()
      }))
    }
    async function TD(DD) {
      const zD = this?.SnippetUrl ?? MD.SnippetUrl;
      return await new Promise(((wD, pD) => {
        const sD = new gD.e;
        sD.addEventListener("readystatechange", (() => {
          if (4 == sD.readyState)
            if (200 == sD.status) {
              const zD = JSON.parse(JSON.parse(sD.responseText).jsonPayload);
              if (zD.animations) {
                const pD = JSON.parse(zD.animations),
                  sD = [];
                for (const zD of pD.animations) {
                  const wD = CD(zD);
                  wD.snippetId = DD, sD.push(wD)
                }
                wD(sD)
              } else {
                const pD = CD(JSON.parse(zD.animation));
                pD.snippetId = DD, wD(pD)
              }
            } else pD("Unable to load the snippet " + DD)
        })), sD.open("GET", zD + "/" + DD.replace(/#/g, "/")), sD.send()
      }))
    }
    MD._UniqueIdGenerator = 0, MD.AllowMatricesInterpolation = !1, MD.AllowMatrixDecomposeForInterpolation = !0, MD.InheritOriginalValueFromActiveAnimations = !1, MD.SnippetUrl = "https://snippet.babylonjs.com", MD.ANIMATIONTYPE_FLOAT = 0, MD.ANIMATIONTYPE_VECTOR3 = 1, MD.ANIMATIONTYPE_QUATERNION = 2, MD.ANIMATIONTYPE_MATRIX = 3, MD.ANIMATIONTYPE_COLOR3 = 4, MD.ANIMATIONTYPE_COLOR4 = 7, MD.ANIMATIONTYPE_VECTOR2 = 5, MD.ANIMATIONTYPE_SIZE = 6, MD.ANIMATIONLOOPMODE_RELATIVE = 0, MD.ANIMATIONLOOPMODE_CYCLE = 1, MD.ANIMATIONLOOPMODE_CONSTANT = 2, MD.ANIMATIONLOOPMODE_YOYO = 4, MD.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const bD = TD;
    let jD = !1;

    function dD() {
      jD || (jD = !0, MD.Parse = CD, MD.ParseFromFileAsync = xD, MD.ParseFromSnippetAsync = TD, MD.CreateFromSnippetAsync = bD, MD.CreateAnimation = JD, MD.CreateAndStartAnimation = ED, MD.CreateAndStartHierarchyAnimation = QD, MD.CreateMergeAndStartAnimation = XD, MD.MakeAnimationAdditive = OD, MD.TransitionTo = VD, MD.AppendSerializedAnimations = PD, (0, AD.i)("BABYLON.Animation", MD), LD.b._AnimationRangeFactory = (DD, zD, wD) => new rD.e(DD, zD, wD))
    }
  },
  41023: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD
    });
    class pD {
      constructor(DD, zD, wD) {
        this.name = DD, this.from = zD, this.to = wD
      }
      clone() {
        return new pD(this.name, this.from, this.to)
      }
    }
  },
  41066: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD.b,
      f: () => pD.k
    });
    var pD = wD(40066);
    (0, pD.e)()
  },
  41049: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => pD.d
    });
    var pD = wD(40400);
    (0, pD.c)()
  },
  41035: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => pD.e
    });
    var pD = wD(40394);
    (0, pD.h)()
  },
  41069: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD.e
    });
    var pD = wD(40335);
    (0, pD.g)()
  },
  41027: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => pD.f
    });
    var pD = wD(40372);
    (0, pD.c)()
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);