export const id = 302;
export const ids = [302];
export const modules = {
  42433: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => qV,
      g: () => gV,
      h: () => EV,
      l: () => BV,
      m: () => vV,
      n: () => bV,
      q: () => kV,
      u: () => rV
    });
    var JV = xV(38269),
      YV = xV(38389),
      UV = xV(38303),
      yV = xV(42435),
      pV = xV(41486),
      QV = xV(41272),
      nV = xV(41309),
      wV = xV(41279),
      ZV = xV(38318);
    const vV = Object.freeze(new JV.h(0, 0, 0, 0)),
      rV = Object.freeze(JV.o.Zero()),
      kV = Object.freeze(JV.n.Zero()),
      bV = Object.freeze(QV.b.Zero()),
      EV = Object.freeze(YV.d.Black()),
      BV = Object.freeze(new YV.h(0, 0, 0, 0)),
      jV = {
        key: 0,
        repeatCount: 0,
        AY: 2
      };
    class qV {
      static _PrepareAnimation(VV, eV, xV, UV, yV, pV, nV, wV) {
        let ZV;
        if (!isNaN(parseFloat(yV)) && isFinite(yV) ? ZV = qV.ANIMATIONTYPE_FLOAT : yV instanceof JV.h ? ZV = qV.ANIMATIONTYPE_QUATERNION : yV instanceof JV.o ? ZV = qV.ANIMATIONTYPE_VECTOR3 : yV instanceof JV.n ? ZV = qV.ANIMATIONTYPE_VECTOR2 : yV instanceof YV.d ? ZV = qV.ANIMATIONTYPE_COLOR3 : yV instanceof YV.h ? ZV = qV.ANIMATIONTYPE_COLOR4 : yV instanceof QV.b && (ZV = qV.ANIMATIONTYPE_SIZE), void 0 == ZV) return null;
        const vV = new qV(VV, eV, xV, ZV, nV),
          rV = [{
            frame: 0,
            value: yV
          }, {
            frame: UV,
            value: pV
          }];
        return vV.setKeys(rV), void 0 !== wV && vV.setEasingFunction(wV), vV
      }
      get runtimeAnimations() {
        return this._runtimeAnimations
      }
      get hasRunningRuntimeAnimations() {
        for (const VV of this._runtimeAnimations)
          if (!VV.isStopped()) return !0;
        return !1
      }
      constructor(VV, eV, xV, JV, YV, UV) {
        this.name = VV, this.targetProperty = eV, this.framePerSecond = xV, this.dataType = JV, this.AY = YV, this.enableBlending = UV, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._coreAnimation = null, this.targetPropertyPath = eV.split("."), this.dataType = JV, this.AY = void 0 === YV ? qV.ANIMATIONLOOPMODE_CYCLE : YV, this.uniqueId = qV._UniqueIdGenerator++
      }
      toString(VV) {
        let eV = "Name: " + this.name + ", property: " + this.targetProperty;
        if (eV += ", datatype: " + ["Float", "Ik", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], eV += ", nKeys: " + (this._keys ? this._keys.length : "none"), eV += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), VV) {
          eV += ", Ranges: {";
          let VV = !0;
          for (const xV in this._ranges) VV || (eV += ", "), VV = !1, eV += xV;
          eV += "}"
        }
        return eV
      }
      addEvent(VV) {
        this._events.push(VV), this._events.sort(((VV, eV) => VV.frame - eV.frame))
      }
      removeEvents(VV) {
        for (let eV = 0; eV < this._events.length; eV++) this._events[eV].frame === VV && (this._events.splice(eV, 1), eV--)
      }
      getEvents() {
        return this._events
      }
      createRange(VV, eV, xV) {
        this._ranges[VV] || (this._ranges[VV] = new yV.e(VV, eV, xV))
      }
      deleteRange(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        const xV = this._ranges[VV];
        if (xV) {
          if (eV) {
            const VV = xV.from,
              eV = xV.to;
            for (let xV = this._keys.length - 1; xV >= 0; xV--) this._keys[xV].frame >= VV && this._keys[xV].frame <= eV && this._keys.splice(xV, 1)
          }
          this._ranges[VV] = null
        }
      }
      getRange(VV) {
        return this._ranges[VV]
      }
      getKeys() {
        return this._keys
      }
      getHighestFrame() {
        let VV = 0;
        for (let eV = 0, xV = this._keys.length; eV < xV; eV++) VV < this._keys[eV].frame && (VV = this._keys[eV].frame);
        return VV
      }
      getEasingFunction() {
        return this._easingFunction
      }
      setEasingFunction(VV) {
        this._easingFunction = VV
      }
      floatInterpolateFunction(VV, eV, xV) {
        return (0, UV.Lerp)(VV, eV, xV)
      }
      floatInterpolateFunctionWithTangents(VV, eV, xV, JV, YV) {
        return (0, UV.Hermite)(VV, eV, xV, JV, YV)
      }
      quaternionInterpolateFunction(VV, eV, xV) {
        return JV.h.Slerp(VV, eV, xV)
      }
      quaternionInterpolateFunctionWithTangents(VV, eV, xV, YV, UV) {
        return JV.h.Hermite(VV, eV, xV, YV, UV).normalize()
      }
      vector3InterpolateFunction(VV, eV, xV) {
        return JV.o.Lerp(VV, eV, xV)
      }
      vector3InterpolateFunctionWithTangents(VV, eV, xV, YV, UV) {
        return JV.o.Hermite(VV, eV, xV, YV, UV)
      }
      vector2InterpolateFunction(VV, eV, xV) {
        return JV.n.Lerp(VV, eV, xV)
      }
      vector2InterpolateFunctionWithTangents(VV, eV, xV, YV, UV) {
        return JV.n.Hermite(VV, eV, xV, YV, UV)
      }
      sizeInterpolateFunction(VV, eV, xV) {
        return QV.b.Lerp(VV, eV, xV)
      }
      color3InterpolateFunction(VV, eV, xV) {
        return YV.d.Lerp(VV, eV, xV)
      }
      color3InterpolateFunctionWithTangents(VV, eV, xV, JV, UV) {
        return YV.d.Hermite(VV, eV, xV, JV, UV)
      }
      color4InterpolateFunction(VV, eV, xV) {
        return YV.h.Lerp(VV, eV, xV)
      }
      color4InterpolateFunctionWithTangents(VV, eV, xV, JV, UV) {
        return YV.h.Hermite(VV, eV, xV, JV, UV)
      }
      _getKeyValue(VV) {
        return "function" === typeof VV ? VV() : VV
      }
      evaluate(VV) {
        return jV.key = 0, this._interpolate(VV, jV)
      }
      _interpolate(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (eV.AY === qV.ANIMATIONLOOPMODE_CONSTANT && eV.repeatCount > 0) return eV.highLimitValue.clone ? eV.highLimitValue.clone() : eV.highLimitValue;
        const JV = this._keys;
        let YV;
        if (this._coreAnimation) YV = this._coreAnimation._key;
        else {
          const UV = JV.length;
          for (YV = eV.key; YV >= 0 && VV < JV[YV].frame;) --YV;
          for (; YV + 1 <= UV - 1 && VV >= JV[YV + 1].frame;) ++YV;
          if (eV.key = YV, YV < 0) return xV ? void 0 : this._getKeyValue(JV[0].value);
          if (YV + 1 > UV - 1) return xV ? void 0 : this._getKeyValue(JV[UV - 1].value);
          this._key = YV
        }
        const UV = JV[YV],
          yV = JV[YV + 1];
        if (xV && (VV === UV.frame || VV === yV.frame)) return;
        const pV = this._getKeyValue(UV.value),
          QV = this._getKeyValue(yV.value);
        if (1 === UV.interpolation) return yV.frame > VV ? pV : QV;
        const nV = void 0 !== UV.outTangent && void 0 !== yV.inTangent,
          wV = yV.frame - UV.frame;
        let ZV = (VV - UV.frame) / wV;
        const jV = UV.easingFunction || this.getEasingFunction();
        switch (jV && (ZV = jV.ease(ZV)), this.dataType) {
          case qV.ANIMATIONTYPE_FLOAT: {
            const VV = nV ? this.floatInterpolateFunctionWithTangents(pV, UV.outTangent * wV, QV, yV.inTangent * wV, ZV) : this.floatInterpolateFunction(pV, QV, ZV);
            switch (eV.AY) {
              case qV.ANIMATIONLOOPMODE_CYCLE:
              case qV.ANIMATIONLOOPMODE_CONSTANT:
              case qV.ANIMATIONLOOPMODE_YOYO:
                return VV;
              case qV.ANIMATIONLOOPMODE_RELATIVE:
              case qV.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return (eV.offsetValue ?? 0) * eV.repeatCount + VV
            }
            break
          }
          case qV.ANIMATIONTYPE_QUATERNION: {
            const VV = nV ? this.quaternionInterpolateFunctionWithTangents(pV, UV.outTangent.scale(wV), QV, yV.inTangent.scale(wV), ZV) : this.quaternionInterpolateFunction(pV, QV, ZV);
            switch (eV.AY) {
              case qV.ANIMATIONLOOPMODE_CYCLE:
              case qV.ANIMATIONLOOPMODE_CONSTANT:
              case qV.ANIMATIONLOOPMODE_YOYO:
                return VV;
              case qV.ANIMATIONLOOPMODE_RELATIVE:
              case qV.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return VV.addInPlace((eV.offsetValue || vV).scale(eV.repeatCount))
            }
            return VV
          }
          case qV.ANIMATIONTYPE_VECTOR3: {
            const VV = nV ? this.vector3InterpolateFunctionWithTangents(pV, UV.outTangent.scale(wV), QV, yV.inTangent.scale(wV), ZV) : this.vector3InterpolateFunction(pV, QV, ZV);
            switch (eV.AY) {
              case qV.ANIMATIONLOOPMODE_CYCLE:
              case qV.ANIMATIONLOOPMODE_CONSTANT:
              case qV.ANIMATIONLOOPMODE_YOYO:
                return VV;
              case qV.ANIMATIONLOOPMODE_RELATIVE:
              case qV.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return VV.add((eV.offsetValue || rV).scale(eV.repeatCount))
            }
            break
          }
          case qV.ANIMATIONTYPE_VECTOR2: {
            const VV = nV ? this.vector2InterpolateFunctionWithTangents(pV, UV.outTangent.scale(wV), QV, yV.inTangent.scale(wV), ZV) : this.vector2InterpolateFunction(pV, QV, ZV);
            switch (eV.AY) {
              case qV.ANIMATIONLOOPMODE_CYCLE:
              case qV.ANIMATIONLOOPMODE_CONSTANT:
              case qV.ANIMATIONLOOPMODE_YOYO:
                return VV;
              case qV.ANIMATIONLOOPMODE_RELATIVE:
              case qV.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return VV.add((eV.offsetValue || kV).scale(eV.repeatCount))
            }
            break
          }
          case qV.ANIMATIONTYPE_SIZE:
            switch (eV.AY) {
              case qV.ANIMATIONLOOPMODE_CYCLE:
              case qV.ANIMATIONLOOPMODE_CONSTANT:
              case qV.ANIMATIONLOOPMODE_YOYO:
                return this.sizeInterpolateFunction(pV, QV, ZV);
              case qV.ANIMATIONLOOPMODE_RELATIVE:
              case qV.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return this.sizeInterpolateFunction(pV, QV, ZV).add((eV.offsetValue || bV).scale(eV.repeatCount))
            }
            break;
          case qV.ANIMATIONTYPE_COLOR3: {
            const VV = nV ? this.color3InterpolateFunctionWithTangents(pV, UV.outTangent.scale(wV), QV, yV.inTangent.scale(wV), ZV) : this.color3InterpolateFunction(pV, QV, ZV);
            switch (eV.AY) {
              case qV.ANIMATIONLOOPMODE_CYCLE:
              case qV.ANIMATIONLOOPMODE_CONSTANT:
              case qV.ANIMATIONLOOPMODE_YOYO:
                return VV;
              case qV.ANIMATIONLOOPMODE_RELATIVE:
              case qV.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return VV.add((eV.offsetValue || EV).scale(eV.repeatCount))
            }
            break
          }
          case qV.ANIMATIONTYPE_COLOR4: {
            const VV = nV ? this.color4InterpolateFunctionWithTangents(pV, UV.outTangent.scale(wV), QV, yV.inTangent.scale(wV), ZV) : this.color4InterpolateFunction(pV, QV, ZV);
            switch (eV.AY) {
              case qV.ANIMATIONLOOPMODE_CYCLE:
              case qV.ANIMATIONLOOPMODE_CONSTANT:
              case qV.ANIMATIONLOOPMODE_YOYO:
                return VV;
              case qV.ANIMATIONLOOPMODE_RELATIVE:
              case qV.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return VV.add((eV.offsetValue || BV).scale(eV.repeatCount))
            }
            break
          }
          case qV.ANIMATIONTYPE_MATRIX:
            switch (eV.AY) {
              case qV.ANIMATIONLOOPMODE_CYCLE:
              case qV.ANIMATIONLOOPMODE_CONSTANT:
              case qV.ANIMATIONLOOPMODE_YOYO:
                return qV.AllowMatricesInterpolation ? this.matrixInterpolateFunction(pV, QV, ZV, eV.workValue) : pV;
              case qV.ANIMATIONLOOPMODE_RELATIVE:
              case qV.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT:
                return pV
            }
        }
        return 0
      }
      matrixInterpolateFunction(VV, eV, xV, YV) {
        return qV.AllowMatrixDecomposeForInterpolation ? YV ? (JV.d.DecomposeLerpToRef(VV, eV, xV, YV), YV) : JV.d.DecomposeLerp(VV, eV, xV) : YV ? (JV.d.LerpToRef(VV, eV, xV, YV), YV) : JV.d.Lerp(VV, eV, xV)
      }
      clone() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const eV = new qV(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.AY);
        if (eV.enableBlending = this.enableBlending, eV.blendingSpeed = this.blendingSpeed, this._keys && eV.setKeys(this._keys, !1, VV), this._ranges) {
          eV._ranges = {};
          for (const VV in this._ranges) {
            const xV = this._ranges[VV];
            xV && (eV._ranges[VV] = xV.clone())
          }
        }
        return eV
      }
      setKeys(VV) {
        let eV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (arguments.length > 1 && void 0 !== arguments[1] && arguments[1]) this._keys = VV;
        else if (this._keys = VV.slice(0), eV)
          for (let xV = 0; xV < this._keys.length; xV++) {
            const VV = this._keys[xV];
            this._keys[xV] = {
              frame: VV.frame,
              value: VV.value.clone ? VV.value.clone() : VV.value,
              inTangent: VV.inTangent && VV.inTangent.clone ? VV.inTangent.clone() : VV.inTangent,
              outTangent: VV.outTangent && VV.outTangent.clone ? VV.outTangent.clone() : VV.outTangent,
              interpolation: VV.interpolation,
              lockedTangent: VV.lockedTangent,
              easingFunction: VV.easingFunction
            }
          }
      }
      createKeyForFrame(VV) {
        jV.key = 0;
        const eV = this._interpolate(VV, jV, !0);
        if (!eV) return this._keys[jV.key].frame === VV ? jV.key : jV.key + 1;
        const xV = {
          frame: VV,
          value: eV.clone ? eV.clone() : eV
        };
        return this._keys.splice(jV.key + 1, 0, xV), jV.key + 1
      }
      serialize() {
        const VV = {};
        VV.name = this.name, VV.property = this.targetProperty, VV.framePerSecond = this.framePerSecond, VV.dataType = this.dataType, VV.loopBehavior = this.AY, VV.enableBlending = this.enableBlending, VV.blendingSpeed = this.blendingSpeed;
        const eV = this.dataType;
        VV.keys = [];
        const xV = this.getKeys();
        for (let JV = 0; JV < xV.length; JV++) {
          const YV = xV[JV],
            UV = {};
          switch (UV.frame = YV.frame, eV) {
            case qV.ANIMATIONTYPE_FLOAT:
              UV.values = [YV.value], void 0 !== YV.inTangent && UV.values.push(YV.inTangent), void 0 !== YV.outTangent && (void 0 === YV.inTangent && UV.values.push(void 0), UV.values.push(YV.outTangent)), void 0 !== YV.interpolation && (void 0 === YV.inTangent && UV.values.push(void 0), void 0 === YV.outTangent && UV.values.push(void 0), UV.values.push(YV.interpolation));
              break;
            case qV.ANIMATIONTYPE_QUATERNION:
            case qV.ANIMATIONTYPE_MATRIX:
            case qV.ANIMATIONTYPE_VECTOR3:
            case qV.ANIMATIONTYPE_COLOR3:
            case qV.ANIMATIONTYPE_COLOR4:
              UV.values = YV.value.WYV(), void 0 != YV.inTangent && UV.values.push(YV.inTangent.WYV()), void 0 != YV.outTangent && (void 0 === YV.inTangent && UV.values.push(void 0), UV.values.push(YV.outTangent.WYV())), void 0 !== YV.interpolation && (void 0 === YV.inTangent && UV.values.push(void 0), void 0 === YV.outTangent && UV.values.push(void 0), UV.values.push(YV.interpolation))
          }
          VV.keys.push(UV)
        }
        VV.TE = [];
        for (const JV in this._ranges) {
          const eV = this._ranges[JV];
          if (!eV) continue;
          const xV = {};
          xV.name = JV, xV.from = eV.from, xV.to = eV.to, VV.TE.push(xV)
        }
        return VV
      }
      static _UniversalLerp(VV, eV, xV) {
        const JV = VV.constructor;
        return JV.Lerp ? JV.Lerp(VV, eV, xV) : JV.Slerp ? JV.Slerp(VV, eV, xV) : VV.toFixed ? VV * (1 - xV) + xV * eV : eV
      }
    }

    function tV(VV, eV, xV) {
      let YV;
      YV = "object" === typeof eV ? eV : {
        referenceFrame: eV ?? 0,
        range: xV,
        cloneOriginalAnimation: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        clonedAnimationName: arguments.length > 4 ? arguments[4] : void 0
      };
      let UV = VV;
      YV.cloneOriginalAnimation && (UV = VV.clone(), UV.name = YV.clonedAnimationName || UV.name);
      const yV = UV.getKeys();
      if (!yV.length) return UV;
      const pV = YV.referenceFrame && YV.referenceFrame >= 0 ? YV.referenceFrame : 0;
      let QV = 0;
      const nV = yV[0];
      let wV = yV.length - 1;
      const ZV = yV[wV],
        vV = {
          referenceValue: nV.value,
          referencePosition: JV.l.Ik[0],
          referenceQuaternion: JV.l.Quaternion[0],
          referenceScaling: JV.l.Ik[1],
          keyPosition: JV.l.Ik[2],
          keyQuaternion: JV.l.Quaternion[1],
          keyScaling: JV.l.Ik[3]
        };
      let rV = nV.frame,
        kV = ZV.frame;
      if (YV.range) {
        const VV = UV.getRange(YV.range);
        VV && (rV = VV.from, kV = VV.to)
      } else rV = YV.fromFrame ?? rV, kV = YV.toFrame ?? kV;
      rV !== nV.frame && (QV = UV.createKeyForFrame(rV)), kV !== ZV.frame && (wV = UV.createKeyForFrame(kV));
      const bV = UV.getKeys();
      if (1 === bV.length) {
        const VV = UV._getKeyValue(bV[0].value);
        vV.referenceValue = VV.clone ? VV.clone() : VV
      } else if (pV <= nV.frame) {
        const VV = UV._getKeyValue(nV.value);
        vV.referenceValue = VV.clone ? VV.clone() : VV
      } else if (pV >= ZV.frame) {
        const VV = UV._getKeyValue(ZV.value);
        vV.referenceValue = VV.clone ? VV.clone() : VV
      } else {
        jV.key = 0;
        const VV = UV._interpolate(pV, jV);
        vV.referenceValue = VV.clone ? VV.clone() : VV
      }
      UV.dataType === qV.ANIMATIONTYPE_QUATERNION ? vV.referenceValue.normalize().conjugateInPlace() : UV.dataType === qV.ANIMATIONTYPE_MATRIX && (vV.referenceValue.decompose(vV.referenceScaling, vV.referenceQuaternion, vV.referencePosition), vV.referenceQuaternion.normalize().conjugateInPlace());
      let EV = Number.MAX_VALUE;
      const BV = YV.clipKeys ? [] : null;
      for (let jV = QV; jV <= wV; jV++) {
        let VV = bV[jV];
        if ((BV || YV.cloneOriginalAnimation) && (VV = {
            frame: VV.frame,
            value: VV.value.clone ? VV.value.clone() : VV.value,
            inTangent: VV.inTangent,
            outTangent: VV.outTangent,
            interpolation: VV.interpolation,
            lockedTangent: VV.lockedTangent,
            easingFunction: VV.easingFunction
          }, BV && (EV === Number.MAX_VALUE && (EV = VV.frame), VV.frame -= EV, BV.push(VV))), !jV || UV.dataType === qV.ANIMATIONTYPE_FLOAT || VV.value !== nV.value) switch (UV.dataType) {
          case qV.ANIMATIONTYPE_MATRIX:
            VV.value.decompose(vV.keyScaling, vV.keyQuaternion, vV.keyPosition), vV.keyPosition.IYV(vV.referencePosition), vV.keyScaling.divideInPlace(vV.referenceScaling), vV.referenceQuaternion.multiplyToRef(vV.keyQuaternion, vV.keyQuaternion), JV.d.ComposeToRef(vV.keyScaling, vV.keyQuaternion, vV.keyPosition, VV.value);
            break;
          case qV.ANIMATIONTYPE_QUATERNION:
            vV.referenceValue.multiplyToRef(VV.value, VV.value);
            break;
          case qV.ANIMATIONTYPE_VECTOR2:
          case qV.ANIMATIONTYPE_VECTOR3:
          case qV.ANIMATIONTYPE_COLOR3:
          case qV.ANIMATIONTYPE_COLOR4:
            VV.value.subtractToRef(vV.referenceValue, VV.value);
            break;
          case qV.ANIMATIONTYPE_SIZE:
            VV.value.width -= vV.referenceValue.width, VV.value.height -= vV.referenceValue.height;
            break;
          default:
            VV.value -= vV.referenceValue
        }
      }
      return BV && UV.setKeys(BV, !0), UV
    }

    function FV(VV, eV, xV, JV) {
      const YV = new qV(VV + "Animation", VV, xV, eV, qV.ANIMATIONLOOPMODE_CONSTANT);
      return YV.setEasingFunction(JV), YV
    }

    function TV(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV) {
      const ZV = qV._PrepareAnimation(VV, xV, JV, YV, UV, yV, pV, QV);
      return ZV ? (eV.dD && (wV = eV.dD()), wV ? wV.beginDirectAnimation(eV, [ZV], 0, YV, ZV.AY !== qV.ANIMATIONLOOPMODE_CONSTANT, 1, nV) : null) : null
    }

    function PV(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV) {
      const ZV = qV._PrepareAnimation(VV, JV, YV, UV, yV, pV, QV, nV);
      if (!ZV) return null;
      return eV.dD().beginDirectHierarchyAnimation(eV, xV, [ZV], 0, UV, 1 === ZV.AY, 1, wV)
    }

    function AV(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV) {
      const wV = qV._PrepareAnimation(VV, xV, JV, YV, UV, yV, pV, QV);
      return wV ? (eV.animations.push(wV), eV.dD().beginAnimation(eV, 0, YV, 1 === wV.AY, 1, nV)) : null
    }

    function NV(VV, eV, xV, JV, YV, UV, yV) {
      let pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null,
        QV = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8],
        nV = arguments.length > 9 ? arguments[9] : void 0;
      if (yV <= 0) return xV[VV] = eV, pV && pV(), null;
      const wV = YV * (yV / 1e3);
      UV.setKeys(nV ?? [{
        frame: 0,
        value: xV[VV].clone ? xV[VV].clone() : xV[VV]
      }, {
        frame: wV,
        value: eV
      }]), xV.animations || (xV.animations = []), xV.animations.push(UV);
      return JV.beginAnimation(xV, 0, wV, !1, 1, pV ?? void 0, void 0, QV)
    }

    function XV(VV, eV) {
      wV.b.AppendSerializedAnimations(VV, eV)
    }

    function MV(VV) {
      const eV = new qV(VV.name, VV.property, VV.framePerSecond, VV.dataType, VV.loopBehavior),
        xV = VV.dataType,
        UV = [];
      let yV, pV;
      for (VV.enableBlending && (eV.enableBlending = VV.enableBlending), VV.blendingSpeed && (eV.blendingSpeed = VV.blendingSpeed), pV = 0; pV < VV.keys.length; pV++) {
        const eV = VV.keys[pV];
        let QV, nV, wV;
        switch (xV) {
          case qV.ANIMATIONTYPE_FLOAT:
            yV = eV.values[0], eV.values.length >= 2 && (QV = eV.values[1]), eV.values.length >= 3 && (nV = eV.values[2]), eV.values.length >= 4 && (wV = eV.values[3]);
            break;
          case qV.ANIMATIONTYPE_QUATERNION:
            if (yV = JV.h.FromArray(eV.values), eV.values.length >= 8) {
              const VV = JV.h.FromArray(eV.values.slice(4, 8));
              VV.equals(JV.h.Zero()) || (QV = VV)
            }
            if (eV.values.length >= 12) {
              const VV = JV.h.FromArray(eV.values.slice(8, 12));
              VV.equals(JV.h.Zero()) || (nV = VV)
            }
            eV.values.length >= 13 && (wV = eV.values[12]);
            break;
          case qV.ANIMATIONTYPE_MATRIX:
            yV = JV.d.FromArray(eV.values), eV.values.length >= 17 && (wV = eV.values[16]);
            break;
          case qV.ANIMATIONTYPE_COLOR3:
            yV = YV.d.FromArray(eV.values), eV.values[3] && (QV = YV.d.FromArray(eV.values[3])), eV.values[4] && (nV = YV.d.FromArray(eV.values[4])), eV.values[5] && (wV = eV.values[5]);
            break;
          case qV.ANIMATIONTYPE_COLOR4:
            yV = YV.h.FromArray(eV.values), eV.values[4] && (QV = YV.h.FromArray(eV.values[4])), eV.values[5] && (nV = YV.h.FromArray(eV.values[5])), eV.values[6] && (wV = eV.values[6]);
            break;
          case qV.ANIMATIONTYPE_VECTOR3:
          default:
            yV = JV.o.FromArray(eV.values), eV.values[3] && (QV = JV.o.FromArray(eV.values[3])), eV.values[4] && (nV = JV.o.FromArray(eV.values[4])), eV.values[5] && (wV = eV.values[5])
        }
        const ZV = {};
        ZV.frame = eV.frame, ZV.value = yV, void 0 != QV && (ZV.inTangent = QV), void 0 != nV && (ZV.outTangent = nV), void 0 != wV && (ZV.interpolation = wV), UV.push(ZV)
      }
      if (eV.setKeys(UV), VV.TE)
        for (pV = 0; pV < VV.TE.length; pV++) yV = VV.TE[pV], eV.createRange(yV.name, yV.from, yV.to);
      return eV
    }
    async function zV(VV, eV) {
      return await new Promise(((xV, JV) => {
        const YV = new nV.d;
        YV.addEventListener("readystatechange", (() => {
          if (4 == YV.readyState)
            if (200 == YV.status) {
              let eV = JSON.parse(YV.responseText);
              if (eV.animations && (eV = eV.animations), eV.length) {
                const VV = [];
                for (const xV of eV) VV.push(MV(xV));
                xV(VV)
              } else {
                const JV = MV(eV);
                VV && (JV.name = VV), xV(JV)
              }
            } else JV("Unable to load the animation")
        })), YV.open("GET", eV), YV.send()
      }))
    }
    async function GV(VV) {
      const eV = this?.SnippetUrl ?? qV.SnippetUrl;
      return await new Promise(((xV, JV) => {
        const YV = new nV.d;
        YV.addEventListener("readystatechange", (() => {
          if (4 == YV.readyState)
            if (200 == YV.status) {
              const eV = JSON.parse(JSON.parse(YV.responseText).jsonPayload);
              if (eV.animations) {
                const JV = JSON.parse(eV.animations),
                  YV = [];
                for (const eV of JV.animations) {
                  const xV = MV(eV);
                  xV.snippetId = VV, YV.push(xV)
                }
                xV(YV)
              } else {
                const JV = MV(JSON.parse(eV.animation));
                JV.snippetId = VV, xV(JV)
              }
            } else JV("Unable to load the snippet " + VV)
        })), YV.open("GET", eV + "/" + VV.replace(/#/g, "/")), YV.send()
      }))
    }
    qV._UniqueIdGenerator = 0, qV.AllowMatricesInterpolation = !1, qV.AllowMatrixDecomposeForInterpolation = !0, qV.InheritOriginalValueFromActiveAnimations = !1, qV.SnippetUrl = "https://snippet.babylonjs.com", qV.ANIMATIONTYPE_FLOAT = 0, qV.ANIMATIONTYPE_VECTOR3 = 1, qV.ANIMATIONTYPE_QUATERNION = 2, qV.ANIMATIONTYPE_MATRIX = 3, qV.ANIMATIONTYPE_COLOR3 = 4, qV.ANIMATIONTYPE_COLOR4 = 7, qV.ANIMATIONTYPE_VECTOR2 = 5, qV.ANIMATIONTYPE_SIZE = 6, qV.ANIMATIONLOOPMODE_RELATIVE = 0, qV.ANIMATIONLOOPMODE_CYCLE = 1, qV.ANIMATIONLOOPMODE_CONSTANT = 2, qV.ANIMATIONLOOPMODE_YOYO = 4, qV.ANIMATIONLOOPMODE_RELATIVE_FROM_CURRENT = 5;
    const WV = GV;
    let RV = !1;

    function gV() {
      RV || (RV = !0, qV.Parse = MV, qV.ParseFromFileAsync = zV, qV.ParseFromSnippetAsync = GV, qV.CreateFromSnippetAsync = WV, qV.CreateAnimation = FV, qV.CreateAndStartAnimation = TV, qV.CreateAndStartHierarchyAnimation = PV, qV.CreateMergeAndStartAnimation = AV, qV.MakeAnimationAdditive = tV, qV.TransitionTo = NV, qV.AppendSerializedAnimations = XV, (0, ZV.d)("BABYLON.Animation", qV), pV.e._AnimationRangeFactory = (VV, eV, xV) => new yV.e(VV, eV, xV))
    }
  },
  42435: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV
    });
    class JV {
      constructor(VV, eV, xV) {
        this.name = VV, this.from = eV, this.to = xV
      }
      clone() {
        return new JV(this.name, this.from, this.to)
      }
    }
  },
  42496: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV.d,
      c: () => JV.j
    });
    var JV = xV(41394);
    (0, JV.e)()
  },
  42471: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV.f
    });
    var JV = xV(41738);
    (0, JV.e)()
  },
  42445: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV.c
    });
    var JV = xV(41720);
    (0, JV.e)()
  },
  42498: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => JV.b
    });
    var JV = xV(41664);
    (0, JV.d)()
  },
  42439: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => JV.f
    });
    var JV = xV(41695);
    (0, JV.b)()
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);