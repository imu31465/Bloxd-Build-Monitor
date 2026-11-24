export const id = 279;
export const ids = [279];
export const modules = {
  41124: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => WB,
      d: () => jB,
      h: () => qB,
      i: () => yB,
      j: () => zB,
      m: () => gB,
      p: () => NB,
      s: () => FB
    });
    var TB = ZB(37120),
      JB = ZB(37311),
      oB = ZB(37158),
      GB = ZB(41133),
      vB = ZB(40272),
      kB = ZB(40077),
      cB = ZB(40118),
      nB = ZB(40085),
      hB = ZB(37170);
    const zB = Object.freeze(new TB.f(0, 0, 0, 0)),
      FB = Object.freeze(TB.s.Zero()),
      NB = Object.freeze(TB.p.Zero()),
      gB = Object.freeze(kB.b.Zero()),
      qB = Object.freeze(JB.c.Black()),
      yB = Object.freeze(new JB.g(0, 0, 0, 0)),
      UB = {
        key: 0,
        repeatCount: 0,
        AT: 2
      };
    class WB {
      static _PrepareAnimation(BB, IB, ZB, oB, GB, vB, cB, nB) {
        let hB;
        if (!isNaN(parseFloat(GB)) && isFinite(GB) ? hB = WB.ANIMATIONTYPE_FLOAT : GB instanceof TB.f ? hB = WB.ANIMATIONTYPE_QUATERNION : GB instanceof TB.s ? hB = WB.ANIMATIONTYPE_VECTOR3 : GB instanceof TB.p ? hB = WB.ANIMATIONTYPE_VECTOR2 : GB instanceof JB.c ? hB = WB.ANIMATIONTYPE_COLOR3 : GB instanceof JB.g ? hB = WB.ANIMATIONTYPE_COLOR4 : GB instanceof kB.b && (hB = WB.ANIMATIONTYPE_SIZE), void 0 == hB) return null;
        const zB = new WB(BB, IB, ZB, hB, cB),
          FB = [{
            frame: 0,
            value: GB
          }, {
            frame: oB,
            value: vB
          }];
        return zB.setKeys(FB), void 0 !== nB && zB.setEasingFunction(nB), zB
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const BB of this._runtimeAnimations)
          if (!BB.isStopped()) return !0;
        return !1
      }
      constructor(BB, IB, ZB, TB, JB, oB) {
        this.name = BB, this.targetProperty = IB, this.framePerSecond = ZB, this.dataType = TB, this.AT = JB, this.enableBlending = oB, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = IB.split("."), this.dataType = TB, this.AT = void 0 === JB ? WB.ANIMATIONLOOPMODE_CYCLE : JB, this.uniqueId = WB._UniqueIdGenerator++
      }
      toString(BB) {
        let IB = "Name: " + this.name + ", property: " + this.targetProperty;
        if (IB += ", datatype: " + ["Float", "rN", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], IB += ", nKeys: " + (this._keys ? this._keys.length : "none"), IB += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), BB) {
          IB += ", Ranges: {";
          let BB = !0;
          for (const ZB in this._ranges) BB || (IB += ", "), BB = !1, IB += ZB;
          IB += "}"
        }
        return IB
      }
      addEvent(BB) {
        this._events.push(BB), this._events.sort(((BB, IB) => BB.frame - IB.frame))
      }
      removeEvents(BB) {
        for (let IB = 0; IB < this._events.length; IB++) this._events[IB].frame === BB && (this._events.splice(IB, 1), IB--)
      }
      getEvents() {
        return this._events
      }
      createRange(BB, IB, ZB) {
        this._ranges[BB] || (this._ranges[BB] = new GB.b(BB, IB, ZB))
      }
      deleteRange(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const ZB = this._ranges[BB];
        if (ZB) {
          if (IB) {
            const BB = ZB.from,
              IB = ZB.to;
            for (let ZB = this._keys.length - 1; ZB >= 0; ZB--) this._keys[ZB].frame >= BB && this._keys[ZB].frame <= IB && this._keys.splice(ZB, 1)
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
        for (let IB = 0, ZB = this._keys.length; IB < ZB; IB++) BB < this._keys[IB].frame && (BB = this._keys[IB].frame);
        return BB
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(BB) {
        this._easingFunction = BB
      }
      floatInterpolateFunction(BB, IB, ZB) {
        return (0, oB.Lerp)(BB, IB, ZB)
      }
      floatInterpolateFunctionWithTangents(BB, IB, ZB, TB, JB) {
        return (0, oB.Hermite)(BB, IB, ZB, TB, JB)
      }
      quaternionInterpolateFunction(BB, IB, ZB) {
        return TB.f.Slerp(BB, IB, ZB)
      }
      quaternionInterpolateFunctionWithTangents(BB, IB, ZB, JB, oB) {
        return TB.f.Hermite(BB, IB, ZB, JB, oB).normalize()
      }
      vector3InterpolateFunction(BB, IB, ZB) {
        return TB.s.Lerp(BB, IB, ZB)
      }
      vector3InterpolateFunctionWithTangents(BB, IB, ZB, JB, oB) {
        return TB.s.Hermite(BB, IB, ZB, JB, oB)
      }
      vector2InterpolateFunction(BB, IB, ZB) {
        return TB.p.Lerp(BB, IB, ZB)
      }
      vector2InterpolateFunctionWithTangents(BB, IB, ZB, JB, oB) {
        return TB.p.Hermite(BB, IB, ZB, JB, oB)
      }
      sizeInterpolateFunction(BB, IB, ZB) {
        return kB.b.Lerp(BB, IB, ZB)
      }
      color3InterpolateFunction(BB, IB, ZB) {
        return JB.c.Lerp(BB, IB, ZB)
      }
      color3InterpolateFunctionWithTangents(BB, IB, ZB, TB, oB) {
        return JB.c.Hermite(BB, IB, ZB, TB, oB)
      }
      color4InterpolateFunction(BB, IB, ZB) {
        return JB.g.Lerp(BB, IB, ZB)
      }
      color4InterpolateFunctionWithTangents(BB, IB, ZB, TB, oB) {
        return JB.g.Hermite(BB, IB, ZB, TB, oB)
      }
      _getKeyValue(BB) {
        return "function" === typeof BB ? BB() : BB
      }
      evaluate(BB) {
        return UB.key = 0, this._interpolate(BB, UB)
      }
      _interpolate(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (IB.AT === WB.ANIMATIONLOOPMODE_CONSTANT && IB.repeatCount > 0) return IB.highLimitValue.clone ? IB.highLimitValue.clone() : IB.highLimitValue;
        const TB = this._keys;
        let JB;
        if (this._coreAnimation) JB = this._coreAnimation._key;
        else {
          const oB = TB.length;
          for (JB = IB.key; JB >= 0 && BB < TB[JB].frame;) --JB;
          for (; JB + 1 <= oB - 1 && BB >= TB[JB + 1].frame;) ++JB;
          if (IB.key = JB, JB < 0) return ZB ? void 0 : this._getKeyValue(TB[0].value);
          if (JB + 1 > oB - 1) return ZB ? void 0 : this._getKeyValue(TB[oB - 1].value);
          this._key = JB
        }
        const oB = TB[JB],
          GB = TB[JB + 1];
        if (ZB && (BB === oB.frame || BB === GB.frame)) return;
        const vB = this._getKeyValue(oB.value),
          kB = this._getKeyValue(GB.value);
        if (1 === oB.interpolation) return GB.frame > BB ? vB : kB;
        const cB = void 0 !== oB.outTangent && void 0 !== GB.inTangent,
          nB = GB.frame - oB.frame;
        let hB = (BB - oB.frame) / nB;
        const UB = oB.easingFunction || this.getEasingFunction();
        switch (UB && (hB = UB.ease(hB)), this.dataType) {
          case WB.ANIMATIONTYPE_FLOAT: {
            const BB = cB ? this.floatInterpolateFunctionWithTangents(vB, oB.outTangent * nB, kB, GB.inTangent * nB, hB) : this.floatInterpolateFunction(vB, kB, hB);
            switch (IB.AT) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (IB.offsetValue ?? 0) * IB.repeatCount + BB
            }
            break
          }
          case WB.ANIMATIONTYPE_QUATERNION: {
            const BB = cB ? this.quaternionInterpolateFunctionWithTangents(vB, oB.outTangent.scale(nB), kB, GB.inTangent.scale(nB), hB) : this.quaternionInterpolateFunction(vB, kB, hB);
            switch (IB.AT) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.addInPlace((IB.offsetValue || zB).scale(IB.repeatCount))
            }
            return BB
          }
          case WB.ANIMATIONTYPE_VECTOR3: {
            const BB = cB ? this.vector3InterpolateFunctionWithTangents(vB, oB.outTangent.scale(nB), kB, GB.inTangent.scale(nB), hB) : this.vector3InterpolateFunction(vB, kB, hB);
            switch (IB.AT) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((IB.offsetValue || FB).scale(IB.repeatCount))
            }
            break
          }
          case WB.ANIMATIONTYPE_VECTOR2: {
            const BB = cB ? this.vector2InterpolateFunctionWithTangents(vB, oB.outTangent.scale(nB), kB, GB.inTangent.scale(nB), hB) : this.vector2InterpolateFunction(vB, kB, hB);
            switch (IB.AT) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((IB.offsetValue || NB).scale(IB.repeatCount))
            }
            break
          }
          case WB.ANIMATIONTYPE_SIZE:
            switch (IB.AT) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(vB, kB, hB);
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(vB, kB, hB).add((IB.offsetValue || gB).scale(IB.repeatCount))
            }
            break;
          case WB.ANIMATIONTYPE_COLOR3: {
            const BB = cB ? this.color3InterpolateFunctionWithTangents(vB, oB.outTangent.scale(nB), kB, GB.inTangent.scale(nB), hB) : this.color3InterpolateFunction(vB, kB, hB);
            switch (IB.AT) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((IB.offsetValue || qB).scale(IB.repeatCount))
            }
            break
          }
          case WB.ANIMATIONTYPE_COLOR4: {
            const BB = cB ? this.color4InterpolateFunctionWithTangents(vB, oB.outTangent.scale(nB), kB, GB.inTangent.scale(nB), hB) : this.color4InterpolateFunction(vB, kB, hB);
            switch (IB.AT) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return BB;
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return BB.add((IB.offsetValue || yB).scale(IB.repeatCount))
            }
            break
          }
          case WB.ANIMATIONTYPE_MATRIX:
            switch (IB.AT) {
              case WB.ANIMATIONLOOPMODE_CYCLE:
              case WB.ANIMATIONLOOPMODE_CONSTANT:
              case WB.ANIMATIONLOOPMODE_YOYO:
                return WB.AllowMatricesInterpolation ? this.matrixInterpolateFunction(vB, kB, hB, IB.workValue) : vB;
              case WB.ANIMATIONLOOPMODE_RELATIVE:
              case WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return vB
            }
        }
        return 0
      }
      matrixInterpolateFunction(BB, IB, ZB, JB) {
        return WB.AllowMatrixDecomposeForInterpolation ? JB ? (TB.b.DecomposeLerpToRef(BB, IB, ZB, JB), JB) : TB.b.DecomposeLerp(BB, IB, ZB) : JB ? (TB.b.LerpToRef(BB, IB, ZB, JB), JB) : TB.b.Lerp(BB, IB, ZB)
      }
      clone() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IB = new WB(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.AT);
        if (IB.enableBlending = this.enableBlending, IB.blendingSpeed = this.blendingSpeed, this._keys && IB.setKeys(this._keys, !1, BB), this._ranges) {
          IB._ranges = {};
          for (const BB in this._ranges) {
            const ZB = this._ranges[BB];
            ZB && (IB._ranges[BB] = ZB.clone())
          }
        }
        return IB
      }
      setKeys(BB) {
        let IB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = BB;
        else if (this._keys = BB.slice(0), IB)
          for (let ZB = 0; ZB < this._keys.length; ZB++) {
            const BB = this._keys[ZB];
            this._keys[ZB] = {
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
        UB.key = 0;
        const IB = this._interpolate(BB, UB, !0);
        if (!IB) return this._keys[UB.key].frame === BB ? UB.key : UB.key + 1;
        const ZB = {
          frame: BB,
          value: IB.clone ? IB.clone() : IB
        };
        return this._keys.splice(UB.key + 1, 0, ZB), UB.key + 1
      }
      serialize() {
        const BB = {};
        BB.name = this.name, BB.property = this.targetProperty, BB.framePerSecond = this.framePerSecond, BB.dataType = this.dataType, BB.loopBehavior = this.AT, BB.enableBlending = this.enableBlending, BB.blendingSpeed = this.blendingSpeed;
        const IB = this.dataType;
        BB.keys = [];
        const ZB = this.getKeys();
        for (let TB = 0; TB < ZB.length; TB++) {
          const JB = ZB[TB],
            oB = {};
          switch (oB.frame = JB.frame, IB) {
            case WB.ANIMATIONTYPE_FLOAT:
              oB.values = [JB.value], void 0 !== JB.inTangent && oB.values.push(JB.inTangent), void 0 !== JB.outTangent && (void 0 === JB.inTangent && oB.values.push(void 0), oB.values.push(JB.outTangent)), void 0 !== JB.interpolation && (void 0 === JB.inTangent && oB.values.push(void 0), void 0 === JB.outTangent && oB.values.push(void 0), oB.values.push(JB.interpolation));
              break;
            case WB.ANIMATIONTYPE_QUATERNION:
            case WB.ANIMATIONTYPE_MATRIX:
            case WB.ANIMATIONTYPE_VECTOR3:
            case WB.ANIMATIONTYPE_COLOR3:
            case WB.ANIMATIONTYPE_COLOR4:
              oB.values = JB.value.HTB(), void 0 != JB.inTangent && oB.values.push(JB.inTangent.HTB()), void 0 != JB.outTangent && (void 0 === JB.inTangent && oB.values.push(void 0), oB.values.push(JB.outTangent.HTB())), void 0 !== JB.interpolation && (void 0 === JB.inTangent && oB.values.push(void 0), void 0 === JB.outTangent && oB.values.push(void 0), oB.values.push(JB.interpolation))
          }
          BB.keys.push(oB)
        }
        BB.vq = [];
        for (const TB in this._ranges) {
          const IB = this._ranges[TB];
          if (!IB) continue;
          const ZB = {};
          ZB.name = TB, ZB.from = IB.from, ZB.to = IB.to, BB.vq.push(ZB)
        }
        return BB
      }
      static _UniversalLerp(BB, IB, ZB) {
        const TB = BB.constructor;
        return TB.Lerp ? TB.Lerp(BB, IB, ZB) : TB.Slerp ? TB.Slerp(BB, IB, ZB) : BB.toFixed ? BB * (1 - ZB) + ZB * IB : IB
      }
    }

    function dB(BB, IB, ZB) {
      let JB;
      JB = "object" === typeof IB ? IB : {
        referenceFrame: IB ?? 0,
        range: ZB,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let oB = BB;
      JB.cloneOriginalAnimation && (oB = BB.clone(), oB.name = JB.clonedAnimationName || oB.name);
      const GB = oB.getKeys();
      if (!GB.length) return oB;
      const vB = JB.referenceFrame && JB.referenceFrame >= 0 ? JB.referenceFrame : 0;
      let kB = 0;
      const cB = GB[0];
      let nB = GB.length - 1;
      const hB = GB[nB],
        zB = {
          referenceValue: cB.value,
          referencePosition: TB.m.rN[0],
          referenceQuaternion: TB.m.Quaternion[0],
          referenceScaling: TB.m.rN[1],
          keyPosition: TB.m.rN[2],
          keyQuaternion: TB.m.Quaternion[1],
          keyScaling: TB.m.rN[3]
        };
      let FB = cB.frame,
        NB = hB.frame;
      if (JB.range) {
        const BB = oB.getRange(JB.range);
        BB && (FB = BB.from, NB = BB.to)
      } else FB = JB.fromFrame ?? FB, NB = JB.toFrame ?? NB;
      FB !== cB.frame && (kB = oB.createKeyForFrame(FB)), NB !== hB.frame && (nB = oB.createKeyForFrame(NB));
      const gB = oB.getKeys();
      if (1 === gB.length) {
        const BB = oB._getKeyValue(gB[0].value);
        zB.referenceValue = BB.clone ? BB.clone() : BB
      } else if (vB <= cB.frame) {
        const BB = oB._getKeyValue(cB.value);
        zB.referenceValue = BB.clone ? BB.clone() : BB
      } else if (vB >= hB.frame) {
        const BB = oB._getKeyValue(hB.value);
        zB.referenceValue = BB.clone ? BB.clone() : BB
      } else {
        UB.key = 0;
        const BB = oB._interpolate(vB, UB);
        zB.referenceValue = BB.clone ? BB.clone() : BB
      }
      oB.dataType === WB.ANIMATIONTYPE_QUATERNION ? zB.referenceValue.normalize().conjugateInPlace() : oB.dataType === WB.ANIMATIONTYPE_MATRIX && (zB.referenceValue.decompose(zB.referenceScaling, zB.referenceQuaternion, zB.referencePosition), zB.referenceQuaternion.normalize().conjugateInPlace());
      let qB = Number.MAX_VALUE;
      const yB = JB.clipKeys ? [] : null;
      for (let UB = kB; UB <= nB; UB++) {
        let BB = gB[UB];
        if ((yB || JB.cloneOriginalAnimation) && (BB = {
            frame: BB.frame,
            value: BB.value.clone ? BB.value.clone() : BB.value,
            inTangent: BB.inTangent,
            outTangent: BB.outTangent,
            interpolation: BB.interpolation,
            lockedTangent: BB.lockedTangent,
            easingFunction: BB.easingFunction
          }, yB && (qB === Number.MAX_VALUE && (qB = BB.frame), BB.frame -= qB, yB.push(BB))), !UB || oB.dataType === WB.ANIMATIONTYPE_FLOAT || BB.value !== cB.value) switch (oB.dataType) {
          case WB.ANIMATIONTYPE_MATRIX:
            BB.value.decompose(zB.keyScaling, zB.keyQuaternion, zB.keyPosition), zB.keyPosition.VTB(zB.referencePosition), zB.keyScaling.divideInPlace(zB.referenceScaling), zB.referenceQuaternion.multiplyToRef(zB.keyQuaternion, zB.keyQuaternion), TB.b.ComposeToRef(zB.keyScaling, zB.keyQuaternion, zB.keyPosition, BB.value);
            break;
          case WB.ANIMATIONTYPE_QUATERNION:
            zB.referenceValue.multiplyToRef(BB.value, BB.value);
            break;
          case WB.ANIMATIONTYPE_VECTOR2:
          case WB.ANIMATIONTYPE_VECTOR3:
          case WB.ANIMATIONTYPE_COLOR3:
          case WB.ANIMATIONTYPE_COLOR4:
            BB.value.subtractToRef(zB.referenceValue, BB.value);
            break;
          case WB.ANIMATIONTYPE_SIZE:
            BB.value.width -= zB.referenceValue.width, BB.value.height -= zB.referenceValue.height;
            break;
          default:
            BB.value -= zB.referenceValue
        }
      }
      return yB && oB.setKeys(yB, !0), oB
    }

    function CB(BB, IB, ZB, TB) {
      const JB = new WB(BB + "Animation", BB, ZB, IB, WB.ANIMATIONLOOPMODE_CONSTANT);
      return JB.setEasingFunction(TB), JB
    }

    function QB(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB) {
      const hB = WB._PrepareAnimation(BB, ZB, TB, JB, oB, GB, vB, kB);
      return hB ? (IB.JR && (nB = IB.JR()), nB ? nB.beginDirectAnimation(IB, [hB], 0, JB, hB.AT !== WB.ANIMATIONLOOPMODE_CONSTANT, 1, cB) : null) : null
    }

    function sB(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB) {
      const hB = WB._PrepareAnimation(BB, TB, JB, oB, GB, vB, kB, cB);
      if (!hB) return null;
      return IB.JR().beginDirectHierarchyAnimation(IB, ZB, [hB], 0, oB, 1 === hB.AT, 1, nB)
    }

    function wB(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB) {
      const nB = WB._PrepareAnimation(BB, ZB, TB, JB, oB, GB, vB, kB);
      return nB ? (IB.animations.push(nB), IB.JR().beginAnimation(IB, 0, JB, 1 === nB.AT, 1, cB)) : null
    }

    function OB(BB, IB, ZB, TB, JB, oB, GB) {
      let vB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        kB = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        cB = arguments.length > 9 ? arguments[9] : void 0;
      if (GB <= 0) return ZB[BB] = IB, vB && vB(), null;
      const nB = JB * (GB / 1e3);
      oB.setKeys(cB ?? [{
        frame: 0,
        value: ZB[BB].clone ? ZB[BB].clone() : ZB[BB]
      }, {
        frame: nB,
        value: IB
      }]), ZB.animations || (ZB.animations = []), ZB.animations.push(oB);
      return TB.beginAnimation(ZB, 0, nB, !1, 1, vB ?? void 0, void 0, kB)
    }

    function YB(BB, IB) {
      nB.b.AppendSerializedAnimations(BB, IB)
    }

    function iB(BB) {
      const IB = new WB(BB.name, BB.property, BB.framePerSecond, BB.dataType, BB.loopBehavior),
        ZB = BB.dataType,
        oB = [];
      let GB, vB;
      for (BB.enableBlending && (IB.enableBlending = BB.enableBlending), BB.blendingSpeed && (IB.blendingSpeed = BB.blendingSpeed), vB = 0; vB < BB.keys.length; vB++) {
        const IB = BB.keys[vB];
        let kB, cB, nB;
        switch (ZB) {
          case WB.ANIMATIONTYPE_FLOAT:
            GB = IB.values[0], IB.values.length >= 2 && (kB = IB.values[1]), IB.values.length >= 3 && (cB = IB.values[2]), IB.values.length >= 4 && (nB = IB.values[3]);
            break;
          case WB.ANIMATIONTYPE_QUATERNION:
            if (GB = TB.f.FromArray(IB.values), IB.values.length >= 8) {
              const BB = TB.f.FromArray(IB.values.slice(4, 8));
              BB.equals(TB.f.Zero()) || (kB = BB)
            }
            if (IB.values.length >= 12) {
              const BB = TB.f.FromArray(IB.values.slice(8, 12));
              BB.equals(TB.f.Zero()) || (cB = BB)
            }
            IB.values.length >= 13 && (nB = IB.values[12]);
            break;
          case WB.ANIMATIONTYPE_MATRIX:
            GB = TB.b.FromArray(IB.values), IB.values.length >= 17 && (nB = IB.values[16]);
            break;
          case WB.ANIMATIONTYPE_COLOR3:
            GB = JB.c.FromArray(IB.values), IB.values[3] && (kB = JB.c.FromArray(IB.values[3])), IB.values[4] && (cB = JB.c.FromArray(IB.values[4])), IB.values[5] && (nB = IB.values[5]);
            break;
          case WB.ANIMATIONTYPE_COLOR4:
            GB = JB.g.FromArray(IB.values), IB.values[4] && (kB = JB.g.FromArray(IB.values[4])), IB.values[5] && (cB = JB.g.FromArray(IB.values[5])), IB.values[6] && (nB = IB.values[6]);
            break;
          case WB.ANIMATIONTYPE_VECTOR3:
          default:
            GB = TB.s.FromArray(IB.values), IB.values[3] && (kB = TB.s.FromArray(IB.values[3])), IB.values[4] && (cB = TB.s.FromArray(IB.values[4])), IB.values[5] && (nB = IB.values[5])
        }
        const hB = {};
        hB.frame = IB.frame, hB.value = GB, void 0 != kB && (hB.inTangent = kB), void 0 != cB && (hB.outTangent = cB), void 0 != nB && (hB.interpolation = nB), oB.push(hB)
      }
      if (IB.setKeys(oB), BB.vq)
        for (vB = 0; vB < BB.vq.length; vB++) GB = BB.vq[vB], IB.createRange(GB.name, GB.from, GB.to);
      return IB
    }
    async function pB(BB, IB) {
      return await new Promise(((ZB, TB) => {
        const JB = new cB.d;
        JB.addEventListener("readystatechange", (() => {
          if (4 == JB.readyState)
            if (200 == JB.status) {
              let IB = JSON.parse(JB.responseText);
              if (IB.animations && (IB = IB.animations), IB.length) {
                const BB = [];
                for (const ZB of IB) BB.push(iB(ZB));
                ZB(BB)
              } else {
                const TB = iB(IB);
                BB && (TB.name = BB), ZB(TB)
              }
            } else TB("Unable to load the animation")
        })), JB.open("GET", IB), JB.send()
      }))
    }
    async function aB(BB) {
      const IB = this?.SnippetUrl ?? WB.SnippetUrl;
      return await new Promise(((ZB, TB) => {
        const JB = new cB.d;
        JB.addEventListener("readystatechange", (() => {
          if (4 == JB.readyState)
            if (200 == JB.status) {
              const IB = JSON.parse(JSON.parse(JB.responseText).jsonPayload);
              if (IB.animations) {
                const TB = JSON.parse(IB.animations),
                  JB = [];
                for (const IB of TB.animations) {
                  const ZB = iB(IB);
                  ZB.snippetId = BB, JB.push(ZB)
                }
                ZB(JB)
              } else {
                const TB = iB(JSON.parse(IB.animation));
                TB.snippetId = BB, ZB(TB)
              }
            } else TB("Unable to load the snippet " + BB)
        })), JB.open("GET", IB + "/" + BB.replace(/#/g, "/")), JB.send()
      }))
    }
    WB._UniqueIdGenerator = 0, WB.AllowMatricesInterpolation = !1, WB.AllowMatrixDecomposeForInterpolation = !0, WB.InheritOriginalValueFromActiveAnimations = !1, WB.SnippetUrl = "https://snippet.babylonjs.com", WB.ANIMATIONTYPE_FLOAT = 0, WB.ANIMATIONTYPE_VECTOR3 = 1, WB.ANIMATIONTYPE_QUATERNION = 2, WB.ANIMATIONTYPE_MATRIX = 3, WB.ANIMATIONTYPE_COLOR3 = 4, WB.ANIMATIONTYPE_COLOR4 = 7, WB.ANIMATIONTYPE_VECTOR2 = 5, WB.ANIMATIONTYPE_SIZE = 6, WB.ANIMATIONLOOPMODE_RELATIVE = 0, WB.ANIMATIONLOOPMODE_CYCLE = 1, WB.ANIMATIONLOOPMODE_CONSTANT = 2, WB.ANIMATIONLOOPMODE_YOYO = 4, WB.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const HB = aB;
    let MB = !1;

    function jB() {
      MB || (MB = !0, WB.Parse = iB, WB.ParseFromFileAsync = pB, WB.ParseFromSnippetAsync = aB, WB.CreateFromSnippetAsync = HB, WB.CreateAnimation = CB, WB.CreateAndStartAnimation = QB, WB.CreateAndStartHierarchyAnimation = sB, WB.CreateMergeAndStartAnimation = wB, WB.MakeAnimationAdditive = dB, WB.TransitionTo = OB, WB.AppendSerializedAnimations = YB, (0, hB.i)("BABYLON.Animation", WB), vB.e._AnimationRangeFactory = (BB, IB, ZB) => new GB.b(BB, IB, ZB))
    }
  },
  41133: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB
    });
    class TB {
      constructor(BB, IB, ZB) {
        this.name = BB, this.from = IB, this.to = ZB
      }
      clone() {
        return new TB(this.name, this.from, this.to)
      }
    }
  },
  41192: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB.e,
      e: () => TB.i
    });
    var TB = ZB(40188);
    (0, TB.f)()
  },
  41170: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB.e
    });
    var TB = ZB(40521);
    (0, TB.c)()
  },
  41144: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => TB.b
    });
    var TB = ZB(40510);
    (0, TB.f)()
  },
  41197: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB.c
    });
    var TB = ZB(40448);
    (0, TB.e)()
  },
  41140: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => TB.g
    });
    var TB = ZB(40492);
    (0, TB.c)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);