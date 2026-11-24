export const id = 274;
export const ids = [274];
export const modules = {
  41111: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => PS,
      f: () => YS,
      g: () => GS,
      j: () => CS,
      k: () => kS,
      n: () => jS,
      o: () => KS,
      q: () => aS
    });
    var tS = gS(37117),
      bS = gS(37300),
      XS = gS(37149),
      xS = gS(41117),
      NS = gS(40256),
      qS = gS(40062),
      uS = gS(40092),
      IS = gS(40068),
      fS = gS(37164);
    const kS = Object.freeze(new tS.i(0, 0, 0, 0)),
      aS = Object.freeze(tS.n.Zero()),
      KS = Object.freeze(tS.m.Zero()),
      jS = Object.freeze(qS.b.Zero()),
      GS = Object.freeze(bS.b.Black()),
      CS = Object.freeze(new bS.c(0, 0, 0, 0)),
      nS = {
        key: 0,
        repeatCount: 0,
        qX: 2
      };
    class PS {
      static _PrepareAnimation(SS, HS, gS, XS, xS, NS, uS, IS) {
        let fS;
        if (!isNaN(parseFloat(xS)) && isFinite(xS) ? fS = PS.ANIMATIONTYPE_FLOAT : xS instanceof tS.i ? fS = PS.ANIMATIONTYPE_QUATERNION : xS instanceof tS.n ? fS = PS.ANIMATIONTYPE_VECTOR3 : xS instanceof tS.m ? fS = PS.ANIMATIONTYPE_VECTOR2 : xS instanceof bS.b ? fS = PS.ANIMATIONTYPE_COLOR3 : xS instanceof bS.c ? fS = PS.ANIMATIONTYPE_COLOR4 : xS instanceof qS.b && (fS = PS.ANIMATIONTYPE_SIZE), void 0 == fS) return null;
        const kS = new PS(SS, HS, gS, fS, uS),
          aS = [{
            frame: 0,
            value: xS
          }, {
            frame: XS,
            value: NS
          }];
        return kS.setKeys(aS), void 0 !== IS && kS.setEasingFunction(IS), kS
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const SS of this._runtimeAnimations)
          if (!SS.isStopped()) return !0;
        return !1
      }
      constructor(SS, HS, gS, tS, bS, XS) {
        this.name = SS, this.targetProperty = HS, this.framePerSecond = gS, this.dataType = tS, this.qX = bS, this.enableBlending = XS, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = HS.split("."), this.dataType = tS, this.qX = void 0 === bS ? PS.ANIMATIONLOOPMODE_CYCLE : bS, this.uniqueId = PS._UniqueIdGenerator++
      }
      toString(SS) {
        let HS = "Name: " + this.name + ", property: " + this.targetProperty;
        if (HS += ", datatype: " + ["Float", "VK", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], HS += ", nKeys: " + (this._keys ? this._keys.length : "none"), HS += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), SS) {
          HS += ", Ranges: {";
          let SS = !0;
          for (const gS in this._ranges) SS || (HS += ", "), SS = !1, HS += gS;
          HS += "}"
        }
        return HS
      }
      addEvent(SS) {
        this._events.push(SS), this._events.sort(((SS, HS) => SS.frame - HS.frame))
      }
      removeEvents(SS) {
        for (let HS = 0; HS < this._events.length; HS++) this._events[HS].frame === SS && (this._events.splice(HS, 1), HS--)
      }
      getEvents() {
        return this._events
      }
      createRange(SS, HS, gS) {
        this._ranges[SS] || (this._ranges[SS] = new xS.c(SS, HS, gS))
      }
      deleteRange(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const gS = this._ranges[SS];
        if (gS) {
          if (HS) {
            const SS = gS.from,
              HS = gS.to;
            for (let gS = this._keys.length - 1; gS >= 0; gS--) this._keys[gS].frame >= SS && this._keys[gS].frame <= HS && this._keys.splice(gS, 1)
          }
          this._ranges[SS] = null
        }
      }
      getRange(SS) {
        return this._ranges[SS]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let SS = 0;
        for (let HS = 0, gS = this._keys.length; HS < gS; HS++) SS < this._keys[HS].frame && (SS = this._keys[HS].frame);
        return SS
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(SS) {
        this._easingFunction = SS
      }
      floatInterpolateFunction(SS, HS, gS) {
        return (0, XS.Lerp)(SS, HS, gS)
      }
      floatInterpolateFunctionWithTangents(SS, HS, gS, tS, bS) {
        return (0, XS.Hermite)(SS, HS, gS, tS, bS)
      }
      quaternionInterpolateFunction(SS, HS, gS) {
        return tS.i.Slerp(SS, HS, gS)
      }
      quaternionInterpolateFunctionWithTangents(SS, HS, gS, bS, XS) {
        return tS.i.Hermite(SS, HS, gS, bS, XS).normalize()
      }
      vector3InterpolateFunction(SS, HS, gS) {
        return tS.n.Lerp(SS, HS, gS)
      }
      vector3InterpolateFunctionWithTangents(SS, HS, gS, bS, XS) {
        return tS.n.Hermite(SS, HS, gS, bS, XS)
      }
      vector2InterpolateFunction(SS, HS, gS) {
        return tS.m.Lerp(SS, HS, gS)
      }
      vector2InterpolateFunctionWithTangents(SS, HS, gS, bS, XS) {
        return tS.m.Hermite(SS, HS, gS, bS, XS)
      }
      sizeInterpolateFunction(SS, HS, gS) {
        return qS.b.Lerp(SS, HS, gS)
      }
      color3InterpolateFunction(SS, HS, gS) {
        return bS.b.Lerp(SS, HS, gS)
      }
      color3InterpolateFunctionWithTangents(SS, HS, gS, tS, XS) {
        return bS.b.Hermite(SS, HS, gS, tS, XS)
      }
      color4InterpolateFunction(SS, HS, gS) {
        return bS.c.Lerp(SS, HS, gS)
      }
      color4InterpolateFunctionWithTangents(SS, HS, gS, tS, XS) {
        return bS.c.Hermite(SS, HS, gS, tS, XS)
      }
      _getKeyValue(SS) {
        return "function" === typeof SS ? SS() : SS
      }
      evaluate(SS) {
        return nS.key = 0, this._interpolate(SS, nS)
      }
      _interpolate(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (HS.qX === PS.ANIMATIONLOOPMODE_CONSTANT && HS.repeatCount > 0) return HS.highLimitValue.clone ? HS.highLimitValue.clone() : HS.highLimitValue;
        const tS = this._keys;
        let bS;
        if (this._coreAnimation) bS = this._coreAnimation._key;
        else {
          const XS = tS.length;
          for (bS = HS.key; bS >= 0 && SS < tS[bS].frame;) --bS;
          for (; bS + 1 <= XS - 1 && SS >= tS[bS + 1].frame;) ++bS;
          if (HS.key = bS, bS < 0) return gS ? void 0 : this._getKeyValue(tS[0].value);
          if (bS + 1 > XS - 1) return gS ? void 0 : this._getKeyValue(tS[XS - 1].value);
          this._key = bS
        }
        const XS = tS[bS],
          xS = tS[bS + 1];
        if (gS && (SS === XS.frame || SS === xS.frame)) return;
        const NS = this._getKeyValue(XS.value),
          qS = this._getKeyValue(xS.value);
        if (1 === XS.interpolation) return xS.frame > SS ? NS : qS;
        const uS = void 0 !== XS.outTangent && void 0 !== xS.inTangent,
          IS = xS.frame - XS.frame;
        let fS = (SS - XS.frame) / IS;
        const nS = XS.easingFunction || this.getEasingFunction();
        switch (nS && (fS = nS.ease(fS)), this.dataType) {
          case PS.ANIMATIONTYPE_FLOAT: {
            const SS = uS ? this.floatInterpolateFunctionWithTangents(NS, XS.outTangent * IS, qS, xS.inTangent * IS, fS) : this.floatInterpolateFunction(NS, qS, fS);
            switch (HS.qX) {
              case PS.ANIMATIONLOOPMODE_CYCLE:
              case PS.ANIMATIONLOOPMODE_CONSTANT:
              case PS.ANIMATIONLOOPMODE_YOYO:
                return SS;
              case PS.ANIMATIONLOOPMODE_RELATIVE:
              case PS.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (HS.offsetValue ?? 0) * HS.repeatCount + SS
            }
            break
          }
          case PS.ANIMATIONTYPE_QUATERNION: {
            const SS = uS ? this.quaternionInterpolateFunctionWithTangents(NS, XS.outTangent.scale(IS), qS, xS.inTangent.scale(IS), fS) : this.quaternionInterpolateFunction(NS, qS, fS);
            switch (HS.qX) {
              case PS.ANIMATIONLOOPMODE_CYCLE:
              case PS.ANIMATIONLOOPMODE_CONSTANT:
              case PS.ANIMATIONLOOPMODE_YOYO:
                return SS;
              case PS.ANIMATIONLOOPMODE_RELATIVE:
              case PS.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return SS.addInPlace((HS.offsetValue || kS).scale(HS.repeatCount))
            }
            return SS
          }
          case PS.ANIMATIONTYPE_VECTOR3: {
            const SS = uS ? this.vector3InterpolateFunctionWithTangents(NS, XS.outTangent.scale(IS), qS, xS.inTangent.scale(IS), fS) : this.vector3InterpolateFunction(NS, qS, fS);
            switch (HS.qX) {
              case PS.ANIMATIONLOOPMODE_CYCLE:
              case PS.ANIMATIONLOOPMODE_CONSTANT:
              case PS.ANIMATIONLOOPMODE_YOYO:
                return SS;
              case PS.ANIMATIONLOOPMODE_RELATIVE:
              case PS.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return SS.add((HS.offsetValue || aS).scale(HS.repeatCount))
            }
            break
          }
          case PS.ANIMATIONTYPE_VECTOR2: {
            const SS = uS ? this.vector2InterpolateFunctionWithTangents(NS, XS.outTangent.scale(IS), qS, xS.inTangent.scale(IS), fS) : this.vector2InterpolateFunction(NS, qS, fS);
            switch (HS.qX) {
              case PS.ANIMATIONLOOPMODE_CYCLE:
              case PS.ANIMATIONLOOPMODE_CONSTANT:
              case PS.ANIMATIONLOOPMODE_YOYO:
                return SS;
              case PS.ANIMATIONLOOPMODE_RELATIVE:
              case PS.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return SS.add((HS.offsetValue || KS).scale(HS.repeatCount))
            }
            break
          }
          case PS.ANIMATIONTYPE_SIZE:
            switch (HS.qX) {
              case PS.ANIMATIONLOOPMODE_CYCLE:
              case PS.ANIMATIONLOOPMODE_CONSTANT:
              case PS.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(NS, qS, fS);
              case PS.ANIMATIONLOOPMODE_RELATIVE:
              case PS.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(NS, qS, fS).add((HS.offsetValue || jS).scale(HS.repeatCount))
            }
            break;
          case PS.ANIMATIONTYPE_COLOR3: {
            const SS = uS ? this.color3InterpolateFunctionWithTangents(NS, XS.outTangent.scale(IS), qS, xS.inTangent.scale(IS), fS) : this.color3InterpolateFunction(NS, qS, fS);
            switch (HS.qX) {
              case PS.ANIMATIONLOOPMODE_CYCLE:
              case PS.ANIMATIONLOOPMODE_CONSTANT:
              case PS.ANIMATIONLOOPMODE_YOYO:
                return SS;
              case PS.ANIMATIONLOOPMODE_RELATIVE:
              case PS.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return SS.add((HS.offsetValue || GS).scale(HS.repeatCount))
            }
            break
          }
          case PS.ANIMATIONTYPE_COLOR4: {
            const SS = uS ? this.color4InterpolateFunctionWithTangents(NS, XS.outTangent.scale(IS), qS, xS.inTangent.scale(IS), fS) : this.color4InterpolateFunction(NS, qS, fS);
            switch (HS.qX) {
              case PS.ANIMATIONLOOPMODE_CYCLE:
              case PS.ANIMATIONLOOPMODE_CONSTANT:
              case PS.ANIMATIONLOOPMODE_YOYO:
                return SS;
              case PS.ANIMATIONLOOPMODE_RELATIVE:
              case PS.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return SS.add((HS.offsetValue || CS).scale(HS.repeatCount))
            }
            break
          }
          case PS.ANIMATIONTYPE_MATRIX:
            switch (HS.qX) {
              case PS.ANIMATIONLOOPMODE_CYCLE:
              case PS.ANIMATIONLOOPMODE_CONSTANT:
              case PS.ANIMATIONLOOPMODE_YOYO:
                return PS.AllowMatricesInterpolation ? this.matrixInterpolateFunction(NS, qS, fS, HS.workValue) : NS;
              case PS.ANIMATIONLOOPMODE_RELATIVE:
              case PS.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return NS
            }
        }
        return 0
      }
      matrixInterpolateFunction(SS, HS, gS, bS) {
        return PS.AllowMatrixDecomposeForInterpolation ? bS ? (tS.e.DecomposeLerpToRef(SS, HS, gS, bS), bS) : tS.e.DecomposeLerp(SS, HS, gS) : bS ? (tS.e.LerpToRef(SS, HS, gS, bS), bS) : tS.e.Lerp(SS, HS, gS)
      }
      clone() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const HS = new PS(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.qX);
        if (HS.enableBlending = this.enableBlending, HS.blendingSpeed = this.blendingSpeed, this._keys && HS.setKeys(this._keys, !1, SS), this._ranges) {
          HS._ranges = {};
          for (const SS in this._ranges) {
            const gS = this._ranges[SS];
            gS && (HS._ranges[SS] = gS.clone())
          }
        }
        return HS
      }
      setKeys(SS) {
        let HS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = SS;
        else if (this._keys = SS.slice(0), HS)
          for (let gS = 0; gS < this._keys.length; gS++) {
            const SS = this._keys[gS];
            this._keys[gS] = {
              frame: SS.frame,
              value: SS.value.clone ? SS.value.clone() : SS.value,
              inTangent: SS.inTangent && SS.inTangent.clone ? SS.inTangent.clone() : SS.inTangent,
              outTangent: SS.outTangent && SS.outTangent.clone ? SS.outTangent.clone() : SS.outTangent,
              interpolation: SS.interpolation,
              lockedTangent: SS.lockedTangent,
              easingFunction: SS.easingFunction
            }
          }
      }
      createKeyForFrame(SS) {
        nS.key = 0;
        const HS = this._interpolate(SS, nS, !0);
        if (!HS) return this._keys[nS.key].frame === SS ? nS.key : nS.key + 1;
        const gS = {
          frame: SS,
          value: HS.clone ? HS.clone() : HS
        };
        return this._keys.splice(nS.key + 1, 0, gS), nS.key + 1
      }
      serialize() {
        const SS = {};
        SS.name = this.name, SS.property = this.targetProperty, SS.framePerSecond = this.framePerSecond, SS.dataType = this.dataType, SS.loopBehavior = this.qX, SS.enableBlending = this.enableBlending, SS.blendingSpeed = this.blendingSpeed;
        const HS = this.dataType;
        SS.keys = [];
        const gS = this.getKeys();
        for (let tS = 0; tS < gS.length; tS++) {
          const bS = gS[tS],
            XS = {};
          switch (XS.frame = bS.frame, HS) {
            case PS.ANIMATIONTYPE_FLOAT:
              XS.values = [bS.value], void 0 !== bS.inTangent && XS.values.push(bS.inTangent), void 0 !== bS.outTangent && (void 0 === bS.inTangent && XS.values.push(void 0), XS.values.push(bS.outTangent)), void 0 !== bS.interpolation && (void 0 === bS.inTangent && XS.values.push(void 0), void 0 === bS.outTangent && XS.values.push(void 0), XS.values.push(bS.interpolation));
              break;
            case PS.ANIMATIONTYPE_QUATERNION:
            case PS.ANIMATIONTYPE_MATRIX:
            case PS.ANIMATIONTYPE_VECTOR3:
            case PS.ANIMATIONTYPE_COLOR3:
            case PS.ANIMATIONTYPE_COLOR4:
              XS.values = bS.value.lgS(), void 0 != bS.inTangent && XS.values.push(bS.inTangent.lgS()), void 0 != bS.outTangent && (void 0 === bS.inTangent && XS.values.push(void 0), XS.values.push(bS.outTangent.lgS())), void 0 !== bS.interpolation && (void 0 === bS.inTangent && XS.values.push(void 0), void 0 === bS.outTangent && XS.values.push(void 0), XS.values.push(bS.interpolation))
          }
          SS.keys.push(XS)
        }
        SS.HG = [];
        for (const tS in this._ranges) {
          const HS = this._ranges[tS];
          if (!HS) continue;
          const gS = {};
          gS.name = tS, gS.from = HS.from, gS.to = HS.to, SS.HG.push(gS)
        }
        return SS
      }
      static _UniversalLerp(SS, HS, gS) {
        const tS = SS.constructor;
        return tS.Lerp ? tS.Lerp(SS, HS, gS) : tS.Slerp ? tS.Slerp(SS, HS, gS) : SS.toFixed ? SS * (1 - gS) + gS * HS : HS
      }
    }

    function QS(SS, HS, gS) {
      let bS;
      bS = "object" === typeof HS ? HS : {
        referenceFrame: HS ?? 0,
        range: gS,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let XS = SS;
      bS.cloneOriginalAnimation && (XS = SS.clone(), XS.name = bS.clonedAnimationName || XS.name);
      const xS = XS.getKeys();
      if (!xS.length) return XS;
      const NS = bS.referenceFrame && bS.referenceFrame >= 0 ? bS.referenceFrame : 0;
      let qS = 0;
      const uS = xS[0];
      let IS = xS.length - 1;
      const fS = xS[IS],
        kS = {
          referenceValue: uS.value,
          referencePosition: tS.l.VK[0],
          referenceQuaternion: tS.l.Quaternion[0],
          referenceScaling: tS.l.VK[1],
          keyPosition: tS.l.VK[2],
          keyQuaternion: tS.l.Quaternion[1],
          keyScaling: tS.l.VK[3]
        };
      let aS = uS.frame,
        KS = fS.frame;
      if (bS.range) {
        const SS = XS.getRange(bS.range);
        SS && (aS = SS.from, KS = SS.to)
      } else aS = bS.fromFrame ?? aS, KS = bS.toFrame ?? KS;
      aS !== uS.frame && (qS = XS.createKeyForFrame(aS)), KS !== fS.frame && (IS = XS.createKeyForFrame(KS));
      const jS = XS.getKeys();
      if (1 === jS.length) {
        const SS = XS._getKeyValue(jS[0].value);
        kS.referenceValue = SS.clone ? SS.clone() : SS
      } else if (NS <= uS.frame) {
        const SS = XS._getKeyValue(uS.value);
        kS.referenceValue = SS.clone ? SS.clone() : SS
      } else if (NS >= fS.frame) {
        const SS = XS._getKeyValue(fS.value);
        kS.referenceValue = SS.clone ? SS.clone() : SS
      } else {
        nS.key = 0;
        const SS = XS._interpolate(NS, nS);
        kS.referenceValue = SS.clone ? SS.clone() : SS
      }
      XS.dataType === PS.ANIMATIONTYPE_QUATERNION ? kS.referenceValue.normalize().conjugateInPlace() : XS.dataType === PS.ANIMATIONTYPE_MATRIX && (kS.referenceValue.decompose(kS.referenceScaling, kS.referenceQuaternion, kS.referencePosition), kS.referenceQuaternion.normalize().conjugateInPlace());
      let GS = Number.MAX_VALUE;
      const CS = bS.clipKeys ? [] : null;
      for (let nS = qS; nS <= IS; nS++) {
        let SS = jS[nS];
        if ((CS || bS.cloneOriginalAnimation) && (SS = {
            frame: SS.frame,
            value: SS.value.clone ? SS.value.clone() : SS.value,
            inTangent: SS.inTangent,
            outTangent: SS.outTangent,
            interpolation: SS.interpolation,
            lockedTangent: SS.lockedTangent,
            easingFunction: SS.easingFunction
          }, CS && (GS === Number.MAX_VALUE && (GS = SS.frame), SS.frame -= GS, CS.push(SS))), !nS || XS.dataType === PS.ANIMATIONTYPE_FLOAT || SS.value !== uS.value) switch (XS.dataType) {
          case PS.ANIMATIONTYPE_MATRIX:
            SS.value.decompose(kS.keyScaling, kS.keyQuaternion, kS.keyPosition), kS.keyPosition.GtS(kS.referencePosition), kS.keyScaling.divideInPlace(kS.referenceScaling), kS.referenceQuaternion.multiplyToRef(kS.keyQuaternion, kS.keyQuaternion), tS.e.ComposeToRef(kS.keyScaling, kS.keyQuaternion, kS.keyPosition, SS.value);
            break;
          case PS.ANIMATIONTYPE_QUATERNION:
            kS.referenceValue.multiplyToRef(SS.value, SS.value);
            break;
          case PS.ANIMATIONTYPE_VECTOR2:
          case PS.ANIMATIONTYPE_VECTOR3:
          case PS.ANIMATIONTYPE_COLOR3:
          case PS.ANIMATIONTYPE_COLOR4:
            SS.value.subtractToRef(kS.referenceValue, SS.value);
            break;
          case PS.ANIMATIONTYPE_SIZE:
            SS.value.width -= kS.referenceValue.width, SS.value.height -= kS.referenceValue.height;
            break;
          default:
            SS.value -= kS.referenceValue
        }
      }
      return CS && XS.setKeys(CS, !0), XS
    }

    function DS(SS, HS, gS, tS) {
      const bS = new PS(SS + "Animation", SS, gS, HS, PS.ANIMATIONLOOPMODE_CONSTANT);
      return bS.setEasingFunction(tS), bS
    }

    function wS(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS) {
      const fS = PS._PrepareAnimation(SS, gS, tS, bS, XS, xS, NS, qS);
      return fS ? (HS.lL && (IS = HS.lL()), IS ? IS.beginDirectAnimation(HS, [fS], 0, bS, fS.qX !== PS.ANIMATIONLOOPMODE_CONSTANT, 1, uS) : null) : null
    }

    function hS(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS) {
      const fS = PS._PrepareAnimation(SS, tS, bS, XS, xS, NS, qS, uS);
      if (!fS) return null;
      return HS.lL().beginDirectHierarchyAnimation(HS, gS, [fS], 0, XS, 1 === fS.qX, 1, IS)
    }

    function ZS(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS) {
      const IS = PS._PrepareAnimation(SS, gS, tS, bS, XS, xS, NS, qS);
      return IS ? (HS.animations.push(IS), HS.lL().beginAnimation(HS, 0, bS, 1 === IS.qX, 1, uS)) : null
    }

    function JS(SS, HS, gS, tS, bS, XS, xS) {
      let NS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        qS = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        uS = arguments.length > 9 ? arguments[9] : void 0;
      if (xS <= 0) return gS[SS] = HS, NS && NS(), null;
      const IS = bS * (xS / 1e3);
      XS.setKeys(uS ?? [{
        frame: 0,
        value: gS[SS].clone ? gS[SS].clone() : gS[SS]
      }, {
        frame: IS,
        value: HS
      }]), gS.animations || (gS.animations = []), gS.animations.push(XS);
      return tS.beginAnimation(gS, 0, IS, !1, 1, NS ?? void 0, void 0, qS)
    }

    function OS(SS, HS) {
      IS.b.AppendSerializedAnimations(SS, HS)
    }

    function dS(SS) {
      const HS = new PS(SS.name, SS.property, SS.framePerSecond, SS.dataType, SS.loopBehavior),
        gS = SS.dataType,
        XS = [];
      let xS, NS;
      for (SS.enableBlending && (HS.enableBlending = SS.enableBlending), SS.blendingSpeed && (HS.blendingSpeed = SS.blendingSpeed), NS = 0; NS < SS.keys.length; NS++) {
        const HS = SS.keys[NS];
        let qS, uS, IS;
        switch (gS) {
          case PS.ANIMATIONTYPE_FLOAT:
            xS = HS.values[0], HS.values.length >= 2 && (qS = HS.values[1]), HS.values.length >= 3 && (uS = HS.values[2]), HS.values.length >= 4 && (IS = HS.values[3]);
            break;
          case PS.ANIMATIONTYPE_QUATERNION:
            if (xS = tS.i.FromArray(HS.values), HS.values.length >= 8) {
              const SS = tS.i.FromArray(HS.values.slice(4, 8));
              SS.equals(tS.i.Zero()) || (qS = SS)
            }
            if (HS.values.length >= 12) {
              const SS = tS.i.FromArray(HS.values.slice(8, 12));
              SS.equals(tS.i.Zero()) || (uS = SS)
            }
            HS.values.length >= 13 && (IS = HS.values[12]);
            break;
          case PS.ANIMATIONTYPE_MATRIX:
            xS = tS.e.FromArray(HS.values), HS.values.length >= 17 && (IS = HS.values[16]);
            break;
          case PS.ANIMATIONTYPE_COLOR3:
            xS = bS.b.FromArray(HS.values), HS.values[3] && (qS = bS.b.FromArray(HS.values[3])), HS.values[4] && (uS = bS.b.FromArray(HS.values[4])), HS.values[5] && (IS = HS.values[5]);
            break;
          case PS.ANIMATIONTYPE_COLOR4:
            xS = bS.c.FromArray(HS.values), HS.values[4] && (qS = bS.c.FromArray(HS.values[4])), HS.values[5] && (uS = bS.c.FromArray(HS.values[5])), HS.values[6] && (IS = HS.values[6]);
            break;
          case PS.ANIMATIONTYPE_VECTOR3:
          default:
            xS = tS.n.FromArray(HS.values), HS.values[3] && (qS = tS.n.FromArray(HS.values[3])), HS.values[4] && (uS = tS.n.FromArray(HS.values[4])), HS.values[5] && (IS = HS.values[5])
        }
        const fS = {};
        fS.frame = HS.frame, fS.value = xS, void 0 != qS && (fS.inTangent = qS), void 0 != uS && (fS.outTangent = uS), void 0 != IS && (fS.interpolation = IS), XS.push(fS)
      }
      if (HS.setKeys(XS), SS.HG)
        for (NS = 0; NS < SS.HG.length; NS++) xS = SS.HG[NS], HS.createRange(xS.name, xS.from, xS.to);
      return HS
    }
    async function cS(SS, HS) {
      return await new Promise(((gS, tS) => {
        const bS = new uS.c;
        bS.addEventListener("readystatechange", (() => {
          if (4 == bS.readyState)
            if (200 == bS.status) {
              let HS = JSON.parse(bS.responseText);
              if (HS.animations && (HS = HS.animations), HS.length) {
                const SS = [];
                for (const gS of HS) SS.push(dS(gS));
                gS(SS)
              } else {
                const tS = dS(HS);
                SS && (tS.name = SS), gS(tS)
              }
            } else tS("Unable to load the animation")
        })), bS.open("GET", HS), bS.send()
      }))
    }
    async function vS(SS) {
      const HS = this?.SnippetUrl ?? PS.SnippetUrl;
      return await new Promise(((gS, tS) => {
        const bS = new uS.c;
        bS.addEventListener("readystatechange", (() => {
          if (4 == bS.readyState)
            if (200 == bS.status) {
              const HS = JSON.parse(JSON.parse(bS.responseText).jsonPayload);
              if (HS.animations) {
                const tS = JSON.parse(HS.animations),
                  bS = [];
                for (const HS of tS.animations) {
                  const gS = dS(HS);
                  gS.snippetId = SS, bS.push(gS)
                }
                gS(bS)
              } else {
                const tS = dS(JSON.parse(HS.animation));
                tS.snippetId = SS, gS(tS)
              }
            } else tS("Unable to load the snippet " + SS)
        })), bS.open("GET", HS + "/" + SS.replace(/#/g, "/")), bS.send()
      }))
    }
    PS._UniqueIdGenerator = 0, PS.AllowMatricesInterpolation = !1, PS.AllowMatrixDecomposeForInterpolation = !0, PS.InheritOriginalValueFromActiveAnimations = !1, PS.SnippetUrl = "https://snippet.babylonjs.com", PS.ANIMATIONTYPE_FLOAT = 0, PS.ANIMATIONTYPE_VECTOR3 = 1, PS.ANIMATIONTYPE_QUATERNION = 2, PS.ANIMATIONTYPE_MATRIX = 3, PS.ANIMATIONTYPE_COLOR3 = 4, PS.ANIMATIONTYPE_COLOR4 = 7, PS.ANIMATIONTYPE_VECTOR2 = 5, PS.ANIMATIONTYPE_SIZE = 6, PS.ANIMATIONLOOPMODE_RELATIVE = 0, PS.ANIMATIONLOOPMODE_CYCLE = 1, PS.ANIMATIONLOOPMODE_CONSTANT = 2, PS.ANIMATIONLOOPMODE_YOYO = 4, PS.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const ES = vS;
    let LS = !1;

    function YS() {
      LS || (LS = !0, PS.Parse = dS, PS.ParseFromFileAsync = cS, PS.ParseFromSnippetAsync = vS, PS.CreateFromSnippetAsync = ES, PS.CreateAnimation = DS, PS.CreateAndStartAnimation = wS, PS.CreateAndStartHierarchyAnimation = hS, PS.CreateMergeAndStartAnimation = ZS, PS.MakeAnimationAdditive = QS, PS.TransitionTo = JS, PS.AppendSerializedAnimations = OS, (0, fS.f)("BABYLON.Animation", PS), NS.e._AnimationRangeFactory = (SS, HS, gS) => new xS.c(SS, HS, gS))
    }
  },
  41117: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS
    });
    class tS {
      constructor(SS, HS, gS) {
        this.name = SS, this.from = HS, this.to = gS
      }
      clone() {
        return new tS(this.name, this.from, this.to)
      }
    }
  },
  41157: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS.b,
      f: () => tS.h
    });
    var tS = gS(40183);
    (0, tS.e)()
  },
  41142: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS.i
    });
    var tS = gS(40510);
    (0, tS.e)()
  },
  41125: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => tS.c
    });
    var tS = gS(40495);
    (0, tS.e)()
  },
  41166: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => tS.e
    });
    var tS = gS(40439);
    (0, tS.i)()
  },
  41123: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS.f
    });
    var tS = gS(40473);
    (0, tS.d)()
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);