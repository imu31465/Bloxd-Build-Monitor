export const id = 264;
export const ids = [264];
export const modules = {
  40477: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => fU,
      h: () => VU,
      j: () => QU,
      k: () => eU,
      n: () => jU,
      r: () => hU,
      u: () => CU,
      w: () => uU
    });
    var tU = gU(36600),
      pU = gU(36761),
      EU = gU(36626),
      PU = gU(40483),
      TU = gU(39610),
      qU = gU(39387),
      KU = gU(39427),
      cU = gU(39395),
      GU = gU(36639);
    const jU = Object.freeze(new tU.d(0, 0, 0, 0)),
      uU = Object.freeze(tU.n.Zero()),
      CU = Object.freeze(tU.l.Zero()),
      hU = Object.freeze(qU.b.Zero()),
      QU = Object.freeze(pU.e.Black()),
      eU = Object.freeze(new pU.g(0, 0, 0, 0)),
      WU = {
        key: 0,
        repeatCount: 0,
        mE: 2
      };
    class fU {
      static _PrepareAnimation(UU, RU, gU, EU, PU, TU, KU, cU) {
        let GU;
        if (!isNaN(parseFloat(PU)) && isFinite(PU) ? GU = fU.ANIMATIONTYPE_FLOAT : PU instanceof tU.d ? GU = fU.ANIMATIONTYPE_QUATERNION : PU instanceof tU.n ? GU = fU.ANIMATIONTYPE_VECTOR3 : PU instanceof tU.l ? GU = fU.ANIMATIONTYPE_VECTOR2 : PU instanceof pU.e ? GU = fU.ANIMATIONTYPE_COLOR3 : PU instanceof pU.g ? GU = fU.ANIMATIONTYPE_COLOR4 : PU instanceof qU.b && (GU = fU.ANIMATIONTYPE_SIZE), void 0 == GU) return null;
        const jU = new fU(UU, RU, gU, GU, KU),
          uU = [{
            frame: 0,
            value: PU
          }, {
            frame: EU,
            value: TU
          }];
        return jU.setKeys(uU), void 0 !== cU && jU.setEasingFunction(cU), jU
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const UU of this._runtimeAnimations)
          if (!UU.isStopped()) return !0;
        return !1
      }
      constructor(UU, RU, gU, tU, pU, EU) {
        this.name = UU, this.targetProperty = RU, this.framePerSecond = gU, this.dataType = tU, this.mE = pU, this.enableBlending = EU, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = RU.split("."), this.dataType = tU, this.mE = void 0 === pU ? fU.ANIMATIONLOOPMODE_CYCLE : pU, this.uniqueId = fU._UniqueIdGenerator++
      }
      toString(UU) {
        let RU = "Name: " + this.name + ", property: " + this.targetProperty;
        if (RU += ", datatype: " + ["Float", "xC", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], RU += ", nKeys: " + (this._keys ? this._keys.length : "none"), RU += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), UU) {
          RU += ", Ranges: {";
          let UU = !0;
          for (const gU in this._ranges) UU || (RU += ", "), UU = !1, RU += gU;
          RU += "}"
        }
        return RU
      }
      addEvent(UU) {
        this._events.push(UU), this._events.sort(((UU, RU) => UU.frame - RU.frame))
      }
      removeEvents(UU) {
        for (let RU = 0; RU < this._events.length; RU++) this._events[RU].frame === UU && (this._events.splice(RU, 1), RU--)
      }
      getEvents() {
        return this._events
      }
      createRange(UU, RU, gU) {
        this._ranges[UU] || (this._ranges[UU] = new PU.e(UU, RU, gU))
      }
      deleteRange(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const gU = this._ranges[UU];
        if (gU) {
          if (RU) {
            const UU = gU.from,
              RU = gU.to;
            for (let gU = this._keys.length - 1; gU >= 0; gU--) this._keys[gU].frame >= UU && this._keys[gU].frame <= RU && this._keys.splice(gU, 1)
          }
          this._ranges[UU] = null
        }
      }
      getRange(UU) {
        return this._ranges[UU]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let UU = 0;
        for (let RU = 0, gU = this._keys.length; RU < gU; RU++) UU < this._keys[RU].frame && (UU = this._keys[RU].frame);
        return UU
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(UU) {
        this._easingFunction = UU
      }
      floatInterpolateFunction(UU, RU, gU) {
        return (0, EU.Lerp)(UU, RU, gU)
      }
      floatInterpolateFunctionWithTangents(UU, RU, gU, tU, pU) {
        return (0, EU.Hermite)(UU, RU, gU, tU, pU)
      }
      quaternionInterpolateFunction(UU, RU, gU) {
        return tU.d.Slerp(UU, RU, gU)
      }
      quaternionInterpolateFunctionWithTangents(UU, RU, gU, pU, EU) {
        return tU.d.Hermite(UU, RU, gU, pU, EU).normalize()
      }
      vector3InterpolateFunction(UU, RU, gU) {
        return tU.n.Lerp(UU, RU, gU)
      }
      vector3InterpolateFunctionWithTangents(UU, RU, gU, pU, EU) {
        return tU.n.Hermite(UU, RU, gU, pU, EU)
      }
      vector2InterpolateFunction(UU, RU, gU) {
        return tU.l.Lerp(UU, RU, gU)
      }
      vector2InterpolateFunctionWithTangents(UU, RU, gU, pU, EU) {
        return tU.l.Hermite(UU, RU, gU, pU, EU)
      }
      sizeInterpolateFunction(UU, RU, gU) {
        return qU.b.Lerp(UU, RU, gU)
      }
      color3InterpolateFunction(UU, RU, gU) {
        return pU.e.Lerp(UU, RU, gU)
      }
      color3InterpolateFunctionWithTangents(UU, RU, gU, tU, EU) {
        return pU.e.Hermite(UU, RU, gU, tU, EU)
      }
      color4InterpolateFunction(UU, RU, gU) {
        return pU.g.Lerp(UU, RU, gU)
      }
      color4InterpolateFunctionWithTangents(UU, RU, gU, tU, EU) {
        return pU.g.Hermite(UU, RU, gU, tU, EU)
      }
      _getKeyValue(UU) {
        return "function" === typeof UU ? UU() : UU
      }
      evaluate(UU) {
        return WU.key = 0, this._interpolate(UU, WU)
      }
      _interpolate(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (RU.mE === fU.ANIMATIONLOOPMODE_CONSTANT && RU.repeatCount > 0) return RU.highLimitValue.clone ? RU.highLimitValue.clone() : RU.highLimitValue;
        const tU = this._keys;
        let pU;
        if (this._coreAnimation) pU = this._coreAnimation._key;
        else {
          const EU = tU.length;
          for (pU = RU.key; pU >= 0 && UU < tU[pU].frame;) --pU;
          for (; pU + 1 <= EU - 1 && UU >= tU[pU + 1].frame;) ++pU;
          if (RU.key = pU, pU < 0) return gU ? void 0 : this._getKeyValue(tU[0].value);
          if (pU + 1 > EU - 1) return gU ? void 0 : this._getKeyValue(tU[EU - 1].value);
          this._key = pU
        }
        const EU = tU[pU],
          PU = tU[pU + 1];
        if (gU && (UU === EU.frame || UU === PU.frame)) return;
        const TU = this._getKeyValue(EU.value),
          qU = this._getKeyValue(PU.value);
        if (1 === EU.interpolation) return PU.frame > UU ? TU : qU;
        const KU = void 0 !== EU.outTangent && void 0 !== PU.inTangent,
          cU = PU.frame - EU.frame;
        let GU = (UU - EU.frame) / cU;
        const WU = EU.easingFunction || this.getEasingFunction();
        switch (WU && (GU = WU.ease(GU)), this.dataType) {
          case fU.ANIMATIONTYPE_FLOAT: {
            const UU = KU ? this.floatInterpolateFunctionWithTangents(TU, EU.outTangent * cU, qU, PU.inTangent * cU, GU) : this.floatInterpolateFunction(TU, qU, GU);
            switch (RU.mE) {
              case fU.ANIMATIONLOOPMODE_CYCLE:
              case fU.ANIMATIONLOOPMODE_CONSTANT:
              case fU.ANIMATIONLOOPMODE_YOYO:
                return UU;
              case fU.ANIMATIONLOOPMODE_RELATIVE:
              case fU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (RU.offsetValue ?? 0) * RU.repeatCount + UU
            }
            break
          }
          case fU.ANIMATIONTYPE_QUATERNION: {
            const UU = KU ? this.quaternionInterpolateFunctionWithTangents(TU, EU.outTangent.scale(cU), qU, PU.inTangent.scale(cU), GU) : this.quaternionInterpolateFunction(TU, qU, GU);
            switch (RU.mE) {
              case fU.ANIMATIONLOOPMODE_CYCLE:
              case fU.ANIMATIONLOOPMODE_CONSTANT:
              case fU.ANIMATIONLOOPMODE_YOYO:
                return UU;
              case fU.ANIMATIONLOOPMODE_RELATIVE:
              case fU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return UU.addInPlace((RU.offsetValue || jU).scale(RU.repeatCount))
            }
            return UU
          }
          case fU.ANIMATIONTYPE_VECTOR3: {
            const UU = KU ? this.vector3InterpolateFunctionWithTangents(TU, EU.outTangent.scale(cU), qU, PU.inTangent.scale(cU), GU) : this.vector3InterpolateFunction(TU, qU, GU);
            switch (RU.mE) {
              case fU.ANIMATIONLOOPMODE_CYCLE:
              case fU.ANIMATIONLOOPMODE_CONSTANT:
              case fU.ANIMATIONLOOPMODE_YOYO:
                return UU;
              case fU.ANIMATIONLOOPMODE_RELATIVE:
              case fU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return UU.add((RU.offsetValue || uU).scale(RU.repeatCount))
            }
            break
          }
          case fU.ANIMATIONTYPE_VECTOR2: {
            const UU = KU ? this.vector2InterpolateFunctionWithTangents(TU, EU.outTangent.scale(cU), qU, PU.inTangent.scale(cU), GU) : this.vector2InterpolateFunction(TU, qU, GU);
            switch (RU.mE) {
              case fU.ANIMATIONLOOPMODE_CYCLE:
              case fU.ANIMATIONLOOPMODE_CONSTANT:
              case fU.ANIMATIONLOOPMODE_YOYO:
                return UU;
              case fU.ANIMATIONLOOPMODE_RELATIVE:
              case fU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return UU.add((RU.offsetValue || CU).scale(RU.repeatCount))
            }
            break
          }
          case fU.ANIMATIONTYPE_SIZE:
            switch (RU.mE) {
              case fU.ANIMATIONLOOPMODE_CYCLE:
              case fU.ANIMATIONLOOPMODE_CONSTANT:
              case fU.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(TU, qU, GU);
              case fU.ANIMATIONLOOPMODE_RELATIVE:
              case fU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(TU, qU, GU).add((RU.offsetValue || hU).scale(RU.repeatCount))
            }
            break;
          case fU.ANIMATIONTYPE_COLOR3: {
            const UU = KU ? this.color3InterpolateFunctionWithTangents(TU, EU.outTangent.scale(cU), qU, PU.inTangent.scale(cU), GU) : this.color3InterpolateFunction(TU, qU, GU);
            switch (RU.mE) {
              case fU.ANIMATIONLOOPMODE_CYCLE:
              case fU.ANIMATIONLOOPMODE_CONSTANT:
              case fU.ANIMATIONLOOPMODE_YOYO:
                return UU;
              case fU.ANIMATIONLOOPMODE_RELATIVE:
              case fU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return UU.add((RU.offsetValue || QU).scale(RU.repeatCount))
            }
            break
          }
          case fU.ANIMATIONTYPE_COLOR4: {
            const UU = KU ? this.color4InterpolateFunctionWithTangents(TU, EU.outTangent.scale(cU), qU, PU.inTangent.scale(cU), GU) : this.color4InterpolateFunction(TU, qU, GU);
            switch (RU.mE) {
              case fU.ANIMATIONLOOPMODE_CYCLE:
              case fU.ANIMATIONLOOPMODE_CONSTANT:
              case fU.ANIMATIONLOOPMODE_YOYO:
                return UU;
              case fU.ANIMATIONLOOPMODE_RELATIVE:
              case fU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return UU.add((RU.offsetValue || eU).scale(RU.repeatCount))
            }
            break
          }
          case fU.ANIMATIONTYPE_MATRIX:
            switch (RU.mE) {
              case fU.ANIMATIONLOOPMODE_CYCLE:
              case fU.ANIMATIONLOOPMODE_CONSTANT:
              case fU.ANIMATIONLOOPMODE_YOYO:
                return fU.AllowMatricesInterpolation ? this.matrixInterpolateFunction(TU, qU, GU, RU.workValue) : TU;
              case fU.ANIMATIONLOOPMODE_RELATIVE:
              case fU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return TU
            }
        }
        return 0
      }
      matrixInterpolateFunction(UU, RU, gU, pU) {
        return fU.AllowMatrixDecomposeForInterpolation ? pU ? (tU.c.DecomposeLerpToRef(UU, RU, gU, pU), pU) : tU.c.DecomposeLerp(UU, RU, gU) : pU ? (tU.c.LerpToRef(UU, RU, gU, pU), pU) : tU.c.Lerp(UU, RU, gU)
      }
      clone() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RU = new fU(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.mE);
        if (RU.enableBlending = this.enableBlending, RU.blendingSpeed = this.blendingSpeed, this._keys && RU.setKeys(this._keys, !1, UU), this._ranges) {
          RU._ranges = {};
          for (const UU in this._ranges) {
            const gU = this._ranges[UU];
            gU && (RU._ranges[UU] = gU.clone())
          }
        }
        return RU
      }
      setKeys(UU) {
        let RU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = UU;
        else if (this._keys = UU.slice(0), RU)
          for (let gU = 0; gU < this._keys.length; gU++) {
            const UU = this._keys[gU];
            this._keys[gU] = {
              frame: UU.frame,
              value: UU.value.clone ? UU.value.clone() : UU.value,
              inTangent: UU.inTangent && UU.inTangent.clone ? UU.inTangent.clone() : UU.inTangent,
              outTangent: UU.outTangent && UU.outTangent.clone ? UU.outTangent.clone() : UU.outTangent,
              interpolation: UU.interpolation,
              lockedTangent: UU.lockedTangent,
              easingFunction: UU.easingFunction
            }
          }
      }
      createKeyForFrame(UU) {
        WU.key = 0;
        const RU = this._interpolate(UU, WU, !0);
        if (!RU) return this._keys[WU.key].frame === UU ? WU.key : WU.key + 1;
        const gU = {
          frame: UU,
          value: RU.clone ? RU.clone() : RU
        };
        return this._keys.splice(WU.key + 1, 0, gU), WU.key + 1
      }
      serialize() {
        const UU = {};
        UU.name = this.name, UU.property = this.targetProperty, UU.framePerSecond = this.framePerSecond, UU.dataType = this.dataType, UU.loopBehavior = this.mE, UU.enableBlending = this.enableBlending, UU.blendingSpeed = this.blendingSpeed;
        const RU = this.dataType;
        UU.keys = [];
        const gU = this.getKeys();
        for (let tU = 0; tU < gU.length; tU++) {
          const pU = gU[tU],
            EU = {};
          switch (EU.frame = pU.frame, RU) {
            case fU.ANIMATIONTYPE_FLOAT:
              EU.values = [pU.value], void 0 !== pU.inTangent && EU.values.push(pU.inTangent), void 0 !== pU.outTangent && (void 0 === pU.inTangent && EU.values.push(void 0), EU.values.push(pU.outTangent)), void 0 !== pU.interpolation && (void 0 === pU.inTangent && EU.values.push(void 0), void 0 === pU.outTangent && EU.values.push(void 0), EU.values.push(pU.interpolation));
              break;
            case fU.ANIMATIONTYPE_QUATERNION:
            case fU.ANIMATIONTYPE_MATRIX:
            case fU.ANIMATIONTYPE_VECTOR3:
            case fU.ANIMATIONTYPE_COLOR3:
            case fU.ANIMATIONTYPE_COLOR4:
              EU.values = pU.value.vgU(), void 0 != pU.inTangent && EU.values.push(pU.inTangent.vgU()), void 0 != pU.outTangent && (void 0 === pU.inTangent && EU.values.push(void 0), EU.values.push(pU.outTangent.vgU())), void 0 !== pU.interpolation && (void 0 === pU.inTangent && EU.values.push(void 0), void 0 === pU.outTangent && EU.values.push(void 0), EU.values.push(pU.interpolation))
          }
          UU.keys.push(EU)
        }
        UU.hu = [];
        for (const tU in this._ranges) {
          const RU = this._ranges[tU];
          if (!RU) continue;
          const gU = {};
          gU.name = tU, gU.from = RU.from, gU.to = RU.to, UU.hu.push(gU)
        }
        return UU
      }
      static _UniversalLerp(UU, RU, gU) {
        const tU = UU.constructor;
        return tU.Lerp ? tU.Lerp(UU, RU, gU) : tU.Slerp ? tU.Slerp(UU, RU, gU) : UU.toFixed ? UU * (1 - gU) + gU * RU : RU
      }
    }

    function xU(UU, RU, gU) {
      let pU;
      pU = "object" === typeof RU ? RU : {
        referenceFrame: RU ?? 0,
        range: gU,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let EU = UU;
      pU.cloneOriginalAnimation && (EU = UU.clone(), EU.name = pU.clonedAnimationName || EU.name);
      const PU = EU.getKeys();
      if (!PU.length) return EU;
      const TU = pU.referenceFrame && pU.referenceFrame >= 0 ? pU.referenceFrame : 0;
      let qU = 0;
      const KU = PU[0];
      let cU = PU.length - 1;
      const GU = PU[cU],
        jU = {
          referenceValue: KU.value,
          referencePosition: tU.h.xC[0],
          referenceQuaternion: tU.h.Quaternion[0],
          referenceScaling: tU.h.xC[1],
          keyPosition: tU.h.xC[2],
          keyQuaternion: tU.h.Quaternion[1],
          keyScaling: tU.h.xC[3]
        };
      let uU = KU.frame,
        CU = GU.frame;
      if (pU.range) {
        const UU = EU.getRange(pU.range);
        UU && (uU = UU.from, CU = UU.to)
      } else uU = pU.fromFrame ?? uU, CU = pU.toFrame ?? CU;
      uU !== KU.frame && (qU = EU.createKeyForFrame(uU)), CU !== GU.frame && (cU = EU.createKeyForFrame(CU));
      const hU = EU.getKeys();
      if (1 === hU.length) {
        const UU = EU._getKeyValue(hU[0].value);
        jU.referenceValue = UU.clone ? UU.clone() : UU
      } else if (TU <= KU.frame) {
        const UU = EU._getKeyValue(KU.value);
        jU.referenceValue = UU.clone ? UU.clone() : UU
      } else if (TU >= GU.frame) {
        const UU = EU._getKeyValue(GU.value);
        jU.referenceValue = UU.clone ? UU.clone() : UU
      } else {
        WU.key = 0;
        const UU = EU._interpolate(TU, WU);
        jU.referenceValue = UU.clone ? UU.clone() : UU
      }
      EU.dataType === fU.ANIMATIONTYPE_QUATERNION ? jU.referenceValue.normalize().conjugateInPlace() : EU.dataType === fU.ANIMATIONTYPE_MATRIX && (jU.referenceValue.decompose(jU.referenceScaling, jU.referenceQuaternion, jU.referencePosition), jU.referenceQuaternion.normalize().conjugateInPlace());
      let QU = Number.MAX_VALUE;
      const eU = pU.clipKeys ? [] : null;
      for (let WU = qU; WU <= cU; WU++) {
        let UU = hU[WU];
        if ((eU || pU.cloneOriginalAnimation) && (UU = {
            frame: UU.frame,
            value: UU.value.clone ? UU.value.clone() : UU.value,
            inTangent: UU.inTangent,
            outTangent: UU.outTangent,
            interpolation: UU.interpolation,
            lockedTangent: UU.lockedTangent,
            easingFunction: UU.easingFunction
          }, eU && (QU === Number.MAX_VALUE && (QU = UU.frame), UU.frame -= QU, eU.push(UU))), !WU || EU.dataType === fU.ANIMATIONTYPE_FLOAT || UU.value !== KU.value) switch (EU.dataType) {
          case fU.ANIMATIONTYPE_MATRIX:
            UU.value.decompose(jU.keyScaling, jU.keyQuaternion, jU.keyPosition), jU.keyPosition.ptU(jU.referencePosition), jU.keyScaling.divideInPlace(jU.referenceScaling), jU.referenceQuaternion.multiplyToRef(jU.keyQuaternion, jU.keyQuaternion), tU.c.ComposeToRef(jU.keyScaling, jU.keyQuaternion, jU.keyPosition, UU.value);
            break;
          case fU.ANIMATIONTYPE_QUATERNION:
            jU.referenceValue.multiplyToRef(UU.value, UU.value);
            break;
          case fU.ANIMATIONTYPE_VECTOR2:
          case fU.ANIMATIONTYPE_VECTOR3:
          case fU.ANIMATIONTYPE_COLOR3:
          case fU.ANIMATIONTYPE_COLOR4:
            UU.value.subtractToRef(jU.referenceValue, UU.value);
            break;
          case fU.ANIMATIONTYPE_SIZE:
            UU.value.width -= jU.referenceValue.width, UU.value.height -= jU.referenceValue.height;
            break;
          default:
            UU.value -= jU.referenceValue
        }
      }
      return eU && EU.setKeys(eU, !0), EU
    }

    function mU(UU, RU, gU, tU) {
      const pU = new fU(UU + "Animation", UU, gU, RU, fU.ANIMATIONLOOPMODE_CONSTANT);
      return pU.setEasingFunction(tU), pU
    }

    function IU(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU) {
      const GU = fU._PrepareAnimation(UU, gU, tU, pU, EU, PU, TU, qU);
      return GU ? (RU.aZ && (cU = RU.aZ()), cU ? cU.beginDirectAnimation(RU, [GU], 0, pU, GU.mE !== fU.ANIMATIONLOOPMODE_CONSTANT, 1, KU) : null) : null
    }

    function JU(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU) {
      const GU = fU._PrepareAnimation(UU, tU, pU, EU, PU, TU, qU, KU);
      if (!GU) return null;
      return RU.aZ().beginDirectHierarchyAnimation(RU, gU, [GU], 0, EU, 1 === GU.mE, 1, cU)
    }

    function wU(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU) {
      const cU = fU._PrepareAnimation(UU, gU, tU, pU, EU, PU, TU, qU);
      return cU ? (RU.animations.push(cU), RU.aZ().beginAnimation(RU, 0, pU, 1 === cU.mE, 1, KU)) : null
    }

    function nU(UU, RU, gU, tU, pU, EU, PU) {
      let TU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        qU = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        KU = arguments.length > 9 ? arguments[9] : void 0;
      if (PU <= 0) return gU[UU] = RU, TU && TU(), null;
      const cU = pU * (PU / 1e3);
      EU.setKeys(KU ?? [{
        frame: 0,
        value: gU[UU].clone ? gU[UU].clone() : gU[UU]
      }, {
        frame: cU,
        value: RU
      }]), gU.animations || (gU.animations = []), gU.animations.push(EU);
      return tU.beginAnimation(gU, 0, cU, !1, 1, TU ?? void 0, void 0, qU)
    }

    function bU(UU, RU) {
      cU.b.AppendSerializedAnimations(UU, RU)
    }

    function oU(UU) {
      const RU = new fU(UU.name, UU.property, UU.framePerSecond, UU.dataType, UU.loopBehavior),
        gU = UU.dataType,
        EU = [];
      let PU, TU;
      for (UU.enableBlending && (RU.enableBlending = UU.enableBlending), UU.blendingSpeed && (RU.blendingSpeed = UU.blendingSpeed), TU = 0; TU < UU.keys.length; TU++) {
        const RU = UU.keys[TU];
        let qU, KU, cU;
        switch (gU) {
          case fU.ANIMATIONTYPE_FLOAT:
            PU = RU.values[0], RU.values.length >= 2 && (qU = RU.values[1]), RU.values.length >= 3 && (KU = RU.values[2]), RU.values.length >= 4 && (cU = RU.values[3]);
            break;
          case fU.ANIMATIONTYPE_QUATERNION:
            if (PU = tU.d.FromArray(RU.values), RU.values.length >= 8) {
              const UU = tU.d.FromArray(RU.values.slice(4, 8));
              UU.equals(tU.d.Zero()) || (qU = UU)
            }
            if (RU.values.length >= 12) {
              const UU = tU.d.FromArray(RU.values.slice(8, 12));
              UU.equals(tU.d.Zero()) || (KU = UU)
            }
            RU.values.length >= 13 && (cU = RU.values[12]);
            break;
          case fU.ANIMATIONTYPE_MATRIX:
            PU = tU.c.FromArray(RU.values), RU.values.length >= 17 && (cU = RU.values[16]);
            break;
          case fU.ANIMATIONTYPE_COLOR3:
            PU = pU.e.FromArray(RU.values), RU.values[3] && (qU = pU.e.FromArray(RU.values[3])), RU.values[4] && (KU = pU.e.FromArray(RU.values[4])), RU.values[5] && (cU = RU.values[5]);
            break;
          case fU.ANIMATIONTYPE_COLOR4:
            PU = pU.g.FromArray(RU.values), RU.values[4] && (qU = pU.g.FromArray(RU.values[4])), RU.values[5] && (KU = pU.g.FromArray(RU.values[5])), RU.values[6] && (cU = RU.values[6]);
            break;
          case fU.ANIMATIONTYPE_VECTOR3:
          default:
            PU = tU.n.FromArray(RU.values), RU.values[3] && (qU = tU.n.FromArray(RU.values[3])), RU.values[4] && (KU = tU.n.FromArray(RU.values[4])), RU.values[5] && (cU = RU.values[5])
        }
        const GU = {};
        GU.frame = RU.frame, GU.value = PU, void 0 != qU && (GU.inTangent = qU), void 0 != KU && (GU.outTangent = KU), void 0 != cU && (GU.interpolation = cU), EU.push(GU)
      }
      if (RU.setKeys(EU), UU.hu)
        for (TU = 0; TU < UU.hu.length; TU++) PU = UU.hu[TU], RU.createRange(PU.name, PU.from, PU.to);
      return RU
    }
    async function ZU(UU, RU) {
      return await new Promise(((gU, tU) => {
        const pU = new KU.e;
        pU.addEventListener("readystatechange", (() => {
          if (4 == pU.readyState)
            if (200 == pU.status) {
              let RU = JSON.parse(pU.responseText);
              if (RU.animations && (RU = RU.animations), RU.length) {
                const UU = [];
                for (const gU of RU) UU.push(oU(gU));
                gU(UU)
              } else {
                const tU = oU(RU);
                UU && (tU.name = UU), gU(tU)
              }
            } else tU("Unable to load the animation")
        })), pU.open("GET", RU), pU.send()
      }))
    }
    async function aU(UU) {
      const RU = this?.SnippetUrl ?? fU.SnippetUrl;
      return await new Promise(((gU, tU) => {
        const pU = new KU.e;
        pU.addEventListener("readystatechange", (() => {
          if (4 == pU.readyState)
            if (200 == pU.status) {
              const RU = JSON.parse(JSON.parse(pU.responseText).jsonPayload);
              if (RU.animations) {
                const tU = JSON.parse(RU.animations),
                  pU = [];
                for (const RU of tU.animations) {
                  const gU = oU(RU);
                  gU.snippetId = UU, pU.push(gU)
                }
                gU(pU)
              } else {
                const tU = oU(JSON.parse(RU.animation));
                tU.snippetId = UU, gU(tU)
              }
            } else tU("Unable to load the snippet " + UU)
        })), pU.open("GET", RU + "/" + UU.replace(/#/g, "/")), pU.send()
      }))
    }
    fU._UniqueIdGenerator = 0, fU.AllowMatricesInterpolation = !1, fU.AllowMatrixDecomposeForInterpolation = !0, fU.InheritOriginalValueFromActiveAnimations = !1, fU.SnippetUrl = "https://snippet.babylonjs.com", fU.ANIMATIONTYPE_FLOAT = 0, fU.ANIMATIONTYPE_VECTOR3 = 1, fU.ANIMATIONTYPE_QUATERNION = 2, fU.ANIMATIONTYPE_MATRIX = 3, fU.ANIMATIONTYPE_COLOR3 = 4, fU.ANIMATIONTYPE_COLOR4 = 7, fU.ANIMATIONTYPE_VECTOR2 = 5, fU.ANIMATIONTYPE_SIZE = 6, fU.ANIMATIONLOOPMODE_RELATIVE = 0, fU.ANIMATIONLOOPMODE_CYCLE = 1, fU.ANIMATIONLOOPMODE_CONSTANT = 2, fU.ANIMATIONLOOPMODE_YOYO = 4, fU.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const YU = aU;
    let BU = !1;

    function VU() {
      BU || (BU = !0, fU.Parse = oU, fU.ParseFromFileAsync = ZU, fU.ParseFromSnippetAsync = aU, fU.CreateFromSnippetAsync = YU, fU.CreateAnimation = mU, fU.CreateAndStartAnimation = IU, fU.CreateAndStartHierarchyAnimation = JU, fU.CreateMergeAndStartAnimation = wU, fU.MakeAnimationAdditive = xU, fU.TransitionTo = nU, fU.AppendSerializedAnimations = bU, (0, GU.g)("BABYLON.Animation", fU), TU.b._AnimationRangeFactory = (UU, RU, gU) => new PU.e(UU, RU, gU))
    }
  },
  40483: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    class tU {
      constructor(UU, RU, gU) {
        this.name = UU, this.from = RU, this.to = gU
      }
      clone() {
        return new tU(this.name, this.from, this.to)
      }
    }
  },
  40533: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU.e,
      e: () => tU.l
    });
    var tU = gU(39517);
    (0, tU.h)()
  },
  40520: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU.e
    });
    var tU = gU(39855);
    (0, tU.b)()
  },
  40494: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU.c
    });
    var tU = gU(39844);
    (0, tU.f)()
  },
  40536: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU.c
    });
    var tU = gU(39782);
    (0, tU.d)()
  },
  40488: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU.e
    });
    var tU = gU(39823);
    (0, tU.b)()
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);